import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return NextResponse.json(
      { error: `Error fetching from 'languages' table. ${error.message}` },
      { status: 500 }
    );
  }
  return NextResponse.json(data);
}
