"use client";

import { useEffect } from "react";

/**
 * nine.codes — interactions + parallax engine
 * Ports the prototype's script.js and parallax.js into a single client
 * effect that wires up against the server-rendered markup.
 */
export default function Interactions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const raf = (fn: FrameRequestCallback) => requestAnimationFrame(fn);

    /* ---------- Nav scroll state ---------- */
    const nav = document.getElementById("nav");
    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 30) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 760px)").matches;

    /* ---------- Cursor spotlight ---------- */
    const spot = document.getElementById("spotlight");
    let spotRaf = 0;
    if (spot) {
      if (fine) {
        let sx = -300,
          sy = -300,
          cx = -300,
          cy = -300;
        const onMove = (e: MouseEvent) => {
          sx = e.clientX;
          sy = e.clientY;
        };
        window.addEventListener("mousemove", onMove);
        const animSpot = () => {
          cx += (sx - cx) * 0.12;
          cy += (sy - cy) * 0.12;
          spot.style.transform = `translate(${cx}px, ${cy}px)`;
          spotRaf = raf(animSpot);
        };
        spotRaf = raf(animSpot);
        cleanups.push(() => {
          window.removeEventListener("mousemove", onMove);
          cancelAnimationFrame(spotRaf);
        });
      } else {
        spot.style.display = "none";
      }
    }

    /* ---------- Hero title reveal ---------- */
    const heroTitle = document.getElementById("heroTitle");
    if (heroTitle) {
      raf(() => setTimeout(() => heroTitle.classList.add("in"), 120));
    }

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll(".reveal-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---------- Animated counters ---------- */
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          const target = parseInt(el.dataset.count || "0", 10);
          const suffix = el.dataset.suffix || "";
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) raf(tick);
          };
          raf(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ---------- Project filters ---------- */
    const filters = document.querySelectorAll<HTMLElement>(".filter");
    const cards = document.querySelectorAll<HTMLElement>("#grid .card");
    const filterHandlers: Array<[HTMLElement, () => void]> = [];
    filters.forEach((btn) => {
      const handler = () => {
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.f;
        cards.forEach((card) => {
          const cats = (card.dataset.cat || "").split(" ");
          const show = f === "all" || (f !== undefined && cats.includes(f));
          card.classList.toggle("hide", !show);
        });
      };
      btn.addEventListener("click", handler);
      filterHandlers.push([btn, handler]);
    });
    cleanups.push(() =>
      filterHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    /* ---------- Magnetic buttons ---------- */
    if (fine) {
      document
        .querySelectorAll<HTMLElement>(".btn-primary, .nav-cta")
        .forEach((el) => {
          const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const mx = e.clientX - r.left - r.width / 2;
            const my = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px)`;
          };
          const onLeave = () => {
            el.style.transform = "";
          };
          el.addEventListener("mousemove", onMove);
          el.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
          });
        });
    }

    /* ---------- Active nav link by section ---------- */
    const sections = document.querySelectorAll("main section[id], header[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = en.target.id;
            navLinks.forEach((a) => {
              a.style.color =
                a.getAttribute("href") === "#" + id ? "var(--ink)" : "";
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => sio.observe(s));
    cleanups.push(() => sio.disconnect());

    /* ============================================================
       PARALLAX ENGINE — scroll + pointer depth
       ============================================================ */
    if (!reduce) {
      const tagged = [
        ...document.querySelectorAll<HTMLElement>(
          "[data-px-y],[data-px-mx],[data-px-my]"
        ),
      ].map((el) => ({
        el,
        sy: parseFloat(el.dataset.pxY || "") || 0,
        mx: parseFloat(el.dataset.pxMx || "") || 0,
        my: parseFloat(el.dataset.pxMy || "") || 0,
      }));

      if (!small) {
        document.querySelectorAll<HTMLElement>(".card-media").forEach((el) =>
          tagged.push({ el, sy: 0.055, mx: 0, my: 0 })
        );
        document
          .querySelectorAll<HTMLElement>(".about-photo img")
          .forEach((el) => tagged.push({ el, sy: 0.05, mx: 0, my: 0 }));
      }

      const orb = document.querySelector<HTMLElement>(".hero-orb");
      const hero = document.querySelector<HTMLElement>(".hero");
      const stage = document.getElementById("depthStage");

      let tnx = 0,
        tny = 0,
        nx = 0,
        ny = 0;
      let pointerHandler: ((e: MouseEvent) => void) | null = null;
      if (fine) {
        pointerHandler = (e: MouseEvent) => {
          tnx = e.clientX / window.innerWidth - 0.5;
          tny = e.clientY / window.innerHeight - 0.5;
        };
        window.addEventListener("mousemove", pointerHandler, { passive: true });
      }

      const visible = new Set<Element>();
      const vio = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) visible.add(en.target);
            else visible.delete(en.target);
          });
        },
        { rootMargin: "20% 0px 20% 0px" }
      );
      tagged.forEach((t) => {
        if (t.sy) vio.observe(t.el);
        else visible.add(t.el);
      });

      let frameRaf = 0;
      const frame = () => {
        nx += (tnx - nx) * 0.09;
        ny += (tny - ny) * 0.09;
        const center = window.innerHeight / 2;

        for (const t of tagged) {
          let tx = 0,
            ty = 0;
          if (t.sy && visible.has(t.el)) {
            const r = t.el.getBoundingClientRect();
            ty += (center - (r.top + r.height / 2)) * t.sy;
          }
          if (t.mx) tx += nx * t.mx;
          if (t.my) ty += ny * t.my;
          t.el.style.setProperty("--px", tx.toFixed(2) + "px");
          t.el.style.setProperty("--py", ty.toFixed(2) + "px");
        }

        if (orb && hero) {
          const hr = hero.getBoundingClientRect();
          if (hr.bottom > 0) {
            const sy = -hr.top * 0.18;
            orb.style.translate = `${nx * 70}px ${sy + ny * 50}px`;
          }
        }

        if (stage && fine) {
          stage.style.transform = `rotateX(${(-ny * 7).toFixed(
            2
          )}deg) rotateY(${(nx * 9).toFixed(2)}deg)`;
        }

        frameRaf = raf(frame);
      };
      frameRaf = raf(frame);
      cleanups.push(() => {
        cancelAnimationFrame(frameRaf);
        vio.disconnect();
        if (pointerHandler)
          window.removeEventListener("mousemove", pointerHandler);
      });

      /* ---------- 3D tilt — cards + about plate ---------- */
      if (fine) {
        const MAX = 9;
        document.querySelectorAll<HTMLElement>("#grid .card").forEach((card) => {
          const glare = document.createElement("span");
          glare.className = "card-glare";
          card.appendChild(glare);

          let cardRaf = 0;
          const onMove = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            const rx = (0.5 - py) * MAX;
            const ry = (px - 0.5) * MAX;
            if (cardRaf) return;
            cardRaf = raf(() => {
              card.classList.add("tilting");
              card.style.transform = `translateY(-6px) rotateX(${rx.toFixed(
                2
              )}deg) rotateY(${ry.toFixed(2)}deg)`;
              glare.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
              glare.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
              cardRaf = 0;
            });
          };
          const onLeave = () => {
            card.classList.remove("tilting");
            card.style.transform = "";
          };
          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
            glare.remove();
          });
        });

        const plate = document.getElementById("aboutPlate");
        if (plate) {
          const onMove = (e: PointerEvent) => {
            const r = plate.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            plate.style.transform = `rotateX(${((0.5 - py) * 6).toFixed(
              2
            )}deg) rotateY(${((px - 0.5) * 8).toFixed(2)}deg)`;
          };
          const onLeave = () => {
            plate.style.transform = "";
          };
          plate.addEventListener("pointermove", onMove);
          plate.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            plate.removeEventListener("pointermove", onMove);
            plate.removeEventListener("pointerleave", onLeave);
          });
        }
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
