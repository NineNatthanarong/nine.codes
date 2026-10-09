"use client";

import { useEffect } from "react";

/**
 * nine.codes — interactions ("Spec Sheet" edition)
 * Hero letters breathe on Archivo's width axis and bend toward the cursor.
 * Everything else moves differently per section: row-index accordion with
 * FLIP filtering, word-scrub intro, tool cross-referencing, drawing thread.
 */
export default function Interactions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const raf = (fn: FrameRequestCallback) => requestAnimationFrame(fn);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;
    const $ = <T extends HTMLElement>(s: string) => [...document.querySelectorAll<T>(s)];
    const on = <K extends keyof WindowEventMap>(t: Window, e: K, fn: (ev: WindowEventMap[K]) => void) => {
      t.addEventListener(e, fn, { passive: true });
      cleanups.push(() => t.removeEventListener(e, fn));
    };

    /* ---------- hero: mask-rise, then width-axis breathing + cursor bend ---------- */
    const hero = document.querySelector<HTMLElement>(".hero");
    const name = document.getElementById("heroName");
    const letters = $<HTMLElement>("[data-hl]");
    $<HTMLElement>(".hl").forEach((h, i) => h.querySelector("b")?.style.setProperty("--k", String(i)));
    raf(() => setTimeout(() => { name?.classList.add("in"); hero?.classList.add("in"); }, 80));
    if (!reduce && letters.length) {
      let mx = -1, loop = 0; const t0 = performance.now();
      if (fine) on(window, "mousemove", (e) => { mx = e.clientX; });
      const tick = (now: number) => {
        const t = (now - t0) / 1000;
        letters.forEach((el, i) => {
          let w = 100 + Math.sin(t * 1.1 + i * 0.9) * 14;
          if (mx >= 0) {
            const r = el.getBoundingClientRect();
            const d = Math.abs(mx - (r.left + r.width / 2)) / (window.innerWidth * 0.22);
            w += Math.max(0, 1 - d) * 26;
          }
          el.style.setProperty("--w", Math.max(62, Math.min(125, w)).toFixed(1));
        });
        loop = raf(tick);
      };
      loop = raf(tick);
      cleanups.push(() => cancelAnimationFrame(loop));
    }

    /* ---------- nav state + progress ---------- */
    const progress = document.getElementById("progress");
    const onProg = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${(h > 0 ? Math.min(window.scrollY / h, 1) : 0).toFixed(4)})`;
    };
    on(window, "scroll", onProg); on(window, "resize", onProg); onProg();

    const navLinks = $<HTMLAnchorElement>(".nav-links a");
    const sio = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $("main section[id]").forEach((s) => sio.observe(s));
    cleanups.push(() => sio.disconnect());

    /* ---------- reveal observers (per-part CSS decides the motion) ---------- */
    // clip-path starts as a sliver, so any visible pixel is enough
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    $(".rv-row, .rv-photo, .rv-trait, .rv-stack").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
    $(".rv-stack").forEach((row) =>
      row.querySelectorAll<HTMLElement>(".tool").forEach((t, i) => t.style.setProperty("--t", String(i))));

    /* ---------- counters ---------- */
    const cio = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        const target = parseInt(el.dataset.count || "0", 10);
        const suffix = el.dataset.suffix || "";
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / 1300, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
          if (p < 1) raf(step);
        };
        reduce ? (el.textContent = target + suffix) : raf(step);
        cio.unobserve(el);
      }),
      { threshold: 0.5 }
    );
    $("[data-count]").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ---------- work index: accordion + FLIP filter + tool cross-reference ---------- */
    const rows = $<HTMLElement>("#grid .row");
    const setOpen = (row: HTMLElement, open: boolean) => {
      row.classList.toggle("open", open);
      row.querySelector(".row-head")?.setAttribute("aria-expanded", String(open));
    };
    rows.forEach((row) => {
      const head = row.querySelector<HTMLElement>(".row-head");
      const h = () => {
        const willOpen = !row.classList.contains("open");
        rows.forEach((r) => setOpen(r, false));
        setOpen(row, willOpen);
      };
      head?.addEventListener("click", h);
      cleanups.push(() => head?.removeEventListener("click", h));
    });
    if (rows[0]) setOpen(rows[0], true);

    const filters = $<HTMLElement>(".filter");
    const countEl = document.getElementById("filterCount");
    const inCat = (r: HTMLElement, f: string) => f === "all" || (r.dataset.cat || "").split(" ").includes(f);
    filters.forEach((b) => {
      const n = document.createElement("span");
      n.className = "n";
      n.textContent = String(rows.filter((r) => inCat(r, b.dataset.f || "all")).length);
      b.appendChild(n);
    });
    const setCount = (f: string) => {
      if (countEl) countEl.textContent = `${rows.filter((r) => inCat(r, f)).length} / ${rows.length} shown` + (f === "all" ? "" : ` — ${f}`);
    };
    setCount("all");
    filters.forEach((btn) => {
      const h = () => {
        const f = btn.dataset.f || "all";
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const first = new Map(rows.filter((r) => !r.classList.contains("hide")).map((r) => [r, r.getBoundingClientRect()]));
        rows.forEach((r) => { const show = inCat(r, f); r.classList.toggle("hide", !show); if (show) r.classList.add("in"); });
        setCount(f);
        if (reduce) return;
        rows.forEach((r) => {
          if (r.classList.contains("hide")) return;
          const b = r.getBoundingClientRect(), a = first.get(r);
          const kf = a
            ? [{ transform: `translateY(${a.top - b.top}px)` }, { transform: "none" }]
            : [{ opacity: 0, transform: "translateX(-40px)" }, { opacity: 1, transform: "none" }];
          if (!a || a.top !== b.top) r.animate(kf, { duration: 650, easing: "cubic-bezier(0.22,1,0.36,1)" });
        });
      };
      btn.addEventListener("click", h);
      cleanups.push(() => btn.removeEventListener("click", h));
    });

    const hint = document.getElementById("tagHint");
    const hintDefault = hint?.textContent || "";
    const aliases: Record<string, string[]> = { "llm & rag": ["rag", "llm"], "rest api": ["rest"], "user-focused": ["user"] };
    const norm = (s: string) => s.toLowerCase();
    const toolOn = (chip: HTMLElement) => {
      const key = norm(chip.textContent || "");
      const terms = aliases[key] || [key];
      const hits = rows.filter((r) => terms.some((t) => norm(r.textContent || "").includes(t)));
      rows.forEach((r) => { r.classList.toggle("lit", hits.includes(r)); r.classList.toggle("dim", hits.length > 0 && !hits.includes(r)); });
      chip.classList.add("sel");
      if (hint) {
        hint.textContent = "";
        const b = document.createElement("b");
        b.textContent = chip.textContent || "";
        hint.append(b, hits.length
          ? ` — used in ${hits.length} project${hits.length > 1 ? "s" : ""}: ` + hits.map((r) => r.querySelector(".r-t")?.textContent).join(" / ")
          : " — part of the daily toolkit, not tied to a single showcase.");
      }
    };
    const toolOff = (chip: HTMLElement) => {
      chip.classList.remove("sel");
      rows.forEach((r) => r.classList.remove("lit", "dim"));
      if (hint) hint.textContent = hintDefault;
    };
    $(".tool").forEach((chip) => {
      const a = () => toolOn(chip), b = () => toolOff(chip);
      chip.addEventListener("mouseenter", a); chip.addEventListener("mouseleave", b);
      chip.addEventListener("focus", a); chip.addEventListener("blur", b);
      chip.addEventListener("click", a);
      cleanups.push(() => { chip.removeEventListener("mouseenter", a); chip.removeEventListener("mouseleave", b); chip.removeEventListener("focus", a); chip.removeEventListener("blur", b); chip.removeEventListener("click", a); });
    });

    /* ---------- about: lead lights word by word as you read ---------- */
    const lead = document.querySelector<HTMLElement>(".about-lead");
    const words: HTMLElement[] = [];
    if (lead && !reduce) {
      const walk = (node: Node) => [...node.childNodes].forEach((n) => {
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
      walk(lead);
      lead.classList.add("scrub");
    }

    /* ---------- experience: thread draws with scroll ---------- */
    const timeline = document.querySelector<HTMLElement>(".timeline");
    const tlItems = $<HTMLElement>(".tl-item");
    const onScrub = () => {
      const vh = window.innerHeight;
      if (lead && words.length) {
        const r = lead.getBoundingClientRect();
        const p = Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.2), 0), 1);
        const upto = p * words.length * 1.12;
        words.forEach((w, i) => w.classList.toggle("on", i < upto));
      }
      if (timeline) {
        const r = timeline.getBoundingClientRect(), line = vh * 0.6;
        if (!reduce) timeline.style.setProperty("--tl", Math.min(Math.max((line - r.top) / r.height, 0), 1).toFixed(3));
        tlItems.forEach((it) => it.classList.toggle("on", reduce || it.getBoundingClientRect().top < line));
      }
    };
    on(window, "scroll", onScrub); on(window, "resize", onScrub); onScrub();

    /* ---------- contact: copy email + live Bangkok clock ---------- */
    const toast = document.getElementById("toast");
    const copyBtn = document.getElementById("copyMail");
    const copyH = async () => {
      try { await navigator.clipboard.writeText(copyBtn?.dataset.copy || ""); if (toast) toast.textContent = "Email copied"; }
      catch { window.location.href = "mailto:" + (copyBtn?.dataset.copy || ""); return; }
      toast?.classList.add("show");
      setTimeout(() => toast?.classList.remove("show"), 2000);
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

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
