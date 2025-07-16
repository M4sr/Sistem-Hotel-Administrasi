import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const path = request.nextUrl.searchParams.get("path")
    
    if (!path) {
      return NextResponse.json(
        { error: "Path parameter is required" },
        { status: 400 }
      )
    }

    revalidatePath(path)
    
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    console.error("[REVALIDATE] Error:", error)
    return NextResponse.json(
      { error: "Error revalidating" },
      { status: 500 }
    )
  }
} 