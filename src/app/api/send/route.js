import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const landlordEmail = formData.get('landlordEmail');
    const tenantEmail = formData.get('tenantEmail');

    const attachments = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);

        attachments.push({
          filename: value.name,
          content: buffer,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [landlordEmail, tenantEmail],
      subject: 'New Tenant Documents',
      text: 'Please find the required tenancy documents attached.',
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('❌ Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}



