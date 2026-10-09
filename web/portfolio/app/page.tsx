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
    alt: "Super AI Engineer SS5: Outstanding Innovation Award won by Natthanarong (Nine)",
    blurb: "Won Thailand's 5th National AI Exhibition with an enterprise RAG chatbot. I was Chief AI Officer for the chatbot work at RaoChatHub.",
    pills: ["RAG", "LLM", "Full-Stack"],
  },
  {
    title: "BU ROBOTSTUDIO",
    tag: "Leadership",
    role: "Head of Operations, until May 2026",
    cats: "robotics",
    img: "/images/projects/453008415_17959542005792478_5114396889725007570_n.jpg",
    alt: "BU ROBOTSTUDIO robotics lab led by Natthanarong Tiangjit",
    blurb: "I led a robotics lab of 50+ members, mentored other students and ran the Open House events.",
    pills: ["Leadership", "Robotics"],
    stats: [["3", "Years"], ["50+", "Members"], ["3", "Open Houses"]],
  },
  {
    title: "ABB Automation",
    tag: "Industrial · Top 8",
    cats: "robotics",
    img: "/images/projects/IMG_2091.JPG",
    alt: "ABB Automation robotics training, top 8 finalist",
    blurb: "One of 8 finalists picked from 40 teams. The training covered ABB robots, PLC and computer vision.",
    pills: ["ABB", "CV"],
  },
  {
    title: "AI Smart Parking",
    tag: "Competition · Finalist",
    cats: "robotics ai",
    img: "/images/projects/plc2024-team.PNG",
    alt: "AI Smart Parking, finalist at the Mitsubishi PLC Competition 2024",
    blurb: "Finalist at the Mitsubishi PLC Competition 2024. A smart parking system that pairs PLC control with computer vision.",
    pills: ["PLC", "Ladder Logic"],
  },
  {
    title: "HyperGas AI",
    tag: "AI Project · Live",
    cats: "ai",
    img: "/images/projects/469105467_17976154043792478_347761597580673379_n.jpg",
    alt: "HyperGas AI safety-training system",
    blurb: "A safety-training system for gas stations, built to reduce human error in safety procedures.",
    pills: ["AI Training", "Safety"],
  },
  {
    title: "functions.codes",
    tag: "Web · Personal",
    role: "Free tools, no ads",
    cats: "web ai",
    img: "/images/projects/functions-codes-web.png",
    alt: "functions.codes, free online tools with no ads, by Nine",
    blurb: "A site of free online tools, including a clean PDF converter. No ads.",
    pills: ["Next.js", "Clean UI"],
  },
  {
    title: "Gender Classification AI",
    tag: "AI · Self-Initiated",
    role: "End-to-end NLP deployment",
    cats: "ai web",
    img: "/images/projects/webpage.png",
    alt: "Gender Classification AI, an NLP web app",
    blurb: "Classifies gender from text using NLP and web scraping. I built it and deployed it on Django myself.",
    pills: ["NLP", "Django"],
  },
  {
    title: "LearnLab",
    tag: "Innovation · 2× Finalist",
    cats: "award robotics",
    img: "/images/projects/1761292091147.jpeg",
    alt: "LearnLab, an AI and AR handicraft marketplace, two-time finalist",
    blurb: "An AI and AR marketplace for handicrafts, plus a tourism photo booth. Two-time finalist.",
    pills: ["AI", "AR"],
  },
  {
    title: "Learning Express",
    tag: "International",
    cats: "ai web",
    img: "/images/projects/1761292376519.jpeg",
    alt: "Learning Express, a Singapore Polytechnic collaboration",
    blurb: "Three years working with Singapore Polytechnic, using Design Thinking on community problems.",
    pills: ["Design Thinking"],
  },
  {
    title: "TESA Top Gun Rally",
    tag: "Competition · Defense",
    cats: "ai robotics",
    img: "/images/projects/1763286567350.jpeg",
    alt: "TESA Top Gun Rally, a defense innovation sprint",
    blurb: "A 7-day defense innovation sprint. We used object detection, web development and MATLAB.",
    pills: ["Object Detection", "MATLAB"],
  },
  {
    title: "Pothole Detection · 2.5D Camera",
    tag: "Research · Computer Vision",
    role: "Depth-aware object detection",
    cats: "ai robotics",
    glyph: "2.5D",
    blurb: "I captured point-cloud data with a depth camera, then built a 2.5D imaging pipeline with a Transformer model to find road damage.",
    pills: ["Point Cloud", "Transformer", "Depth Camera"],
  },
  {
    title: "Website Developer",
    tag: "Full-Stack · Ongoing",
    role: "10+ sites, front to back",
    cats: "web",
    glyph: "10+",
    blurb: "I have built and shipped 10+ websites, front end to back end, with CI/CD, REST APIs and authentication.",
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
  ["01", "I care about details", "I follow a project from the first prototype to the final deploy."],
  ["02", "I design for people", "A technically strong product still fails if it is hard to use."],
  ["03", "I keep learning", "Robotics, hackathons and competitions are how I learn fastest."],
  ["04", "I work with teams", "I have led teams, mentored peers and helped build the community at BU."],
];

const path: { date: string; title: string; org: string; pts: string[] }[] = [
  {
    date: "Mar 2024 to May 2026",
    title: "Team Leader",
    org: "BU ROBOTSTUDIO",
    pts: [
      "Designed the software architecture and AI integration for robotics and automation projects",
      "Led cross-functional teams and turned technical ideas into plans people could act on",
      "Moved up with the lab: Staff in 2023, Operations Lead in 2024, Head of Operations in 2025, and finished my term in May 2026",
    ],
  },
  {
    date: "October 2025",
    title: "Outstanding Innovation Award",
    org: "Super AI Engineer Season 5 · AiAT",
    pts: [
      "Honored at Thailand's 5th National AI Exhibition",
      "Delivered custom software built for scale, security and ease of use",
      "Built an enterprise RAG chatbot for a real business",
    ],
  },
  {
    date: "Mar 2024 to 2026",
    title: "Collaborator",
    org: "Learning Express · Singapore Polytechnic",
    pts: [
      "Applied engineering and Design Thinking to real community problems",
      "Combined technical analysis with user-focused design",
      "Improved my English and cross-cultural teamwork",
    ],
  },
  {
    date: "2023 to Present",
    title: "AI Engineering Student",
    org: "Bangkok University · GPAX 3.29",
    pts: [
      "Tech Talent 100% Full Scholarship recipient",
      "B.Eng in AI Engineering & Data Science, fourth year",
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
            <span className="blink" /> Natthanarong &quot;Nine&quot; Tiangjit / AI developer / Bangkok, TH
          </p>
          <h1 className="hero-name" id="heroName" aria-label="Nine, Natthanarong Tiangjit, AI developer">
            {["N", "I", "N", "E"].map((ch, i) => (
              <span className="hl" key={i} aria-hidden="true"><b data-hl={i}>{ch}</b></span>
            ))}
            <span className="hl hot" aria-hidden="true"><b>.</b></span>
          </h1>

          <div className="hero-grid">
            <div>
              <p className="hero-tag">I make AI <em>do real work.</em></p>
              <p className="hero-sub">
                I&apos;m a fourth-year AI engineering student in Bangkok. I build <b>chatbots, vision systems and websites</b>, and I like seeing real people use them.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-hot">See the work ↘</a>
                <a href="#contact" className="btn">Email me</a>
              </div>
            </div>
            <dl className="spec">
              <div><dt>Role</dt><dd>AI Developer</dd></div>
              <div><dt>Base</dt><dd>Bangkok, Thailand</dd></div>
              <div><dt>Now</dt><dd>Trainee intern</dd></div>
              <div><dt>Won</dt><dd>Outstanding Innovation Award, Super AI SS5</dd></div>
              <div><dt>Led</dt><dd>BU ROBOTSTUDIO, until May 2026</dd></div>
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
            <h2 className="sec-title">Things I&apos;ve <span className="hot">built.</span></h2>
            <p className="sec-desc">Twelve projects from competitions, university and my own time. Open any row for the details.</p>
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
            <h2 className="sec-title">A bit about <span className="hot">me.</span></h2>
          </div>
          <div className="about-grid">
            <figure className="about-photo rv-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-profile.jpg" alt="Natthanarong Tiangjit (Nine), AI developer in Bangkok, Thailand" loading="lazy" />
              <figcaption className="mono">Nine, Bangkok</figcaption>
            </figure>
            <div className="about-text">
              <p className="about-lead">
                I&apos;m a fourth-year AI Engineering student at Bangkok University, studying on a full scholarship.
              </p>
              <div className="about-body">
                <p>I led a robotics lab until May 2026 and won a national AI competition. I work on both hardware and software, and every project makes me want to start the next one.</p>
                <p>I want the things I build to be useful, and I want them to feel <em>right</em> to use.</p>
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
            <h2 className="sec-title">What I <span className="hot">work with.</span></h2>
            <p className="sec-desc">From the front end to a model running in production. I like owning the whole thing.</p>
          </div>
          <p className="mono tag-hint" id="tagHint" aria-live="polite">Hover or tap a tool to see which projects used it.</p>
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
            <div><p className="mono l">Education</p><p><b>B.Eng</b>, AI Engineering &amp; Data Science<br />Bangkok University · GPAX 3.29</p></div>
            <div><p className="mono l">Certifications</p><p><b>Data Scientist</b> Nanodegree<br /><b>AI Innovator</b> by AiAT</p></div>
            <div><p className="mono l">Partnership</p><p><b>Central Ayutthaya</b><br />Co-Project · 2024</p></div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="block" id="experience" data-screen-label="Experience">
          <div className="sec-head">
            <p className="mono sec-no">§ 04 / Path</p>
            <h2 className="sec-title">My <span className="hot">path so far.</span></h2>
            <p className="sec-desc">Roles, awards and study, roughly newest first.</p>
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
          <a className="mega" href="mailto:natthanarong.tian@gmail.com" aria-label="Email Nine">
            {"SAY HELLO".split("").map((ch, i) => (
              <span key={i} style={{ "--c": i } as React.CSSProperties} aria-hidden="true">{ch === " " ? " " : ch}</span>
            ))}
            <em aria-hidden="true">↗</em>
          </a>
          <p className="contact-lead">Got a project or a question? Send me an email or call.</p>
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
              <span className="mono clock" id="bkkClock">Bangkok time</span>
            </div>
            <div className="cell">
              <span className="mono l">Status</span>
              <span className="v">Currently a trainee intern</span>
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
        <p>© 2026 <b>Natthanarong Tiangjit</b>, ณัฏฐณรงค์ เที่ยงจิตต์</p>
        <p className="mono">Thai · Native &nbsp;/&nbsp; English · B2 &nbsp;/&nbsp; GPAX · 3.29</p>
      </footer>

      <Interactions />
      <div className="toast mono" id="toast" role="status" />
    </>
  );
}
