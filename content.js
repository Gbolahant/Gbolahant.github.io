/* =============================================================
   YOUR WEBSITE CONTENT
   -------------------------------------------------------------
   This is the ONLY file you need to edit. You don't need to know
   how to code — just change the words inside the "quotes".

   THE RULES (keep these and nothing breaks):
     1. Only change text INSIDE the "double quotes".
     2. Keep every quote, colon (:) and comma (,) where it is.
     3. Each line ends with a comma. Leave it there.
     4. To make a word BOLD, wrap it in *asterisks*  ->  *like this*
     5. Do NOT type the " character inside your text. If you need
        a quotation mark, use the curly ones “ ” or an apostrophe '.

   AFTER EDITING:
     Save / Commit. Your live site updates in about a minute.
     If something looks wrong you probably deleted a quote or
     comma — open this file's "History" on GitHub and restore an
     earlier version. Nothing is ever lost.
   ============================================================= */

window.SITE = {

  /* ---------- TOP OF THE PAGE ---------- */

  name_line1: "Gbolahan",
  name_line2: "Towobola",
  eyebrow: "Credit & Business Intelligence",
  thesis: "I build the analytics behind *lending decisions* — cohort performance, credit-policy testing, and the *Power BI* reporting that puts risk and growth in the same view.",
  subtext: "Five-plus years across Nigerian consumer lending and fintech, turning raw loan data into decisions on approval, limits and collections.",
  stat1: "5+ yrs credit & BI",
  stat2: "SQL · Power BI · Python",
  stat3: "Lagos, NG",


  /* ---------- CONTACT & LINKS ---------- */

  email:    "Gbolahant@gmail.com",
  linkedin: "https://www.linkedin.com/in/gbolahantowobola1",
  github:   "https://github.com/Gbolahant",
  twitter:  "https://twitter.com/gbolahant1",
  credly:   "https://www.credly.com/users/gbolahan-towobola",


  /* ---------- ABOUT ---------- */

  about: {
    eyebrow: "The short version",
    lead: "Most of my work lives at the seam between *credit risk* and *data analytics*.",
    body: "I write the SQL that shapes loan-performance data, model how cohorts repay across their life, test credit-policy changes before they ship, and build the Power BI reporting leadership actually uses to make calls. I care about analytics that ends in a decision — not a slide that gets admired and forgotten.",
    // The little list on the right. label + value pairs.
    aside: [
      { label: "Currently",  value: "Credit & BI Portfolio Manager" },
      { label: "Focus",      value: "Loan performance, credit policy & experimentation, Data Analytics" },
      { label: "Background",  value: "Consumer lending & fintech, Nigeria" },
      { label: "Also",        value: "Teaching data skills · Esport · Power Platform" },
      { label: "Learning",    value: "Data Science" },
    ],
  },


  /* ---------- "WHAT I DO" SECTION ---------- */

  work_eyebrow: "What I do",
  work_heading: "Four things I get called in for.",
  work_intro: "The through-line: I don’t hand off between “analyst” and “engineer.” I build the pipeline, the model and the report — so the answer arrives whole.",

  capabilities: [
    {
      title: "Loan portfolio & cohort analytics",
      body:  "Vintage curves that track collection rate, first-payment default, approval rate and average ticket size across new and renewal cohorts — and across the loan sequence, so you can see exactly where a book earns or leaks.",
    },
    {
      title: "Credit policy & A/B testing",
      body:  "Designing and reading experiments on limit, score-band and affordability rules — with sample-ratio checks, covariate balance and significance testing, so a policy change is proven before it goes live, not after.",
    },
    {
      title: "Business intelligence & MIS",
      body:  "Power BI from the semantic model up — star-schema data models, well-behaved DAX, and reports leadership and risk committees actually run on. Built for a single source of truth and self-service.",
    },
    {
      title: "Data pipelines & SQL",
      body:  "Production SQL across a warehouse (Redshift-style): restructured, documented pipelines that feed both the reporting layer and the experimentation layer from one clean, trusted source.",
    },
  ],


  /* ---------- BUSINESS INTELLIGENCE SECTION ---------- */

  bi: {
    eyebrow: "Business intelligence",
    heading: "Owned end to end — source to decision.",
    lead: "Most analysts own one slice of the reporting stack. I build all of it: the *SQL* that shapes the data, the *semantic model and DAX* behind it, and the *Power BI* reports on top — so every number on the executive dashboard traces cleanly back to source, and there’s one version of the truth.",
    // The row of steps. The LAST one is highlighted automatically.
    steps: [
      { kicker: "Ingest", title: "Source systems",       sub: "loans · payments · scores" },
      { kicker: "Model",  title: "SQL & warehouse",      sub: "cleaned · tested · documented" },
      { kicker: "Shape",  title: "Semantic model + DAX", sub: "star schema · measures" },
      { kicker: "Report", title: "Power BI",             sub: "MIS · dashboards" },
      { kicker: "Act",    title: "Decision",             sub: "approval · limits · collections" },
    ],
  },


  /* ---------- PROJECTS ----------
     ONE list powers both the rotating panel AND the project cards.
     Each project also becomes its own page on your site.

     For each project:
       slug   : the page’s web address, lowercase-with-dashes.
                The page opens at  project.html?p=THE-SLUG
       title  : project name
       tag    : short label ("Power BI", "Python", "Excel"...)
       img    : thumbnail. Leave "" for a plain tile, or put a file
                in an "images" folder and write "images/name.png"
       blurb  : one-line description shown on the card
       summary: one line shown at the top of the project’s own page
       body   : the page’s paragraphs — one "sentence" per line inside
                the [ ] brackets, separated by commas
       gallery: screenshots on the page, e.g. "images/cv-1.png"
       links  : buttons on the page (label + url)

     Add a project: copy a whole { ... } block. Remove one: delete it. */

  projects: [
    {
      slug: "cv-dashboard",
      title: "CV Dashboard",
      tag: "Power BI",
      img: "",
      blurb: "An interactive résumé rebuilt as a Power BI report — experience, skills and impact as a filterable model instead of a static page.",
      summary: "A résumé you can filter — built in Power BI.",
      body: [
        "Instead of a flat PDF, this rebuilds a career history as a Power BI model you can slice by role, skill and year.",
        "Replace this text with the story: what you wanted to show, how you modelled it, and what makes it worth a click.",
      ],
      gallery: [],
      links: [
        { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/cv-dashboard" },
      ],
    },
    {
      slug: "sales-analysis",
      title: "Sales Analysis",
      tag: "Python",
      img: "",
      blurb: "End-to-end analysis in pandas — cleaning, aggregation and trend breakdowns turning a raw transaction file into a readable revenue story.",
      summary: "From a raw transaction file to a revenue story, in pandas.",
      body: [
        "A full pass over messy sales data in Python: cleaning, grouping, and pulling out the trends that actually matter.",
        "Replace this with the dataset, the questions you asked, and the findings.",
      ],
      gallery: [],
      links: [
        { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/sales-analysis" },
      ],
    },
    {
      slug: "covid-19-dashboard",
      title: "COVID-19 Dashboard",
      tag: "Excel",
      img: "",
      blurb: "A self-updating Excel dashboard with dynamic charts and KPIs — proof that a spreadsheet can still be a proper reporting tool when it’s built well.",
      summary: "A spreadsheet that behaves like a real reporting tool.",
      body: [
        "Dynamic charts, KPI cards and a layout that refreshes itself — Excel pushed to do the job of a BI tool.",
        "Replace this with how you structured the workbook and what it tracked.",
      ],
      gallery: [],
      links: [
        { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/covid-19-dashboard" },
      ],
    },
    {
      slug: "world-cup-viz",
      title: "World Cup Viz",
      tag: "Power BI",
      img: "",
      blurb: "A Power BI exploration of World Cup history — goals, teams and tournaments turned into an interactive story.",
      summary: "Decades of World Cup history, made interactive.",
      body: [
        "Goals, teams and tournaments across World Cup history, explored through Power BI visuals.",
        "Replace this with what you found interesting in the data.",
      ],
      gallery: [],
      links: [
        { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/world-cup-viz" },
      ],
    },
  ],

  projects_eyebrow: "Selected projects",
  projects_heading: "A few builds.",
  projects_intro: "Work spanning Power BI, Python and Excel. The credit-portfolio work above is under NDA — happy to walk through it on a call.",


  /* ---------- CERTIFICATIONS ---------- */

  certs: [
    {
      issuer: "Microsoft Certified",
      title:  "Power BI Data Analyst Associate",
      note:   "PL-300 — modelling, DAX, and report design for decision-ready analytics.",
    },
    {
      issuer: "Microsoft Certified",
      title:  "Azure Data Fundamentals",
      note:   "DP-900 — core data concepts across relational and analytical workloads.",
    },
    {
      issuer: "Microsoft Certified",
      title:  "Power Platform Fundamentals",
      note:   "PL-900 — Power Apps, Power Automate and Power BI as one toolset.",
    },
  ],


  /* ---------- TOOLKIT ----------
     Each group has a title and a list of skills.
     Wrap a skill in *asterisks* to highlight it (green outline).   */

  toolkit: {
    eyebrow: "Toolkit",
    heading: "What I reach for.",
    groups: [
      { title: "Data & warehouse",       skills: ["*SQL*", "Redshift", "Data modelling", "Pipelines", "QA / testing"] },
      { title: "BI & reporting",         skills: ["*Power BI*", "*DAX*", "Semantic modelling", "Star schema", "Power Query", "Report design", "Excel", "VBA"] },
      { title: "Programming & analysis", skills: ["*Python*", "pandas", "Web scraping", "Statistical testing"] },
      { title: "Credit & risk methods",  skills: ["*Cohort / vintage analysis*", "A/B testing", "Score-band policy", "Affordability (DTI)", "Collections analytics"] },
    ],
  },

};
