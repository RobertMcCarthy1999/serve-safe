import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { mkdirSync, existsSync } from 'fs';

export async function POST(req) {
  const formData = await req.formData();
  const landlordEmail = formData.get('landlordEmail');
  const tenantEmail = formData.get('tenantEmail');

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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'robbiemccarthy0@gmail.com',
      pass: 'voyn edjd atwx fava',
    },
  });

  const mailOptions = {
    from: 'robbiemccarthy0@gmail.com',
    to: [landlordEmail, tenantEmail],
    subject: 'New Tenant Documents',
    text: 'Please find the required tenancy documents attached.',
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Clean up local files
   const deleted = new Set();

for (const file of attachments) {
  if (!deleted.has(file.path)) {
    try {
      await unlink(file.path);
      deleted.add(file.path);
    } catch (err) {
      console.warn(`Warning: failed to delete ${file.path}`, err.message);
    }
  }
}
    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

