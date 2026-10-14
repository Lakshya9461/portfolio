import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Lakshya_Agarwal_CV.pdf");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "CV not found." }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Lakshya_Agarwal_CV.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
