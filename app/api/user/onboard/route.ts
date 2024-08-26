import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Process onboarding data
  return NextResponse.json({ message: "Onboarding data received" });
}
