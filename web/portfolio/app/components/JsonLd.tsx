export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://nine.codes/#person",
    name: "Natthanarong Tiangjit",
    alternateName: ["Nine", "Natthanarong Tiangjit", "Nine Natthanarong"],
    givenName: "Natthanarong",
    familyName: "Tiangjit",
    url: "https://nine.codes",
    image: {
      "@type": "ImageObject",
      url: "https://nine.codes/images/photo-profile.jpg",
      caption: "Natthanarong Tiangjit (Nine) - AI Software Developer",
    },
    jobTitle: "AI Software Developer",
    description: "AI Software Developer specializing in LLM Optimizations, Full-Stack Web Development, and Robotics. Award-winning innovator from Bangkok University with expertise in Python, AI/ML, and scalable intelligent systems. Winner of Outstanding Innovation Award at Super AI Engineer Season 5.",
    worksFor: {
      "@type": "Organization",
      "@id": "https://nine.codes/#organization-burobotstudio",
      name: "BU ROBOTSTUDIO",
      sameAs: "https://www.facebook.com/burobotstudio",
      description: "Robotics laboratory at Bangkok University focusing on AI and robotics research",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      "@id": "https://nine.codes/#organization-bu",
      name: "Bangkok University",
      sameAs: "https://www.bu.ac.th",
      department: {
        "@type": "Organization",
        name: "School of Engineering",
      },
    },
    knowsAbout: [
      { "@type": "Thing", name: "Artificial Intelligence", description: "AI systems development and integration" },
      { "@type": "Thing", name: "Machine Learning", description: "ML model training and deployment" },
      { "@type": "Thing", name: "LLM Optimization", description: "Large Language Model fine-tuning and RAG systems" },
      { "@type": "Thing", name: "Full-Stack Web Development", description: "Frontend and backend web application development" },
      { "@type": "Thing", name: "Robotics", description: "Robot design, programming, and automation" },
      { "@type": "Thing", name: "Python Programming", description: "Primary programming language for AI/ML development" },
      { "@type": "Thing", name: "Data Science", description: "Data analysis, visualization, and statistical modeling" },
      { "@type": "Thing", name: "RAG Chatbot", description: "Retrieval-Augmented Generation chatbot systems" },
      { "@type": "Thing", name: "PLC Programming", description: "Programmable Logic Controller for industrial automation" },
      { "@type": "Thing", name: "Computer Vision", description: "Image recognition and object detection systems" },
      { "@type": "Thing", name: "Django", description: "Python web framework for backend development" },
      { "@type": "Thing", name: "Next.js", description: "React framework for full-stack web development" },
      { "@type": "Thing", name: "Docker", description: "Containerization for application deployment" },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Software Developer",
      occupationalCategory: "15-1252",
      skills: ["Python", "Machine Learning", "LLM", "RAG", "Full-Stack Development", "Robotics", "PLC", "Computer Vision", "Django", "Next.js", "Docker"],
      qualifications: ["Bangkok University Student", "Super AI Engineer Season 5 Winner", "BU ROBOTSTUDIO Head of Operations"],
    },
    sameAs: [
      "https://github.com/nine-codes",
      "https://linkedin.com/in/natthanarong",
    ],
    email: "natthanarong.tian@gmail.com",
    telephone: "+66917853400",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressRegion: "Bangkok",
      addressCountry: "TH",
      addressCountryName: "Thailand",
    },
    award: [
      {
        "@type": "Award",
        name: "Outstanding Innovation Award",
        description: "Winner at Super AI Engineer Season 5, Thailand's 5th National AI Exhibition",
        dateReceived: "2025-10",
        issuer: { "@type": "Organization", name: "AiAT - Super AI Engineer" },
      },
      {
        "@type": "Award",
        name: "Tech Talent 100% Scholarship",
        description: "Full scholarship for exceptional academic performance",
        dateReceived: "2024",
        issuer: { "@type": "Organization", name: "Bangkok University" },
      },
      {
        "@type": "Award",
        name: "Finalist PLC Competition Thailand 2024",
        description: "National finalist in Mitsubishi PLC competition",
        dateReceived: "2024",
        issuer: { "@type": "Organization", name: "Mitsubishi Electric" },
      },
      {
        "@type": "Award",
        name: "Finalist Gaskathon PTT 2024",
        description: "Finalist in gas innovation hackathon",
        dateReceived: "2024",
        issuer: { "@type": "Organization", name: "PTT" },
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://nine.codes",
    },
    disambiguatingDescription: "Thai AI software developer and robotics engineer, winner of Super AI Engineer Season 5 Outstanding Innovation Award, Head of Operations at BU ROBOTSTUDIO",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nine - AI Software Developer Portfolio",
    url: "https://nine.codes",
    author: {
      "@type": "Person",
      name: "Natthanarong Tiangjit",
    },
    description: "AI Software Developer specializing in LLM Optimizations, Full-Stack Web Development, and Robotics.",
    inLanguage: ["en", "th"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nine.codes/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nine.codes",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://nine.codes/#projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: "https://nine.codes/#experience",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://nine.codes/#contact",
      },
    ],
  };

  // FAQ Schema for AI Search Optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Natthanarong Tiangjit (Nine)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natthanarong Tiangjit, also known as Nine, is an AI Software Developer from Bangkok, Thailand. He is a third-year AI Engineering student at Bangkok University on a full Tech Talent scholarship. He specializes in LLM Optimizations, Full-Stack Web Development, and Robotics. He won the Outstanding Innovation Award at Super AI Engineer Season 5 and serves as Head of Operations at BU ROBOTSTUDIO.",
        },
      },
      {
        "@type": "Question",
        name: "What are Natthanarong Tiangjit's main skills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natthanarong Tiangjit's main skills include Python programming, Machine Learning, LLM Optimization, RAG (Retrieval-Augmented Generation) Chatbots, Full-Stack Web Development with Next.js and Django, Robotics, PLC Programming, Computer Vision, and Docker containerization. He has hands-on experience with industrial automation and AI systems deployment.",
        },
      },
      {
        "@type": "Question",
        name: "What awards has Natthanarong Tiangjit won?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natthanarong Tiangjit has won several awards including: Outstanding Innovation Award at Super AI Engineer Season 5 (2025), Tech Talent 100% Full Scholarship from Bangkok University (2024), Finalist at PLC Competition Thailand 2024, Finalist at Gaskathon PTT 2024, and 2x Finalist at LearnLab Innovation competition.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Natthanarong Tiangjit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natthanarong Tiangjit is the Head of Operations at BU ROBOTSTUDIO, a robotics laboratory at Bangkok University. He also worked as CAIO (Chief AI Officer) for RaoChatHub startup after winning Super AI Engineer Season 5. He is currently a student at Bangkok University majoring in AI Engineering and Data Science.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Natthanarong Tiangjit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Natthanarong Tiangjit via email at natthanarong.tian@gmail.com, phone at +66 91 785 3400, or through his LinkedIn at linkedin.com/in/natthanarong and GitHub at github.com/nine-codes. He is based in Bangkok, Thailand and is open to full-time roles, internships, and freelance work.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Natthanarong Tiangjit worked on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natthanarong Tiangjit has worked on 15+ projects including: RAG Chatbot, AI-powered smart parking system with PLC, HyperGas AI safety training system, AI/AR Marketplace for handicrafts, Gender Classification NLP system, functions.codes free online tools, and various robotics projects at BU ROBOTSTUDIO. He has experience in industrial automation, enterprise solutions, and AI deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Is Natthanarong Tiangjit available for hire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Natthanarong Tiangjit is currently open to opportunities including full-time roles, internships, and freelance work in AI development, web development, and robotics. He is available for remote work and is based in Bangkok, Thailand.",
        },
      },
    ],
  };

  // Project Portfolio Schema for AI Search
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Natthanarong Tiangjit Portfolio Projects",
    description: "Collection of AI, web development, and robotics projects by Natthanarong Tiangjit",
    numberOfItems: 15,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Super AI Engineer SS5 - RAG Chatbot",
          description: "Built RAG Chatbot, won Outstanding Innovation Award at Thailand's 5th National AI Exhibition",
          applicationCategory: "AI Application",
          operatingSystem: "Web",
          author: { "@id": "https://nine.codes/#person" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "HyperGas AI Safety Training",
          description: "AI safety training system for gas stations to reduce human error in protocols",
          applicationCategory: "AI Application",
          operatingSystem: "Web",
          author: { "@id": "https://nine.codes/#person" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "AI Smart Parking System",
          description: "AI-powered smart parking system with PLC and computer vision for Mitsubishi competition",
          applicationCategory: "Industrial Application",
          operatingSystem: "Embedded System",
          author: { "@id": "https://nine.codes/#person" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "functions.codes",
          description: "Free online tools without ads, including PDF converter with clean interface",
          applicationCategory: "Web Application",
          operatingSystem: "Web",
          url: "https://functions.codes",
          author: { "@id": "https://nine.codes/#person" },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
