import Interactions from "./components/Interactions";

/* Allow CSS custom properties in inline style objects */
type CSSVars = React.CSSProperties & Record<string, string | number>;

export default function Home() {
  return (
    <>
      <div className="spotlight" id="spotlight" />

      {/* ============ NAV ============ */}
      <nav id="nav">
        <div className="wrap">
          <a className="logo" href="#top">
            <b>nine</b>
            <span className="dot">.</span>codes
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#expertise">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Say hello →
          </a>
        </div>
      </nav>

      <main id="top">
        {/* ============ HERO ============ */}
        <header className="hero" data-screen-label="Hero">
          <div className="hero-orb" />
          {/* parallax + 3D depth tokens */}
          <div className="depth-stage" id="depthStage">
            <span
              className="shape ring c px"
              style={{ width: "340px", height: "340px", right: "5%", top: "13%", "--o": ".55", "--pz": "-160px" } as CSSVars}
              data-px-y=".06"
              data-px-mx="70"
              data-px-my="50"
            />
            <span
              className="shape ring v px"
              style={{ width: "120px", height: "120px", left: "3%", top: "60%", "--o": ".5", "--pz": "120px" } as CSSVars}
              data-px-y=".13"
              data-px-mx="-55"
              data-px-my="42"
            />
            <span
              className="shape dotgrid px"
              style={{ right: "7%", bottom: "11%", "--o": ".45", "--pz": "-90px" } as CSSVars}
              data-px-y=".1"
              data-px-mx="44"
              data-px-my="-32"
            />
            <span
              className="shape plus px"
              style={{ left: "39%", top: "29%", "--o": ".85", "--pz": "180px" } as CSSVars}
              data-px-y=".26"
              data-px-mx="-72"
              data-px-my="52"
            />
            <span
              className="float neon-c px"
              style={{ left: "7%", top: "23%", fontSize: "32px", "--o": ".7", "--pz": "200px" } as CSSVars}
              data-px-y=".18"
              data-px-mx="-92"
              data-px-my="62"
            >
              &lt;/&gt;
            </span>
            <span
              className="float neon-v px"
              style={{ right: "13%", top: "63%", fontSize: "36px", "--o": ".7", "--pz": "150px" } as CSSVars}
              data-px-y=".15"
              data-px-mx="82"
              data-px-my="-52"
            >
              {"{ }"}
            </span>
            <span
              className="float px"
              style={{ right: "29%", top: "17%", fontSize: "14px", letterSpacing: ".32em", "--o": ".4", "--pz": "-60px" } as CSSVars}
              data-px-y=".22"
              data-px-mx="-60"
              data-px-my="40"
            >
              01001010
            </span>
            <span
              className="float px"
              style={{ left: "45%", top: "80%", fontSize: "14px", "--o": ".5", "--pz": "90px" } as CSSVars}
              data-px-y=".2"
              data-px-mx="52"
              data-px-my="-30"
            >
              def&nbsp;build():
            </span>
          </div>
          <div className="wrap">
            <div className="status reveal-up">
              <span className="pulse" /> Currently — Trainee Internship
            </div>
            <p className="hero-eyebrow reveal-up" data-delay="1">
              // <b>Natthanarong &quot;Nine&quot; Tiangjit</b> — Bangkok, Thailand
            </p>
            <h1 className="hero-title tilt3d px" id="heroTitle" data-px-mx="-20" data-px-my="-14">
              <span className="line">
                <span className="reveal">BUILT WITH</span>
              </span>
              <span className="line">
                <span className="reveal">
                  <span className="title-neon">CURIOSITY</span>
                </span>
              </span>
            </h1>
            <p className="hero-sub reveal-up" data-delay="2">
              I&apos;m Nine — an AI developer in Bangkok. I take ambitious ideas and turn them into{" "}
              <b>intelligent systems that ship</b>, scale gracefully, and feel effortless to use.
            </p>
            <div className="hero-actions reveal-up" data-delay="3">
              <a href="#work" className="btn btn-primary">
                See the work <span className="arrow">↗</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Say hello
              </a>
            </div>
            <div className="hero-badges reveal-up" data-delay="4">
              <div className="hbadge">
                <i>★</i> Outstanding Innovation Award — Super AI SS5
              </div>
              <div className="hbadge">
                <i>⬡</i> Head of Operations — BU ROBOTSTUDIO
              </div>
              <div className="hbadge">
                <i>%</i> Tech Talent 100% Scholarship
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll</span>
            <span className="bar" />
          </div>
        </header>

        {/* ============ MARQUEE ============ */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track" id="marquee">
            <span className="marquee-item">
              <span>Python</span><em>/</em><span>Machine Learning</span><em>/</em><span>LLM &amp; RAG</span><em>/</em><span>Object Detection</span><em>/</em><span>Next.js</span><em>/</em><span>Docker</span><em>/</em><span>PLC &amp; Robotics</span><em>/</em><span>Point Cloud</span><em>/</em>
            </span>
            <span className="marquee-item">
              <span>Python</span><em>/</em><span>Machine Learning</span><em>/</em><span>LLM &amp; RAG</span><em>/</em><span>Object Detection</span><em>/</em><span>Next.js</span><em>/</em><span>Docker</span><em>/</em><span>PLC &amp; Robotics</span><em>/</em><span>Point Cloud</span><em>/</em>
            </span>
          </div>
        </div>

        {/* ============ WORK ============ */}
        <section className="block" id="work" data-screen-label="Work">
          <span className="ghostword px" style={{ right: "-3%", top: "4%", fontSize: "clamp(7rem,17vw,16rem)" }} data-px-y=".12" data-px-mx="38">
            WORK
          </span>
          <span className="float neon-v px" style={{ left: "5%", top: "40%", fontSize: "24px", "--o": ".5" } as CSSVars} data-px-y=".16" data-px-mx="-50" data-px-my="34">
            [ ]
          </span>
          <div className="wrap">
            <div className="section-head reveal-up">
              <span className="kicker">The Work</span>
              <h2 className="section-title">
                Made to<br />
                <span className="g">matter.</span>
              </h2>
              <p className="section-desc">
                A handful of things I&apos;m proud of. Every one shipped, used by real people, and built to make something a little better.
              </p>
            </div>

            <div className="filters reveal-up" id="filters">
              <button className="filter active" data-f="all">All</button>
              <button className="filter" data-f="ai">AI</button>
              <button className="filter" data-f="robotics">Robotics</button>
              <button className="filter" data-f="web">Web</button>
              <button className="filter" data-f="award">Awards</button>
            </div>

            <div className="work-grid" id="grid">
              <article className="card feature span-7 reveal-up" data-cat="award ai">
                <div className="card-media">
                  <img src="/images/projects/team_photo.jpeg" alt="Super AI Engineer SS5 — Outstanding Innovation Award won by Natthanarong (Nine)" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Award · National Winner</span>
                  <h3>Super AI Engineer SS5</h3>
                  <div className="role">Outstanding Innovation Award · CAIO @ RaoChatHub</div>
                  <p className="blurb">Won Thailand&apos;s 5th National AI Exhibition. Built an enterprise RAG chatbot and led chatbot solutions as Chief AI Officer.</p>
                  <div className="card-pill-row"><span className="card-pill">RAG</span><span className="card-pill">LLM</span><span className="card-pill">Full-Stack</span></div>
                </div>
              </article>

              <article className="card feature span-5 reveal-up" data-cat="robotics" data-delay="1">
                <div className="card-media">
                  <img src="/images/projects/453008415_17959542005792478_5114396889725007570_n.jpg" alt="BU ROBOTSTUDIO robotics lab led by Natthanarong Tiangjit" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Leadership</span>
                  <h3>BU ROBOTSTUDIO</h3>
                  <div className="role">Head of Operations</div>
                  <p className="blurb">Led a 50+ member robotics lab, mentored peers, ran Open House events.</p>
                  <div className="card-stats">
                    <div className="s"><strong>3</strong><span>Years</span></div>
                    <div className="s"><strong>50+</strong><span>Members</span></div>
                    <div className="s"><strong>3</strong><span>Open Houses</span></div>
                  </div>
                </div>
              </article>

              <article className="card span-4 reveal-up" data-cat="robotics">
                <div className="card-media">
                  <img src="/images/projects/IMG_2091.JPG" alt="ABB Automation robotics training — top 8 finalist" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Industrial · Top 8</span>
                  <h3>ABB Automation</h3>
                  <p className="blurb">Selected from 40 teams to final 8. Trained in ABB robotics, PLC &amp; computer vision.</p>
                  <div className="card-pill-row"><span className="card-pill">ABB</span><span className="card-pill">CV</span></div>
                </div>
              </article>

              <article className="card span-4 reveal-up" data-cat="robotics ai" data-delay="1">
                <div className="card-media">
                  <img src="/images/projects/plc2024-team.PNG" alt="AI Smart Parking — Mitsubishi PLC Competition 2024 finalist" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Competition · Finalist</span>
                  <h3>AI Smart Parking</h3>
                  <p className="blurb">Mitsubishi PLC 2024 finalist — AI-powered smart parking with PLC + computer vision.</p>
                  <div className="card-pill-row"><span className="card-pill">PLC</span><span className="card-pill">Ladder Logic</span></div>
                </div>
              </article>

              <article className="card span-4 reveal-up" data-cat="ai" data-delay="2">
                <div className="card-media">
                  <img src="/images/projects/469105467_17976154043792478_347761597580673379_n.jpg" alt="HyperGas AI safety-training system" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">AI Project · Live</span>
                  <h3>HyperGas AI</h3>
                  <p className="blurb">AI safety-training system for gas stations, cutting human error in safety protocols.</p>
                  <div className="card-pill-row"><span className="card-pill">AI Training</span><span className="card-pill">Safety</span></div>
                </div>
              </article>

              <article className="card span-6 reveal-up" data-cat="web ai">
                <div className="card-media">
                  <img src="/images/projects/functions-codes-web.png" alt="functions.codes — free ad-free online tools by Nine" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Web · Personal</span>
                  <h3>functions.codes</h3>
                  <div className="role">Ad-free tools for humans</div>
                  <p className="blurb">A platform of free online tools — including a clean PDF converter — with zero ads.</p>
                  <div className="card-pill-row"><span className="card-pill">Next.js</span><span className="card-pill">Clean UI</span></div>
                </div>
              </article>

              <article className="card span-6 reveal-up" data-cat="ai web" data-delay="1">
                <div className="card-media">
                  <img src="/images/projects/webpage.png" alt="Gender Classification AI — NLP web app" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">AI · Self-Initiated</span>
                  <h3>Gender Classification AI</h3>
                  <div className="role">End-to-end NLP deployment</div>
                  <p className="blurb">Classifies gender from text using NLP + web scraping, deployed end-to-end on Django.</p>
                  <div className="card-pill-row"><span className="card-pill">NLP</span><span className="card-pill">Django</span></div>
                </div>
              </article>

              {/* secondary */}
              <article className="card span-4 reveal-up" data-cat="award robotics">
                <div className="card-media">
                  <img src="/images/projects/1761292091147.jpeg" alt="LearnLab — AI/AR handicraft marketplace, two-time finalist" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Innovation · 2× Finalist</span>
                  <h3>LearnLab</h3>
                  <p className="blurb">AI/AR marketplace for handicrafts + a tourism PhotoBooth. Two-time finalist.</p>
                </div>
              </article>

              <article className="card span-4 reveal-up" data-cat="ai web" data-delay="1">
                <div className="card-media">
                  <img src="/images/projects/1761292376519.jpeg" alt="Learning Express — Singapore Polytechnic collaboration" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">International</span>
                  <h3>Learning Express</h3>
                  <p className="blurb">3-year Singapore Polytechnic collaboration using Design Thinking for community challenges.</p>
                </div>
              </article>

              <article className="card span-4 reveal-up" data-cat="ai robotics" data-delay="2">
                <div className="card-media">
                  <img src="/images/projects/1763286567350.jpeg" alt="TESA Top Gun Rally — defense-innovation sprint" loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-tag">Competition · Defense</span>
                  <h3>TESA Top Gun Rally</h3>
                  <p className="blurb">7-day defense-innovation sprint using object detection, web dev &amp; MATLAB.</p>
                </div>
              </article>

              <article className="card nomedia span-6 reveal-up" data-cat="ai robotics">
                <div className="card-field"><span className="dotmesh" /><span className="glyph">2.5D</span></div>
                <div className="card-body">
                  <span className="card-tag">Research · Computer Vision</span>
                  <h3>Pothole Detection · 2.5D Camera</h3>
                  <div className="role">Depth-aware object detection</div>
                  <p className="blurb">Used a depth camera to capture point-cloud data and built a 2.5D imaging pipeline with a Transformer model to detect road damage.</p>
                  <div className="card-pill-row"><span className="card-pill">Point Cloud</span><span className="card-pill">Transformer</span><span className="card-pill">Depth Camera</span></div>
                </div>
              </article>

              <article className="card nomedia span-6 reveal-up" data-cat="web" data-delay="1">
                <div className="card-field"><span className="dotmesh" /><span className="glyph">10+</span></div>
                <div className="card-body">
                  <span className="card-tag">Full-Stack · Ongoing</span>
                  <h3>Website Developer</h3>
                  <div className="role">10+ sites, front to back</div>
                  <p className="blurb">Built and shipped 10+ websites across modern frameworks — front-end to back-end, with CI/CD, REST APIs and authentication.</p>
                  <div className="card-pill-row"><span className="card-pill">React</span><span className="card-pill">Next.js</span><span className="card-pill">Express</span><span className="card-pill">CI/CD</span></div>
                </div>
              </article>
            </div>

            {/* counters */}
            <div className="stats-strip reveal-up">
              <div className="stat"><div className="num" data-count="17" data-suffix="+">0</div><div className="lbl">Projects Shipped</div></div>
              <div className="stat"><div className="num" data-count="8" data-suffix="">0</div><div className="lbl">Awards &amp; Finals</div></div>
              <div className="stat"><div className="num" data-count="10" data-suffix="+">0</div><div className="lbl">Websites Built</div></div>
              <div className="stat"><div className="num" data-count="100" data-suffix="%">0</div><div className="lbl">Tech Talent Scholarship</div></div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="block" id="about" data-screen-label="About">
          <span className="ghostword px" style={{ left: "-3%", top: "8%", fontSize: "clamp(7rem,17vw,16rem)" }} data-px-y=".1" data-px-mx="-40">
            CODE
          </span>
          <span className="shape ring c px" style={{ width: "160px", height: "160px", right: "4%", top: "18%", "--o": ".4" } as CSSVars} data-px-y=".14" data-px-mx="46" data-px-my="-30" />
          <div className="wrap">
            <div className="section-head reveal-up">
              <span className="kicker">A little about me</span>
              <h2 className="section-title">
                More than <span className="g">just code.</span>
              </h2>
            </div>
            <div className="about-grid">
              <div className="about-photo reveal-up">
                <div className="plate" id="aboutPlate">
                  <img src="/images/photo-profile.jpg" alt="Natthanarong Tiangjit (Nine) — AI developer in Bangkok, Thailand" loading="lazy" />
                  <span className="frame-tag">Bangkok, TH · est. 2024</span>
                </div>
              </div>
              <div className="about-text reveal-up" data-delay="1">
                <p className="about-lead">
                  I&apos;m a third-year AI Engineering student, here on a <em>full scholarship</em>, living where curiosity meets craft.
                </p>
                <div className="about-body">
                  <p>I&apos;ve led robotics teams and won national AI competitions, moving between hardware and software with equal joy. Every project leaves me a little wiser and a lot more eager for the next one.</p>
                  <p>What I care about is simple: build things that genuinely matter — and make them work beautifully <em>and</em> feel right.</p>
                </div>
                <div className="traits">
                  <div className="trait"><div className="ic">01 / build</div><h4>I sweat the details</h4><p>Every project gets my full attention, from first prototype to final deploy.</p></div>
                  <div className="trait"><div className="ic">02 / design</div><h4>I think in people</h4><p>Technical depth means nothing if it doesn&apos;t feel human to use.</p></div>
                  <div className="trait"><div className="ic">03 / learn</div><h4>I stay curious</h4><p>Robotics, hackathons and competitions keep me learning, always.</p></div>
                  <div className="trait"><div className="ic">04 / lead</div><h4>I bring people along</h4><p>Led teams, mentored peers, and built community at BU.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EXPERTISE ============ */}
        <section className="block" id="expertise" data-screen-label="Expertise">
          <span className="ghostword px" style={{ right: "-3%", top: "6%", fontSize: "clamp(6rem,15vw,14rem)" }} data-px-y=".11" data-px-mx="36">
            STACK
          </span>
          <span className="float neon-c px" style={{ left: "5%", top: "26%", fontSize: "24px", "--o": ".5" } as CSSVars} data-px-y=".17" data-px-mx="-48" data-px-my="32">
            &lt;/&gt;
          </span>
          <div className="wrap">
            <div className="section-head reveal-up">
              <span className="kicker">What I work with</span>
              <h2 className="section-title">
                A toolkit built<br />
                <span className="g">end to end.</span>
              </h2>
              <p className="section-desc">
                From the first line of front-end to a model running in production — I like owning the whole journey.
              </p>
            </div>
            <div className="cap-grid">
              <div className="cap reveal-up">
                <div className="num">01 / engineering</div>
                <h4>Full-Stack Web</h4>
                <div className="cap-tags"><span>React</span><span>Next.js</span><span>Express</span><span>REST API</span><span>Auth</span><span>CI/CD</span></div>
              </div>
              <div className="cap reveal-up" data-delay="1">
                <div className="num">02 / intelligence</div>
                <h4>Machine Learning &amp; AI</h4>
                <div className="cap-tags"><span>Python</span><span>NLP</span><span>LLM &amp; RAG</span><span>Model Optimization</span><span>Data Science</span></div>
              </div>
              <div className="cap reveal-up" data-delay="2">
                <div className="num">03 / vision</div>
                <h4>Vision &amp; Robotics</h4>
                <div className="cap-tags"><span>Object Detection</span><span>Image Processing</span><span>Point Cloud</span><span>Robotics Control</span><span>PLC</span></div>
              </div>
              <div className="cap reveal-up">
                <div className="num">04 / systems</div>
                <h4>Languages &amp; Core</h4>
                <div className="cap-tags"><span>Python</span><span>C</span><span>Ladder Logic</span><span>Serial Comms</span></div>
              </div>
              <div className="cap reveal-up" data-delay="1">
                <div className="num">05 / infra</div>
                <h4>Deploy &amp; Ops</h4>
                <div className="cap-tags"><span>Docker</span><span>GitHub</span><span>GitLab</span><span>Cloud Deploy</span></div>
              </div>
              <div className="cap reveal-up" data-delay="2">
                <div className="num">06 / craft</div>
                <h4>Design Thinking</h4>
                <div className="cap-tags"><span>User-Focused</span><span>Prototyping</span><span>Cross-Cultural</span><span>Teamwork</span></div>
              </div>
            </div>
            <div className="creds reveal-up">
              <div className="cred"><div className="l">Education</div><div className="v"><b>B.Eng</b> — AI Engineering &amp; Data Science<br />Bangkok University · GPAX 3.29</div></div>
              <div className="cred"><div className="l">Certifications</div><div className="v"><b>Data Scientist</b> Nanodegree<br /><b>AI Innovator</b> by AiAT</div></div>
              <div className="cred"><div className="l">Partnership</div><div className="v"><b>Central Ayutthaya</b><br />Co-Project · 2024</div></div>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="block" id="experience" data-screen-label="Experience">
          <span className="ghostword px" style={{ right: "-2%", bottom: "6%", fontSize: "clamp(6rem,15vw,14rem)" }} data-px-y=".12" data-px-mx="36">
            GROW
          </span>
          <span className="float neon-c px" style={{ right: "8%", top: "22%", fontSize: "22px", "--o": ".5" } as CSSVars} data-px-y=".18" data-px-mx="44" data-px-my="-28">
            → ∞
          </span>
          <div className="wrap">
            <div className="section-head reveal-up">
              <span className="kicker">The journey so far</span>
              <h2 className="section-title">
                Every step <span className="g">led here.</span>
              </h2>
              <p className="section-desc">
                From late-night competitions to global collaborations — one chapter at a time.
              </p>
            </div>
            <div className="timeline">
              <div className="tl-item reveal-up">
                <div className="tl-date">Mar 2024 — Present</div>
                <h3>Team Leader</h3>
                <div className="tl-org">BU ROBOTSTUDIO</div>
                <ul>
                  <li>Develop software architecture and AI integration for robotics and automation</li>
                  <li>Direct cross-functional teams, turning technical concepts into actionable strategies</li>
                  <li>Grew with the lab: Staff (2023) → Operations Lead (2024) → Head of Operations (2025)</li>
                </ul>
              </div>
              <div className="tl-item reveal-up">
                <div className="tl-date">October 2025</div>
                <h3>Outstanding Innovation Award</h3>
                <div className="tl-org">Super AI Engineer Season 5 · AiAT</div>
                <ul>
                  <li>Honored at Thailand&apos;s 5th National AI Exhibition</li>
                  <li>Delivered customized software focused on scalability, security and usability</li>
                  <li>Built an enterprise RAG chatbot for real business use</li>
                </ul>
              </div>
              <div className="tl-item reveal-up">
                <div className="tl-date">Mar 2024 — 2026</div>
                <h3>Collaborator</h3>
                <div className="tl-org">Learning Express · Singapore Polytechnic</div>
                <ul>
                  <li>Applied engineering and Design Thinking to real community problems</li>
                  <li>Merged technical analysis with user-focused design</li>
                  <li>Sharpened English and intercultural skills through teamwork</li>
                </ul>
              </div>
              <div className="tl-item reveal-up">
                <div className="tl-date">2023 — Present</div>
                <h3>AI Engineering Student</h3>
                <div className="tl-org">Bangkok University · GPAX 3.29</div>
                <ul>
                  <li>Tech Talent 100% Full Scholarship recipient</li>
                  <li>B.Eng in AI Engineering &amp; Data Science — third year</li>
                  <li>Certified Data Scientist (Nanodegree) and AI Innovator by AiAT</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="block contact" id="contact" data-screen-label="Contact">
          <div className="wrap">
            <div className="contact-inner reveal-up">
              <span className="kicker" style={{ justifyContent: "center" }}>Say hello</span>
              <h2>
                Let&apos;s make<br />
                <span className="g">something good.</span>
              </h2>
              <p className="lead">
                Got an idea worth building? I&apos;d love to hear it. The best projects always start with a simple hello.
              </p>
              <div className="contact-actions">
                <a href="mailto:natthanarong.tian@gmail.com" className="btn btn-primary">
                  Start a conversation <span className="arrow">↗</span>
                </a>
                <a href="tel:+66917853400" className="btn btn-ghost">
                  +66 91 785 3400
                </a>
              </div>
              <div className="contact-meta">
                <a className="cmeta" href="mailto:natthanarong.tian@gmail.com">
                  <div className="l">Email</div>
                  <div className="v">natthanarong.tian@gmail.com</div>
                </a>
                <div className="cmeta">
                  <div className="l">Location</div>
                  <div className="v">Bangkok, Thailand · Remote OK</div>
                </div>
                <div className="cmeta">
                  <div className="l">Status</div>
                  <div className="v">On a Trainee Internship period</div>
                </div>
              </div>
              <div className="socials">
                <a className="soc" href="https://github.com/nine-codes" target="_blank" rel="noopener">↳ GitHub</a>
                <a className="soc" href="https://linkedin.com/in/natthanarong" target="_blank" rel="noopener">↳ LinkedIn</a>
                <a className="soc" href="https://www.instagram.com/n_nine.e" target="_blank" rel="noopener">↳ Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="f-left">
            © 2026 <b>Natthanarong Tiangjit</b> — ณัฏฐณรงค์ เที่ยงจิตต์
          </div>
          <div className="langs">
            <span>Thai <b>Native</b></span>
            <span>English <b>B2</b></span>
            <span>GPAX <b>3.29</b></span>
          </div>
        </div>
      </footer>

      <Interactions />
    </>
  );
}
