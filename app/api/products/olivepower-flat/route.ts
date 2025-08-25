import { NextResponse } from 'next/server';
import olivepowerFlatData from '@/lib/olivepower_products_flat.json';

export async function GET() {
  return NextResponse.json(olivepowerFlatData);
}
