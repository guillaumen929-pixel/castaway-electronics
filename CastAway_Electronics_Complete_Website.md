# Cast Away Cleanouts — Electronics & Recycling
## Complete Website Markdown — All 4 Pages

---

# GLOBAL: BRAND TOKENS

```
Primary Dark Navy:   #1B2A3B
Accent Teal:         #00B4D8
White:               #FFFFFF
Light Gray BG:       #F4F6F8
Text Dark:           #1A1A2A
Footer BG:           #0D1B2A
CTA Button:          #00B4D8 → white text
Font:                Syne (headings) + DM Sans (body)
```

---

# GLOBAL: NAVIGATION (all pages)

```
[LOGO] Cast Away Cleanouts          Home | About | Services | Contact Us     [📞 954-366-1180]  [Get a Free Quote →]
       Electronics & Recycling
```

- Sticky top, dark navy `#1B2A3B` background
- Logo left, nav center, phone + CTA right
- Active page: teal underline
- Mobile: hamburger → full-screen slide-down menu

---

# GLOBAL: FOOTER (all pages)

```
┌─────────────────────────────────────────────────────────────┐
│  Cast Away Cleanouts          Quick Links    Contact         │
│  Electronics & Recycling      ──────────    ─────────────   │
│                               Home          226 Basin Dr    │
│  South Florida's Trusted      About         Lauderdale by   │
│  E-Waste Recycling Partner    Services      the Sea FL 33308│
│                               Contact Us                    │
│  [FB icon]  [IG icon]                       954-366-1180    │
│                                             Info@Castaway   │
│                                             Cleanouts.com   │
├─────────────────────────────────────────────────────────────┤
│  © 2026 Cast Away Cleanouts  |  Powered by Pros             │
└─────────────────────────────────────────────────────────────┘
```

Background: `#0D1B2A` | Text: white | Links: teal on hover

---

---

# PAGE 1 — HOME (index.html)

---

## SECTION 1: HERO

**Layout:** Full-width, dark overlay on glowing electronics AI image
**Height:** 100vh

```
┌──────────────────────────────────────────────────────────────┐
│  [IMAGE: Glowing electronics in the dark — AI generated]     │
│  [Dark navy overlay at 70% opacity]                          │
│                                                              │
│              Cast Away Cleanouts                             │
│           Electronics & Recycling                            │
│                                                              │
│   ┌──────────────────────────────────────────────────┐      │
│   │  South Florida's Trusted Electronics Recycling   │      │
│   │       & Data Destruction Service                 │      │
│   └──────────────────────────────────────────────────┘      │
│                                                              │
│   We safely recycle, repurpose, and destroy electronic       │
│   devices — protecting your data and the planet.             │
│   Serving South Florida since 2014.                          │
│                                                              │
│   [Get a Free Quote →]    [📞 Call 954-366-1180]             │
│                                                              │
│   ✅ Licensed & Insured  ✅ Certified Data Destruction        │
│   ✅ Eco-Friendly        ✅ South Florida 10+ Years           │
└──────────────────────────────────────────────────────────────┘
```

**Notes:**
- H1: "South Florida's Trusted Electronics Recycling & Data Destruction Service"
- Subtitle: DM Sans 18px, white at 80% opacity
- Primary CTA: teal pill button, white text
- Secondary CTA: white outline button
- Trust badges: small teal checkmarks, white text, row beneath CTAs
- Subtle animated circuit pattern overlay (CSS, very low opacity)
- Fade-up animation on text on load

---

## SECTION 2: SERVICES SNAPSHOT

**Layout:** White background, 4-column card grid
**Heading:** "What We Do"

```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  🖥️     │  │  🔒     │  │  🏢     │  │  🏠     │
│         │  │         │  │         │  │         │
│ Electron│  │  Data   │  │Business │  │Resident │
│  -ics   │  │Destruct │  │E-Waste  │  │  -ial   │
│Recycling│  │  -ion   │  │ Pickup  │  │ Pickup  │
│         │  │         │  │         │  │         │
│Responsib│  │Certified│  │Scheduled│  │Convenien│
│le recycl│  │hard driv│  │bulk pick│  │t curbsid│
│ing of   │  │e shred- │  │up for   │  │e collect│
│all e-   │  │ding and │  │offices &│  │ion acros│
│waste    │  │data wipe│  │corps    │  │s S. FL  │
│         │  │         │  │         │  │         │
│Learn More│  │Learn More│  │Learn More│  │Learn More│
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

**Notes:**
- Background: `#F4F6F8`
- Cards: white, 1px border `#E0E8F0`, 12px radius, subtle hover lift
- Icon: 32px teal SVG (Lucide: Monitor, ShieldCheck, Building2, Home)
- "Learn More" → links to services.html
- Mobile: 2×2 grid → 1 column

---

## SECTION 3: WHY CHOOSE US

**Layout:** Split — text left (55%) + stats/visual right (45%)
**Background:** Dark navy `#1B2A3B`

```
┌────────────────────────────┬──────────────────────────┐
│                            │                          │
│  Why South Florida         │   ┌──────┐  ┌──────┐   │
│  Trusts Cast Away          │   │  10+ │  │ 100% │   │
│  ─────────────────         │   │ yrs  │  │secure│   │
│                            │   └──────┘  └──────┘   │
│  ✦ 10+ years serving       │   ┌──────┐  ┌──────┐   │
│    South Florida           │   │ eco  │  │ free │   │
│                            │   │ cert │  │quotes│   │
│  ✦ Certified secure data   │   └──────┘  └──────┘   │
│    destruction             │                          │
│                            │  [IMAGE: Circuit board   │
│  ✦ Eco-conscious recycling │   macro — dark, teal     │
│    and responsible dispose │   accent glow]           │
│                            │                          │
│  ✦ No job too big or small │                          │
│                            │                          │
│  ✦ Fast, free quotes       │                          │
│                            │                          │
│  ✦ Fully licensed & insured│                          │
│                            │                          │
└────────────────────────────┴──────────────────────────┘
```

**Notes:**
- All text white on navy
- Teal diamond ✦ for bullet points
- Stat cards: `#243447` background, teal number, white label
- Image: circuit board macro prompt (21:9 crop, teal glow)
- Animate stats counting up on scroll-enter

---

## SECTION 4: AREAS SERVED

**Layout:** Centered, light gray background
**Heading:** "Proudly Serving South Florida"

```
         Proudly Serving South Florida

  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Fort Lauderdale│  │Pompano Beach │  │Lauderdale-by-│
  │               │  │              │  │  the-Sea     │
  └──────────────┘  └──────────────┘  └──────────────┘
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Deerfield Beach│  │  Boca Raton  │  │ Oakland Park │
  └──────────────┘  └──────────────┘  └──────────────┘
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Wilton Manors │  │Coral Springs │  │Broward County│
  └──────────────┘  └──────────────┘  └──────────────┘

           [Get a Free Quote →]
```

**Notes:**
- Background: `#F4F6F8`
- Pills: white bg, teal border, navy text, 24px radius
- Hover: fill teal, white text
- Center-aligned layout
- Simple SVG map of South Florida outline above pills (optional)

---

## SECTION 5: TESTIMONIALS

**Layout:** 3-column card grid
**Background:** White

```
         What Our Customers Say

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ ★★★★★           │ │ ★★★★★           │ │ ★★★★★           │
│                 │ │                 │ │                 │
│ "Chris and the  │ │ "Very understand│ │ "Professional,  │
│ team were       │ │ -ing, great     │ │ efficient, and  │
│ professional,   │ │ attitude, best  │ │ easy to work    │
│ fast, and made  │ │ price. I know   │ │ with from start │
│ recycling our   │ │ where to go for │ │ to finish."     │
│ office gear     │ │ these services!"│ │                 │
│ completely      │ │                 │ │                 │
│ stress-free."   │ │                 │ │                 │
│                 │ │                 │ │                 │
│ — Eric M.       │ │ — Sergio E.     │ │ — Susan B.      │
│ Pompano Beach,FL│ │ Hollywood, FL   │ │ Broward Co., FL │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

**Notes:**
- Large teal opening quote mark `"` decorative
- Stars: teal `#00B4D8`
- Card: white, `#E0E8F0` border, slight shadow on hover
- Name: bold navy, location: gray small text

---

## SECTION 6: FINAL CTA BANNER

**Layout:** Full-width, dark navy, centered

```
┌──────────────────────────────────────────────────────────────┐
│  [IMAGE: Circuit board macro overlay — very low opacity]     │
│                                                              │
│           Ready to Recycle Responsibly?                      │
│                                                              │
│   Call or text us today for a fast, free quote.             │
│          Serving South Florida since 2014.                   │
│                                                              │
│              [Get a Free Quote →]                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Notes:**
- Background: `#1B2A3B` with subtle circuit overlay at 5% opacity
- H2: white, Syne bold 36px
- Subtitle: white 60% opacity
- CTA: teal button, white text, hover brightens

---

---

# PAGE 2 — ABOUT (about.html)

---

## SECTION 1: PAGE BANNER

```
┌──────────────────────────────────────────────────────────────┐
│  [IMAGE: Electronics recycling facility — wide panoramic]    │
│  [Dark navy overlay 65%]                                     │
│                                                              │
│                    About Us                                  │
│         Cast Away Cleanouts — Electronics & Recycling        │
└──────────────────────────────────────────────────────────────┘
```

**Notes:** 16:5 aspect ratio, image tinted with navy overlay, H1 centered white

---

## SECTION 2: MAIN ABOUT — SPLIT

**Layout:** Image left (45%) + text right (55%)
**Background:** White

```
┌──────────────────────┬──────────────────────────────────────┐
│                      │                                      │
│  [IMAGE: Technician  │  Cast Away Cleanouts                 │
│   holding circuit    │  — Electronics & Recycling           │
│   board — no people  │  ────────────────────────            │
│   version:           │                                      │
│   glowing electronics│  Cast Away Cleanouts — Electronics   │
│   close-up]          │  & Recycling is a professional       │
│                      │  e-waste recycling and certified     │
│                      │  data destruction company serving    │
│                      │  South Florida since 2014.           │
│                      │                                      │
│                      │  As a sister company to Cast Away    │
│                      │  Cleanouts Estate & Property         │
│                      │  Cleanouts, we bring the same        │
│                      │  trusted, reliable service to        │
│                      │  electronics disposal.               │
│                      │                                      │
│                      │  We help homeowners, businesses,     │
│                      │  IT departments, schools, and        │
│                      │  property managers safely dispose    │
│                      │  of electronics — from single        │
│                      │  devices to full office cleanouts.   │
│                      │                                      │
│                      │  [Learn About Our Services →]        │
└──────────────────────┴──────────────────────────────────────┘
```

**Notes:**
- Image: use glowing electronics AI image (cropped 3:4) or dark flat lay
- Text block: left-aligned, generous line-height 1.8
- CTA link: teal text with arrow, no button

---

## SECTION 3: WHAT WE ACCEPT

**Layout:** Dark navy background, checklist grid
**Heading:** "Electronics We Accept"

```
        Electronics We Accept

  ✔ Desktop Computers       ✔ Laptops & Tablets
  ✔ Monitors & Displays     ✔ Servers & Networking
  ✔ Printers & Scanners     ✔ Televisions (all sizes)
  ✔ Cell Phones             ✔ Hard Drives & Storage
  ✔ Audio/Visual Equipment  ✔ Gaming Consoles
  ✔ Cables & Peripherals    ✔ Batteries & UPS Units
  ✔ Medical Equipment       ✔ Office Electronics
  ✔ Kitchen Electronics     ✔ And much more!
```

**Notes:**
- Background: `#1B2A3B`
- All text white, checkmarks teal
- 2-column grid desktop, 1-column mobile
- Subtle dark flat lay image at 8% opacity behind grid

---

## SECTION 4: MISSION & VALUES

**Layout:** White background, 3 icon cards centered
**Heading:** "Our Mission & Values"

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│                 │  │                 │  │                 │
│   🌱 [Leaf]     │  │  🔐 [Shield]    │  │  🤝 [Users]     │
│                 │  │                 │  │                 │
│  Eco-           │  │  Data           │  │  Community      │
│  Responsibility │  │  Security       │  │  Trust          │
│                 │  │                 │  │                 │
│  We divert      │  │  Your privacy   │  │  South Florida  │
│  e-waste from   │  │  is our         │  │  has trusted    │
│  landfills      │  │  priority.      │  │  the Cast Away  │
│  through cert.  │  │  Certified      │  │  name since     │
│  recycling      │  │  destruction    │  │  2014.          │
│                 │  │  guaranteed.    │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

**Notes:**
- Icons: Lucide Leaf, ShieldCheck, Users — 40px, teal
- Cards: white, teal top-border accent (3px), hover lift
- Background: `#F4F6F8`

---

## SECTION 5: AREAS SERVED + CTA

*(Same as Home page areas served section)*

---

---

# PAGE 3 — SERVICES (services.html)

---

## SECTION 1: PAGE BANNER

```
┌──────────────────────────────────────────────────────────────┐
│  [IMAGE: Glowing hard drives on dark background]             │
│  [Dark navy overlay 65%]                                     │
│                                                              │
│                   Our Services                               │
│   Everything you need for responsible electronics disposal   │
└──────────────────────────────────────────────────────────────┘
```

---

## SECTION 2: 6 SERVICE CARDS

**Layout:** 3×2 card grid
**Background:** `#F4F6F8`

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  [Recycle icon]  │  │  [Lock icon]     │  │  [Building icon] │
│                  │  │                  │  │                  │
│  Electronics     │  │  Certified Data  │  │  Business &      │
│  Recycling       │  │  Destruction     │  │  Corporate       │
│                  │  │                  │  │  E-Waste Pickup  │
│  We responsibly  │  │  Protecting your │  │  Scheduled bulk  │
│  recycle all     │  │  sensitive data  │  │  pickups for     │
│  consumer and    │  │  is our top      │  │  offices, IT     │
│  commercial      │  │  priority.       │  │  departments,    │
│  electronics.    │  │  Certified hard  │  │  schools &       │
│  Computers, TVs, │  │  drive shredding │  │  corporations.   │
│  monitors,       │  │  and data wipe.  │  │  No fleet too    │
│  phones, tablets │  │  Certificate     │  │  large.          │
│  and more.       │  │  on request.     │  │                  │
│                  │  │                  │  │                  │
│  [Get a Quote →] │  │  [Get a Quote →] │  │  [Get a Quote →] │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  [Home icon]     │  │  [Server icon]   │  │  [HardDrive icon]│
│                  │  │                  │  │                  │
│  Residential     │  │  IT Asset        │  │  Hard Drive      │
│  Electronics     │  │  Disposition     │  │  Shredding       │
│  Pickup          │  │  (ITAD)          │  │                  │
│                  │  │                  │  │  On-site or      │
│  Old TVs,        │  │  Retire outdated │  │  off-site hard   │
│  computers, or   │  │  IT assets       │  │  drive shredding │
│  phones piling   │  │  responsibly.    │  │  for complete    │
│  up at home?     │  │  Inventory, data │  │  data security.  │
│  Schedule a      │  │  sanitization,   │  │  Destroys HDDs,  │
│  convenient      │  │  certified       │  │  SSDs, USBs,     │
│  pickup across   │  │  destruction,    │  │  tapes.          │
│  South Florida.  │  │  eco recycling.  │  │  DOD standards.  │
│                  │  │                  │  │  Cert available. │
│  [Get a Quote →] │  │  [Get a Quote →] │  │  [Get a Quote →] │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Notes:**
- Cards: white bg, 0.5px border, teal icon top-left, navy H3
- "Get a Quote →" teal text link at bottom of each card
- Hover: teal left-border accent appears, slight lift
- Mobile: 1 column stack

---

## SECTION 3: FULL ACCEPTED ITEMS LIST

**Layout:** Two-column — image left, checklist right
**Background:** Dark navy `#1B2A3B`

```
┌─────────────────────┬────────────────────────────────────────┐
│                     │                                        │
│  [IMAGE: Dark flat  │  Full List of Electronics We Accept    │
│   lay — circuit     │  ─────────────────────────────────     │
│   boards, cables,   │                                        │
│   chips on black    │  ✔ Desktop Computers                   │
│   surface]          │  ✔ Laptops & Tablets                   │
│                     │  ✔ Monitors & Displays                 │
│                     │  ✔ Servers & Networking Equipment      │
│                     │  ✔ Printers & Scanners                 │
│                     │  ✔ Televisions (all sizes)             │
│                     │  ✔ Cell Phones & Smartphones           │
│                     │  ✔ Hard Drives & Storage Devices       │
│                     │  ✔ Audio/Visual Equipment              │
│                     │  ✔ Gaming Consoles                     │
│                     │  ✔ Cables & Peripherals                │
│                     │  ✔ Batteries & UPS Units               │
│                     │  ✔ Medical Equipment (non-regulated)   │
│                     │  ✔ Office Electronics                  │
│                     │  ✔ Kitchen Electronics                 │
│                     │  ✔ And much more!                      │
│                     │                                        │
└─────────────────────┴────────────────────────────────────────┘
```

---

## SECTION 4: HOW IT WORKS

**Layout:** 3-step horizontal flow
**Background:** White

```
            How It Works — 3 Simple Steps

  ┌─────────────────────────────────────────────────────┐
  │                                                     │
  │  ①                    ②                    ③        │
  │  [Phone icon]         [Calendar icon]      [Check]  │
  │                                                     │
  │  Call or              Schedule             Responsi │
  │  Request              a Pickup             -ble     │
  │  a Quote                                   Recycling│
  │                                                     │
  │  Contact us by        We come to you       We handle│
  │  phone, text,         at a time that       everything│
  │  or online form.      works for your       You get a│
  │                       schedule.            receipt &│
  │                                            peace of │
  │                                            mind.    │
  │                                                     │
  │          ────────────────────────────              │
  │              (teal connecting line)                 │
  └─────────────────────────────────────────────────────┘
```

**Notes:**
- Step numbers: large teal circles, white number, Syne bold
- Icons: Lucide Phone, CalendarCheck, CheckCircle — 28px teal
- Connecting line: dashed teal line between steps
- Mobile: vertical stack with line going down

---

## SECTION 5: AREAS SERVED + CTA

*(Same as Home page)*

---

---

# PAGE 4 — CONTACT (contact.html)

---

## SECTION 1: PAGE BANNER

```
┌──────────────────────────────────────────────────────────────┐
│  [IMAGE: Van with teal lighting at dusk — AI generated]      │
│  [Dark navy overlay 60%]                                     │
│                                                              │
│                  Get a Free Quote                            │
│       Fast, free, and no obligation — we come to you         │
└──────────────────────────────────────────────────────────────┘
```

---

## SECTION 2: CONTACT SPLIT

**Layout:** Info left (40%) + Form right (60%)
**Background:** White

```
┌─────────────────────────┬────────────────────────────────────┐
│                         │                                    │
│  Ready to Recycle        │  ┌──────────────────────────┐    │
│  Responsibly?            │  │  First Name              │    │
│  ─────────────────       │  ├──────────────────────────┤    │
│                         │  │  Last Name               │    │
│  📞 954-366-1180         │  ├──────────────────────────┤    │
│  Call or Text            │  │  Phone Number            │    │
│                         │  ├──────────────────────────┤    │
│  📧 Info@Castaway        │  │  Email Address *         │    │
│     Cleanouts.com        │  ├──────────────────────────┤    │
│                         │  │  Service Needed ▼         │    │
│  📍 226 Basin Dr         │  │  ○ Electronics Recycling  │    │
│     Lauderdale by the    │  │  ○ Data Destruction       │    │
│     Sea FL 33308         │  │  ○ Business Pickup        │    │
│                         │  │  ○ Residential Pickup     │    │
│  ✅ Serving S. Florida   │  │  ○ Hard Drive Shredding   │    │
│     since 2014           │  │  ○ Other                  │    │
│                         │  ├──────────────────────────┤    │
│  ✅ Fully Licensed       │  │  Message                 │    │
│     & Insured            │  │                          │    │
│                         │  │                          │    │
│                         │  │                          │    │
│                         │  ├──────────────────────────┤    │
│                         │  │  [Send Message →]        │    │
│                         │  └──────────────────────────┘    │
└─────────────────────────┴────────────────────────────────────┘
```

**Notes:**
- Left panel: navy bg `#1B2A3B`, white text, teal icons
- Right panel: white bg, form inputs with teal focus border
- Service dropdown: styled select with teal accent
- Submit button: full-width teal, white text, hover darkens
- Form action: `mailto:Info@CastawayCleanouts.com` fallback
- Success state: teal checkmark + "Thanks! We'll be in touch." message

---

## SECTION 3: AREAS SERVED

**Layout:** Same pill grid as other pages
**Background:** `#F4F6F8`
**Heading:** "We Come to You — Serving All of South Florida"

```
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Fort Lauderdale│  │Pompano Beach │  │Lauderdale-by-│
  │               │  │              │  │  the-Sea     │
  └──────────────┘  └──────────────┘  └──────────────┘
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Deerfield Beach│  │  Boca Raton  │  │ Oakland Park │
  └──────────────┘  └──────────────┘  └──────────────┘
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │Wilton Manors │  │Coral Springs │  │Broward County│
  └──────────────┘  └──────────────┘  └──────────────┘
```

---

---

# IMAGE PLACEMENT SUMMARY

| Image | File Name | Used On | Placement |
|---|---|---|---|
| Glowing electronics (AI — have) | `hero-electronics.jpg` | Home | Full hero background |
| Glowing electronics (cropped) | `hero-electronics.jpg` | About | Split section left image |
| Van at dusk teal lighting (generate) | `van-dusk.jpg` | Contact | Page banner |
| Facility wide panoramic (generate) | `facility-banner.jpg` | About | Page banner |
| Glowing hard drives (generate) | `hard-drives.jpg` | Services | Page banner |
| Dark flat lay circuit boards (generate) | `flatlay-dark.jpg` | Services | Accepted items section left |
| Electronics flat lay white (generate) | `flatlay-white.jpg` | Services | How It Works bg accent |
| Circuit board macro 21:9 (generate) | `circuit-macro.jpg` | Home | Why Choose Us + CTA overlay |

---

# ANIMATION & INTERACTION NOTES

- **On load:** Hero text fades up with 0.3s staggered delay per line
- **On scroll:** Each section fades in and slides up 20px (Intersection Observer)
- **Stat cards:** Numbers count up from 0 when scrolled into view
- **Service cards:** Teal left-border slides in on hover
- **Nav:** Becomes solid navy + slight shadow after scrolling 80px
- **CTA buttons:** Scale 1.03 on hover, 0.97 on active
- **Area pills:** Fill teal on hover with 0.2s transition
- **Form inputs:** Teal border glow on focus

---

# FONT IMPORT (in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

---

# CSS VARIABLES (`:root`)

```css
:root {
  --navy:       #1B2A3B;
  --navy-deep:  #0D1B2A;
  --navy-card:  #243447;
  --teal:       #00B4D8;
  --teal-dark:  #0099BB;
  --white:      #FFFFFF;
  --gray-light: #F4F6F8;
  --gray-border:#E0E8F0;
  --text-dark:  #1A1A2A;
  --text-mid:   #4A5568;
  --text-light: #718096;
  --font-head:  'Syne', sans-serif;
  --font-body:  'DM Sans', sans-serif;
  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --shadow-sm:  0 2px 8px rgba(0,0,0,0.06);
  --shadow-md:  0 8px 24px rgba(0,0,0,0.10);
  --transition: 0.2s ease;
}
```

---

*End of Complete Website Markdown*
*Cast Away Cleanouts — Electronics & Recycling*
*© 2026 | Info@CastawayCleanouts.com | 954-366-1180*
