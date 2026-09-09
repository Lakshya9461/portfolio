"use client";

import { useEffect, useState } from "react";

export function PageRibbon() {
  const [state, setState] = useState<{ total: number; active: number }>({
    total: 0,
    active: 0,
  });

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-page]"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = entries[0];
        entries.forEach((entry) => {
          if (entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });
        if (best.isIntersecting) {
          const index = els.indexOf(best.target as HTMLElement);
          if (index >= 0) {
            setState({ total: els.length, active: index });
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { total, active } = state;

  const goTo = (index: number) => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-page]"));
    els[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-ribbon" aria-label="Manga page navigation">
      <div className="page-ribbon__rail" aria-hidden="true">
        {total > 0 && (
          <div
            className="page-ribbon__fill"
            style={{ height: `${((active + 1) / total) * 100}%` }}
          />
        )}
      </div>
      <div className="page-ribbon__ticks">
        {Array.from({ length: total }).map((_slot, index) => (
          <button
            key={index}
            type="button"
            className="page-ribbon__tick"
            aria-current={index === active}
            aria-label={`Go to page ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
      <span className="page-ribbon__counter" aria-hidden="true">
        VOL.{String(active + 1).padStart(2, "0")}
      </span>
    </div>
  );
}