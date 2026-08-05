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

  // The CV/résumé file the "Download CV" button links to. Upload a new PDF
  // (Add file → Upload files) and update this filename to swap it out.
  resume: "Gbolahan-Towobola-Resume.pdf",


  /* ---------- ABOUT ---------- */

  about: {
    eyebrow: "The short version",
    lead: "Most of my work lives at the seam between *credit risk*, *data analytics* and *data engineering*.",
    body: "I write the SQL that shapes loan-performance data, model how cohorts repay across their life, test credit-policy changes before they ship, and build the Power BI reporting leadership actually uses to make calls. I care about analytics that ends in a decision — not a slide that gets admired and forgotten.",
    aside: [
      { label: "Currently",  value: "Credit & BI Portfolio Manager" },
      { label: "Focus",      value: "Loan performance, credit policy & experimentation" },
      { label: "Background",  value: "Consumer lending & fintech, Nigeria" },
      { label: "Also",        value: "Teaching data skills · Esport" },
      { label: "Learning",    value: "Data Science" },
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
      slug: "marketing-analysis",
      title: "Marketing Analysis",
      tag: "Python",
      img: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/customer_demographics.png",
      blurb: "A retail marketing dataset turned into a customer story in pandas — who the best customers are, what they buy, and which campaigns actually earned their budget back.",
      summary: "Who are the best customers, what do they buy, and which campaigns work — answered in pandas.",
      embed: "",
      links: [
        { label: "Notebook & data on GitHub", url: "https://github.com/Gbolahant/Marketing-Analysis" },
      ],
      sections: [
        {
          heading: "Introduction",
          image: "",
          caption: "",
          body: [
            "Marketa is a specialty retailer selling wine, produce, meat, fish, sweets and gift items across three channels — online, catalogue and physical stores. Over two years the marketing team ran five campaigns plus a final one, and tracked how every customer responded. The brief from the Head of Marketing: “We keep spending on campaigns but we don't really know who our best customers are, what they buy, or which campaigns actually work.”",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "Three questions, one dataset: who are the best customers, what do they actually buy, and which of six campaigns earned its budget back. Answering all three meant turning a raw, slightly messy 2,240-row customer export into something a marketing team could act on.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "Data profiling and cleaning, feature engineering, exploratory analysis and RFM (Recency / Frequency / Monetary) customer segmentation — all in Python with pandas, numpy, matplotlib and seaborn, worked through in a Jupyter notebook.",
          ],
        },
        {
          heading: "Data & cleaning",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/customer_demographics.png",
          caption: "Customer demographics",
          body: [
            "2,240 customers across 28 columns — demographics, spend by category, purchases by channel, campaign responses. Four issues stood in the way of a clean analysis: 24 missing incomes (imputed from the median for that education level), a handful of impossible birth years (three records over age 90 dropped), messy marital-status labels (*YOLO*, *Absurd*, folded into *Other*), and enrolment dates stored as text. What's left skews middle-aged, mostly *Graduation*-educated, and married or living together.",
          ],
        },
        {
          heading: "What customers buy",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/spend_by_category.png",
          caption: "Spend by product category",
          body: [
            "Wine and meat *are* the business — wine alone is roughly *50%* of spend, meat another *28%*. Two categories out of six account for the large majority of revenue.",
          ],
        },
        {
          heading: "What drives spending",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/spend_drivers.png",
          caption: "What drives spending",
          body: [
            "*Income* is the strongest single driver of spend, correlating at roughly *0.66* — and customers with children spend markedly less: about *1,105* average with none, versus *407* with children.",
          ],
        },
        {
          heading: "Campaigns",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/campaign_acceptance.png",
          caption: "Campaign acceptance rate",
          body: [
            "Six campaigns, wildly different results: the final campaign converted at roughly *14.9%* — more than *10x* the weakest, Campaign 2, at *1.3%* — a strong signal about which offer, timing and targeting is actually worth repeating.",
          ],
        },
        {
          heading: "Channels",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/purchase_channels.png",
          caption: "Purchase channels",
          body: [
            "The physical store leads on volume, but web and catalogue are both substantial — a genuinely omni-channel customer base, with a notable pocket of frequent web visitors who browse but don't convert.",
          ],
        },
        {
          heading: "Customer segmentation",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/customers_per_segment.png",
          caption: "Customers per segment",
          body: [
            "Every customer is scored on Recency, Frequency and Monetary value (RFM) and sorted into five segments — *Champions*, *Loyal*, *Potential*, *At Risk* and *Hibernating* — each with its own marketing playbook, from loyalty perks for Champions to low-cost reactivation for the dormant tail.",
          ],
        },
        {
          heading: "Revenue concentration",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/revenue_by_segment.png",
          caption: "Revenue by segment",
          body: [
            "A small *Champions* segment — about *537* customers — drives close to *half* of total revenue, while the two weakest segments combined contribute under *3%*. Protecting that top segment matters more than acquiring new customers at the bottom.",
          ],
        },
        {
          heading: "Recommendations",
          image: "",
          caption: "",
          body: [
            "Protect the Champions with loyalty perks and premium wine/meat bundles.",
            "Reactivate At-Risk and Hibernating customers before spending more on acquisition.",
            "Reverse-engineer the final campaign — document its offer, timing and targeting, and retire the Campaign 2 approach.",
            "Lead with wine and meat in promotions, and cross-sell minor categories to existing high spenders.",
            "Fix web conversion — work out why frequent web visitors aren't buying.",
          ],
        },
      ],
    },

    {
      slug: "inventory-management-analysis",
      title: "Inventory Management Analysis",
      tag: "Power BI",
      img: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Overvie.png",
      blurb: "A Power BI inventory optimization report for a retailer battling stockouts and overstock — turnover, ABC/XYZ analysis and demand forecasting in one model.",
      summary: "Turning stockouts and overstock into a turnover, ABC/XYZ and forecasting model — in Power BI.",
      embed: "https://app.powerbi.com/view?r=eyJrIjoiM2Q4ZTVkMmMtMmYwZi00YzQ2LWFjNDMtNDYwY2YyMzkwNDY2IiwidCI6ImQ2YjZlODcwLTkwNTgtNDgzOS1hOTJiLTNiNzRhMGI1ODliMSJ9",
      links: [
        { label: "Open full report", url: "https://app.powerbi.com/view?r=eyJrIjoiM2Q4ZTVkMmMtMmYwZi00YzQ2LWFjNDMtNDYwY2YyMzkwNDY2IiwidCI6ImQ2YjZlODcwLTkwNTgtNDgzOS1hOTJiLTNiNzRhMGI1ODliMSJ9" },
        { label: "Code & docs on GitHub", url: "https://github.com/Gbolahant/Inventory-Management-Analysis" },
      ],
      sections: [
        {
          heading: "Introduction",
          image: "",
          caption: "",
          body: [
            "FitCapacity, a retailer running on the Adventure Works dataset, was losing money on both ends of the shelf — some products sat out of stock while others piled up unsold. This project builds the Power BI model that tells the difference, and what to do about each.",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "The brief: identify which products turn over fast and which don't, measure how long stockouts actually last, forecast demand for the products that matter most, and sort the catalogue into high-, average- and low-selling tiers — the everyday questions an inventory team needs answered, not just described.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "SQL extraction and modelling from the Adventure Works database, DAX for calculated tables and measures, Power BI report design with Deneb custom visuals, tooltips, bookmarks and page navigation, and translating the numbers into recommendations a business can act on.",
          ],
        },
        {
          heading: "Data sourcing & modelling",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Model.png",
          caption: "Snowflake schema",
          body: [
            "Five SQL queries pull inventory, product, sales, purchasing and product-photo data out of Adventure Works into a snowflake model. On top of that sit DAX-built calculated tables — a rolling 365-day daily and weekly demand sheet, a date table — plus two field parameters, *Demand Factor* and *Forecast Days*, that let the Forecast page be adjusted live rather than rebuilt.",
          ],
        },
        {
          heading: "Overview page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Overvie.png",
          caption: "Report page 1 — Overview",
          body: [
            "*Turnover*: an overall rate of 3.8 — Accessories lead at 15.1, Clothing at 13.5, Bikes at 4.2, Components lag at 2.1.",
            "*Concentration*: 12 products, all Bikes, drive 42% of annual revenue.",
            "*Scale*: $73 million in revenue against $14 million of stock on hand.",
          ],
        },
        {
          heading: "Product page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Product.png",
          caption: "Report page 2 — Product",
          body: [
            "Top and bottom 5 by turnover and by revenue, side by side, plus an *ABC analysis* (which products earn their shelf space) and an *XYZ analysis* (which ones have demand you can actually predict) — together they show where to spend inventory attention first.",
          ],
        },
        {
          heading: "Forecast page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Forecast.png",
          caption: "Report page 3 — Forecast",
          body: [
            "Built on the Demand Factor and Forecast Days parameters, this page recalculates safety stock and reorder points live as you move the sliders — turning a static forecast into something a planner can actually stress-test.",
          ],
        },
        {
          heading: "Insight page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Insights.png",
          caption: "Report page 4 — Insight",
          body: [
            "The Insight page rolls the analysis up into the findings that matter — seasonality, turnover, non-moving stock, revenue at risk — with two tooltip pages behind it providing the drill-down detail whenever a stakeholder asks “why.”",
          ],
        },
        {
          heading: "Conclusion & recommendations",
          image: "",
          caption: "",
          body: [
            "*Seasonality*: demand isn't flat — inventory planning needs to move with it, not react to it.",
            "*Low turnover*: a 3.8 rate points to inventory sitting too long on the shelf.",
            "*128 non-moving products*: identified and flagged for clearance or a hard look at relevance.",
            "*$1.3 million at risk*: the projected revenue loss over the next 60 days if nothing changes.",
            "*Recommendations*: tighter demand forecasting, regular inventory audits, right-sized reorder points and safety stock, discontinuing chronic under-performers, and doubling down on the ~12 products already driving 42% of revenue.",
          ],
        },
      ],
    },

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
      slug: "sales-analysis",
      title: "Sales Analysis",
      tag: "Python",
      // Screenshots saved into images/sales-analysis/ — see README "Add screenshots".
      img: "images/sales-analysis/sales-trend-by-year.png",
      blurb: "End-to-end analysis in pandas — cleaning, aggregation and trend breakdowns turning a raw transaction file into a readable revenue story.",
      summary: "From a raw transaction file to a revenue story, in pandas.",
      embed: "",
      links: [],
      sections: [
        {
          heading: "Overview",
          image: "",
          caption: "",
          body: [
            "TODO: the dataset, the questions you asked, and the tools used (pandas / matplotlib etc).",
          ],
        },
        {
          heading: "Sales trend by year",
          image: "images/sales-analysis/sales-trend-by-year.png",
          caption: "Sales trend by year",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Sales trend by month",
          image: "images/sales-analysis/sales-trend-by-month-year.png",
          caption: "Sales trend by month & year",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Seasonal pattern",
          image: "images/sales-analysis/seasonal-pattern.png",
          caption: "Seasonal sales pattern",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Top 10 products by revenue",
          image: "images/sales-analysis/top10-products-by-revenue.png",
          caption: "Top 10 products by revenue",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Top 10 products by quantity",
          image: "images/sales-analysis/top10-products-by-quantity.png",
          caption: "Top 10 products by quantity",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Shipping mode distribution",
          image: "images/sales-analysis/shipping-mode-distribution.png",
          caption: "Shipping mode distribution",
          body: [ "TODO: what this chart shows." ],
        },
        {
          heading: "Conclusion & recommendations",
          image: "",
          caption: "",
          body: [ "TODO: findings and recommendations." ],
        },
      ],
    },

    {
      slug: "covid-19-dashboard",
      title: "COVID-19 Dashboard",
      tag: "Excel",
      // Screenshot saved into images/covid-19-dashboard/ — see README "Add screenshots".
      img: "images/covid-19-dashboard/dashboard-overview.png",
      blurb: "A self-updating Excel dashboard with dynamic charts and KPIs — proof that a spreadsheet can still be a proper reporting tool when it’s built well.",
      summary: "A spreadsheet that behaves like a real reporting tool.",
      embed: "",
      links: [],
      sections: [
        {
          heading: "Overview",
          image: "",
          caption: "",
          body: [
            "TODO: what the workbook tracked and why Excel instead of a BI tool.",
          ],
        },
        {
          heading: "Dashboard",
          image: "images/covid-19-dashboard/dashboard-overview.png",
          caption: "Dashboard overview",
          body: [ "TODO: what's shown and how it updates." ],
        },
        {
          heading: "Conclusion",
          image: "",
          caption: "",
          body: [ "TODO: how it was built and what it's for." ],
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
