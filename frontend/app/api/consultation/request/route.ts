import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      full_name,
      company_name,
      email,
      phone,
      whatsapp,
      website,
      business_location,
      business_type,
      industry,
      marketing_budget,
      project_start,
      preferred_contact,
      services_interested,
      project_description,
    } = data;

    // Basic validation (you can extend this)
    if (!full_name || !email || !phone || !preferred_contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const request_id = uuidv4();
    const ip_address = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '';
    const user_agent = request.headers.get('user-agent') || '';

    const stmt = db.prepare(`
      INSERT INTO consultation_requests (
        request_id,
        full_name,
        company_name,
        email,
        phone,
        whatsapp,
        website,
        business_location,
        business_type,
        industry,
        marketing_budget,
        project_start,
        preferred_contact,
        services_interested,
        project_description,
        ip_address,
        user_agent
      ) VALUES (
        @request_id,
        @full_name,
        @company_name,
        @email,
        @phone,
        @whatsapp,
        @website,
        @business_location,
        @business_type,
        @industry,
        @marketing_budget,
        @project_start,
        @preferred_contact,
        @services_interested,
        @project_description,
        @ip_address,
        @user_agent
      )
    `);

    stmt.run({
      request_id,
      full_name,
      company_name,
      email,
      phone,
      whatsapp,
      website,
      business_location,
      business_type,
      industry,
      marketing_budget,
      project_start,
      preferred_contact,
      services_interested: JSON.stringify(services_interested),
      project_description,
      ip_address,
      user_agent,
    });

    // Return success with generated ID
    return NextResponse.json({ success: true, request_id }, { status: 201 });
  } catch (err) {
    console.error('Error in /api/consultation/request:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
