import { animate } from "motion/react";

export function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY;

  animate(window.scrollY, y, {
    duration: 0.5,
    ease: "easeInOut",
    onUpdate: (value) => window.scrollTo(0, value),
  });
}
