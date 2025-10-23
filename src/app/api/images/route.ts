import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

interface Props {
  bucket: string;
  path: string;
}

export async function GET(props: Props) {
  // return NextResponse.json(
  //   `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images`
  // );
  const imagePath = supabase.storage
    .from(props.bucket)
    .getPublicUrl(props.path);
  return NextResponse.json(imagePath.data.publicUrl);
}
