"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const threshold = 400;

export default function CursorBox() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    function handler(e: MouseEvent) {
      const box = ref.current;
      const boxSize = box?.getBoundingClientRect();
      if (!boxSize) return;

      const boxCenterX = boxSize.left + boxSize.width / 2;
      const boxCenterY = boxSize.top + boxSize.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - boxCenterX, 2) +
          Math.pow(e.clientY - boxCenterY, 2)
      );

      const opacity = Math.min(distance / threshold, 1);
      gsap.to(box, { opacity });
      // box!.style.opacity = `${1 - opacity}`;
    }

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="bg-black aspect-square border border-gray-700"
    ></div>
  );
}
