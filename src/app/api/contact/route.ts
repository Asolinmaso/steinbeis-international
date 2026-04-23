import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  contactPayloadHasErrors,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact-validation";

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
  const payload: ContactPayload = {
    firstName: typeof b.firstName === "string" ? b.firstName : "",
    lastName: typeof b.lastName === "string" ? b.lastName : "",
    email: typeof b.email === "string" ? b.email : "",
    phone: typeof b.phone === "string" ? b.phone : "",
    course: typeof b.course === "string" ? b.course : "",
    message: typeof b.message === "string" ? b.message : "",
  };

  const normalized: ContactPayload = {
    ...payload,
    email: payload.email.trim().toLowerCase(),
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    phone: payload.phone.trim(),
    course: payload.course.trim(),
    message: payload.message.trim(),
  };

  const errors = validateContactPayload(normalized);
  if (contactPayloadHasErrors(errors)) {
    const order: (keyof ContactPayload)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "course",
      "message",
    ];
    const first = order.find((k) => errors[k]);
    return badRequest(first ? errors[first]! : "Invalid input");
  }

  const { firstName, lastName, email, phone, course, message } = normalized;

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
  const phoneLine = phone ? phone : "(not provided)";

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
