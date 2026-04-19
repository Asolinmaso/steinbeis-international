"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  /** Stay true after first intersection (default). */
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const threshold = options.threshold ?? 0.12;
  const rootMargin = options.rootMargin ?? "0px 0px -8% 0px";
  const once = options.once ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
        else if (!once) setInView(false);
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
