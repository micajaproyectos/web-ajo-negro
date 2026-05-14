import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

export async function POST(request: NextRequest) {
  if (!APPS_SCRIPT_URL) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  try {
    const data = await request.json();
    const { nombre, correo, fono, mensaje } = data as Record<string, string>;

    const params = new URLSearchParams({ nombre, correo, fono, mensaje });

    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow",
    });

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
