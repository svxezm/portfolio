import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  let { data, error } = await supabase
    .from("languages")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return NextResponse.json(
      { error: `Error fetching from 'languages' table. ${error.message}` },
      { status: 500 }
    );
  }

  data?.forEach((dt, index) => {
    data[index].labels = dt.labels.split(",");
  });

  return NextResponse.json(data);
}
