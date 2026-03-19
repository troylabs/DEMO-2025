"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LogoCarouselProps {
  logos: string[];
  height: number;
  direction?: "left" | "right";
  speed?: number;
}

export function LogoCarousel({
  logos,
  height = 14,
  direction = "left",
  speed = 30,
}: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = direction === "left" ? 0 : scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (!isHovered && scrollContainer) {
        if (direction === "left") {
          scrollPosition += speed / 60;
          if (scrollPosition >= scrollContainer.scrollWidth / 2) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= speed / 60;
          if (scrollPosition <= 0) {
            scrollPosition = scrollContainer.scrollWidth / 2;
          }
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, direction, speed]);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="relative w-full max-w-[800px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left fade gradient */}
      {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent" /> */}

      {/* Right fade gradient */}
      {/* <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent" /> */}

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex items-center gap-12 overflow-hidden py-4"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-16 w-32 flex-shrink-0 items-center justify-center"
          >
            <Image
              src={logo}
              alt="Company logo"
              width={200}
              height={60}
              className={`max-h-12 w-auto opacity-70 transition-opacity hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
