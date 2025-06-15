import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidateTag('projects');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
