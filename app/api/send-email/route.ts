import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, data } = body;

    // Configure your email transport
    const transporter = nodemailer.createTransport({
      // Your email service configuration
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
