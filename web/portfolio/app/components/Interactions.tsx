"use client";

import { useEffect } from "react";

/**
 * nine.codes — interactions (old-money edition)
 * Restrained motion: scroll reveals, counters, project filters, a subtle
 * scroll parallax on imagery, and nav state. No cursor spotlight, no 3D
 * tilt, no magnetic buttons — quiet by design.
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

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 760px)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;

    /* ---------- Intro curtain (the archive opens) ---------- */
    const curtain = document.getElementById("curtain");
    if (curtain) {
      if (reduce) {
        curtain.remove();
      } else {
        let lifted = false;
        const lift = () => {
          if (lifted) return;
          lifted = true;
          curtain.classList.add("lift");
          window.removeEventListener("wheel", lift);
          window.removeEventListener("touchmove", lift);
          window.removeEventListener("click", lift);
          setTimeout(() => curtain.remove(), 1100);
        };
        const t = setTimeout(lift, 1500);
        window.addEventListener("wheel", lift, { passive: true });
        window.addEventListener("touchmove", lift, { passive: true });
        window.addEventListener("click", lift);
        cleanups.push(() => {
          clearTimeout(t);
          window.removeEventListener("wheel", lift);
          window.removeEventListener("touchmove", lift);
          window.removeEventListener("click", lift);
        });
      }
    }

    /* ---------- Lamplight cursor + invisible-ink reveal ---------- */
    const lamp = document.getElementById("lamp");
    const revealLayer = document.getElementById("revealLayer");
    const heroEl = document.querySelector<HTMLElement>(".hero");
    const lampHint = document.getElementById("lampHint");
    if (lamp) {
      if (fine && !reduce) {
        let tx = -300, ty = -300, lx = -300, ly = -300, lampRaf = 0, lit = false;
        const onMove = (e: MouseEvent) => {
          tx = e.clientX; ty = e.clientY;
          if (!lit) {
            lit = true;
            revealLayer?.classList.add("lit");
            revealLayer?.style.setProperty("--lr", "210px");
            lampHint?.classList.add("gone");
          }
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        const animLamp = () => {
          lx += (tx - lx) * 0.1;
          ly += (ty - ly) * 0.1;
          lamp.style.transform = `translate(${lx}px, ${ly}px)`;
          // reveal mask follows the lamp, mapped into the hero's local box
          if (revealLayer && heroEl) {
            const r = heroEl.getBoundingClientRect();
            revealLayer.style.setProperty("--mx", (lx - r.left).toFixed(1) + "px");
            revealLayer.style.setProperty("--my", (ly - r.top).toFixed(1) + "px");
          }
          lampRaf = raf(animLamp);
        };
        lampRaf = raf(animLamp);
        cleanups.push(() => {
          window.removeEventListener("mousemove", onMove);
          cancelAnimationFrame(lampRaf);
        });
      } else {
        lamp.style.display = "none";
      }
    }

    /* ---------- Reading progress thread ---------- */
    const progress = document.getElementById("progress");
    if (progress) {
      const onProg = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? window.scrollY / h : 0;
        progress.style.transform = `scaleX(${Math.min(p, 1).toFixed(4)})`;
      };
      window.addEventListener("scroll", onProg, { passive: true });
      window.addEventListener("resize", onProg, { passive: true });
      onProg();
      cleanups.push(() => {
        window.removeEventListener("scroll", onProg);
        window.removeEventListener("resize", onProg);
      });
    }

    /* ---------- Chapter rail: smooth scroll on click ---------- */
    const railLinks = document.querySelectorAll<HTMLAnchorElement>(".rail a");
    railLinks.forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute("data-to");
        const target = id && document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        }
      };
      a.addEventListener("click", handler);
      cleanups.push(() => a.removeEventListener("click", handler));
    });

    /* ---------- Hero title reveal ---------- */
    const heroTitle = document.getElementById("heroTitle");
    if (heroTitle) {
      raf(() => setTimeout(() => heroTitle.classList.add("in"), 120));
    }

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll(".reveal-up, [class*=\"rv-\"]:not(.rv-wipe):not(.rv-photo)");
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
    /* clip-path reveals start as a sliver, so any visible pixel should trigger them */
    const io0 = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io0.unobserve(en.target); }
      }),
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll(".rv-wipe, .rv-photo").forEach((el) => io0.observe(el));
    cleanups.push(() => { io.disconnect(); io0.disconnect(); });

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

    /* ---------- Project filters (FLIP: cards glide to their new slots) ---------- */
    const filters = document.querySelectorAll<HTMLElement>(".filter");
    const cards = [...document.querySelectorAll<HTMLElement>("#grid .card")];
    const countEl = document.getElementById("filterCount");
    const catCount = (f: string) =>
      cards.filter((c) => f === "all" || (c.dataset.cat || "").split(" ").includes(f)).length;
    filters.forEach((btn) => {
      const f = btn.dataset.f || "all";
      const n = document.createElement("span");
      n.className = "n";
      n.textContent = String(catCount(f));
      btn.appendChild(n);
    });
    const setCount = (f: string) => {
      if (countEl) countEl.textContent = `Showing ${catCount(f)} of ${cards.length} projects` + (f === "all" ? "" : ` · ${f}`);
    };
    setCount("all");
    const filterHandlers: Array<[HTMLElement, () => void]> = [];
    filters.forEach((btn) => {
      const handler = () => {
        const f = btn.dataset.f || "all";
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const first = new Map(cards.filter((c) => !c.classList.contains("hide")).map((c) => [c, c.getBoundingClientRect()]));
        cards.forEach((card) => {
          const show = f === "all" || (card.dataset.cat || "").split(" ").includes(f);
          card.classList.toggle("hide", !show);
          if (show) card.classList.add("in");
        });
        setCount(f);
        if (reduce) return;
        cards.forEach((card) => {
          if (card.classList.contains("hide")) return;
          const b = card.getBoundingClientRect();
          const a = first.get(card);
          if (a) {
            const dx = a.left - b.left, dy = a.top - b.top;
            if (dx || dy) card.animate(
              [{ transform: `translate(${dx}px,${dy}px)` }, { transform: "none" }],
              { duration: 650, easing: "cubic-bezier(0.22,1,0.36,1)" });
          } else {
            card.animate(
              [{ opacity: 0, transform: "scale(.92) translateY(16px)" }, { opacity: 1, transform: "none" }],
              { duration: 600, easing: "cubic-bezier(0.22,1,0.36,1)" });
          }
        });
      };
      btn.addEventListener("click", handler);
      filterHandlers.push([btn, handler]);
    });
    cleanups.push(() =>
      filterHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    /* ---------- Stack chips: stagger index + cross-highlight projects ---------- */
    document.querySelectorAll(".cap").forEach((cap) =>
      cap.querySelectorAll<HTMLElement>(".cap-tags span").forEach((s, i) => s.style.setProperty("--i", String(i))));
    const hint = document.getElementById("tagHint");
    const hintDefault = hint?.textContent || "";
    const stop = (s: string) => s.toLowerCase().replace(/&amp;/g, "&");
    const aliases: Record<string, string[]> = { "llm & rag": ["rag", "llm"], "rest api": ["rest"], "ci/cd": ["ci/cd"], "user-focused": ["user"] };
    const chipOn = (chip: HTMLElement) => {
      const key = stop(chip.textContent || "");
      const terms = aliases[key] || [key];
      const hits = cards.filter((c) => terms.some((t) => stop(c.textContent || "").includes(t)));
      cards.forEach((c) => { c.classList.toggle("lit", hits.includes(c)); c.classList.toggle("dim", hits.length > 0 && !hits.includes(c)); });
      chip.classList.add("sel");
      if (hint) {
        hint.innerHTML = hits.length
          ? `<b>${chip.textContent}</b> — used in ${hits.length} project${hits.length > 1 ? "s" : ""}: ` + hits.map((c) => c.querySelector("h3")?.textContent).join(" · ")
          : `<b>${chip.textContent}</b> — part of the daily toolkit, not tied to a single showcase.`;
      }
    };
    const chipOff = (chip: HTMLElement) => {
      chip.classList.remove("sel");
      cards.forEach((c) => c.classList.remove("lit", "dim"));
      if (hint) hint.textContent = hintDefault;
    };
    document.querySelectorAll<HTMLElement>(".cap-tags span").forEach((chip) => {
      const on = () => chipOn(chip), off = () => chipOff(chip);
      chip.addEventListener("mouseenter", on); chip.addEventListener("mouseleave", off);
      chip.addEventListener("click", on);
      cleanups.push(() => { chip.removeEventListener("mouseenter", on); chip.removeEventListener("mouseleave", off); chip.removeEventListener("click", on); });
    });

    /* ---------- About: reading-scrub — the lead lights word by word ---------- */
    const lead = document.querySelector<HTMLElement>(".about-lead");
    const words: HTMLElement[] = [];
    if (lead && !reduce) {
      const walk = (node: Node) => {
        [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (n.textContent || "").split(/(\s+)/).forEach((t) => {
              if (!t) return;
              if (/^\s+$/.test(t)) frag.append(t);
              else { const s = document.createElement("span"); s.className = "w"; s.textContent = t; words.push(s); frag.append(s); }
            });
            n.parentNode?.replaceChild(frag, n);
          } else walk(n);
        });
      };
      walk(lead);
      lead.classList.add("scrub");
    }

    /* ---------- Experience: thread draws with scroll ---------- */
    const timeline = document.querySelector<HTMLElement>(".timeline");
    const tlItems = [...document.querySelectorAll<HTMLElement>(".tl-item")];
    const onScrub = () => {
      const vh = window.innerHeight;
      if (lead && words.length) {
        const r = lead.getBoundingClientRect();
        const p = Math.min(Math.max((vh * 0.82 - r.top) / (r.height + vh * 0.25), 0), 1);
        const upto = p * words.length * 1.15;
        words.forEach((w, i) => w.classList.toggle("on", i < upto));
      }
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const line = vh * 0.6;
        const p = Math.min(Math.max((line - r.top) / r.height, 0), 1);
        timeline.style.setProperty("--tl", p.toFixed(3));
        tlItems.forEach((it) => it.classList.toggle("on", reduce || it.getBoundingClientRect().top < line));
      }
    };
    window.addEventListener("scroll", onScrub, { passive: true });
    window.addEventListener("resize", onScrub, { passive: true });
    onScrub();
    cleanups.push(() => { window.removeEventListener("scroll", onScrub); window.removeEventListener("resize", onScrub); });

    /* ---------- Contact: copy email + live Bangkok clock ---------- */
    const toast = document.getElementById("toast");
    const copyBtn = document.getElementById("copyMail");
    const copyH = async () => {
      try { await navigator.clipboard.writeText(copyBtn?.dataset.copy || ""); if (toast) toast.textContent = "Email copied — talk soon ✦"; }
      catch { window.location.href = "mailto:" + (copyBtn?.dataset.copy || ""); return; }
      toast?.classList.add("show");
      setTimeout(() => toast?.classList.remove("show"), 2200);
    };
    copyBtn?.addEventListener("click", copyH);
    const clock = document.getElementById("bkkClock");
    const tickClock = () => {
      if (!clock) return;
      const t = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
      const h = parseInt(t, 10);
      clock.textContent = `${t} local · ${h >= 9 && h < 18 ? "likely at my desk" : h >= 22 || h < 6 ? "probably asleep" : "off the clock"}`;
    };
    tickClock();
    const clockT = setInterval(tickClock, 30000);
    cleanups.push(() => { copyBtn?.removeEventListener("click", copyH); clearInterval(clockT); });

    /* ---------- Active nav link + chapter rail by section ---------- */
    const sections = document.querySelectorAll("main section[id], header[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
    const railItems = document.querySelectorAll<HTMLAnchorElement>(".rail a");
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = en.target.id;
            navLinks.forEach((a) => {
              a.style.color =
                a.getAttribute("href") === "#" + id ? "var(--ink)" : "";
            });
            railItems.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("data-to") === id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => sio.observe(s));
    cleanups.push(() => sio.disconnect());

    /* ============================================================
       SUBTLE SCROLL PARALLAX — imagery + ornaments only
       (no pointer-follow, no 3D tilt — kept deliberately quiet)
       ============================================================ */
    if (!reduce) {
      const tagged = [
        ...document.querySelectorAll<HTMLElement>("[data-px-y]"),
      ].map((el) => ({
        el,
        sy: parseFloat(el.dataset.pxY || "") || 0,
      }));

      if (!small) {
        document
          .querySelectorAll<HTMLElement>(".card-media")
          .forEach((el) => tagged.push({ el, sy: 0.045 }));
        document
          .querySelectorAll<HTMLElement>(".about-photo img")
          .forEach((el) => tagged.push({ el, sy: 0.04 }));
      }

      // Darkroom "develop": project photos emerge from a dark, blurred,
      // sepia latent image to full focus as they cross the viewport centre.
      const devList = [
        ...document.querySelectorAll<HTMLImageElement>(".card-media img"),
      ].map((img) => ({ img, card: img.closest(".card") as HTMLElement }));

      // Dolly-zoom (vertigo): headline (.wrap, z0) stays locked while the
      // background depth planes recede + the hero perspective narrows on scroll.
      const heroEl = document.querySelector<HTMLElement>(".hero");
      const dolly = small
        ? []
        : ([
            { el: heroEl?.querySelector<HTMLElement>(".hero-orb"), z: 1150 },
            { el: document.getElementById("revealLayer"), z: 900 },
            { el: document.getElementById("depthStage"), z: 650 },
          ].filter((d) => d.el) as { el: HTMLElement; z: number }[]);
      const scrollCue = document.querySelector<HTMLElement>(".scroll-cue");

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
      });

      let frameRaf = 0;
      const frame = () => {
        const vh = window.innerHeight;
        const center = vh / 2;
        for (const t of tagged) {
          if (t.sy && visible.has(t.el)) {
            const r = t.el.getBoundingClientRect();
            const ty = (center - (r.top + r.height / 2)) * t.sy;
            t.el.style.setProperty("--py", ty.toFixed(2) + "px");
          }
        }
        for (const d of devList) {
          const r = d.card.getBoundingClientRect();
          if (r.bottom < -120 || r.top > vh + 120) continue;
          let p = 1 - Math.abs(r.top + r.height / 2 - center) / (vh * 0.62);
          p = p < 0 ? 0 : p > 1 ? 1 : p;
          d.img.style.filter =
            `sepia(${(0.5 - 0.4 * p).toFixed(3)}) saturate(${(0.55 + 0.45 * p).toFixed(3)}) ` +
            `brightness(${(0.5 + 0.34 * p).toFixed(3)}) contrast(${(1.22 - 0.2 * p).toFixed(3)}) ` +
            `blur(${((1 - p) * 3).toFixed(2)}px)`;
        }
        if (heroEl && dolly.length) {
          const hr = heroEl.getBoundingClientRect();
          if (hr.bottom > 0 && hr.top < vh) {
            let s = -hr.top / (hr.height * 0.9);
            s = s < 0 ? 0 : s > 1 ? 1 : s;
            const e = s * s * (3 - 2 * s); // smoothstep
            heroEl.style.perspective = (1500 - 940 * e).toFixed(0) + "px";
            heroEl.style.setProperty("--vig", (e * 0.85).toFixed(3));
            for (const d of dolly) {
              d.el.style.transform = `translateZ(${(-d.z * e).toFixed(1)}px)`;
            }
            if (scrollCue) scrollCue.style.opacity = (1 - e * 1.3).toFixed(3);
          }
        }
        frameRaf = raf(frame);
      };
      frameRaf = raf(frame);
      cleanups.push(() => {
        cancelAnimationFrame(frameRaf);
        vio.disconnect();
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
