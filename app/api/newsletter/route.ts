import { NextResponse } from "next/server";
import { newsletterSchema, subscribeToNewsletter } from "@/lib/newsletter/provider";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = newsletterSchema.safeParse(body);

    if (!input.success) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const result = await subscribeToNewsletter(input.data);
    return NextResponse.json({
      message: result.duplicate ? "That email is already on the dispatch list." : "You are on the dispatch list.",
      provider: result.provider,
      duplicate: result.duplicate || false
    });
  } catch {
    return NextResponse.json({ message: "Subscription failed. Please try again later." }, { status: 502 });
  }
}
