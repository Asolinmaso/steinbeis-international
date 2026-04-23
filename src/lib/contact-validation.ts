/** Shared contact form rules — keep client + `/api/contact` aligned. */

import {
  extractDialPrefixAndNational,
  validateSubscriberDigitsForPrefix,
} from "@/lib/contact-phone-rules";

export const MAX_NAME = 100;
export const MAX_MESSAGE = 5000;
/** Max length of full phone string as stored/sent (e.g. `+91 9876543210`). */
export const MAX_PHONE = 30;
export const MIN_MESSAGE = 10;

export const CONTACT_COURSE_OPTIONS = [
  "German A1",
  "German A2",
  "German B1",
  "German B2",
] as const;

export type ContactCourse = (typeof CONTACT_COURSE_OPTIONS)[number];

/** Same shape as `/api/contact` JSON body after trim. */
export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

export type ContactFieldKey = keyof ContactPayload;

export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** First / last name: letters + spaces, hyphen, apostrophe, dot; must start with a letter. */
const NAME_PART_RE =
  /^[\p{L}][\p{L}\s'.-]{0,98}$/u;

function validNamePart(s: string, label: string): string | null {
  const t = s.trim();
  if (!t.length) {
    return label === "First name" ? "First name is required" : null;
  }
  if (t.length > MAX_NAME) {
    return `${label} must be at most ${MAX_NAME} characters`;
  }
  if (!NAME_PART_RE.test(t)) {
    return `${label} may only include letters, spaces, hyphens, apostrophes, and dots`;
  }
  return null;
}

function validEmail(email: string): string | null {
  const t = email.trim().toLowerCase();
  if (!t) return "Email is required";
  if (!EMAIL_RE.test(t)) return "Enter a valid email address";
  return null;
}

/** `phone` is full string e.g. `+91 9876543210` or empty. */
function validPhone(phone: string): string | null {
  const t = phone.trim();
  if (!t) return "Phone number is required";

  const parsed = extractDialPrefixAndNational(t);
  if (!parsed) {
    return "Select a country code and enter your phone number";
  }

  const { prefix, nationalDigits } = parsed;
  const err = validateSubscriberDigitsForPrefix(prefix, nationalDigits);
  if (err) return err;

  if (t.length > MAX_PHONE) {
    return `Phone number must be at most ${MAX_PHONE} characters including country code`;
  }
  return null;
}

function validCourse(course: string): string | null {
  const t = course.trim();
  if (!t) return "Please select a course";
  if (!CONTACT_COURSE_OPTIONS.includes(t as ContactCourse)) {
    return "Please choose a valid course";
  }
  return null;
}

function validMessage(message: string): string | null {
  const t = message.trim();
  if (!t) return "Message is required";
  if (t.length < MIN_MESSAGE) {
    return `Message must be at least ${MIN_MESSAGE} characters`;
  }
  if (t.length > MAX_MESSAGE) {
    return `Message must be at most ${MAX_MESSAGE} characters`;
  }
  return null;
}

/** Returns empty object when valid. */
export function validateContactPayload(payload: ContactPayload): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  const fn = validNamePart(payload.firstName, "First name");
  if (fn) errors.firstName = fn;

  const ln = payload.lastName.trim()
    ? validNamePart(payload.lastName, "Last name")
    : null;
  if (ln) errors.lastName = ln;

  const em = validEmail(payload.email);
  if (em) errors.email = em;

  const ph = validPhone(payload.phone);
  if (ph) errors.phone = ph;

  const cr = validCourse(payload.course);
  if (cr) errors.course = cr;

  const msg = validMessage(payload.message);
  if (msg) errors.message = msg;

  return errors;
}

export function contactPayloadHasErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
