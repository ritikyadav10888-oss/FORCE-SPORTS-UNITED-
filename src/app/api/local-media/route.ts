import { NextRequest, NextResponse } from "next/server";
import { listLocalMedia } from "@/lib/list-local-media";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const folder = req.nextUrl.searchParams.get("folder") || "";
    const files = await listLocalMedia(folder);
    return NextResponse.json({ files }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("local-media GET error:", error);
    return NextResponse.json({ files: [], error: "Failed to list local media" }, { status: 200 });
  }
}
