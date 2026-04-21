import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_MESSAGE = 5000;
const MAX_NAME = 100;
const MAX_PHONE = 30;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return badRequest("Invalid payload");
  }

  const b = body as Record<string, unknown>;
  const firstName =
    typeof b.firstName === "string" ? b.firstName.trim() : "";
  const lastName = typeof b.lastName === "string" ? b.lastName.trim() : "";
  const email =
    typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const course = typeof b.course === "string" ? b.course.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!firstName || firstName.length > MAX_NAME) {
    return badRequest("First name is required");
  }
  if (lastName.length > MAX_NAME) {
    return badRequest("Last name is too long");
  }
  if (!email || !EMAIL_RE.test(email)) {
    return badRequest("A valid email is required");
  }
  if (phone.length > MAX_PHONE) {
    return badRequest("Phone number is too long");
  }
  if (!course) {
    return badRequest("Please select a course");
  }
  if (!message || message.length > MAX_MESSAGE) {
    return badRequest("Message is required");
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    console.error(
      "Contact API: set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL"
    );
    return NextResponse.json(
      { error: "Email is not configured on the server" },
      { status: 503 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";
  const from = process.env.CONTACT_FROM_EMAIL ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const phoneLine = phone ? `+91 ${phone}` : "(not provided)";

  const text = [
    "New contact form submission",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phoneLine}`,
    `Course: ${course}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneLine)}</p>
    <p><strong>Course:</strong> ${escapeHtml(course)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const subject = `[Contact] ${course} — ${fullName}`.slice(0, 200);

  try {
    await transporter.sendMail({
      from: `Website contact <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
