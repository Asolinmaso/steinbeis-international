export const COURSE_LEVEL_TABS = ["German A1", "German A2", "German B1", "German B2"] as const;

export type CourseLevelTab = (typeof COURSE_LEVEL_TABS)[number];

export function isCourseLevelTab(value: string | null | undefined): value is CourseLevelTab {
  return value != null && (COURSE_LEVEL_TABS as readonly string[]).includes(value);
}
