import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Luna Pendant",
    category: "Pendant",
    price: 349,
    finish: "Brushed Brass",
    material: "Hand-blown Glass",
    wattage: "60W",
    description: "A sculptural orb pendant that diffuses warm amber light through its hand-blown smoked glass globe. Inspired by the quiet glow of a harvest moon.",
    tag: "Bestseller",
    tagColor: "#C6932A",
    gradient: ["#2A1A00", "#5C3D00"],
    accentColor: "#F0B347",
    emoji: "🌕",
    specs: { Diameter: "32 cm", Height: "45 cm", "Cord Length": "150 cm", "IP Rating": "IP20" },
  },
  {
    id: 2,
    name: "Arc Studio",
    category: "Floor Lamp",
    price: 629,
    finish: "Matte Black",
    material: "Steel & Marble Base",
    wattage: "40W",
    description: "A bold architectural arc lamp with a marble counterweight base. Clean lines, adjustable reach, and an oversized linen shade for dramatic ambient light.",
    tag: "New",
    tagColor: "#1A6B4A",
    gradient: ["#0A0A0A", "#1C1C1C"],
    accentColor: "#B8F0D8",
    emoji: "🏛️",
    specs: { Height: "195 cm", "Base Width": "30 cm", "Shade Diameter": "45 cm", Dimmable: "Yes" },
  },
  {
    id: 3,
    name: "Celeste Sconce",
    category: "Wall Light",
    price: 189,
    finish: "Antique Copper",
    material: "Spun Aluminium",
    wattage: "25W",
    description: "A fluted wall sconce with an aged copper patina. Throws soft fan-shaped light upwards, creating warmth and texture on any wall.",
    tag: "Limited",
    tagColor: "#7B3F8C",
    gradient: ["#1A0A20", "#3D1A50"],
    accentColor: "#E8A4FF",
    emoji: "✨",
    specs: { Width: "18 cm", Height: "26 cm", Projection: "12 cm", Voltage: "220–240V" },
  },
  {
    id: 4,
    name: "Dune Table",
    category: "Table Lamp",
    price: 275,
    finish: "Terracotta",
    material: "Ceramic & Linen",
    wattage: "40W",
    description: "A hand-thrown ceramic table lamp in earthy terracotta tones with a sand-coloured linen shade. Warm, organic, and rooted in craft.",
    tag: "Artisan",
    tagColor: "#A04020",
    gradient: ["#200800", "#4A1800"],
    accentColor: "#FFB07C",
    emoji: "🏺",
    specs: { Height: "52 cm", "Base Diameter": "16 cm", "Shade Width": "34 cm", "Bulb Type": "E27" },
  },
  {
    id: 5,
    name: "Helix Chandelier",
    category: "Chandelier",
    price: 1290,
    finish: "Polished Chrome",
    material: "Crystal & Steel",
    wattage: "5×40W",
    description: "A spiralling five-arm chandelier with hand-cut crystal drops that fragment light into prismatic cascades. The centrepiece any room deserves.",
    tag: "Premium",
    tagColor: "#1A4A7A",
    gradient: ["#050B14", "#0A1A2E"],
    accentColor: "#7DD4FF",
    emoji: "💎",
    specs: { Diameter: "80 cm", Height: "70 cm", "Chain Length": "90 cm", Arms: "5" },
  },
  {
    id: 6,
    name: "Ember Strip",
    category: "LED Strip",
    price: 98,
    finish: "Warm White 2700K",
    material: "Flexible PCB",
    wattage: "14W/m",
    description: "High-density LED strip with an ultra-warm 2700K tone, perfect for cove lighting, shelving, and atmospheric accent work. CRI 95+.",
    tag: "Smart",
    tagColor: "#1A5A3A",
    gradient: ["#0A0A00", "#1A1400"],
    accentColor: "#FFE066",
    emoji: "💡",
    specs: { Length: "5 m", CRI: "95+", "IP Rating": "IP44", Dimming: "0–10V / Triac" },
  },
];

const categories = ["All", "Pendant", "Floor Lamp", "Wall Light", "Table Lamp", "Chandelier", "LED Strip"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);
  };

  const handleAddToCart = () => {
    setCartCount(c => c + 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div style={{
      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      background: "#0C0C0C",
      minHeight: "100vh",
      minHeight: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: isMobile ? "flex-start" : "center",
      padding: isMobile ? "0" : "40px 20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 0px; }

        .phone {
          width: 100%;
          max-width: 430px;
          min-height: 100dvh;
          background: #0C0C0C;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 481px) {
          .phone {
            min-height: 844px;
            max-height: 920px;
            border-radius: 50px;
            box-shadow: 0 0 0 10px #1a1a1a, 0 0 0 12px #2a2a2a,
                        0 60px 120px rgba(0,0,0,0.9),
                        0 0 80px rgba(200,160,80,0.08);
            overflow: hidden;
          }
        }

        .scroll-area {
          overflow-y: auto;
          padding-bottom: 90px;
          height: calc(100dvh - 0px);
        }

        @media (min-width: 481px) {
          .scroll-area {
            height: calc(844px - 0px);
            max-height: 844px;
          }
        }

        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 28px 6px;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          position: sticky;
          top: 0;
          z-index: 30;
          background: #0C0C0C;
        }

        .notch {
          width: 126px;
          height: 34px;
          background: #0C0C0C;
          border-radius: 0 0 20px 20px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
        }

        @media (max-width: 480px) {
          .notch { display: none; }
          .status-bar { padding-top: env(safe-area-inset-top, 14px); }
        }

        .header {
          padding: 8px 24px 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .brand { font-size: 28px; font-weight: 300; color: #F5E8C0; letter-spacing: 0.08em; font-style: italic; line-height: 1; }
        .brand span { font-style: normal; font-weight: 600; letter-spacing: 0.15em; font-size: 11px; display: block; color: #9A7E4A; font-family: 'Outfit', sans-serif; margin-bottom: 4px; }

        .cart-btn {
          position: relative;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 18px; transition: all 0.2s;
        }

        .cart-badge {
          position: absolute; top: -4px; right: -4px;
          background: #C6932A; color: #000;
          font-size: 9px; font-weight: 700; font-family: 'Outfit', sans-serif;
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .cats {
          display: flex; gap: 8px;
          padding: 0 24px 20px;
          overflow-x: auto;
        }

        .cat-pill {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 400; letter-spacing: 0.08em;
          padding: 7px 14px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          background: transparent; cursor: pointer;
          white-space: nowrap; transition: all 0.25s;
          text-transform: uppercase;
        }

        .cat-pill.active { background: #C6932A; border-color: #C6932A; color: #000; font-weight: 500; }

        .grid {
          padding: 0 16px 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .card {
          border-radius: 20px; overflow: hidden; cursor: pointer;
          position: relative; transition: transform 0.2s;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .card:active { transform: scale(0.97); }

        .card-visual {
          height: 160px;
          display: flex; align-items: center; justify-content: center;
          font-size: 52px; position: relative;
        }

        .card-tag {
          position: absolute; top: 10px; left: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 9px; font-weight: 600; letter-spacing: 0.1em;
          padding: 3px 8px; border-radius: 20px;
          text-transform: uppercase; color: #fff;
        }

        .wish-btn {
          position: absolute; top: 8px; right: 8px;
          background: rgba(0,0,0,0.4);
          border-radius: 50%; width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; cursor: pointer; border: none; transition: all 0.2s;
        }

        .card-info { padding: 12px; background: #141414; }
        .card-cat { font-family: 'Outfit', sans-serif; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 3px; }
        .card-name { font-size: 16px; font-weight: 400; color: #F0E8D0; line-height: 1.2; margin-bottom: 6px; }
        .card-price { font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; color: #fff; }

        .overlay {
          position: absolute; inset: 0;
          background: #0C0C0C; z-index: 50;
          overflow-y: auto;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
        }

        .overlay.open { transform: translateY(0); }

        .detail-hero {
          height: 300px;
          display: flex; align-items: center; justify-content: center;
          font-size: 90px; position: relative;
        }

        .back-btn {
          position: absolute; top: 60px; left: 20px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 18px; color: #fff; z-index: 10;
        }

        @media (max-width: 480px) {
          .back-btn { top: calc(env(safe-area-inset-top, 20px) + 40px); }
        }

        .detail-wish {
          position: absolute; top: 60px; right: 20px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 18px; z-index: 10;
        }

        @media (max-width: 480px) {
          .detail-wish { top: calc(env(safe-area-inset-top, 20px) + 40px); }
        }

        .detail-body { padding: 24px 24px 140px; }

        .detail-cat { font-family: 'Outfit', sans-serif; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px; }
        .detail-name { font-size: 36px; font-weight: 300; font-style: italic; color: #F5E8C0; line-height: 1.1; margin-bottom: 4px; }
        .detail-price { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 500; color: #fff; margin-bottom: 16px; }
        .detail-desc { font-size: 16px; font-weight: 300; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 24px; font-style: italic; }

        .spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px; }

        .spec-item {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 12px;
        }

        .spec-label { font-family: 'Outfit', sans-serif; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .spec-val { font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 400; color: #fff; }

        .meta-row { display: flex; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }

        .meta-chip {
          font-family: 'Outfit', sans-serif; font-size: 11px;
          padding: 6px 12px; border-radius: 20px;
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .add-btn-bar {
          position: sticky;
          bottom: 0;
          padding: 16px 24px 32px;
          background: linear-gradient(to top, #0C0C0C 70%, transparent);
        }

        @media (max-width: 480px) {
          .add-btn-bar { padding-bottom: calc(env(safe-area-inset-bottom, 16px) + 16px); }
        }

        .add-inner {
          border-radius: 18px; padding: 16px;
          display: flex; align-items: center; justify-content: center;
          gap: 8px; font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 500; letter-spacing: 0.06em;
          cursor: pointer; transition: all 0.25s;
          border: none; width: 100%;
        }

        .tab-bar {
          position: sticky;
          bottom: 0;
          left: 0; right: 0;
          height: 80px;
          background: rgba(12,12,12,0.97);
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; justify-content: space-around; align-items: center;
          padding: 0 10px 16px;
          backdrop-filter: blur(20px);
          z-index: 40;
        }

        @media (max-width: 480px) {
          .tab-bar { padding-bottom: calc(env(safe-area-inset-bottom, 16px) + 8px); height: auto; min-height: 70px; }
        }

        .tab { display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; opacity: 0.4; transition: opacity 0.2s; }
        .tab.active { opacity: 1; }
        .tab-icon { font-size: 22px; }
        .tab-label { font-family: 'Outfit', sans-serif; font-size: 9px; font-weight: 400; letter-spacing: 0.08em; text-transform: uppercase; color: #C6932A; }
        .tab:not(.active) .tab-label { color: rgba(255,255,255,0.5); }

        .glow { position: absolute; border-radius: 50%; filter: blur(40px); pointer-events: none; }
      `}</style>

      <div className="phone">
        <div className="notch" />

        <div className="scroll-area">
          {/* Status Bar */}
          <div className="status-bar">
            <span>9:41</span>
            <span style={{ letterSpacing: "1px" }}>● ● ●</span>
            <span>⬆ 100%</span>
          </div>

          {/* Header */}
          <div className="header">
            <div className="brand">
              <span>LUMIÈRE</span>
              Atelier
            </div>
            <div className="cart-btn">
              🛍️
              {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
            </div>
          </div>

          {/* Category Pills */}
          <div className="cats">
            {categories.map(c => (
              <button key={c} className={`cat-pill ${activeCategory === c ? "active" : ""}`} onClick={() => setActiveCategory(c)}>
                {c}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid">
            {filtered.map(p => (
              <div key={p.id} className="card" onClick={() => setSelectedProduct(p)}>
                <div className="card-visual" style={{ background: `linear-gradient(145deg, ${p.gradient[0]}, ${p.gradient[1]})` }}>
                  <div className="glow" style={{ width: 80, height: 80, background: p.accentColor, opacity: 0.18, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                  <span style={{ position: "relative", zIndex: 1 }}>{p.emoji}</span>
                  <div className="card-tag" style={{ background: p.tagColor }}>{p.tag}</div>
                  <button className="wish-btn" onClick={(e) => toggleWishlist(p.id, e)}>
                    {wishlist.includes(p.id) ? "♥" : "♡"}
                  </button>
                </div>
                <div className="card-info">
                  <div className="card-cat" style={{ color: p.accentColor }}>{p.category}</div>
                  <div className="card-name">{p.name}</div>
                  <div className="card-price">£{p.price.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Bar */}
          <div className="tab-bar">
            {[{ icon: "✦", label: "Catalog" }, { icon: "🔍", label: "Search" }, { icon: "♥", label: "Saved" }, { icon: "◎", label: "Profile" }].map((t, i) => (
              <div key={t.label} className={`tab ${i === 0 ? "active" : ""}`}>
                <div className="tab-icon">{t.icon}</div>
                <div className="tab-label">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Overlays */}
        {products.map(p => (
          <div key={p.id} className={`overlay ${selectedProduct?.id === p.id ? "open" : ""}`}>
            <div className="detail-hero" style={{ background: `linear-gradient(160deg, ${p.gradient[0]}, ${p.gradient[1]})` }}>
              <div className="glow" style={{ width: 180, height: 180, background: p.accentColor, opacity: 0.2, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <span style={{ position: "relative", zIndex: 1 }}>{p.emoji}</span>
              <button className="back-btn" onClick={() => setSelectedProduct(null)}>←</button>
              <button className="detail-wish" onClick={(e) => toggleWishlist(p.id, e)}>
                {wishlist.includes(p.id) ? "♥" : "♡"}
              </button>
            </div>

            <div className="detail-body">
              <div className="detail-cat" style={{ color: p.accentColor }}>{p.category}</div>
              <div className="detail-name">{p.name}</div>
              <div className="detail-price">£{p.price.toLocaleString()}</div>
              <div className="detail-desc">{p.description}</div>
              <div className="meta-row">
                <div className="meta-chip">🎨 {p.finish}</div>
                <div className="meta-chip">⚡ {p.wattage}</div>
                <div className="meta-chip">🪨 {p.material}</div>
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Specifications</div>
              <div className="spec-grid">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k} className="spec-item">
                    <div className="spec-label">{k}</div>
                    <div className="spec-val">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="add-btn-bar">
              <button
                className="add-inner"
                style={{ background: addedToCart ? "#1A6B4A" : p.accentColor, color: addedToCart ? "#fff" : "#000" }}
                onClick={handleAddToCart}
              >
                {addedToCart ? "✓ Added to Bag" : `Add to Bag — £${p.price.toLocaleString()}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
