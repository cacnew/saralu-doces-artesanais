"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const timers: number[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        const delay = Number(element.dataset.revealOrder || 0) * 80;
        timers.push(window.setTimeout(() => element.classList.remove("will-reveal"), delay));
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) continue;
      element.classList.add("will-reveal");
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
      elements.forEach((element) => element.classList.remove("will-reveal"));
    };
  }, []);

  return null;
}
