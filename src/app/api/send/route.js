import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { mkdirSync, existsSync } from 'fs';

export async function POST(req) {
  console.log('📨 /api/send route hit');

  try {
    const formData = await req.formData();
    const landlordEmail = formData.get('landlordEmail');
    const tenantEmail = formData.get('tenantEmail');

    console.log('➡️  Landlord:', landlordEmail);
    console.log('➡️  Tenant:', tenantEmail);

    const uploadsDir = path.join(process.cwd(), 'public', 'email_uploads');
    if (!existsSync(uploadsDir)) {
      mkdirSync(uploadsDir, { recursive: true });
    }

    const attachments = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(uploadsDir, value.name);
        await writeFile(filePath, buffer);

        attachments.push({
          filename: value.name,
          path: filePath,
        });
      }
    }

    console.log('📎 Attachments:', attachments.map(f => f.filename));

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('📬 Sending from:', process.env.EMAIL_USER);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [landlordEmail, tenantEmail],
      subject: 'New Tenant Documents',
      text: 'Please find the required tenancy documents attached.',
      attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent');

    const deleted = new Set();
    for (const file of attachments) {
      if (!deleted.has(file.path)) {
        try {
          await unlink(file.path);
          deleted.add(file.path);
        } catch (err) {
          console.warn(`⚠️ Failed to delete ${file.path}`, err.message);
        }
      }
    }

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('❌ Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}


