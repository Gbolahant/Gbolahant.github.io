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
  subtext: "{years}+ years across Nigerian consumer lending and fintech, turning raw loan data into decisions on approval, limits and collections.",
  stat1: "{years}+ yrs credit & BI",

  // The year you started working. The site counts the years from here
  // automatically, so the number above never goes out of date.
  // Write {years} in any text and it becomes the current number.
  career_start: 2018,
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
    lead: "Most of my work lives at the seam between *credit risk*, data analytics and *data engineering*.",
    body: "I write the SQL that shapes loan-performance data, model how cohorts repay across their life, test credit-policy changes before they ship, and build the Power BI reporting leadership actually uses to make calls. I care about analytics that ends in a decision — not a slide that gets admired and forgotten.",
    aside: [
      { label: "Currently",  value: "Credit & BI Portfolio Manager" },
      { label: "Focus",      value: "Loan performance, credit policy & experimentation" },
      { label: "Background",  value: "Consumer lending & fintech, Nigeria" },
      { label: "Also",        value: "Teaching data skills · Esport" },
      { label: "Learning",    value: "Data Engineering" },
    ],
  },


  /* ---------- "WHAT I DO" SECTION ---------- */

  work_eyebrow: "What I do",
  work_heading: "Four things I get called in for.",
work_intro: "The through-line: I don’t hand off between “analyst” and “engineer.” I build the pipeline, the model and the report — so the answer arrives whole.",

  capabilities: [
    { title: "Loan portfolio & cohort analytics", body: "Vintage curves that track collection rate, first-payment default, approval rate and average ticket size across new and renewal cohorts — and across the loan sequence, so you can see exactly where a book earns or leaks." },
    { title: "Credit policy & A/B testing",       body: "Designing and reading experiments on limit, score-band and affordability rules — with sample-ratio checks, covariate balance and significance testing, so a policy change is proven before it goes live, not after." },
    { title: "Business intelligence & MIS",       body: "Power BI from the semantic model up — star-schema data models, well-behaved DAX, and reports leadership and risk committees actually run on. Built for a single source of truth and self-service." },
    { title: "Data pipelines & SQL",              body: "Production SQL across a warehouse (Redshift-style): restructured, documented pipelines that feed both the reporting layer and the experimentation layer from one clean, trusted source." },
  ],


  /* ---------- BUSINESS INTELLIGENCE SECTION ---------- */

  bi: {
    eyebrow: "Business intelligence",
    heading: "Owned end to end — source to decision.",
    lead: "Most analysts own one slice of the reporting stack. I build all of it: the *SQL* that shapes the data, the *semantic model and DAX* behind it, and the *Power BI* reports on top — so every number on the executive dashboard traces cleanly back to source, and there’s one version of the truth.",
    steps: [
      /*  { kicker: "Ingest", title: "Source systems",       sub: "loans · payments · scores" }, */
      { kicker: "Model",  title: "SQL & warehouse",      sub: "cleaned · tested · documented" },
      { kicker: "Shape",  title: "Semantic model + DAX", sub: "star schema · measures" },
      { kicker: "Report", title: "Power BI",             sub: "MIS · dashboards" },
      { kicker: "Act",    title: "Decision",             sub: "approval · limits · collections" },
    ],
  },


  /* ============================================================
     PROJECTS
     ------------------------------------------------------------
     ONE list powers the rotating panel, the project cards, AND
     each project’s own page (at  project.html?p=THE-SLUG ).

     Fields for each project:
       slug    : the page address, lowercase-with-dashes
       title   : project name
       tag      : short label ("Power BI", "Python", "Excel"...)
       img     : the thumbnail + the big picture at the top of the
                 page. "" for a plain tile, or "images/name.png",
                 or a full web link to an image.
       blurb   : one line shown on the card (home page)
       summary : one line shown under the title on the project page
       embed   : a Power BI "Publish to web" link. Paste the link
                 and the live report appears on the page. "" = none.
                 (In Power BI: File > Embed report > Publish to web,
                  then copy the link.)
       links   : buttons on the page (label + url)
       sections: the write-up, in order. Each section has:
            heading : the section title ("" for none)
            image   : a picture for that section ("" for none)
            caption : small text under the image ("" for none)
            body    : the paragraphs — one "sentence" per line
                      inside the [ ] brackets, separated by commas

     To ADD a project: copy a whole { ... } block. To REMOVE one:
     delete its block. The first project below is a full example.
     ============================================================ */

  projects: [

    {
      slug: "twitter-analytics",
      title: "Twitter Analytics — #30DaysOfLearning",
      tag: "Power BI",
      img: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Homepage.png",
      blurb: "A Power BI report on the #30DaysOfLearning campaign — 674 tweets from 204 people, turned into a three-page engagement story.",
      summary: "A three-page Power BI report on the #30DaysOfLearning Twitter campaign — engagement, reach and audience.",
      embed: "https://app.powerbi.com/view?r=eyJrIjoiOWIwMWZiOGItYjBlNy00YmNkLWI4NjItMDA4ZTQ3Y2IzZTFlIiwidCI6ImQ2YjZlODcwLTkwNTgtNDgzOS1hOTJiLTNiNzRhMGI1ODliMSJ9&pageName=ReportSection",
      links: [
        { label: "Open full report", url: "https://app.powerbi.com/view?r=eyJrIjoiOWIwMWZiOGItYjBlNy00YmNkLWI4NjItMDA4ZTQ3Y2IzZTFlIiwidCI6ImQ2YjZlODcwLTkwNTgtNDgzOS1hOTJiLTNiNzRhMGI1ODliMSJ9&pageName=ReportSection" },
        { label: "Code & data on GitHub", url: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning" },
      ],
      sections: [
        {
          heading: "Introduction",
          image: "",
          caption: "",
          body: [
            "The #30DaysOfLearning campaign encourages people to learn in public and share their progress on Twitter. This report uses Power BI to measure how the hashtag actually performed — its engagement, its reach, and who drove the conversation.",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "The campaign generated plenty of activity, but nobody had measured it. Without analysis it was hard to know how many people took part, how far the hashtag travelled, or which content and days drove engagement — exactly the insight needed to plan the next cohort.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "Data collection, cleaning and preparation, Power BI modelling and visualisation, insight generation, and turning findings into clear recommendations.",
          ],
        },
        {
          heading: "Data sourcing & transformation",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Transformations.png",
          caption: "Power Query transformations",
          body: [
            "Tweets were scraped from Twitter with Python and saved to a CSV file.",
            "In Power Query I derived a clean date, the day name, and a short day abbreviation (Mon, Tue…) from the raw timestamp — enough to analyse daily patterns without needing a full data model.",
          ],
        },
        {
          heading: "Summary page",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/SummaryPage.png",
          caption: "Report page 1 — Summary",
          body: [
            "*Reach*: 674 tweets from 204 different people in the first two months — active participation for a community campaign.",
            "*Momentum*: tweet volume rose sharply from May into June as the campaign gained traction.",
            "*Audience*: 61% of participants tweeted from Android and only 9% from iPhone.",
            "*Timing*: Wednesdays saw the highest engagement; weekends the lowest.",
          ],
        },
        {
          heading: "Content page",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Content.png",
          caption: "Report page 2 — Content",
          body: [
            "*Tools*: GitHub was the most-mentioned tool in the conversation; Python the least — a strong lean toward GitHub as the community’s documentation tool.",
            "*Top voices*: the facilitator @TheOyinbooke dominated the most-liked tweets and the word cloud, while @its_royalgold’s tweet drew the single highest number of likes.",
          ],
        },
        {
          heading: "",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/MostLiked.png",
          caption: "Top 15 most-liked tweets",
          body: [],
        },
        {
          heading: "Conclusion & recommendations",
          image: "",
          caption: "",
          body: [
            "The campaign showed strong, growing participation, an Android-heavy mobile audience, and clear weekday engagement peaks — with GitHub as the community’s tool of choice.",
            "*Content strategy*: lean into GitHub with resources and tutorials the community already gravitates toward.",
            "*Mobile first*: optimise everything for Android, where most engagement happens.",
            "*Weekday focus*: schedule key activity around midweek, especially Wednesdays.",
            "*Hashtag discipline*: keep #NG30DAYSOFLEARNING and #30DAYSOFLEARNING front and centre to sustain reach.",
          ],
        },
      ],
    },

    {
      slug: "cv-dashboard",
      title: "CV Dashboard",
      tag: "Power BI",
      img: "",
      blurb: "An interactive résumé rebuilt as a Power BI report — experience, skills and impact as a filterable model instead of a static page.",
      summary: "A résumé you can filter — built in Power BI.",
      embed: "",
      links: [ { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/cv-dashboard" } ],
      sections: [
        {
          heading: "Overview",
          image: "",
          caption: "",
          body: [
            "Instead of a flat PDF, this rebuilds a career history as a Power BI model you can slice by role, skill and year.",
            "Replace this with the story: what you wanted to show, how you modelled it, and what makes it worth a click. Paste your Power BI link into the “embed” field above to show the live report.",
          ],
        },
      ],
    },

    {
      slug: "sales-analysis",
      title: "Sales Analysis",
      tag: "Python",
      img: "",
      blurb: "End-to-end analysis in pandas — cleaning, aggregation and trend breakdowns turning a raw transaction file into a readable revenue story.",
      summary: "From a raw transaction file to a revenue story, in pandas.",
      embed: "",
      links: [ { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/sales-analysis" } ],
      sections: [
        {
          heading: "Overview",
          image: "",
          caption: "",
          body: [
            "A full pass over messy sales data in Python: cleaning, grouping, and pulling out the trends that actually matter.",
            "Replace this with the dataset, the questions you asked, and the findings. Add screenshots by setting an “image” on a section.",
          ],
        },
      ],
    },

    {
      slug: "covid-19-dashboard",
      title: "COVID-19 Dashboard",
      tag: "Excel",
      img: "",
      blurb: "A self-updating Excel dashboard with dynamic charts and KPIs — proof that a spreadsheet can still be a proper reporting tool when it’s built well.",
      summary: "A spreadsheet that behaves like a real reporting tool.",
      embed: "",
      links: [ { label: "View original", url: "https://sites.google.com/view/gbolahantowobola/project/covid-19-dashboard" } ],
      sections: [
        {
          heading: "Overview",
          image: "",
          caption: "",
          body: [
            "Dynamic charts, KPI cards and a layout that refreshes itself — Excel pushed to do the job of a BI tool.",
            "Replace this with how you structured the workbook and what it tracked.",
          ],
        },
      ],
    },

  ],

  projects_eyebrow: "Selected projects",
  projects_heading: "A few builds.",
  projects_intro: "Work spanning Power BI, Python and Excel. The credit-portfolio work above is under NDA — happy to walk through it on a call.",


  /* ---------- CERTIFICATIONS ---------- */

  certs: [
    { issuer: "Microsoft Certified", title: "Power BI Data Analyst Associate", note: "PL-300 — modelling, DAX, and report design for decision-ready analytics." },
    { issuer: "Microsoft Certified", title: "Azure Data Fundamentals",         note: "DP-900 — core data concepts across relational and analytical workloads." },
    { issuer: "Microsoft Certified", title: "Power Platform Fundamentals",     note: "PL-900 — Power Apps, Power Automate and Power BI as one toolset." },
  ],


  /* ---------- TOOLKIT ----------
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
