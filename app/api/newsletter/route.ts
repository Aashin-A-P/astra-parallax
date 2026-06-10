import { NextResponse } from "next/server";
import { newsletterSchema, subscribeToNewsletter } from "@/lib/newsletter/provider";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = newsletterSchema.parse(body);
    const result = await subscribeToNewsletter(input);
    return NextResponse.json({ message: "You are on the dispatch list.", provider: result.provider });
  } catch {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }
}
