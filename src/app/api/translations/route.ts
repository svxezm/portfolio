import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

export async function GET(locale: string) {
  const { data, error } = await supabase
    .from("translations")
    .select("data")
    .eq("name", locale)
    .single();

  if (error) {
    return NextResponse.json(
      { error: `Error fetching from 'languages' table. ${error.message}` },
      { status: 500 }
    );
  }
  return NextResponse.json(data.data);
}
