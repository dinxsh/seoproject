import { NextResponse } from 'next/server';
import olivepowerData from '@/lib/olivepower_2.json';

export async function GET() {
  return NextResponse.json(olivepowerData);
}
