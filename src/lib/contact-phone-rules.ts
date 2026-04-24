/**
 * National (subscriber) digit length bounds per dial prefix used in the contact form.
 * Keys must match `COUNTRY_CODES[].code` in `contact/page.tsx`.
 * Format sent to API: `"+91 9876543210"` — space after prefix, digits only for national part.
 */

export const SUBSCRIBER_DIGIT_BOUNDS: Record<string, readonly [number, number]> = {
  "+91": [10, 10],
  "+49": [10, 11],
  "+1": [10, 10],
  "+44": [10, 10],
  "+61": [9, 9],
  "+971": [9, 9],
  "+65": [8, 8],
  "+33": [9, 9],
  "+39": [10, 10],
  "+31": [9, 9],
  "+41": [9, 9],
  "+43": [10, 13],
  "+32": [9, 9],
  "+46": [9, 9],
  "+47": [8, 8],
  "+45": [8, 8],
  "+358": [9, 12],
  "+353": [9, 9],
  "+351": [9, 9],
  "+30": [10, 10],
  "+420": [9, 9],
  "+48": [9, 9],
  "+36": [9, 9],
  "+40": [9, 9],
  "+359": [9, 9],
  "+421": [9, 9],
  "+386": [8, 8],
  "+372": [8, 8],
  "+371": [8, 8],
  "+370": [8, 8],
  "+356": [8, 8],
  "+357": [8, 8],
  "+352": [9, 9],
  "+354": [7, 7],
  "+94": [9, 9],
  "+977": [10, 10],
  "+880": [10, 10],
  "+92": [10, 10],
  "+93": [10, 10],
  "+960": [7, 7],
  "+975": [8, 8],
  "+95": [8, 11],
  "+66": [9, 9],
  "+60": [9, 10],
  "+62": [9, 12],
  "+63": [10, 10],
  "+84": [9, 10],
  "+855": [8, 9],
  "+856": [8, 10],
  "+673": [7, 7],
  "+670": [7, 8],
  "+82": [9, 11],
  "+886": [9, 9],
  "+852": [8, 8],
  "+853": [8, 8],
  "+972": [9, 9],
  "+966": [9, 9],
  "+965": [8, 8],
  "+968": [8, 8],
  "+974": [8, 8],
  "+973": [8, 8],
  "+962": [9, 9],
  "+961": [8, 8],
  "+963": [9, 9],
  "+964": [10, 10],
  "+967": [9, 9],
  "+20": [10, 10],
  "+212": [9, 9],
  "+213": [9, 9],
  "+216": [8, 8],
  "+218": [9, 9],
  "+249": [9, 9],
  "+251": [9, 9],
  "+254": [9, 9],
  "+255": [9, 9],
  "+256": [9, 9],
  "+234": [10, 10],
  "+233": [9, 9],
  "+27": [9, 9],
  "+55": [10, 11],
  "+54": [10, 10],
  "+56": [9, 9],
  "+57": [10, 10],
  "+51": [9, 9],
  "+58": [10, 10],
  "+52": [10, 10],
  "+506": [8, 8],
  "+507": [8, 8],
  "+593": [9, 9],
  "+598": [8, 11],
  "+595": [9, 9],
  "+591": [8, 8],
  "+7": [10, 10],
  "+380": [9, 9],
  "+90": [10, 10],
  "+98": [10, 10],
  "+998": [9, 9],
};

const PREFIXES_SORTED = Object.keys(SUBSCRIBER_DIGIT_BOUNDS).sort(
  (a, b) => b.length - a.length
);

export function subscriberDigitBounds(
  dialPrefix: string
): readonly [number, number] | undefined {
  return SUBSCRIBER_DIGIT_BOUNDS[dialPrefix];
}

/** Longest matching dial prefix at start of full phone string (e.g. "+358 40123…"). */
export function extractDialPrefixAndNational(fullPhoneTrimmed: string): {
  prefix: string;
  nationalDigits: string;
} | null {
  const t = fullPhoneTrimmed.trim();
  for (const prefix of PREFIXES_SORTED) {
    if (t.startsWith(prefix + " ")) {
      const nationalDigits = t.slice(prefix.length + 1).replace(/\s/g, "");
      return { prefix, nationalDigits };
    }
  }
  return null;
}

export function validateSubscriberDigitsForPrefix(
  dialPrefix: string,
  nationalDigits: string
): string | null {
  const bounds = SUBSCRIBER_DIGIT_BOUNDS[dialPrefix];
  if (!bounds) {
    return "Unsupported country code";
  }
  const [min, max] = bounds;

  if (!/^\d*$/.test(nationalDigits)) {
    return "Phone number should contain digits only";
  }

  const n = nationalDigits.length;
  if (n === 0) {
    return "Phone number is required";
  }
  if (n < min || n > max) {
    if (min === max) {
      return `Enter exactly ${min} digits for ${dialPrefix}`;
    }
    return `Enter ${min}–${max} digits for ${dialPrefix}`;
  }

  return null;
}
