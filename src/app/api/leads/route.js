import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        fullName: body.name || body.fullName || 'Anonymous',
        email: body.email || '',
        phone: body.phone || '',
        company: body.company || null,
        website: body.website || null,
        budget: body.budget || null,
        service: body.service || null,
        message: body.message || null,
        sourcePage: body.sourcePage || 'Website Form',
      }
    });

    // TODO: Trigger Email / WhatsApp notifications here

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
