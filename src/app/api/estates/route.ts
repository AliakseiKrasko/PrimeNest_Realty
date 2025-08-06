import { NextResponse } from "next/server";
import { ESTATES } from "@/mocks/estates"; // ← путь к твоему массиву

export async function GET() {
    return NextResponse.json(ESTATES);
}