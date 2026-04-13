import { useState, useEffect, useRef } from "react";

// ─── PRODUCT DATA ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    slug: "cloud",
    name: "Cloud",
    family: "Cloud",
    designer: "Frank O. Gehry",
    category: "Pendant",
    type: "Suspension Luminaire",
    price: 1840,
    colourTemp: "2700K / RGBW",
    lumens: "1200 lm",
    wattage: "18W LED",
    cri: "CRI 90+",
    dimming: "DALI / Touch-dim",
    finish: ["White", "RGBW Anniversary"],
    ipRating: "IP20",
    tag: "Red Dot 2025",
    tagAccent: "#C8A96E",
    description: "Frank O. Gehry's Cloud is one of the most iconic luminaires in contemporary design. Its voluminous yet delicate polyester shade — shaped by hand during production — is unique to every piece. Folds, crimps and subtle bulges give Cloud its characteristic sculptural quality, evoking a soft snowball or a fleecy cumulus. Gehry conceived it as a homage to Isamu Noguchi's Akari series. The shade can be reshaped by the user, making each owner a co-designer.",
    suitableFor: ["High-end residential", "Hospitality", "Cultural spaces"],
    leadTime: "4–6 weeks",
    ukPlug: true,
    specs: {
      "Shade Diameter": "Ø 480 – 650 mm",
      "Overall Height": "Up to 1,700 mm",
      "Light Source": "G9 LED / RGBW",
      "Suspension": "Textile cable",
      "Colour Options": "White / RGBW",
    },
    gradient: "linear-gradient(160deg, #f8f4ee 0%, #e8dfd0 100%)",
    textDark: true,
    accentColour: "#C8A96E",
    icon: "☁",
  },
  {
    id: 2,
    slug: "oto",
    name: "Oto",
    family: "Oto",
    designer: "Reto Schöpfer",
    category: "Pendant",
    type: "Office / Architectural Pendant",
    price: 2650,
    colourTemp: "3000K / 4000K",
    lumens: "Up to 6,000 lm",
    wattage: "50W LED",
    cri: "CRI 90+",
    dimming: "DALI (dual address)",
    finish: ["White", "Black", "Anthracite"],
    ipRating: "IP20",
    tag: "Red Dot 2025",
    tagAccent: "#E05C3A",
    description: "Reto Schöpfer's Oto is the Red Dot Award–winning response to modern workplace lighting. Its high-quality silicone diffuser delivers both precise task illumination and generous indirect ambient light — controlled independently via DALI with dual addressing. The striking geometric form is equally at home suspended over a conference table, surface-mounted to a boardroom ceiling, or standing freely in a studio. Oto integrates an optional Multisens daylight and motion sensor for BREEAM-aligned projects.",
    suitableFor: ["Commercial offices", "Boardrooms", "Design studios"],
    leadTime: "3–5 weeks",
    ukPlug: true,
    specs: {
      "Pendant Diameter": "Ø 300 / 500 mm",
      "Mounting": "Pendant / Surface / Free-standing",
      "Dimming": "DALI (two addresses)",
      "Sensor": "Multisens daylight & motion (optional)",
      "Cable": "5-core textile cable",
    },
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 100%)",
    textDark: false,
    accentColour: "#E05C3A",
    icon: "◉",
  },
  {
    id: 3,
    slug: "koi-s",
    name: "Koi-S",
    family: "Koi",
    designer: "Naoto Fukasawa",
    category: "Pendant",
    type: "Multi-format Luminaire",
    price: 1290,
    colourTemp: "3000K / 4000K",
    lumens: "9,000 lm",
    wattage: "65W LED",
    cri: "CRI 90+",
    dimming: "DALI / Phase-cut",
    finish: ["White", "Black", "Chrome"],
    ipRating: "IP20",
    tag: "Naoto Fukasawa",
    tagAccent: "#4A7A6E",
    description: "Naoto Fukasawa's 'Super Normal Design' philosophy defines the Koi-S family. Its consistently slim-line construction lends the luminaire a refined, almost weightless elegance. Despite its modest profile, Koi-S delivers an exceptional 9,000 lumens of non-directional LED light with a UGR of less than 13 — making it outstanding for glare-sensitive environments. Direct and indirect outputs are independently dimmable. The shade removes without tools for straightforward maintenance. Available as pendant, floor lamp, table lamp or ceiling-mounted luminaire.",
    suitableFor: ["Open-plan offices", "Home offices", "Hospitality"],
    leadTime: "3–4 weeks",
    ukPlug: true,
    specs: {
      "Head Diameter": "Ø 300 mm",
      "Output": "9,000 lm total",
      "UGR": "< 13",
      "Mounting": "Pendant / Floor / Table / Ceiling",
      "Finishes": "White / Black / Chrome",
    },
    gradient: "linear-gradient(160deg, #e8ede8 0%, #d4ddd4 100%)",
    textDark: true,
    accentColour: "#4A7A6E",
    icon: "◎",
  },
  {
    id: 4,
    slug: "lifto",
    name: "Lifto",
    family: "Lifto",
    designer: "Benjamin Thut",
    category: "Table Lamp",
    type: "Task Luminaire",
    price: 890,
    colourTemp: "3000K",
    lumens: "1,800 lm",
    wattage: "22W LED",
    cri: "CRI 90+",
    dimming: "Touch-dim (integrated)",
    finish: ["Chrome", "Black"],
    ipRating: "IP20",
    tag: "Since 1984",
    tagAccent: "#7A6E9E",
    description: "Benjamin Thut's Lifto was born from the 1984 Belux design competition and remains one of Swiss design's enduring icons. The patented gas-pressure spring mechanism — inspired by car-boot lids — gives Lifto its extraordinary freedom of movement. Three articulated joints glide with a single hand yet hold any position across a wide radius of action. Ten high-power LEDs deliver broad, even desk illumination with excellent colour rendering. Dimming is integrated directly into the stem. A classic at home on the desks of architects, barristers and creative directors alike.",
    suitableFor: ["Architectural studios", "Legal chambers", "Home offices"],
    leadTime: "2–3 weeks",
    ukPlug: true,
    specs: {
      "Reach Radius": "Up to 1,000 mm",
      "Base Footprint": "Ø 180 mm",
      "Mechanism": "Patented gas-pressure spring",
      "Joints": "3 articulated",
      "Plug": "UK Type G",
    },
    gradient: "linear-gradient(160deg, #1c1c2e 0%, #2a2a45 100%)",
    textDark: false,
    accentColour: "#9E8ECE",
    icon: "⌬",
  },
  {
    id: 5,
    slug: "twilight",
    name: "Twilight",
    family: "Twilight",
    designer: "Hannes Wettstein",
    category: "Floor Lamp",
    type: "Decorative Floor Luminaire",
    price: 1620,
    colourTemp: "2700K Dim-to-Warm",
    lumens: "800 lm (direct) + 400 lm (indirect)",
    wattage: "28W LED",
    cri: "CRI 92+",
    dimming: "Touch-dim / Dim-to-Warm",
    finish: ["Stainless Steel (brushed)", "Black (painted)"],
    ipRating: "IP20",
    tag: "Dim-to-Warm",
    tagAccent: "#C87840",
    description: "Hannes Wettstein's Twilight is at once a light source and a light sculpture. Inside its hand-crafted art-glass body, LEDs at both the top and base emit light towards one another, transforming the column into a luminous object of quiet drama. An additional LED spot provides indirect ceiling wash. The two light circuits — the glowing body and the ceiling beam — are independently dimmable, enabling everything from full-room illumination to intimate, atmospheric candlelight. Dim-to-Warm technology shifts the colour temperature from a crisp 3000K down to a candlelit 2200K as it dims.",
    suitableFor: ["Private residences", "Members' clubs", "Showrooms"],
    leadTime: "4–5 weeks",
    ukPlug: true,
    specs: {
      "Total Height": "1,620 mm",
      "Glass Body Height": "400 mm",
      "Dimming": "Touch-dim on cable",
      "Colour Shift": "3000K → 2200K (Dim-to-Warm)",
      "Plug": "UK Type G",
    },
    gradient: "linear-gradient(160deg, #1a0e00 0%, #2e1a00 100%)",
    textDark: false,
    accentColour: "#F0A050",
    icon: "▽",
  },
  {
    id: 6,
    slug: "inline-neo",
    name: "Inline Neo",
    family: "Inline",
    designer: "Belux Design Team",
    category: "Ceiling",
    type: "Linear Architectural System",
    price: 480,
    colourTemp: "3000K / 4000K",
    lumens: "Up to 4,500 lm/m",
    wattage: "35W/m LED",
    cri: "CRI 90+",
    dimming: "DALI / 0–10V",
    finish: ["White", "Black", "Anodised Aluminium"],
    ipRating: "IP20",
    tag: "Architectural",
    tagAccent: "#2A6EA6",
    description: "Belux Inline Neo is the architect's linear system of choice for continuous ceiling runs, recessed slots and surface-mounted grids. Available from 561 mm and scalable within a 281 mm design grid, it enables seamless runs of virtually any length. The satined diffuser achieves even, glare-controlled illumination across the full profile. Colour filters can be inserted laterally for accent applications. Inline Neo is particularly specified for high-specification commercial fit-outs, cultural institutions and retail environments where lighting precision and visual calm are paramount.",
    suitableFor: ["Commercial fit-outs", "Cultural institutions", "Retail"],
    leadTime: "5–8 weeks",
    ukPlug: false,
    specs: {
      "Module Length": "From 561 mm",
      "Design Grid": "281 mm",
      "Output": "Up to 4,500 lm/m",
      "Diffuser": "Satined (glare-controlled)",
      "Dimming": "DALI / 0–10V",
    },
    gradient: "linear-gradient(160deg, #0a1520 0%, #0e2035 100%)",
    textDark: false,
    accentColour: "#4AACF0",
    icon: "▬",
  },
  {
    id: 7,
    slug: "o-lite",
    name: "O-Lite",
    family: "O-Lite",
    designer: "Hannes Wettstein",
    category: "Wall",
    type: "Wall & Ceiling Luminaire",
    price: 620,
    colourTemp: "3000K / 4000K",
    lumens: "1,400 lm",
    wattage: "14W LED",
    cri: "CRI 90+",
    dimming: "Phase-cut",
    finish: ["White", "Anodised Aluminium"],
    ipRating: "IP54",
    tag: "Indoor & Outdoor",
    tagAccent: "#3A8A5A",
    description: "Hannes Wettstein's O-Lite is a masterclass in dematerialised light. Layered acrylic and polycarbonate shells — reminiscent of a 1970s car headlamp — produce a brilliantly diffused, glare-free LED output with minimal visible hardware. The IP54 rating qualifies O-Lite for both interior and sheltered exterior applications: entrance halls, garden walls, covered terraces. Feed-through wiring allows series installation without interruption. Its compact geometry suits both heritage and contemporary architecture without visual intrusion.",
    suitableFor: ["Entrance halls", "Exterior walls", "Hospitality"],
    leadTime: "3–4 weeks",
    ukPlug: false,
    specs: {
      "Diameter": "Ø 145 mm",
      "Projection": "75 mm",
      "IP Rating": "IP54 (indoor & outdoor)",
      "Wiring": "Feed-through ready",
      "Finishes": "White / Anodised",
    },
    gradient: "linear-gradient(160deg, #0e1a10 0%, #1a2e1a 100%)",
    textDark: false,
    accentColour: "#60C880",
    icon: "○",
  },
  {
    id: 8,
    slug: "tubo",
    name: "Tubo",
    family: "Tubo",
    designer: "Competition Winner 1984",
    category: "Table Lamp",
    type: "Adjustable Task Luminaire",
    price: 540,
    colourTemp: "3000K",
    lumens: "1,200 lm",
    wattage: "12W LED",
    cri: "CRI 90+",
    dimming: "Integrated button-dim",
    finish: ["Chrome", "Black"],
    ipRating: "IP20",
    tag: "Iconic Since 1984",
    tagAccent: "#8A6A4A",
    description: "Selected from over 400 entries in Belux's 1984 international design competition, Tubo has endured for four decades with barely a revision — testament to the purity of its concept. A single rod rotates on its own axis to redirect light, while the retaining bracket adjusts height without joints. Light is emitted across two-thirds of the rod's length through a satined diffuser, producing soft, practically shadow-free illumination. An integrated button dims the output. Available with UK Type G plug. Simple. Brilliant. Timeless.",
    suitableFor: ["Architectural studios", "Private studies", "Reading rooms"],
    leadTime: "2–3 weeks",
    ukPlug: true,
    specs: {
      "Rod Length": "560 mm",
      "Rotation": "360° axis rotation",
      "Dimmer": "Integrated push-button",
      "Diffuser": "Satined",
      "Plug": "UK Type G",
    },
    gradient: "linear-gradient(160deg, #1e1408 0%, #2e200e 100%)",
    textDark: false,
    accentColour: "#C8A06A",
    icon: "—",
  },
  {
    id: 9,
    slug: "mamacloud",
    name: "Mamacloud",
    family: "Cloud",
    designer: "Frank O. Gehry",
    category: "Pendant",
    type: "Large-Scale Suspension Luminaire",
    price: 3200,
    colourTemp: "2700K",
    lumens: "2,400 lm",
    wattage: "32W LED",
    cri: "CRI 90+",
    dimming: "DALI / Touch-dim",
    finish: ["White"],
    ipRating: "IP20",
    tag: "Statement Piece",
    tagAccent: "#A87050",
    description: "Mamacloud is the grand statement from Frank O. Gehry's celebrated Cloud family — a sculptural suspension luminaire of generous proportions, conceived for double-height entrance halls, atria and grand residential spaces. Its paper-like polyester shade is shaped by hand during production, giving each Mamacloud a subtly individual character. Like its smaller sibling, the shade can be gently reshaped by the owner. Mamacloud is the luminaire that makes a room. Specified by leading London practices for private residential and hospitality projects across Mayfair, Belgravia and the City.",
    suitableFor: ["Private residences", "Hotel lobbies", "Cultural atria"],
    leadTime: "6–8 weeks",
    ukPlug: false,
    specs: {
      "Shade Diameter": "Ø ~900 mm",
      "Overall Height": "Up to 2,200 mm",
      "Shade Material": "Flame-resistant polyester",
      "Light Source": "LED integrated",
      "Suspension": "Textile cable, adjustable",
    },
    gradient: "linear-gradient(160deg, #f0ece4 0%, #ddd5c4 100%)",
    textDark: true,
    accentColour: "#A87050",
    icon: "❋",
  },
  {
    id: 10,
    slug: "updown",
    name: "Updown",
    family: "Updown",
    designer: "Reto Schöpfer",
    category: "Wall",
    type: "Directional Wall Luminaire",
    price: 780,
    colourTemp: "3000K",
    lumens: "800 lm (up) + 800 lm (down)",
    wattage: "20W LED",
    cri: "CRI 90+",
    dimming: "DALI / Phase-cut",
    finish: ["White", "Black", "Anthracite"],
    ipRating: "IP20",
    tag: "Dual Direction",
    tagAccent: "#6A5A8A",
    description: "Reto Schöpfer's Updown delivers precisely what its name promises: independent LED circuits for upward wall wash and downward accent, both dimmable via DALI. Its architectural restraint makes it ideal for circulation routes, gallery corridors and bedroom walls where both ambient wash and directional accent are required simultaneously. The slim aluminium body sits close to the wall with minimal projection. Available in white, black and anthracite to complement any plaster, timber or stone finish.",
    suitableFor: ["Gallery corridors", "Private bedrooms", "Hotel corridors"],
    leadTime: "3–4 weeks",
    ukPlug: false,
    specs: {
      "Width": "80 mm",
      "Height": "220 mm",
      "Projection": "60 mm",
      "Circuits": "2 (up / down, independent)",
      "Dimming": "DALI per circuit",
    },
    gradient: "linear-gradient(160deg, #0e0814 0%, #1a1428 100%)",
    textDark: false,
    accentColour: "#A090D8",
    icon: "↕",
  },
  {
    id: 11,
    slug: "ypsilon",
    name: "Ypsilon",
    family: "Ypsilon",
    designer: "Belux Design Team",
    category: "Wall",
    type: "Plug-in Wall Uplighter",
    price: 420,
    colourTemp: "2700K / 3000K",
    lumens: "600 lm",
    wattage: "8W LED",
    cri: "CRI 90+",
    dimming: "Integrated rotary dimmer",
    finish: ["White", "Aluminium", "Black", "Champagne"],
    ipRating: "IP20",
    tag: "270° Rotation",
    tagAccent: "#7A9A5A",
    description: "Ypsilon is Belux's discreet solution for wall uplighting without the need for hardwiring. The plug-in design connects directly to a standard UK socket, while the integrated rotary dimmer allows precise control from bright room illumination to warm mood light. The head rotates through 270°, enabling the luminaire to wash walls, graze textured surfaces or beam towards the ceiling. Ypsilon is an energy-efficient, easily installed option for rental properties, show apartments and spaces where re-arrangement is anticipated.",
    suitableFor: ["Show apartments", "Rental properties", "Bedroom reading"],
    leadTime: "1–2 weeks",
    ukPlug: true,
    specs: {
      "Head Rotation": "270°",
      "Mounting": "Wall-mounted (plug-in)",
      "Dimmer": "Integrated rotary",
      "Finishes": "4 options",
      "Plug": "UK Type G",
    },
    gradient: "linear-gradient(160deg, #0a1408 0%, #162010 100%)",
    textDark: false,
    accentColour: "#90C870",
    icon: "Y",
  },
  {
    id: 12,
    slug: "disk",
    name: "Disk",
    family: "Disk",
    designer: "Stephan Hürlemann",
    category: "Ceiling",
    type: "Surface-Mounted Ceiling Disc",
    price: 960,
    colourTemp: "3000K / 4000K",
    lumens: "3,200 lm",
    wattage: "28W LED",
    cri: "CRI 90+",
    dimming: "DALI / Phase-cut",
    finish: ["White", "Black"],
    ipRating: "IP20",
    tag: "Ultra-Flat",
    tagAccent: "#5A7A9A",
    description: "Stephan Hürlemann's Disk is one of the most refined ceiling luminaires in the Belux range. Its ultra-flat profile sits flush against the ceiling plane, making it ideal for rooms with limited height or where an uninterrupted ceiling surface is architecturally important. The wide-angle LED distribution produces soft, even ambient light across the room without hotspots. Available in two diameters in white or satin black. Disk has been specified extensively in London residential conversions, riverside apartments and contemporary hotel rooms where restraint and quality of light are equally valued.",
    suitableFor: ["Residential conversions", "Hotel rooms", "Low-ceiling spaces"],
    leadTime: "3–4 weeks",
    ukPlug: false,
    specs: {
      "Diameter": "Ø 380 / 580 mm",
      "Profile Height": "32 mm",
      "Light Distribution": "Wide angle (120°)",
      "Surface": "Opal diffuser",
      "Dimming": "DALI / Phase-cut",
    },
    gradient: "linear-gradient(160deg, #0e1620 0%, #162030 100%)",
    textDark: false,
    accentColour: "#70AADC",
    icon: "●",
  },
];

const categories = ["All", "Pendant", "Floor Lamp", "Table Lamp", "Wall", "Ceiling"];
const filterOptions = ["All Products", "Architectural", "UK Plug Included", "DALI Compatible", "Indoor & Outdoor"];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const fmtPrice = (p) => `£${p.toLocaleString("en-GB")}`;

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function BeluxUK() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [selected, setSelected] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [enquiryItems, setEnquiryItems] = useState([]);
  const [enquiryAdded, setEnquiryAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("catalogue");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const scrollRef = useRef(null);

  const toggleSaved = (id, e) => {
    e?.stopPropagation();
    setSavedItems(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  };

  const addToEnquiry = (product) => {
    if (!enquiryItems.find(x => x.id === product.id)) {
      setEnquiryItems(e => [...e, product]);
    }
    setEnquiryAdded(true);
    setTimeout(() => setEnquiryAdded(false), 2000);
  };

  const filtered = products.filter(p => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const filterMatch = activeFilter === "All Products"
      || (activeFilter === "Architectural" && ["Ceiling", "Wall"].includes(p.category))
      || (activeFilter === "UK Plug Included" && p.ukPlug)
      || (activeFilter === "DALI Compatible" && p.dimming.includes("DALI"))
      || (activeFilter === "Indoor & Outdoor" && p.ipRating !== "IP20");
    const searchMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase())
      || p.designer.toLowerCase().includes(searchQuery.toLowerCase())
      || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && filterMatch && searchMatch;
  });

  const savedProducts = products.filter(p => savedItems.includes(p.id));

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F4F1EC", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { display: none; }
        
        .phone {
          width: min(430px, 100vw);
          min-height: 100dvh;
          background: #F4F1EC;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 600px) {
          .phone {
            min-height: 900px;
            max-height: 900px;
            border-radius: 48px;
            box-shadow: 0 0 0 10px #2A2520, 0 0 0 12px #3A3028, 0 80px 160px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
            margin: 40px 0;
          }
        }

        .notch {
          width: 120px; height: 32px;
          background: #2A2520;
          border-radius: 0 0 18px 18px;
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          z-index: 200;
        }
        @media (max-width: 599px) { .notch { display: none; } }

        /* ── SCROLL AREA ── */
        .scroll-area {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 88px;
        }

        /* ── HEADER ── */
        .header {
          background: #F4F1EC;
          padding: 52px 20px 0;
          position: sticky; top: 0; z-index: 50;
          border-bottom: 1px solid rgba(42,37,32,0.1);
        }
        @media (max-width:599px) { .header { padding-top: calc(env(safe-area-inset-top,0px) + 12px); } }

        .header-row {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 14px;
        }

        .brand-mark {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; letter-spacing: -0.01em;
          color: #2A2520; line-height: 1;
        }
        .brand-mark sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #8A7A6A; vertical-align: bottom;
          margin-left: 4px;
        }

        .header-actions { display: flex; gap: 8px; align-items: center; }

        .icon-btn {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: 1px solid rgba(42,37,32,0.15);
          background: transparent; font-size: 16px; color: #2A2520;
          transition: all 0.2s; position: relative;
        }
        .icon-btn:active { transform: scale(0.93); background: rgba(42,37,32,0.06); }

        .badge {
          position: absolute; top: -3px; right: -3px;
          background: #2A2520; color: #F4F1EC;
          font-size: 8px; font-weight: 600;
          width: 16px; height: 16px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        /* Search bar */
        .search-bar {
          display: flex; align-items: center; gap: 8px;
          background: rgba(42,37,32,0.06); border-radius: 10px;
          padding: 9px 14px; margin: 0 0 12px;
          border: 1px solid transparent; transition: border 0.2s;
        }
        .search-bar:focus-within { border-color: rgba(42,37,32,0.25); }
        .search-bar input {
          border: none; background: transparent; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          color: #2A2520; flex: 1; width: 100%;
        }
        .search-bar input::placeholder { color: #8A7A6A; }

        /* Category pills */
        .cats {
          display: flex; gap: 6px; overflow-x: auto;
          padding-bottom: 14px;
        }
        .cat-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 400; letter-spacing: 0.04em;
          padding: 6px 14px; border-radius: 20px;
          border: 1px solid rgba(42,37,32,0.2);
          color: rgba(42,37,32,0.6); background: transparent;
          cursor: pointer; white-space: nowrap; transition: all 0.2s;
        }
        .cat-pill.active {
          background: #2A2520; border-color: #2A2520;
          color: #F4F1EC; font-weight: 500;
        }

        /* Filter chips */
        .filters {
          display: flex; gap: 6px; overflow-x: auto;
          padding: 12px 20px;
        }
        .filter-chip {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 400;
          padding: 5px 12px; border-radius: 6px;
          border: 1px solid rgba(42,37,32,0.15);
          color: rgba(42,37,32,0.55); background: transparent;
          cursor: pointer; white-space: nowrap; transition: all 0.2s;
        }
        .filter-chip.active {
          background: rgba(42,37,32,0.08);
          border-color: rgba(42,37,32,0.35);
          color: #2A2520; font-weight: 500;
        }

        /* ── PRODUCT GRID ── */
        .grid {
          padding: 0 16px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .card {
          border-radius: 16px; overflow: hidden; cursor: pointer;
          position: relative; transition: transform 0.2s;
          border: 1px solid rgba(42,37,32,0.08);
          background: #fff;
        }
        .card:active { transform: scale(0.975); }

        .card-visual {
          height: 150px; position: relative;
          display: flex; align-items: center; justify-content: center;
        }

        .card-icon {
          font-size: 56px; line-height: 1;
          opacity: 0.85; user-select: none;
          position: relative; z-index: 1;
          font-family: 'DM Serif Display', serif;
        }

        .card-tag {
          position: absolute; bottom: 10px; left: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 500; letter-spacing: 0.08em;
          padding: 3px 8px; border-radius: 4px;
          text-transform: uppercase; z-index: 2;
        }

        .save-btn {
          position: absolute; top: 8px; right: 8px; z-index: 2;
          background: rgba(244,241,236,0.85);
          border-radius: 50%; width: 30px; height: 30px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; cursor: pointer; border: none;
          transition: all 0.2s; color: #2A2520;
        }

        .card-body { padding: 12px 12px 14px; }
        .card-family {
          font-size: 9px; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: #8A7A6A; margin-bottom: 2px;
        }
        .card-name {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: #2A2520; line-height: 1.1; margin-bottom: 3px;
        }
        .card-designer {
          font-size: 11px; color: #8A7A6A; margin-bottom: 8px;
          font-style: italic;
        }
        .card-price {
          font-size: 13px; font-weight: 500; color: #2A2520;
        }
        .card-price span { font-size: 10px; font-weight: 400; color: #8A7A6A; margin-left: 2px; }

        /* ── DETAIL OVERLAY ── */
        .overlay {
          position: absolute; inset: 0; background: #F4F1EC;
          z-index: 100; overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.32, 0.72, 0, 1);
        }
        .overlay.open { transform: translateX(0); }

        .detail-hero {
          height: 280px; position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .detail-hero-icon {
          font-size: 100px; font-family: 'DM Serif Display', serif;
          opacity: 0.75; user-select: none; position: relative; z-index: 1;
        }
        .detail-back {
          position: absolute; top: 54px; left: 16px;
          background: rgba(244,241,236,0.9);
          border: 1px solid rgba(42,37,32,0.15);
          border-radius: 50%; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 18px; color: #2A2520; z-index: 10;
          font-family: 'DM Sans', sans-serif;
        }
        @media (max-width:599px) { .detail-back { top: calc(env(safe-area-inset-top,0px) + 10px); } }
        .detail-save {
          position: absolute; top: 54px; right: 16px;
          background: rgba(244,241,236,0.9);
          border: 1px solid rgba(42,37,32,0.15);
          border-radius: 50%; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px; color: #2A2520; z-index: 10;
        }
        @media (max-width:599px) { .detail-save { top: calc(env(safe-area-inset-top,0px) + 10px); } }

        .detail-body { padding: 20px 20px 140px; }

        .detail-family { font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #8A7A6A; margin-bottom: 4px; }
        .detail-name { font-family: 'DM Serif Display', serif; font-size: 38px; color: #2A2520; line-height: 1.05; margin-bottom: 2px; }
        .detail-designer { font-size: 13px; color: #8A7A6A; font-style: italic; margin-bottom: 12px; }
        .detail-type { font-size: 12px; color: #5A5048; margin-bottom: 16px; font-weight: 400; letter-spacing: 0.02em; }
        .detail-desc { font-size: 14px; line-height: 1.75; color: #3A3028; margin-bottom: 20px; font-weight: 300; }

        .info-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .info-chip {
          font-size: 11px; font-weight: 400;
          padding: 5px 10px; border-radius: 6px;
          background: rgba(42,37,32,0.06);
          border: 1px solid rgba(42,37,32,0.1);
          color: #3A3028;
        }

        .section-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: #8A7A6A; margin-bottom: 10px;
        }

        .spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px; }
        .spec-item {
          background: #fff; border: 1px solid rgba(42,37,32,0.08);
          border-radius: 10px; padding: 10px 12px;
        }
        .spec-label { font-size: 9px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #8A7A6A; margin-bottom: 3px; }
        .spec-val { font-size: 12px; font-weight: 400; color: #2A2520; }

        .suitable-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .suitable-chip {
          font-size: 11px; padding: 5px 10px; border-radius: 20px;
          background: transparent; border: 1px solid rgba(42,37,32,0.2);
          color: #3A3028;
        }

        .lead-time-row {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: #5A5048; margin-bottom: 24px;
        }

        /* CTA bar */
        .cta-bar {
          position: sticky; bottom: 0;
          padding: 12px 20px 28px;
          background: linear-gradient(to top, #F4F1EC 70%, transparent);
        }
        @media (max-width:599px) {
          .cta-bar { padding-bottom: calc(env(safe-area-inset-bottom,0px) + 16px); }
        }
        .cta-inner {
          display: flex; gap: 10px;
        }
        .cta-btn {
          flex: 1; border-radius: 12px; padding: 14px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          cursor: pointer; border: none; transition: all 0.2s;
          text-align: center;
        }
        .cta-primary {
          background: #2A2520; color: #F4F1EC;
        }
        .cta-primary.success { background: #3A6A3A; }
        .cta-secondary {
          background: transparent; color: #2A2520;
          border: 1px solid rgba(42,37,32,0.25) !important;
          flex: 0 0 auto; width: 48px; padding: 14px 0;
          border-radius: 12px;
        }

        /* ── TAB BAR ── */
        .tab-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 78px;
          background: rgba(244,241,236,0.97);
          border-top: 1px solid rgba(42,37,32,0.12);
          display: flex; justify-content: space-around; align-items: center;
          padding: 0 10px 10px;
          backdrop-filter: blur(20px);
          z-index: 60;
        }
        @media (max-width:599px) {
          .tab-bar { height: auto; min-height: 64px; padding-bottom: calc(env(safe-area-inset-bottom,0px) + 6px); }
        }

        .tab {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          cursor: pointer; opacity: 0.38; transition: opacity 0.18s; flex: 1;
        }
        .tab.active { opacity: 1; }
        .tab-icon { font-size: 20px; }
        .tab-label {
          font-size: 9px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2A2520;
        }

        /* ── SAVED TAB ── */
        .saved-screen { padding: 20px 20px 100px; }
        .saved-empty { text-align: center; padding: 60px 20px; }
        .saved-empty p { font-size: 14px; color: #8A7A6A; line-height: 1.6; }

        /* ── ENQUIRY TAB ── */
        .enquiry-screen { padding: 20px 20px 100px; }

        /* ── ABOUT TAB ── */
        .about-screen { padding: 20px 20px 100px; }
        .about-hero {
          height: 180px; background: #2A2520; border-radius: 16px;
          display: flex; align-items: flex-end; padding: 20px;
          margin-bottom: 20px; position: relative; overflow: hidden;
        }
        .about-hero::before {
          content: 'BELUX'; position: absolute;
          font-family: 'DM Serif Display', serif;
          font-size: 80px; color: rgba(244,241,236,0.06);
          top: 10px; right: -10px; letter-spacing: -2px;
        }
        .about-section { margin-bottom: 20px; }
        .about-label { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #8A7A6A; margin-bottom: 8px; }
        .about-text { font-size: 14px; line-height: 1.7; color: #3A3028; font-weight: 300; }
        .contact-row {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border-radius: 12px; padding: 14px;
          margin-bottom: 10px; border: 1px solid rgba(42,37,32,0.08);
        }
        .contact-icon { font-size: 20px; }
        .contact-label { font-size: 11px; color: #8A7A6A; margin-bottom: 1px; }
        .contact-val { font-size: 13px; color: #2A2520; font-weight: 500; }

        /* ── SAVED PRODUCT ROW ── */
        .saved-row {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border-radius: 12px; padding: 12px;
          margin-bottom: 10px; border: 1px solid rgba(42,37,32,0.08);
          cursor: pointer;
        }
        .saved-row-visual {
          width: 56px; height: 56px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; flex-shrink: 0;
        }
        .saved-row-info { flex: 1; }
        .saved-row-name { font-family: 'DM Serif Display', serif; font-size: 16px; color: #2A2520; }
        .saved-row-sub { font-size: 11px; color: #8A7A6A; margin-top: 1px; }
        .saved-row-price { font-size: 13px; font-weight: 500; color: #2A2520; }

        /* Enquiry list */
        .enquiry-row {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border-radius: 12px; padding: 12px;
          margin-bottom: 10px; border: 1px solid rgba(42,37,32,0.08);
        }
        .enquiry-remove {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(42,37,32,0.06); border: none; cursor: pointer;
          font-size: 14px; color: #5A5048;
        }
        .send-enquiry-btn {
          width: 100%; border-radius: 12px; padding: 16px;
          background: #2A2520; color: #F4F1EC;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          border: none; cursor: pointer; margin-top: 16px;
          letter-spacing: 0.04em;
        }

        /* Page headers */
        .page-header { padding: 52px 20px 16px; }
        @media (max-width:599px) { .page-header { padding-top: calc(env(safe-area-inset-top,0px) + 16px); } }
        .page-title { font-family: 'DM Serif Display', serif; font-size: 30px; color: #2A2520; margin-bottom: 4px; }
        .page-sub { font-size: 13px; color: #8A7A6A; }

        /* No results */
        .no-results { text-align: center; padding: 48px 20px; }
        .no-results p { font-size: 14px; color: #8A7A6A; }

        /* Count label */
        .count-label { font-size: 11px; color: #8A7A6A; padding: 4px 20px 12px; }
      `}</style>

      <div className="phone">
        <div className="notch" />

        {/* ── CATALOGUE TAB ── */}
        {activeTab === "catalogue" && (
          <div className="scroll-area" ref={scrollRef}>
            {/* Sticky header */}
            <div className="header">
              <div className="header-row">
                <div className="brand-mark">Belux <sub>London</sub></div>
                <div className="header-actions">
                  <div className="icon-btn" onClick={() => setSearchOpen(s => !s)}>🔍</div>
                  <div className="icon-btn" onClick={() => setActiveTab("enquiry")}>
                    📋
                    {enquiryItems.length > 0 && <div className="badge">{enquiryItems.length}</div>}
                  </div>
                </div>
              </div>

              {searchOpen && (
                <div className="search-bar">
                  <span style={{ fontSize: 14, color: "#8A7A6A" }}>🔍</span>
                  <input
                    autoFocus
                    placeholder="Search luminaires, designers…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <span style={{ cursor: "pointer", color: "#8A7A6A", fontSize: 14 }} onClick={() => setSearchQuery("")}>✕</span>
                  )}
                </div>
              )}

              <div className="cats">
                {categories.map(c => (
                  <button key={c} className={`cat-pill ${activeCategory === c ? "active" : ""}`} onClick={() => setActiveCategory(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter chips */}
            <div className="filters">
              {filterOptions.map(f => (
                <button key={f} className={`filter-chip ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
                  {f}
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="count-label">{filtered.length} luminaire{filtered.length !== 1 ? "s" : ""}</div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="no-results"><p>No luminaires match your selection.</p></div>
            ) : (
              <div className="grid">
                {filtered.map(p => (
                  <div key={p.id} className="card" onClick={() => setSelected(p)}>
                    <div className="card-visual" style={{ background: p.gradient }}>
                      <span className="card-icon" style={{ color: p.textDark ? "#2A2520" : "#F4F1EC" }}>{p.icon}</span>
                      <div className="card-tag" style={{ background: p.tagAccent, color: "#fff" }}>{p.tag}</div>
                      <button className="save-btn" onClick={(e) => toggleSaved(p.id, e)}>
                        {savedItems.includes(p.id) ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="card-family">{p.family} family</div>
                      <div className="card-name">{p.name}</div>
                      <div className="card-designer">{p.designer}</div>
                      <div className="card-price">{fmtPrice(p.price)} <span>from</span></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── SAVED TAB ── */}
        {activeTab === "saved" && (
          <div className="scroll-area">
            <div className="page-header">
              <div className="page-title">Saved</div>
              <div className="page-sub">{savedProducts.length} luminaire{savedProducts.length !== 1 ? "s" : ""} saved</div>
            </div>
            <div className="saved-screen">
              {savedProducts.length === 0 ? (
                <div className="saved-empty">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>♡</div>
                  <p>No luminaires saved yet.<br />Tap the heart on any product to save it here.</p>
                </div>
              ) : savedProducts.map(p => (
                <div key={p.id} className="saved-row" onClick={() => { setSelected(p); setActiveTab("catalogue"); }}>
                  <div className="saved-row-visual" style={{ background: p.gradient }}>
                    <span style={{ fontSize: 26, color: p.textDark ? "#2A2520" : "#F4F1EC" }}>{p.icon}</span>
                  </div>
                  <div className="saved-row-info">
                    <div className="saved-row-name">{p.name}</div>
                    <div className="saved-row-sub">{p.designer} · {p.category}</div>
                  </div>
                  <div>
                    <div className="saved-row-price">{fmtPrice(p.price)}</div>
                    <button onClick={(e) => toggleSaved(p.id, e)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#C84040", marginTop: 4 }}>♥</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ENQUIRY TAB ── */}
        {activeTab === "enquiry" && (
          <div className="scroll-area">
            <div className="page-header">
              <div className="page-title">Enquiry List</div>
              <div className="page-sub">Send your shortlist to our London team</div>
            </div>
            <div className="enquiry-screen">
              {enquiryItems.length === 0 ? (
                <div className="saved-empty">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
                  <p>Your enquiry list is empty.<br />Add luminaires from the catalogue to request a specification quote.</p>
                </div>
              ) : (
                <>
                  {enquiryItems.map(p => (
                    <div key={p.id} className="enquiry-row">
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                        <span style={{ color: p.textDark ? "#2A2520" : "#F4F1EC" }}>{p.icon}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: "#2A2520" }}>{p.name}</div>
                        <div style={{ fontSize: 11, color: "#8A7A6A", marginTop: 1 }}>{p.type} · {fmtPrice(p.price)} from</div>
                      </div>
                      <button className="enquiry-remove" onClick={() => setEnquiryItems(e => e.filter(x => x.id !== p.id))}>✕</button>
                    </div>
                  ))}
                  <button className="send-enquiry-btn">
                    Send Specification Enquiry →
                  </button>
                  <p style={{ fontSize: 11, color: "#8A7A6A", textAlign: "center", marginTop: 10, lineHeight: 1.5 }}>
                    Our London specification team will respond within one business day with pricing, lead times and IES photometric files.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* ── ABOUT TAB ── */}
        {activeTab === "about" && (
          <div className="scroll-area">
            <div className="page-header">
              <div className="page-title">About Belux</div>
              <div className="page-sub">Swiss precision. London specification.</div>
            </div>
            <div className="about-screen">
              <div className="about-hero">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: "#F4F1EC", marginBottom: 4 }}>Shaping Light</div>
                  <div style={{ fontSize: 12, color: "rgba(244,241,236,0.6)" }}>Est. 1970 · Baden, Switzerland</div>
                </div>
              </div>

              <div className="about-section">
                <div className="about-label">About the Brand</div>
                <div className="about-text">Belux is a Swiss lighting manufacturer renowned for collaborating with world-class designers including Frank O. Gehry, Naoto Fukasawa, Hannes Wettstein and Reto Schöpfer. Since 1970, Belux has produced luminaires that balance exceptional design integrity with precision engineering, winning multiple Red Dot and iF Design Awards.</div>
              </div>

              <div className="about-section">
                <div className="about-label">For London Architects & Designers</div>
                <div className="about-text">This catalogue is curated specifically for the UK specification market. All products listed are available with UK Type G plugs where applicable. Our London-based specification team provides IES photometric files, CAD drawings, DALI control documentation and BSI-compliant installation guidance for every project.</div>
              </div>

              <div className="about-section">
                <div className="about-label">Specification Support</div>
                <div className="about-text">We support RIBA members, BIID designers and independent architects across Greater London with on-site consultations, product loans for client presentations and project pricing for contracts of all scales — from a single apartment to a multi-storey commercial fit-out.</div>
              </div>

              <div className="about-section">
                <div className="about-label">Contact Our London Team</div>
                <div className="contact-row">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Showroom</div>
                    <div className="contact-val">Design Centre Chelsea Harbour, London SW10</div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Specification Enquiries</div>
                    <div className="contact-val">london@belux.com</div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Direct Line</div>
                    <div className="contact-val">+44 (0)20 7349 0000</div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-icon">🕐</div>
                  <div>
                    <div className="contact-label">Office Hours</div>
                    <div className="contact-val">Mon–Fri, 9:00–17:30 GMT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── DETAIL OVERLAY ── */}
        {products.map(p => (
          <div key={p.id} className={`overlay ${selected?.id === p.id ? "open" : ""}`}>
            {/* Hero */}
            <div className="detail-hero" style={{ background: p.gradient }}>
              <span className="detail-hero-icon" style={{ color: p.textDark ? "#2A2520" : "#F4F1EC" }}>{p.icon}</span>
              <button className="detail-back" onClick={() => setSelected(null)}>←</button>
              <button className="detail-save" onClick={(e) => toggleSaved(p.id, e)}>
                {savedItems.includes(p.id) ? "♥" : "♡"}
              </button>
            </div>

            {/* Body */}
            <div className="detail-body">
              <div className="detail-family">{p.family} family · {p.category}</div>
              <div className="detail-name">{p.name}</div>
              <div className="detail-designer">Design: {p.designer}</div>
              <div className="detail-type">{p.type}</div>

              <div className="detail-desc">{p.description}</div>

              {/* Quick-spec chips */}
              <div className="info-chips">
                <span className="info-chip">💡 {p.wattage}</span>
                <span className="info-chip">🌡 {p.colourTemp}</span>
                <span className="info-chip">✦ {p.lumens}</span>
                <span className="info-chip">🎛 {p.dimming}</span>
                <span className="info-chip">🛡 {p.ipRating}</span>
                {p.ukPlug && <span className="info-chip">🔌 UK Plug Included</span>}
              </div>

              {/* Finishes */}
              <div className="section-label">Available Finishes</div>
              <div className="info-chips" style={{ marginBottom: 16 }}>
                {p.finish.map(f => <span key={f} className="info-chip">{f}</span>)}
              </div>

              {/* Specs */}
              <div className="section-label">Technical Specifications</div>
              <div className="spec-grid">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k} className="spec-item">
                    <div className="spec-label">{k}</div>
                    <div className="spec-val">{v}</div>
                  </div>
                ))}
                <div className="spec-item">
                  <div className="spec-label">CRI</div>
                  <div className="spec-val">{p.cri}</div>
                </div>
              </div>

              {/* Suitable for */}
              <div className="section-label">Ideal Applications</div>
              <div className="suitable-row">
                {p.suitableFor.map(s => <span key={s} className="suitable-chip">{s}</span>)}
              </div>

              {/* Lead time */}
              <div className="lead-time-row">
                <span>🚚</span>
                <span>UK lead time: <strong>{p.leadTime}</strong></span>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-bar">
              <div className="cta-inner">
                <button
                  className={`cta-btn cta-primary ${enquiryAdded ? "success" : ""}`}
                  onClick={() => addToEnquiry(p)}
                >
                  {enquiryAdded ? "✓ Added to Enquiry List" : `Add to Enquiry List · ${fmtPrice(p.price)}`}
                </button>
                <button
                  className="cta-btn cta-secondary"
                  style={{ border: "1px solid rgba(42,37,32,0.2)" }}
                  onClick={(e) => toggleSaved(p.id, e)}
                >
                  {savedItems.includes(p.id) ? "♥" : "♡"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ── TAB BAR ── */}
        <div className="tab-bar">
          {[
            { key: "catalogue", icon: "⊞", label: "Catalogue" },
            { key: "saved", icon: "♡", label: "Saved", count: savedItems.length },
            { key: "enquiry", icon: "📋", label: "Enquiry", count: enquiryItems.length },
            { key: "about", icon: "ⓘ", label: "About" },
          ].map(t => (
            <div key={t.key} className={`tab ${activeTab === t.key ? "active" : ""}`} onClick={() => setActiveTab(t.key)}>
              <div className="tab-icon" style={{ position: "relative" }}>
                {t.icon}
                {t.count > 0 && (
                  <span style={{ position: "absolute", top: -4, right: -6, background: "#2A2520", color: "#F4F1EC", fontSize: 8, fontWeight: 600, width: 14, height: 14, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{t.count}</span>
                )}
              </div>
              <div className="tab-label">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
