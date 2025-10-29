"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Safari‑friendly, mobile‑safe FeaturesSection
 * - Mobile (<768px): IntersectionObserver fade/slide reveal (no overlap)
 * - Desktop (>=768px): sticky parallax using rAF + translate3d + 100dvh/svh units
 * - Adds will-change hints, clamps translations, and avoids per‑scroll getBoundingClientRect
 * - Respects prefers-reduced-motion
 */
export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Track viewport width + reduced motion safely
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setIsMobile(mq.matches);
    const applyRM = () => setReducedMotion(rm.matches);
    apply();
    applyRM();
    mq.addEventListener("change", apply);
    rm.addEventListener("change", applyRM);
    return () => {
      mq.removeEventListener("change", apply);
      rm.removeEventListener("change", applyRM);
    };
  }, []);

  const features = useMemo(
    () => [
      {
        title: "Software Development",
        desc:
          "Custom software solutions, SaaS platforms, and web applications built with cutting-edge technologies to drive your business forward.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        ),
      },
      {
        title: "Data Analytics & Insights",
        desc:
          "Transform your data into actionable insights with advanced analytics, business intelligence, and data-driven strategies for growth.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4a2 2 0 002 2h2a2 2 0 002-2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v14"
          />
        ),
      },
      {
        title: "Payroll & HR Services",
        desc:
          "Comprehensive payroll management, HR solutions, and compliance services that streamline your workforce operations.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        ),
      },
      {
        title: "Digital Marketing & PPC",
        desc:
          "Boost your online presence with data-driven marketing strategies, targeted PPC campaigns, and SEO optimization.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        ),
      },
      {
        title: "Contractual Tech Work",
        desc:
          "Flexible engagement models for tech projects. Get expert developers and specialists on-demand to accelerate your initiatives.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        ),
      },
      {
        title: "Business Process Services",
        desc:
          "Streamline operations with process optimization, automation solutions, and workflow improvements that increase efficiency.",
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        ),
      },
    ],
    []
  );

  // ===== Desktop parallax (md+) with rAF and precomputed metrics =====
  useEffect(() => {
    if (isMobile) return; // desktop only
    const el = sectionRef.current;
    if (!el) return;

    let sectionTop = 0;
    let sectionHeight = 0;
    let vh = 0;

    const computeMetrics = () => {
      // Avoid getBoundingClientRect on scroll; only on resize/initial
      const rect = el.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY; // absolute top in document
      sectionHeight = el.offsetHeight; // includes padding
      // Use dynamic viewport height units compatible with Safari (fallback to innerHeight)
      vh = Math.max(
        window.innerHeight,
        // @ts-ignore experimental
        (window as any).visualViewport?.height || 0
      );
    };

    computeMetrics();

    let ticking = false;
    let lastProgress = 0;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const total = sectionHeight + vh; // range across entry + exit
        const progressed = Math.min(1, Math.max(0, (y - (sectionTop - vh)) / total));
        // Only update if change is significant (reduces jitter in Safari)
        if (Math.abs(progressed - lastProgress) > 0.001) {
          setScrollProgress(progressed);
          lastProgress = progressed;
        }
        ticking = false;
      });
    };

    const onResize = () => {
      computeMetrics();
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile]);

  // ===== Mobile: reveal-on-view per-card (no transforms that cause overlap) =====
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => features.map(() => false));

  useEffect(() => {
    if (!isMobile) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = Number((e.target as HTMLElement).dataset.index);
          if (!Number.isNaN(i) && e.isIntersecting) {
            setVisible((prev) => {
              if (prev[i]) return prev; // don't thrash state
              const next = [...prev];
              next[i] = true;
              return next;
            });
            // Unobserve once visible to reduce work on Safari
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    cardsRef.current.forEach((node) => node && io.observe(node));
    return () => io.disconnect();
  }, [isMobile, features]);

  // Animation values (desktop only). Extra clamps + translate3d for Safari GPU compositing
  const speed = 4;
  const tDist = 32; // px
  const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

  const badgeOpacity = clamp01(scrollProgress * speed);
  const badgeTY = (1 - clamp01(scrollProgress * 2.4)) * tDist;
  const titleOpacity = clamp01((scrollProgress - 0.08) * speed);
  const titleTY = (1 - clamp01((scrollProgress - 0.08) * 2)) * (tDist + 8);
  const gridOpacity = clamp01((scrollProgress - 0.18) * speed);
  const gridTY = (1 - clamp01((scrollProgress - 0.18) * 1.6)) * (tDist + 4);

  return (
    <section
      ref={sectionRef}
      className={`${isMobile ? "py-12" : "min-h-[260svh] md:min-h-[280svh]"} bg-gradient-to-br from-gray-50 to-white`}
    >
      <div
        ref={stickyRef}
        className={`${isMobile ? "" : "sticky top-0"} ${isMobile ? "h-auto" : "h-[100svh] md:h-[100dvh]"} flex flex-col justify-center`}
        style={{
          // Prevent ancestor transforms/overflow bugs with sticky; help Safari
          contain: isMobile ? undefined : ("layout paint" as any),
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            className="text-center mb-4 sm:mb-6 will-change-[opacity,transform]"
            style={
              isMobile || reducedMotion
                ? undefined
                : {
                    opacity: badgeOpacity,
                    transform: `translate3d(0, ${badgeTY}px, 0)`,
                    backfaceVisibility: "hidden",
                  }
            }
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide">
              Why Businesses Choose Us
            </span>
          </div>

          {/* Title */}
          <div
            className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0 will-change-[opacity,transform]"
            style={
              isMobile || reducedMotion
                ? undefined
                : {
                    opacity: titleOpacity,
                    transform: `translate3d(0, ${titleTY}px, 0)`,
                    backfaceVisibility: "hidden",
                    WebkitTransform: `translate3d(0, ${titleTY}px, 0)`,
                  }
            }
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              The Complete Business Solutions
              <br />
              <span className="text-emerald-500">Partner You Can Trust</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0 will-change-[opacity,transform]"
            style={
              isMobile || reducedMotion
                ? undefined
                : {
                    opacity: gridOpacity,
                    transform: `translate3d(0, ${gridTY}px, 0)`,
                    backfaceVisibility: "hidden",
                    WebkitTransform: `translate3d(0, ${gridTY}px, 0)`,
                  }
            }
          >
            {features.map((card, i) => {
              const d = i * 0.06; // subtle stagger
              const cOpacity = isMobile || reducedMotion
                ? 1
                : clamp01((scrollProgress - 0.22 - d) * 5);
              const cTY = isMobile || reducedMotion
                ? 0
                : (1 - clamp01((scrollProgress - 0.22 - d) * 2)) * 24;

              return (
                <div
                  key={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  data-index={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col shadow-sm hover:shadow-md hover:border-emerald-400 transition-shadow"
                  style={{
                    opacity: isMobile ? (visible[i] ? 1 : 0) : cOpacity,
                    transform: isMobile
                      ? visible[i]
                        ? "translate3d(0, 0, 0)"
                        : "translate3d(0, 18px, 0)"
                      : `translate3d(0, ${cTY}px, 0)`,
                    transition: isMobile
                      ? "opacity 400ms ease, transform 400ms ease"
                      : undefined,
                    willChange: "opacity, transform",
                    backfaceVisibility: "hidden",
                    WebkitTransform: isMobile
                      ? visible[i]
                        ? "translate3d(0, 0, 0)"
                        : "translate3d(0, 18px, 0)"
                      : `translate3d(0, ${cTY}px, 0)`,
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
