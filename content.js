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
  eyebrow: "Credit Portfolio & Risk Management",
  thesis: "I own the credit policy, pricing and risk decisions on a digital lending portfolio. Redesigning eligibility and segmentation took *approvals up 15%* while *impairment fell 20%*.",
  subtext: "{years}+ years in Nigerian consumer lending and fintech, setting the policy that decides who gets approved, on what terms, and what happens when they don't pay.",
  stat1: "{years}+ yrs credit portfolio & risk",

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
    lead: "I own portfolio performance for a digital consumer-lending book: the credit policy, pricing and risk calls that decide whether it grows profitably.",
    body: "I set eligibility, pricing, exposure and risk-treatment policy by segment, and I test changes with experiments before they reach the whole book. When the portfolio's numbers move, I'm the one who has to explain why. The SQL pipelines and Power BI reporting that senior management and the Risk Committee use are ones I built, so every number traces back to source.",
    aside: [
      { label: "Currently",  value: "Credit Portfolio Manager" },
      { label: "Focus",      value: "Loan performance, credit policy & experimentation" },
      { label: "Background",  value: "Consumer lending & fintech, Nigeria" },
      { label: "Also",        value: "Teaching data skills · Esport" },
      { label: "Learning",    value: "Data Science" },
    ],
  },


  /* ---------- "WHAT I DO" SECTION ---------- */

  work_eyebrow: "What I do",
  work_heading: "Five things I get called in for.",
work_intro: "I make the portfolio decision and build the evidence for it myself: the pipeline, the model and the report.",

  capabilities: [
    { title: "Portfolio ownership", body: "I own performance and risk monitoring across approval, disbursal, exposure, revenue and risk-adjusted Gross Profit, with ECL, FPD, roll rates, PAR and NPL tracked through segmentation and cohort analysis." },
    { title: "Credit policy design",      body: "Eligibility, pricing, exposure limits and DTI/affordability treatment, set by risk band so stronger-risk customers get better terms. Redesigning eligibility and segmentation took approvals up 15%, impairment down 20% and FPD30 improved by 58%." },
    { title: "Credit policy testing & experimentation", body: "A/B tests on limit, score-band and affordability rules, with sample-ratio checks, covariate balance and significance testing, so a policy change is proven before it goes live." },
    { title: "Fraud & risk detection",     body: "I found a fraud pattern in loan applications that no one had flagged and built an email-similarity model to catch related applications. The Data Science team later adopted it and developed it for production." },
    { title: "Business intelligence, SQL & data pipelines", body: "Power BI reporting on star-schema models with DAX, fed by production SQL pipelines in Redshift. Senior management and the Risk Committee use it, and every number traces back to source." },
  ],


  /* ---------- BUSINESS INTELLIGENCE SECTION ---------- */

  bi: {
    eyebrow: "Business intelligence",
    heading: "Owned end to end, from source to decision.",
    lead: "Most analysts own one slice of the reporting stack. I build all of it: the *SQL* that shapes the data, the *semantic model and DAX* behind it, and the *Power BI* reports on top, so every number on the executive dashboard traces back to source and there’s one version of the truth.",
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
      blurb: "A retail marketing dataset in pandas: who the best customers are, what they buy and which campaigns paid back.",
      summary: "Who the best customers are, what they buy and which campaigns work, answered in pandas.",
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
            "Marketa is a specialty retailer selling wine, fresh produce, meat, fish, sweets and gold gift items through three channels: online, a printed catalogue and physical shops. Over two years its marketing team ran five promotional campaigns plus a final one and recorded how each customer responded. The brief from the Head of Marketing: “We keep spending on campaigns but we don't really know who our best customers are, what they buy, or which campaigns actually work.” The data is Maven Analytics' marketing dataset, used here for learning.",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "Three questions from one dataset: who the best customers are, what they buy, and which of the six campaigns paid back. The raw file is a 2,240-row customer export with a few data quality problems, and those had to be fixed before any of it could be trusted.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "Data profiling and cleaning, feature engineering, exploratory analysis and RFM (recency, frequency, monetary) segmentation, in Python with pandas, numpy, matplotlib and seaborn, in a Jupyter notebook.",
          ],
        },
        {
          heading: "Data & cleaning",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/customer_demographics.png",
          caption: "Customer demographics",
          body: [
            "The data covers 2,240 customers and 28 columns: demographics, spend by category, purchases by channel and campaign responses. Four problems needed fixing. 24 incomes were missing, so each was filled with the median income for that customer's education level. Three birth years were impossible, so those three records (age over 90) were dropped. Marital status had junk labels (YOLO, Absurd, Alone): Alone became Single and the rest went to Other. Enrolment dates were stored as text, so I converted them to dates. That leaves 2,237 customers, mostly aged 35 to 55, with income concentrated between 30k and 80k, mostly Graduation-educated and married or living together.",
          ],
        },
        {
          heading: "What customers buy",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/spend_by_category.png",
          caption: "Spend by product category",
          body: [
            "Wine is about 50% of spend and meat about 28%, so two of the six categories make up most of the revenue.",
          ],
        },
        {
          heading: "What drives spending",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/spend_drivers.png",
          caption: "What drives spending",
          body: [
            "Income is the strongest single driver of spend, with a correlation of about 0.66. Customers with children spend far less: about 1,105 on average with no children, against about 407 with children.",
          ],
        },
        {
          heading: "Campaigns",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/campaign_acceptance.png",
          caption: "Campaign acceptance rate",
          body: [
            "Acceptance on the final campaign was about 14.9%. The weakest, Campaign 2, was about 1.3%, so the final campaign converted at more than ten times the rate. It is the one to document and repeat.",
          ],
        },
        {
          heading: "Channels",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/purchase_channels.png",
          caption: "Purchase channels",
          body: [
            "The physical store has the most purchases, but web and catalogue are both substantial, so this is a genuinely multi-channel customer base. Some heavy web visitors convert poorly.",
          ],
        },
        {
          heading: "Customer segmentation",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/customers_per_segment.png",
          caption: "Customers per segment",
          body: [
            "Each customer is scored 1 to 4 on recency, frequency and monetary value (quartiles) and placed in one of five segments: Champions, Loyal, Potential, At Risk and Hibernating. Each segment gets its own action, from perks and early access for Champions to low-cost reactivation for Hibernating customers.",
          ],
        },
        {
          heading: "Revenue concentration",
          image: "https://raw.githubusercontent.com/Gbolahant/Marketing-Analysis/main/images/revenue_by_segment.png",
          caption: "Revenue by segment",
          body: [
            "About 537 Champions bring in close to half of total revenue. The two weakest segments together contribute under 3%. That is why the first recommendation is to protect the Champions.",
          ],
        },
        {
          heading: "Recommendations",
          image: "",
          caption: "",
          body: [
            "Protect the Champions with loyalty perks and premium wine and meat bundles.",
            "Reactivate At Risk and Hibernating customers before spending more on acquisition.",
            "Document the final campaign's offer, timing and targeting and reuse it. Drop the Campaign 2 approach.",
            "Lead promotions with wine and meat, and cross-sell the smaller categories to existing high spenders.",
            "Find out why frequent web visitors aren't buying.",
          ],
        },
      ],
    },

    {
      slug: "inventory-management-analysis",
      title: "Inventory Management Analysis",
      tag: "Power BI",
      img: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Overvie.png",
      blurb: "A Power BI inventory report for a retailer with stockouts and overstock: turnover, ABC/XYZ analysis and demand forecasting in one model.",
      summary: "Stockouts and overstock, turned into a turnover, ABC/XYZ and forecasting model in Power BI.",
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
            "FitCapacity, a retailer built on the Adventure Works dataset, had stockouts on some products and overstock on others. This project builds the Power BI model that shows which is which and what to do about each.",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "FitCapacity needed four things: which products turn over fast or slowly, how long products stay out of stock on average, a demand forecast with stockout predictions for the main products, and a split of the range into high-, average- and low-selling groups.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "SQL extraction from Adventure Works, DAX for calculated tables and measures, and Power BI report design with Deneb visuals, tooltips, bookmarks and page navigation.",
          ],
        },
        {
          heading: "Data sourcing & modelling",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Model.png",
          caption: "Snowflake schema",
          body: [
            "Five SQL queries pull inventory, product, sales, purchasing and product photo data from Adventure Works into a snowflake model. DAX calculated tables sit on top: a daily and a weekly demand sheet covering the last 365 days, and a date table. Two field parameters, Demand Factor (-0.2 to 0.5 in steps of 0.1) and Forecast Days (10 to 100 in steps of 10), let the Forecast page be changed live.",
          ],
        },
        {
          heading: "Overview page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Overvie.png",
          caption: "Report page 1: Overview",
          body: [
            "Turnover is 3.8 overall: Accessories 15.1, Clothing 13.5, Bikes 4.2, Components 2.1.",
            "12 products, all Bikes, produce 42% of annual revenue.",
            "Annual revenue is $73 million, of which Bikes are $60 million, against $14 million of stock on hand.",
          ],
        },
        {
          heading: "Product page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Product.png",
          caption: "Report page 2: Product",
          body: [
            "The top and bottom five products by turnover and by revenue, plus two classifications. ABC groups products by revenue contribution. XYZ groups them by how predictable their demand is. Together they show where inventory attention should go first.",
          ],
        },
        {
          heading: "Forecast page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Forecast.png",
          caption: "Report page 3: Forecast",
          body: [
            "The user sets the number of forecast days and a demand factor. The page then recalculates each product's recommendation, its safety stock and its reorder point.",
          ],
        },
        {
          heading: "Insight page",
          image: "https://raw.githubusercontent.com/Gbolahant/Inventory-Management-Analysis/main/Insights.png",
          caption: "Report page 4: Insight",
          body: [
            "It pulls the findings together: seasonality in sales, the low turnover rate, non-moving products and revenue at risk. Two tooltip pages give extra detail when you hover over the main visuals.",
          ],
        },
        {
          heading: "Conclusion & recommendations",
          image: "",
          caption: "",
          body: [
            "Seasonality: sales are seasonal, so stock needs planning ahead of peak periods.",
            "Low turnover: a rate of 3.8 points to slow sales and surplus stock.",
            "128 non-moving products have been identified, for clearance or a review of whether they belong in the range.",
            "$1.3 million of revenue is at risk over the next 60 days if inventory isn't managed better.",
            "Recommendations: better demand forecasting, regular inventory audits, reorder points and safety stock set from sales history, lead times and demand variability, discontinuing products with consistently low turnover, and protecting the roughly 12 products that bring in 42% of revenue.",
          ],
        },
      ],
    },

    {
      slug: "twitter-analytics",
      title: "Twitter Analytics: #30DaysOfLearning",
      tag: "Power BI",
      img: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Homepage.png",
      blurb: "A Power BI report on the #30DaysOfLearning campaign: 674 tweets from 204 people, in three pages.",
      summary: "A three-page Power BI report on the #30DaysOfLearning campaign: engagement, reach and audience.",
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
            "The #30DaysOfLearning campaign asks people to learn in public and share their progress on Twitter. This Power BI report measures how the hashtag performed: engagement, reach and who drove the conversation.",
          ],
        },
        {
          heading: "Problem statement",
          image: "",
          caption: "",
          body: [
            "The campaign produced plenty of activity but nobody had measured it. There was no count of how many people took part, how far the hashtag travelled, or which content and days drove engagement. That is what you need to plan the next cohort.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "Data collection, cleaning and preparation, Power BI modelling and visualisation, and turning findings into recommendations.",
          ],
        },
        {
          heading: "Data sourcing & transformation",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Transformations.png",
          caption: "Power Query transformations",
          body: [
            "I scraped the tweets from Twitter with Python and saved them to a CSV.",
            "In Power Query I derived a clean date, the day name and a short day abbreviation (Mon, Tue and so on) from the raw timestamp. That was enough to analyse daily patterns without building a full data model.",
          ],
        },
        {
          heading: "Summary page",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/SummaryPage.png",
          caption: "Report page 1: Summary",
          body: [
            "Reach: 674 tweets from 204 different people in the first two months.",
            "Momentum: tweet volume rose sharply from May into June as the campaign picked up.",
            "Audience: 61% of participants tweeted from Android and only 9% from iPhone.",
            "Timing: Wednesdays had the highest engagement and weekends the lowest.",
          ],
        },
        {
          heading: "Content page",
          image: "https://github.com/Gbolahant/Twitter-Analytics-of-30daysofLearning/raw/main/Content.png",
          caption: "Report page 2: Content",
          body: [
            "Tools: GitHub was the most mentioned tool and Python the least, so the community leaned heavily on GitHub for documenting its work.",
            "Top voices: the facilitator @TheOyinbooke dominated the most-liked tweets and the word cloud, and @its_royalgold's tweet had the single highest number of likes.",
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
            "Participation was strong and growing, the audience was mostly on Android, and engagement peaked midweek, with GitHub the tool people used most.",
            "Content strategy: lean into GitHub with resources and tutorials the community already uses.",
            "Mobile first: optimise for Android, where most engagement happens.",
            "Weekday focus: schedule key activity around midweek, especially Wednesdays.",
            "Hashtag discipline: keep #NG30DAYSOFLEARNING and #30DAYSOFLEARNING prominent to sustain reach.",
          ],
        },
      ],
    },

    {
      slug: "stock-market-analytics",
      title: "Stock Market Analytics",
      tag: "Python",
      img: "images/stock-market-analytics/sp500-additions-by-year.png",
      blurb: "Live market data pulled in Python: S&P 500 additions, index performance by country, historical corrections and how Amazon moves after earnings.",
      summary: "Four questions about stock markets, answered with yfinance, pandas and scraped data.",
      embed: "",
      links: [
        { label: "Notebook on GitHub", url: "https://github.com/Gbolahant/Stock-Market-Analytics-Zoomcamp/blob/main/Module1_stockinvestment.ipynb" },
      ],
      sections: [
        {
          heading: "Introduction",
          image: "",
          caption: "",
          body: [
            "Module 1 of DataTalksClub's Stock Market Analytics Zoomcamp: pull live index and stock data with yfinance and pandas, and use it to answer real questions about markets. I started investing on expert tips and wanted to check the numbers myself.",
          ],
        },
        {
          heading: "Skills demonstrated",
          image: "",
          caption: "",
          body: [
            "yfinance and pandas_datareader for market data, BeautifulSoup for scraping, Plotly for charts, time-series transformations, and percentile and correlation analysis.",
          ],
        },
        {
          heading: "Data sourcing",
          image: "",
          caption: "",
          body: [
            "Index and stock prices come from Yahoo Finance through yfinance. The current S&P 500 constituent list is scraped from Wikipedia, with a browser-style request header because a plain request returns a 403.",
          ],
        },
        {
          heading: "S&P 500 additions by year",
          image: "images/stock-market-analytics/sp500-additions-by-year.png",
          caption: "S&P 500 additions by year (2022-2026)",
          body: [
            "Which year since 2020 added the most companies to the S&P 500? 2025, with 18 additions, ahead of 2024 (16) and 2023 and 2022 (15 each). 2026 has 13 so far.",
          ],
        },
        {
          heading: "Global index performance",
          image: "images/stock-market-analytics/global-index-ytd.png",
          caption: "The 2 indices ahead of the S&P 500, YTD 2026",
          body: [
            "How many of the 10 other major indices beat the S&P 500's year-to-date return (1 January to 21 August 2026)? Two. Canada's TSX Composite was 2.96 percentage points ahead and Japan's Nikkei 225 was 15.47 points ahead. The other eight, including China, the UK and Germany, did not beat it.",
          ],
        },
        {
          heading: "S&P 500 market corrections",
          image: "images/stock-market-analytics/top10-corrections.png",
          caption: "The 10 worst S&P 500 corrections since 1950",
          body: [
            "I defined a correction as a fall of at least 5% from the most recent all-time high and scanned closing prices back to 1950. That found 74 corrections, with a median drawdown of 7.99% and a median of about 40 days from peak to trough. The three worst were 2007 to 2009 (-56.8%), 2000 to 2002 (-49.1%) and 1973 to 1974 (-48.2%).",
          ],
        },
        {
          heading: "Amazon earnings-surprise reaction",
          image: "",
          caption: "",
          body: [
            "How does AMZN move around a positive earnings surprise? I joined its earnings history to daily prices and measured the return from the close the day before the report to the close the day after. The median 2-day return after a beat was +0.35%, and the size of the surprise has a correlation of about 0.34 with the size of the move. The earnings data only goes back to October 2020, so the sample is small.",
          ],
        },
        {
          heading: "Conclusion",
          image: "",
          caption: "",
          body: [
            "Each question needed a precise definition before it could be answered: what counts as a correction, what counts as a surprise, and where year to date starts and ends.",
          ],
        },
      ],
    },

  ],

  // Pages that are not ready yet, so they are not shown on the site. Once a block has real
  // text and its images are uploaded, move it back into projects: [ ... ] above to show it.
  hidden_projects: [

    {
      slug: "sales-analysis",
      title: "Sales Analysis",
      tag: "Python",
      // Screenshots saved into images/sales-analysis/ — see README "Add screenshots".
      img: "images/sales-analysis/sales-trend-by-year.png",
      blurb: "End-to-end analysis in pandas: cleaning, aggregation and trend breakdowns on a raw transaction file.",
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
      blurb: "A self-updating Excel dashboard with dynamic charts and KPIs, built well enough to work as a reporting tool.",
      summary: "A spreadsheet that works as a reporting tool.",
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
  projects_intro: "Public builds in Power BI and Python, using the same toolkit as the credit-portfolio work above, on data I can share in full.",


  /* ---------- CERTIFICATIONS ---------- */

  certs: [
    { issuer: "Microsoft Certified", title: "Power BI Data Analyst Associate", note: "PL-300: modelling, DAX and report design for decision-ready analytics." },
    { issuer: "Microsoft Certified", title: "Azure Data Fundamentals",         note: "DP-900: core data concepts across relational and analytical workloads." },
    { issuer: "Microsoft Certified", title: "Power Platform Fundamentals",     note: "PL-900: Power Apps, Power Automate and Power BI as one toolset." },
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
