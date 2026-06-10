"use client";

import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), name: form.get("name") || undefined })
    });
    const body = (await response.json()) as { message?: string };
    setStatus(response.ok ? "success" : "error");
    setMessage(body.message || (response.ok ? "You are on the list." : "Subscription failed."));
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-[1fr_auto]"}>
      <div className="grid gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input id="newsletter-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
      </div>
      {!compact && (
        <label className="sr-only" htmlFor="newsletter-name">
          Name
        </label>
      )}
      <input id="newsletter-name" name="name" className="hidden" tabIndex={-1} autoComplete="name" />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Join
      </Button>
      <p className="text-sm text-muted" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
