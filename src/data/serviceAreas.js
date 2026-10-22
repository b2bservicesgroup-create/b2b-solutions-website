// City pages for b2bsolutions.biz.
// Washington pages lead with HR, payroll and Zoho; Washington bookkeeping lives on
// WashingtonBookkeeper.com. Iowa pages cover every service, bookkeeping included.
// Local rules were checked against official sources in October 2026 — see `sources`.

export const serviceAreas = [
  // ───────────────────────────── Washington ─────────────────────────────
  {
    slug: 'olympia-wa',
    city: 'Olympia',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'Thurston County',
    region: 'washington',
    inPerson: true,
    wbSlug: 'olympia-wa',
    blurb: 'State capital with a mix of government contractors, nonprofits and downtown retail.',
    title: 'HR, Payroll & Zoho Consulting in Olympia, WA',
    metaDescription:
      'Fractional HR, payroll and Zoho One setup for Olympia small businesses — handbooks, Washington payroll compliance and Olympia B&O questions, from our Rochester office.',
    h1: 'HR, payroll and Zoho support for Olympia employers',
    intro: [
      "Olympia small businesses hire in the same market as state government — and state jobs come with structured pay, written policies and generous leave. For a ten-person nonprofit, a downtown restaurant or a firm that contracts with state agencies, that's the bar job candidates compare you to.",
      "We give Olympia employers that same structure without a full-time HR hire: clear offer letters and handbooks, payroll that handles Washington's leave and insurance programs correctly, and a Zoho system that keeps hiring, scheduling and client records in one place.",
    ],
    localRules: [
      {
        title: 'Olympia has its own city B&O tax',
        desc: "Unlike most Thurston County towns, Olympia levies a city business & occupation tax on top of the state's. The city exempts businesses with less than $500,000 a year in Olympia gross receipts (Olympia Municipal Code 5.04.060, amended in 2025). The city return is separate from your state excise return, so the revenue in your books needs to show what was earned inside city limits.",
      },
      {
        title: 'City license endorsement',
        desc: 'Every business operating in Olympia needs an Olympia endorsement on its state business license. It is free up to $4,000 in Olympia income and $30 above that, and it renews through the state Business Licensing Service along with your other endorsements.',
      },
      {
        title: 'Competing with state employers',
        desc: 'Small Olympia employers often lose candidates over unclear leave, schedules or advancement. A written paid sick leave notice, a simple pay structure and a handbook go a long way — and Washington already requires you to tell employees about their sick leave rights.',
      },
    ],
    faqs: [
      {
        question: 'Does my Olympia business owe the city B&O tax?',
        answer:
          'Only if your gross receipts from Olympia activity reach $500,000 in a calendar year — below that, the city exempts you from the tax. Ask the city whether you still need to file a return at your size. We keep your revenue tracked by location so the answer is easy to see either way.',
      },
      {
        question: 'Can you meet with us in Olympia?',
        answer:
          "Yes. Olympia is a short drive from our Rochester office, so we can meet at your business or ours. Day-to-day work — payroll runs, HR questions, Zoho changes — happens remotely so you're never waiting on a visit.",
      },
      {
        question: 'Where do I get bookkeeping in Olympia?',
        answer:
          'Our Washington bookkeeping service — monthly reconciliation, statements and B&O-ready revenue tracking — lives on WashingtonBookkeeper.com, run by the same B2B Solutions team.',
      },
    ],
    sources: [
      { label: 'Olympia Municipal Code 5.04 (B&O tax)', url: 'https://www.codepublishing.com/WA/Olympia/html/Olympia05/Olympia0504.html' },
      { label: 'Washington DOR — Olympia city endorsement', url: 'https://dor.wa.gov/manage-business/city-endorsements/Olympia' },
    ],
  },
  {
    slug: 'tacoma-wa',
    city: 'Tacoma',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'Pierce County',
    region: 'washington',
    inPerson: false,
    wbSlug: 'tacoma-wa',
    blurb: 'Port city with its own business license, city B&O tax and paid sick leave ordinance.',
    title: 'HR & Payroll Services for Tacoma, WA Small Businesses',
    metaDescription:
      "Remote HR and payroll for Tacoma employers: Tacoma's paid sick leave ordinance, city B&O tax, the proposed $20 minimum wage and Zoho One setup — handled by B2B Solutions.",
    h1: 'HR and payroll for Tacoma employers — handled remotely',
    intro: [
      'Tacoma asks more of employers than most Washington cities. It runs its own business license, its own B&O tax and its own paid sick leave ordinance, and in fall 2026 the city council is weighing a $20 minimum wage. Small businesses near the port, downtown or along 6th Avenue are expected to keep up with all of it.',
      'We work with Tacoma employers remotely. Payroll, HR policies and Zoho systems are online work, so you get the same service our local clients do — we just do it from Thurston County.',
    ],
    localRules: [
      {
        title: 'Watch the minimum wage debate',
        desc: "Tacoma's minimum wage currently matches the state's $17.13 an hour. As of September 2026, Deputy Mayor Joe Bushnell is drafting an ordinance to raise it to $20, possibly starting in 2027 or phased in over two to three years, with a council vote targeted before the end of 2026. We'll update pay rates and budgets the moment anything passes.",
      },
      {
        title: 'Tacoma paid sick leave',
        desc: 'Tacoma has had its own paid sick leave ordinance since February 2016, covering employees who work 80 or more hours a year inside city limits — even if your business is based elsewhere. Washington state sick leave applies too, so your policy has to satisfy both.',
      },
      {
        title: 'City license and B&O tax',
        desc: "Tacoma's general business license runs on the calendar year and is due January 31. Tacoma also levies a city B&O tax — the city's form exempts businesses with less than $250,000 in gross income for the year — filed with the city, separate from your state return.",
      },
    ],
    faqs: [
      {
        question: 'Do you work with Tacoma businesses in person?',
        answer:
          'No — we serve Tacoma remotely. Payroll, HR and Zoho work happen online with video calls when you want to talk through something. If on-site support is a must, we can recommend options.',
      },
      {
        question: 'If Tacoma passes a $20 minimum wage, what changes for us?',
        answer:
          "Your payroll rates, overtime math and possibly your pricing. We'd update pay rates in payroll before the effective date, flag salaried staff who need a review, and help you budget for the increase. Until something passes, nothing changes — the rate still matches the state's.",
      },
      {
        question: 'Where do I get bookkeeping in Tacoma?',
        answer:
          "Our Washington bookkeeping service lives on WashingtonBookkeeper.com, including books set up to separate Tacoma revenue for the city B&O return.",
      },
    ],
    sources: [
      { label: 'KOMO News — Tacoma $20 minimum wage proposal (Sept 2026)', url: 'https://komonews.com/newsletter-daily/tacoma-city-council-minimum-wage-business-owners-pierce-county-washington-state-incentive-everett-deputy-mayor-joe-bushnell-final-vote-2026' },
      { label: 'City of Tacoma — business license', url: 'https://tacoma.gov/?p=1569' },
      { label: 'City of Tacoma — B&O tax return form', url: 'https://tdocs.tacoma.gov/taxlicense/tax/B&O%20Tax%20Form.pdf' },
    ],
  },
  {
    slug: 'centralia-wa',
    city: 'Centralia',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'Lewis County',
    region: 'washington',
    inPerson: true,
    wbSlug: 'centralia-wa',
    blurb: 'I-5 retail and hospitality hub with seasonal and teen hiring.',
    title: 'Payroll & HR for Centralia, WA Retail and Restaurants',
    metaDescription:
      'Payroll and HR for Centralia, WA businesses — seasonal and part-time staff, hiring minors, Washington sick leave and Zoho scheduling. In-person help from B2B Solutions.',
    h1: 'Payroll and HR for Centralia businesses',
    intro: [
      "Centralia sits halfway between Seattle and Portland on I-5, and a lot of its economy is retail, restaurants and travelers. That means hiring that rises and falls with the seasons, a steady stream of part-time staff, and often a first job for local teenagers.",
      'Those are exactly the payroll situations that trip small employers up. We set up Centralia businesses so seasonal hires, part-timers and minors are paid and tracked correctly from the first shift.',
    ],
    localRules: [
      {
        title: 'Hiring workers under 18',
        desc: 'Washington employers need a minor work endorsement on their business license before employing anyone under 18, plus a signed parent/school authorization for each minor. Hours limits differ during the school year and summer. We build those limits into scheduling so you never find out at an audit.',
      },
      {
        title: 'Part-timers earn sick leave too',
        desc: "Washington's paid sick leave applies to every employee — part-time and seasonal included — at one hour for every 40 hours worked. Payroll needs to track it from day one, and unused hours carry over (up to 40) for returning seasonal staff.",
      },
      {
        title: 'Centralia license, no city B&O',
        desc: 'Businesses located in Centralia need a city license ($75 to start and $75 to renew). Centralia does not levy a city B&O tax, so you only file the state excise return.',
      },
    ],
    faqs: [
      {
        question: 'Can you meet us in Centralia?',
        answer:
          "Yes. Centralia is part of our home territory — we're based in nearby Rochester and meet Lewis County clients in person.",
      },
      {
        question: 'How do I handle seasonal staff in payroll?',
        answer:
          'Keep them on payroll as inactive between seasons instead of re-hiring from scratch, track their sick leave balance, and confirm the new-season pay rate meets the current Washington minimum wage ($17.13 in 2026). We handle all of that as part of payroll administration.',
      },
      {
        question: 'Where do I get bookkeeping in Centralia?',
        answer:
          'Our Washington bookkeeping service lives on WashingtonBookkeeper.com — including daily sales and sales tax reconciliation for retail and restaurants.',
      },
    ],
    sources: [
      { label: 'Washington DOR — Centralia city endorsement', url: 'https://dor.wa.gov/manage-business/city-endorsements/centralia' },
      { label: 'Washington L&I — 2026 minimum wage', url: 'https://lni.wa.gov/news-events/article/25-27/' },
    ],
  },
  {
    slug: 'chehalis-wa',
    city: 'Chehalis',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'Lewis County',
    region: 'washington',
    inPerson: true,
    wbSlug: 'chehalis-wa',
    blurb: 'Lewis County seat with contractors, industrial employers and county offices.',
    title: 'HR & Payroll for Chehalis, WA Contractors and Employers',
    metaDescription:
      'Payroll and HR for Chehalis, WA contractors and industrial employers — L&I risk classes, workers comp reporting, safety policies and Zoho job tracking. In person from B2B Solutions.',
    h1: 'Payroll and HR for Chehalis contractors and employers',
    intro: [
      "Chehalis is the Lewis County seat, and alongside county offices and courts it has a strong base of contractors, trades and industrial employers around the Port of Chehalis. For those businesses, payroll isn't just paychecks — it's workers' comp.",
      'Washington runs its own workers’ compensation system through L&I, and premiums are calculated on the hours you report in each risk class. Getting the classes and hours right is one of the biggest controllable costs a Chehalis contractor has.',
    ],
    localRules: [
      {
        title: 'L&I risk classes drive your premium',
        desc: 'L&I charges by the hour worked in each job classification, and a roofer costs far more to insure than an office manager. Splitting hours correctly when one employee does both kinds of work can save real money — and it has to hold up if L&I audits you.',
      },
      {
        title: 'Contractor registration and safety',
        desc: 'Construction contractors in Washington must register with L&I, and employers need a written accident prevention program. We help put the written policies in place and keep training records organized in Zoho.',
      },
      {
        title: 'Chehalis license, no city B&O',
        desc: 'Businesses in Chehalis need a Chehalis endorsement on their state business license. Chehalis does not levy a city B&O tax, so contractors report B&O only on the state return.',
      },
    ],
    faqs: [
      {
        question: 'Can you meet with us in Chehalis?',
        answer:
          'Yes. We meet Lewis County clients in person — at your shop, a job-site trailer or our Rochester office.',
      },
      {
        question: 'Can Zoho track hours by job and L&I class?',
        answer:
          'Yes. We set up Zoho so crews log time by job and task, which feeds payroll and gives you clean hours by risk class for your quarterly L&I report — plus job costing for bids.',
      },
      {
        question: 'Where do I get bookkeeping in Chehalis?',
        answer:
          'Our Washington bookkeeping service — including job costing and sales tax by job-site location — lives on WashingtonBookkeeper.com.',
      },
    ],
    sources: [
      { label: 'Washington DOR — city endorsements', url: 'https://dor.wa.gov/taxonomy/term/64?page=3' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
    ],
  },
  {
    slug: 'rochester-wa',
    city: 'Rochester',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'Thurston County',
    region: 'washington',
    inPerson: true,
    wbSlug: 'rochester-wa',
    blurb: 'Our home base — farms, trades and home-based businesses in rural Thurston County.',
    title: 'HR, Payroll & Zoho Consulting in Rochester, WA',
    metaDescription:
      'B2B Solutions is based in Rochester, WA. HR, payroll and Zoho One for local farms, trades and home-based businesses — including Washington agricultural overtime rules.',
    h1: "Rochester's own HR, payroll and Zoho team",
    intro: [
      "Rochester is home. B2B Solutions is based here, and our neighbors are the businesses we know best: farms and nurseries, contractors and trades, and owners running a business out of a shop or spare room off Highway 12.",
      "Rochester is unincorporated Thurston County, so some city paperwork other towns deal with doesn't apply here. What does apply — Washington's payroll and leave programs and its farmworker overtime rules — we handle every week.",
    ],
    localRules: [
      {
        title: 'Farmworker overtime',
        desc: 'Since January 1, 2024, Washington agricultural employers pay overtime after 40 hours a week, the same as everyone else. Farms and nurseries with seasonal crews need payroll that calculates it correctly in peak weeks.',
      },
      {
        title: 'No city license needed',
        desc: "Because Rochester isn't an incorporated city, there's no city license endorsement or city B&O tax — you need your Washington state business license and the state excise return. Businesses that also work in Olympia, Tumwater or Centralia may need those cities' endorsements.",
      },
      {
        title: 'Your first employee',
        desc: 'Hiring for the first time means opening L&I workers’ comp and ESD unemployment accounts and reporting Paid Family & Medical Leave and WA Cares premiums before the first paycheck. Small employers under 50 employees don’t owe the employer share of PFML — but still collect the employee share.',
      },
    ],
    faqs: [
      {
        question: 'Can I meet with you in Rochester?',
        answer:
          "Yes — this is where we are. Meet at our office or we'll come to your farm, shop or home office.",
      },
      {
        question: "I'm hiring my first employee. Where do I start?",
        answer:
          "Start with a call. We'll register your payroll accounts, set up payroll through Cascade Payroll or Gusto, and give you an offer letter and basic policies before day one.",
      },
      {
        question: 'Where do I get bookkeeping in Rochester?',
        answer:
          'Our Washington bookkeeping service lives on WashingtonBookkeeper.com — same team, same office.',
      },
    ],
    sources: [
      { label: 'Washington L&I — 2026 minimum wage and exempt salary', url: 'https://lni.wa.gov/news-events/article/25-27/' },
      { label: 'Washington ESD — 2026 Paid Family & Medical Leave premium', url: 'https://esd.wa.gov/node/1109' },
    ],
  },

  // ─────────────────────────────── Iowa ───────────────────────────────
  {
    slug: 'cedar-rapids-ia',
    city: 'Cedar Rapids',
    state: 'Iowa',
    stateAbbr: 'IA',
    county: 'Linn County',
    region: 'iowa',
    inPerson: true,
    blurb: "Iowa's second-largest city — manufacturers, food processing and a deep professional services base.",
    title: 'Bookkeeping, Payroll & HR in Cedar Rapids, IA',
    metaDescription:
      'Bookkeeping, payroll, fractional HR and Zoho One for Cedar Rapids small businesses. Iowa withholding, sales tax with the local option, and in-person help from our Cedar Rapids office.',
    h1: 'Bookkeeping, payroll and HR in Cedar Rapids',
    intro: [
      "Cedar Rapids is Iowa's second-largest city and a manufacturing town at heart — aerospace, food processing and the suppliers and service firms around them. Small businesses here range from machine shops and contractors to professional offices and family restaurants.",
      'Our Iowa office is in Cedar Rapids, and here we offer everything: monthly bookkeeping, payroll, fractional HR and Zoho One — one team for the whole back office.',
    ],
    localRules: [
      {
        title: 'No city business license',
        desc: "The City of Cedar Rapids doesn't issue general business licenses. You only need a city license for specific activities — alcohol or tobacco sales, mobile food, taxis, pawnbroking and a few others. Your main registrations are with the state.",
      },
      {
        title: 'Sales tax with the local option',
        desc: "Retailers collect Iowa's 6% sales tax plus Cedar Rapids' 1% local option tax, which voters renewed in 2021 through June 30, 2034 to fund street repairs. We reconcile what you collect against what you file each period.",
      },
      {
        title: 'Iowa payroll basics',
        desc: "Iowa withholds income tax at a flat 3.8% rate in 2026. Unemployment is reported to Iowa Workforce Development on the first $20,400 of each employee's 2026 wages, and most new employers start at 1% (5.4% for new construction employers).",
      },
    ],
    faqs: [
      {
        question: 'Do you offer bookkeeping in Cedar Rapids?',
        answer:
          'Yes. Iowa clients get our full bookkeeping service — the same flat monthly plans starting at $250 — along with payroll and HR. See our bookkeeping page for plan details.',
      },
      {
        question: 'Can we meet in person?',
        answer:
          'Yes. Our Iowa office is in Cedar Rapids, and we meet Linn County clients in person. Call our Midwest line at 319-451-0501.',
      },
      {
        question: 'Does Iowa require paid sick leave?',
        answer:
          "No — Iowa has no state paid sick leave law, unlike Washington. Many Cedar Rapids employers still offer PTO to compete for workers. We'll help you write a policy that fits your budget and is applied consistently.",
      },
    ],
    sources: [
      { label: 'City of Cedar Rapids — business licenses and permits', url: 'https://cedar-rapids.org/business/licenses_permits_and_taxes/business_licenses_and_permits/' },
      { label: 'City of Cedar Rapids — local option sales tax', url: 'https://www.cedar-rapids.org/local_government/departments_g_-_v/public_works/program.php' },
      { label: 'Iowa Workforce Development — 2026 unemployment tax rates', url: 'https://workforce.iowa.gov/press-release/2025-09-05/unemployment-insurance-rates-iowa-employers-remain-lowest-possible-level-2026' },
    ],
  },
  {
    slug: 'marion-ia',
    city: 'Marion',
    state: 'Iowa',
    stateAbbr: 'IA',
    county: 'Linn County',
    region: 'iowa',
    inPerson: true,
    blurb: 'Fast-growing Linn County city with trades, home-based businesses and rental owners.',
    title: 'Bookkeeping, Payroll & HR in Marion, IA',
    metaDescription:
      'Bookkeeping, payroll and HR for Marion, Iowa small businesses, contractors and landlords — rental license records, first-hire setup and Zoho One. In person from Cedar Rapids.',
    h1: 'Bookkeeping, payroll and HR for Marion businesses',
    intro: [
      "Marion has grown quickly alongside Cedar Rapids, and its small businesses reflect that: contractors and trades busy with new construction, home-based businesses, and a lot of residents who own a rental or two.",
      'That mix means many Marion owners are doing their own books, hiring their first employee, or managing rental income for the first time. We handle bookkeeping, payroll and HR from our Cedar Rapids office next door.',
    ],
    localRules: [
      {
        title: 'Landlords need a city license',
        desc: 'Marion licenses rental housing and landlords through City Hall. License payments have to be mailed or made in person — online payments ended in November 2024 — so we keep license dates and records with your rental books.',
      },
      {
        title: 'Hiring your first Iowa employee',
        desc: "Before the first paycheck you'll need an Iowa withholding account, an Iowa Workforce Development unemployment account, and to report each new hire to the state within 15 days. We set all of it up with payroll.",
      },
      {
        title: 'New construction employers',
        desc: 'New Iowa construction employers start at a 5.4% unemployment rate in 2026, versus 1% for most new employers — worth knowing before you price your first jobs with crew.',
      },
    ],
    faqs: [
      {
        question: 'Can you keep books for my rental properties?',
        answer:
          "Yes. We track income and expenses by property, keep your landlord license and inspection records together, and hand your tax preparer a clean year-end package.",
      },
      {
        question: 'Can we meet in Marion?',
        answer:
          'Yes. We meet Marion clients in person from our Cedar Rapids office. Call 319-451-0501.',
      },
      {
        question: 'Do I need a city license to run a business from home in Marion?',
        answer:
          'Marion handles licensing by type rather than one general license. Call City Hall at 319-743-6301 to confirm what applies to your business; we can help you sort out the state registrations.',
      },
    ],
    sources: [
      { label: 'City of Marion — licenses and permits', url: 'https://cityofmarion.org/government/administration/city-clerk/licenses-permits/licensing-payments' },
      { label: 'Bloomberg Tax — Iowa 2026 unemployment tax rates', url: 'https://news.bloombergtax.com/payroll/iowa-releases-2026-unemployment-insurance-tax-rates' },
    ],
  },
];
