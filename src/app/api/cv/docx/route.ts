import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Lakshya_Agarwal_CV.docx");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "CV (Word) not found." }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="Lakshya_Agarwal_CV.docx"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
