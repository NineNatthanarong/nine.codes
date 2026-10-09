import Interactions from "./components/Interactions";

type Project = {
  title: string;
  tag: string;
  role?: string;
  cats: string;
  img?: string;
  alt?: string;
  glyph?: string;
  blurb: string;
  pills: string[];
  stats?: [string, string][];
};

const projects: Project[] = [
  {
    title: "Super AI Engineer SS5",
    tag: "Award · National Winner",
    role: "Outstanding Innovation Award · CAIO @ RaoChatHub",
    cats: "award ai",
    img: "/images/projects/team_photo.jpeg",
    alt: "Super AI Engineer SS5 — Outstanding Innovation Award won by Natthanarong (Nine)",
    blurb: "Won Thailand's 5th National AI Exhibition. Built an enterprise RAG chatbot and led chatbot solutions as Chief AI Officer.",
    pills: ["RAG", "LLM", "Full-Stack"],
  },
  {
    title: "BU ROBOTSTUDIO",
    tag: "Leadership",
    role: "Head of Operations",
    cats: "robotics",
    img: "/images/projects/453008415_17959542005792478_5114396889725007570_n.jpg",
    alt: "BU ROBOTSTUDIO robotics lab led by Natthanarong Tiangjit",
    blurb: "Led a 50+ member robotics lab, mentored peers, ran Open House events.",
    pills: ["Leadership", "Robotics"],
    stats: [["3", "Years"], ["50+", "Members"], ["3", "Open Houses"]],
  },
  {
    title: "ABB Automation",
    tag: "Industrial · Top 8",
    cats: "robotics",
    img: "/images/projects/IMG_2091.JPG",
    alt: "ABB Automation robotics training — top 8 finalist",
    blurb: "Selected from 40 teams to final 8. Trained in ABB robotics, PLC & computer vision.",
    pills: ["ABB", "CV"],
  },
  {
    title: "AI Smart Parking",
    tag: "Competition · Finalist",
    cats: "robotics ai",
    img: "/images/projects/plc2024-team.PNG",
    alt: "AI Smart Parking — Mitsubishi PLC Competition 2024 finalist",
    blurb: "Mitsubishi PLC 2024 finalist — AI-powered smart parking with PLC + computer vision.",
    pills: ["PLC", "Ladder Logic"],
  },
  {
    title: "HyperGas AI",
    tag: "AI Project · Live",
    cats: "ai",
    img: "/images/projects/469105467_17976154043792478_347761597580673379_n.jpg",
    alt: "HyperGas AI safety-training system",
    blurb: "AI safety-training system for gas stations, cutting human error in safety protocols.",
    pills: ["AI Training", "Safety"],
  },
  {
    title: "functions.codes",
    tag: "Web · Personal",
    role: "Ad-free tools for humans",
    cats: "web ai",
    img: "/images/projects/functions-codes-web.png",
    alt: "functions.codes — free ad-free online tools by Nine",
    blurb: "A platform of free online tools — including a clean PDF converter — with zero ads.",
    pills: ["Next.js", "Clean UI"],
  },
  {
    title: "Gender Classification AI",
    tag: "AI · Self-Initiated",
    role: "End-to-end NLP deployment",
    cats: "ai web",
    img: "/images/projects/webpage.png",
    alt: "Gender Classification AI — NLP web app",
    blurb: "Classifies gender from text using NLP + web scraping, deployed end-to-end on Django.",
    pills: ["NLP", "Django"],
  },
  {
    title: "LearnLab",
    tag: "Innovation · 2× Finalist",
    cats: "award robotics",
    img: "/images/projects/1761292091147.jpeg",
    alt: "LearnLab — AI/AR handicraft marketplace, two-time finalist",
    blurb: "AI/AR marketplace for handicrafts + a tourism PhotoBooth. Two-time finalist.",
    pills: ["AI", "AR"],
  },
  {
    title: "Learning Express",
    tag: "International",
    cats: "ai web",
    img: "/images/projects/1761292376519.jpeg",
    alt: "Learning Express — Singapore Polytechnic collaboration",
    blurb: "3-year Singapore Polytechnic collaboration using Design Thinking for community challenges.",
    pills: ["Design Thinking"],
  },
  {
    title: "TESA Top Gun Rally",
    tag: "Competition · Defense",
    cats: "ai robotics",
    img: "/images/projects/1763286567350.jpeg",
    alt: "TESA Top Gun Rally — defense-innovation sprint",
    blurb: "7-day defense-innovation sprint using object detection, web dev & MATLAB.",
    pills: ["Object Detection", "MATLAB"],
  },
  {
    title: "Pothole Detection · 2.5D Camera",
    tag: "Research · Computer Vision",
    role: "Depth-aware object detection",
    cats: "ai robotics",
    glyph: "2.5D",
    blurb: "Used a depth camera to capture point-cloud data and built a 2.5D imaging pipeline with a Transformer model to detect road damage.",
    pills: ["Point Cloud", "Transformer", "Depth Camera"],
  },
  {
    title: "Website Developer",
    tag: "Full-Stack · Ongoing",
    role: "10+ sites, front to back",
    cats: "web",
    glyph: "10+",
    blurb: "Built and shipped 10+ websites across modern frameworks — front-end to back-end, with CI/CD, REST APIs and authentication.",
    pills: ["React", "Next.js", "Express", "CI/CD"],
  },
];

const stack: [string, string, string[]][] = [
  ["01", "Full-Stack Web", ["React", "Next.js", "Express", "REST API", "Auth", "CI/CD"]],
  ["02", "Machine Learning & AI", ["Python", "NLP", "LLM & RAG", "Model Optimization", "Data Science"]],
  ["03", "Vision & Robotics", ["Object Detection", "Image Processing", "Point Cloud", "Robotics Control", "PLC"]],
  ["04", "Languages & Core", ["Python", "C", "Ladder Logic", "Serial Comms"]],
  ["05", "Deploy & Ops", ["Docker", "GitHub", "GitLab", "Cloud Deploy"]],
  ["06", "Design Thinking", ["User-Focused", "Prototyping", "Cross-Cultural", "Teamwork"]],
];

const traits: [string, string, string][] = [
  ["01", "I sweat the details", "Every project gets my full attention, from first prototype to final deploy."],
  ["02", "I think in people", "Technical depth means nothing if it doesn't feel human to use."],
  ["03", "I stay curious", "Robotics, hackathons and competitions keep me learning, always."],
  ["04", "I bring people along", "Led teams, mentored peers, and built community at BU."],
];

const path: { date: string; title: string; org: string; pts: string[] }[] = [
  {
    date: "Mar 2024 — Present",
    title: "Team Leader",
    org: "BU ROBOTSTUDIO",
    pts: [
      "Develop software architecture and AI integration for robotics and automation",
      "Direct cross-functional teams, turning technical concepts into actionable strategies",
      "Grew with the lab: Staff (2023) → Operations Lead (2024) → Head of Operations (2025)",
    ],
  },
  {
    date: "October 2025",
    title: "Outstanding Innovation Award",
    org: "Super AI Engineer Season 5 · AiAT",
    pts: [
      "Honored at Thailand's 5th National AI Exhibition",
      "Delivered customized software focused on scalability, security and usability",
      "Built an enterprise RAG chatbot for real business use",
    ],
  },
  {
    date: "Mar 2024 — 2026",
    title: "Collaborator",
    org: "Learning Express · Singapore Polytechnic",
    pts: [
      "Applied engineering and Design Thinking to real community problems",
      "Merged technical analysis with user-focused design",
      "Sharpened English and intercultural skills through teamwork",
    ],
  },
  {
    date: "2023 — Present",
    title: "AI Engineering Student",
    org: "Bangkok University · GPAX 3.29",
    pts: [
      "Tech Talent 100% Full Scholarship recipient",
      "B.Eng in AI Engineering & Data Science — third year",
      "Certified Data Scientist (Nanodegree) and AI Innovator by AiAT",
    ],
  },
];

const tape = ["Python", "Machine Learning", "LLM & RAG", "Object Detection", "Next.js", "Docker", "PLC & Robotics", "Point Cloud"];

export default function Home() {
  return (
    <>
      <div className="progress" id="progress" />

      {/* ============ NAV ============ */}
      <nav id="nav" aria-label="Primary">
        <a className="logo" href="#top">nine<span>.</span>codes</a>
        <div className="nav-links">
          <a href="#work"><i>01</i>Work</a>
          <a href="#about"><i>02</i>About</a>
          <a href="#expertise"><i>03</i>Stack</a>
          <a href="#experience"><i>04</i>Path</a>
        </div>
        <a className="nav-cta" href="#contact">Say hello ↗</a>
      </nav>

      <main id="top">
        {/* ============ HERO ============ */}
        <header className="hero" data-screen-label="Hero">
          <p className="mono hero-top">
            <span className="blink" /> Natthanarong &quot;Nine&quot; Tiangjit — AI developer — Bangkok, TH
          </p>
          <h1 className="hero-name" id="heroName" aria-label="Nine — Natthanarong Tiangjit, AI developer">
            {["N", "I", "N", "E"].map((ch, i) => (
              <span className="hl" key={i} aria-hidden="true"><b data-hl={i}>{ch}</b></span>
            ))}
            <span className="hl hot" aria-hidden="true"><b>.</b></span>
          </h1>

          <div className="hero-grid">
            <div>
              <p className="hero-tag">Built with <em>curiosity.</em></p>
              <p className="hero-sub">
                I take ambitious ideas and turn them into <b>intelligent systems that ship</b>, scale gracefully, and feel effortless to use.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-hot">See the work ↘</a>
                <a href="#contact" className="btn">Say hello</a>
              </div>
            </div>
            <dl className="spec">
              <div><dt>Role</dt><dd>AI Developer</dd></div>
              <div><dt>Base</dt><dd>Bangkok, Thailand</dd></div>
              <div><dt>Now</dt><dd>Trainee Internship</dd></div>
              <div><dt>Won</dt><dd>Outstanding Innovation Award — Super AI SS5</dd></div>
              <div><dt>Lead</dt><dd>Head of Operations — BU ROBOTSTUDIO</dd></div>
              <div><dt>Funded</dt><dd>Tech Talent 100% Scholarship</dd></div>
            </dl>
          </div>
        </header>

        {/* ============ TAPE ============ */}
        <div className="tape" aria-hidden="true">
          <div className="tape-track">
            {[0, 1].map((k) => (
              <span className="tape-set" key={k}>
                {tape.map((t) => (
                  <span key={t}>{t}<i>✕</i></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ============ WORK ============ */}
        <section className="block" id="work" data-screen-label="Work">
          <div className="sec-head">
            <p className="mono sec-no">§ 01 / Work</p>
            <h2 className="sec-title">Made to <span className="hot">matter.</span></h2>
            <p className="sec-desc">A handful of things I&apos;m proud of. Every one shipped, used by real people, and built to make something a little better.</p>
          </div>

          <div className="filters" id="filters" role="group" aria-label="Filter projects">
            <button className="filter active" data-f="all">All</button>
            <button className="filter" data-f="ai">AI</button>
            <button className="filter" data-f="robotics">Robotics</button>
            <button className="filter" data-f="web">Web</button>
            <button className="filter" data-f="award">Awards</button>
            <p className="mono filter-count" id="filterCount" aria-live="polite" />
          </div>

          <div className="index" id="grid">
            {projects.map((p, i) => {
              const id = `proj-${i}`;
              return (
                <article className="row rv-row" data-cat={p.cats} style={{ "--i": i } as React.CSSProperties} key={p.title}>
                  <button className="row-head" aria-expanded="false" aria-controls={id}>
                    <span className="r-n mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="r-t">{p.title}</span>
                    <span className="r-tag mono">{p.tag}</span>
                    <span className="r-x" aria-hidden="true" />
                  </button>
                  <div className="row-body" id={id}>
                    <div className="row-inner">
                      <div className="row-media">
                        {p.img ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.img} alt={p.alt} loading="lazy" />
                        ) : (
                          <div className="glyph" aria-hidden="true">{p.glyph}</div>
                        )}
                      </div>
                      <div className="row-text">
                        {p.role && <p className="mono r-role">{p.role}</p>}
                        <p className="blurb">{p.blurb}</p>
                        {p.stats && (
                          <div className="r-stats">
                            {p.stats.map(([n, l]) => (
                              <div key={l}><strong>{n}</strong><span className="mono">{l}</span></div>
                            ))}
                          </div>
                        )}
                        <p className="mono r-pills">{p.pills.join(" / ")}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="stats">
            <div className="stat"><div className="num" data-count="17" data-suffix="+">0</div><div className="mono lbl">Projects Shipped</div></div>
            <div className="stat"><div className="num" data-count="8" data-suffix="">0</div><div className="mono lbl">Awards &amp; Finals</div></div>
            <div className="stat"><div className="num" data-count="10" data-suffix="+">0</div><div className="mono lbl">Websites Built</div></div>
            <div className="stat"><div className="num" data-count="100" data-suffix="%">0</div><div className="mono lbl">Tech Talent Scholarship</div></div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="block" id="about" data-screen-label="About">
          <div className="sec-head">
            <p className="mono sec-no">§ 02 / About</p>
            <h2 className="sec-title">More than <span className="hot">just code.</span></h2>
          </div>
          <div className="about-grid">
            <figure className="about-photo rv-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-profile.jpg" alt="Natthanarong Tiangjit (Nine) — AI developer in Bangkok, Thailand" loading="lazy" />
              <figcaption className="mono">Bangkok, TH · est. 2024</figcaption>
            </figure>
            <div className="about-text">
              <p className="about-lead">
                I&apos;m a third-year AI Engineering student, here on a full scholarship, living where curiosity meets craft.
              </p>
              <div className="about-body">
                <p>I&apos;ve led robotics teams and won national AI competitions, moving between hardware and software with equal joy. Every project leaves me a little wiser and a lot more eager for the next one.</p>
                <p>What I care about is simple: build things that genuinely matter — and make them work beautifully <em>and</em> feel right.</p>
              </div>
            </div>
          </div>
          <ol className="traits">
            {traits.map(([n, h, p]) => (
              <li className="trait rv-trait" key={n}>
                <span className="mono">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ EXPERTISE ============ */}
        <section className="block inv" id="expertise" data-screen-label="Expertise">
          <div className="sec-head">
            <p className="mono sec-no">§ 03 / Stack</p>
            <h2 className="sec-title">A toolkit built <span className="hot">end to end.</span></h2>
            <p className="sec-desc">From the first line of front-end to a model running in production — I like owning the whole journey.</p>
          </div>
          <p className="mono tag-hint" id="tagHint" aria-live="polite">Hover or tap any tool — see where it has shipped.</p>
          <div className="stack">
            {stack.map(([n, h, tags]) => (
              <div className="stack-row rv-stack" key={n}>
                <span className="mono s-n">{n}</span>
                <h3>{h}</h3>
                <p className="s-tags">
                  {tags.map((t) => (
                    <span key={t} className="tool" tabIndex={0}>{t}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="creds">
            <div><p className="mono l">Education</p><p><b>B.Eng</b> — AI Engineering &amp; Data Science<br />Bangkok University · GPAX 3.29</p></div>
            <div><p className="mono l">Certifications</p><p><b>Data Scientist</b> Nanodegree<br /><b>AI Innovator</b> by AiAT</p></div>
            <div><p className="mono l">Partnership</p><p><b>Central Ayutthaya</b><br />Co-Project · 2024</p></div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="block" id="experience" data-screen-label="Experience">
          <div className="sec-head">
            <p className="mono sec-no">§ 04 / Path</p>
            <h2 className="sec-title">Every step <span className="hot">led here.</span></h2>
            <p className="sec-desc">From late-night competitions to global collaborations — one chapter at a time.</p>
          </div>
          <div className="timeline">
            {path.map((t) => (
              <div className="tl-item" key={t.title + t.date}>
                <p className="mono tl-date">{t.date}</p>
                <div>
                  <h3>{t.title}</h3>
                  <p className="mono tl-org">{t.org}</p>
                  <ul>{t.pts.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="block contact" id="contact" data-screen-label="Contact">
          <p className="mono sec-no">§ 05 / Contact</p>
          <a className="mega" href="mailto:natthanarong.tian@gmail.com" aria-label="Email Nine: say hello">
            {"SAY HELLO".split("").map((ch, i) => (
              <span key={i} style={{ "--c": i } as React.CSSProperties} aria-hidden="true">{ch === " " ? " " : ch}</span>
            ))}
            <em aria-hidden="true">↗</em>
          </a>
          <p className="contact-lead">Got an idea worth building? I&apos;d love to hear it. The best projects always start with a simple hello.</p>
          <div className="contact-grid">
            <button type="button" className="cell copy" id="copyMail" data-copy="natthanarong.tian@gmail.com">
              <span className="mono l">Email · click to copy</span>
              <span className="v">natthanarong.tian@gmail.com</span>
            </button>
            <a className="cell" href="tel:+66917853400">
              <span className="mono l">Phone</span>
              <span className="v">+66 91 785 3400</span>
            </a>
            <div className="cell">
              <span className="mono l">Location</span>
              <span className="v">Bangkok, Thailand · Remote OK</span>
              <span className="mono clock" id="bkkClock">— local time</span>
            </div>
            <div className="cell">
              <span className="mono l">Status</span>
              <span className="v">On a Trainee Internship period</span>
            </div>
          </div>
          <p className="socials mono">
            <a href="https://github.com/nine-codes" target="_blank" rel="noopener">GitHub ↗</a>
            <a href="https://linkedin.com/in/natthanarong" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href="https://www.instagram.com/n_nine.e" target="_blank" rel="noopener">Instagram ↗</a>
          </p>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <p>© 2026 <b>Natthanarong Tiangjit</b> — ณัฏฐณรงค์ เที่ยงจิตต์</p>
        <p className="mono">Thai · Native &nbsp;/&nbsp; English · B2 &nbsp;/&nbsp; GPAX · 3.29</p>
      </footer>

      <Interactions />
      <div className="toast mono" id="toast" role="status" />
    </>
  );
}
