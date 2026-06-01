import { useState, useEffect, useRef } from "react";

const C = {
  strawberry: "#D63E3E",
  pineapple:  "#E8C13A",
  watermelon: "#E8728A",
  orange:     "#E8823A",
  leaf:       "#4A8C3F",
  cream:      "#FDF6EE",
  card:       "#FFFFFF",
  ink:        "#2A1F1A",
  muted:      "#8A7A6A",
  border:     "#EDE0D0",
};

const Stickers = {
  culture: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#C8AEFF" stroke="#5B35CC" strokeWidth="3"/>
      <rect x="13" y="15" width="34" height="26" rx="4" fill="#fff" stroke="#5B35CC" strokeWidth="2.5"/>
      <rect x="16" y="18" width="28" height="20" rx="2" fill="#EDE8FF"/>
      <circle cx="30" cy="28" r="6" fill="#E8C13A" stroke="#5B35CC" strokeWidth="2"/>
      {[0,60,120,180,240,300].map((a,i)=>(
        <line key={i} x1="30" y1="22" x2="30" y2="19" stroke="#E8C13A" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${a} 30 28)`}/>
      ))}
      <ellipse cx="22" cy="47" rx="7" ry="5" fill="#FFD6A0" stroke="#5B35CC" strokeWidth="2.2"/>
      <circle cx="19" cy="46" r="2" fill="#D63E3E"/>
      <circle cx="23" cy="44" r="2" fill="#3A8FE8"/>
      <circle cx="26" cy="47" r="1.8" fill="#4A8C3F"/>
      <rect x="32" y="40" width="4" height="12" rx="2" fill="#C8A87A" stroke="#5B35CC" strokeWidth="2"/>
      <ellipse cx="34" cy="39" rx="3" ry="4" fill="#E8728A" stroke="#5B35CC" strokeWidth="2"/>
      <ellipse cx="10" cy="12" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-30 10 12)"/>
      <ellipse cx="50" cy="52" rx="3" ry="5" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(20 50 52)"/>
    </svg>
  ),
  nature: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#A8DFA0" stroke="#3D7A35" strokeWidth="3"/>
      <path d="M4 30 Q4 8 30 8 Q56 8 56 30Z" fill="#87CEEB"/>
      <circle cx="44" cy="18" r="6" fill="#E8C13A" stroke="#C8A020" strokeWidth="2"/>
      {[0,45,90,135,180,225,270,315].map((a,i)=>(
        <line key={i} x1="44" y1="12" x2="44" y2="9" stroke="#E8C13A" strokeWidth="2" strokeLinecap="round" transform={`rotate(${a} 44 18)`}/>
      ))}
      <path d="M10 44 L25 20 L40 44Z" fill="#6BBF60" stroke="#3D7A35" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 44 L36 26 L48 44Z" fill="#4A9B40" stroke="#3D7A35" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M20 26 L25 20 L30 26Z" fill="#fff" stroke="#3D7A35" strokeWidth="1.5"/>
      <ellipse cx="30" cy="46" rx="22" ry="5" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2"/>
      <rect x="13" y="40" width="3" height="6" rx="1" fill="#8B5E3C" stroke="#3D7A35" strokeWidth="1.5"/>
      <circle cx="14.5" cy="38" r="5" fill="#4A9B40" stroke="#3D7A35" strokeWidth="2"/>
    </svg>
  ),
  food: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#FFD4A8" stroke="#D05020" strokeWidth="3"/>
      <path d="M12 32 Q12 50 30 50 Q48 50 48 32Z" fill="#fff" stroke="#D05020" strokeWidth="2.8"/>
      <path d="M12 32 Q12 48 30 48 Q48 48 48 32Z" fill="#FFF5EE"/>
      <ellipse cx="30" cy="32" rx="18" ry="5" fill="#FFD4A8" stroke="#D05020" strokeWidth="2"/>
      <circle cx="24" cy="30" r="4" fill="#D63E3E" stroke="#D05020" strokeWidth="2"/>
      <circle cx="32" cy="29" r="3.5" fill="#E8C13A" stroke="#C8A020" strokeWidth="2"/>
      <circle cx="38" cy="31" r="3" fill="#4A8C3F" stroke="#3D7A35" strokeWidth="2"/>
      <path d="M22 25 C20 21 23 18 21 14" stroke="#D05020" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M30 24 C28 20 31 17 29 13" stroke="#D05020" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M38 25 C36 21 39 18 37 14" stroke="#D05020" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="8" cy="48" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(20 8 48)"/>
      <ellipse cx="52" cy="48" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-20 52 48)"/>
    </svg>
  ),
  sport: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#FFE4A8" stroke="#C07010" strokeWidth="3"/>
      <circle cx="30" cy="33" r="18" fill="#E8823A" stroke="#C07010" strokeWidth="2.8"/>
      <path d="M12 33 Q22 26 30 33 Q38 40 48 33" stroke="#C07010" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M12 33 Q22 40 30 33 Q38 26 48 33" stroke="#C07010" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="30" y1="15" x2="30" y2="51" stroke="#C07010" strokeWidth="2"/>
      <circle cx="30" cy="33" r="5" fill="none" stroke="#C07010" strokeWidth="2"/>
      <rect x="22" y="10" width="16" height="3" rx="1.5" fill="#C07010"/>
      <line x1="25" y1="13" x2="23" y2="19" stroke="#C07010" strokeWidth="2" strokeLinecap="round"/>
      <line x1="35" y1="13" x2="37" y2="19" stroke="#C07010" strokeWidth="2" strokeLinecap="round"/>
      <path d="M23 19 Q30 23 37 19" stroke="#C07010" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="8" cy="14" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-40 8 14)"/>
      <ellipse cx="52" cy="14" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(40 52 14)"/>
    </svg>
  ),
  detente: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#FFD6E8" stroke="#B04070" strokeWidth="3"/>
      <path d="M14 34 L17 50 L43 50 L46 34Z" fill="#fff" stroke="#B04070" strokeWidth="2.8" strokeLinejoin="round"/>
      <path d="M14 34 L17 48 L43 48 L46 34Z" fill="#FFF0F6"/>
      <rect x="12" y="31" width="36" height="5" rx="2.5" fill="#E8728A" stroke="#B04070" strokeWidth="2.5"/>
      <path d="M46 36 Q56 36 56 42 Q56 49 46 49" stroke="#B04070" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <ellipse cx="30" cy="51" rx="18" ry="4" fill="#E8C13A" stroke="#C8A020" strokeWidth="2.2"/>
      <path d="M26 40 Q26 37 29 37 Q30 37 30 38 Q30 37 31 37 Q34 37 34 40 Q34 43 30 46 Q26 43 26 40Z" fill="#E8728A" stroke="#B04070" strokeWidth="1.5"/>
      <path d="M22 28 C20 24 23 21 21 17" stroke="#B04070" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M30 27 C28 23 31 20 29 16" stroke="#B04070" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M38 28 C36 24 39 21 37 17" stroke="#B04070" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="8" cy="50" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(15 8 50)"/>
      <ellipse cx="52" cy="50" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-15 52 50)"/>
    </svg>
  ),
  musee: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#C4DAFF" stroke="#3A5FA5" strokeWidth="3"/>
      <rect x="13" y="30" width="34" height="20" rx="3" fill="#EAF0FF" stroke="#3A5FA5" strokeWidth="2.5"/>
      <path d="M10 32 L30 14 L50 32Z" fill="#3A5FA5" stroke="#2A4A95" strokeWidth="2"/>
      <path d="M13 32 L30 17 L47 32Z" fill="#5B7FD5"/>
      {[18,27,36,45].map(x=>(
        <g key={x}>
          <rect x={x-3} y="30" width="6" height="18" rx="3" fill="#fff" stroke="#3A5FA5" strokeWidth="2"/>
          <ellipse cx={x} cy="30" rx="3.5" ry="2" fill="#C4DAFF" stroke="#3A5FA5" strokeWidth="1.5"/>
        </g>
      ))}
      <rect x="10" y="48" width="40" height="4" rx="2" fill="#3A5FA5"/>
      <circle cx="30" cy="24" r="4" fill="#E8C13A" stroke="#C8A020" strokeWidth="2"/>
      <ellipse cx="7" cy="22" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-25 7 22)"/>
      <ellipse cx="53" cy="22" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(25 53 22)"/>
    </svg>
  ),
  loisir: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#FFF5C0" stroke="#C8A020" strokeWidth="3"/>
      <path d="M30 10 L34 22 L47 22 L37 30 L41 43 L30 35 L19 43 L23 30 L13 22 L26 22 Z" fill="#E8C13A" stroke="#C8A020" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="21" cy="32" r="3.5" fill="#E8728A" opacity="0.6"/>
      <circle cx="39" cy="32" r="3.5" fill="#E8728A" opacity="0.6"/>
      <circle cx="26" cy="28" r="2" fill="#2A1F1A"/>
      <circle cx="34" cy="28" r="2" fill="#2A1F1A"/>
      <path d="M26 33 Q30 37 34 33" stroke="#2A1F1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="8" cy="50" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(20 8 50)"/>
      <ellipse cx="52" cy="50" rx="4" ry="6" fill="#5AB04A" stroke="#3D7A35" strokeWidth="2" transform="rotate(-20 52 50)"/>
    </svg>
  ),
  fraise:    ({ size=48 }) => <span style={{fontSize:size*0.72,lineHeight:1,display:"block"}}>🍓</span>,
  ananas:    ({ size=48 }) => <span style={{fontSize:size*0.72,lineHeight:1,display:"block"}}>🍍</span>,
  pasteque:  ({ size=48 }) => <span style={{fontSize:size*0.72,lineHeight:1,display:"block"}}>🍉</span>,
  mandarine: ({ size=48 }) => <span style={{fontSize:size*0.72,lineHeight:1,display:"block"}}>🍊</span>,
};

const QUESTIONS = [
  { id:"group",    Icon:Stickers.fraise,    color:C.strawberry, bg:"#FFF0F0", text:"T'es venu(e) avec qui ?",      sub:"On ne le dira pas à vos parents.", options:["Solo (le vrai luxe)","En couple 💑","En famille 🧒","Entre potes 🍻"] },
  { id:"mood",     Icon:Stickers.ananas,    color:C.pineapple,  bg:"#FFFBEA", text:"C'est quoi l'état d'esprit ?", sub:"Votre réponse restera confidentielle. Probablement.", options:["Flemme assumée 🛋️","En mode explorateur 🗺️","Culture & trucs sérieux 🎭","Manger & s'amuser 🎉"] },
  { id:"duration", Icon:Stickers.pasteque,  color:C.watermelon, bg:"#FFF0F4", text:"Vous avez combien de temps ?", sub:"On optimise. Comme Netflix mais en vrai.", options:["2-3h (vite fait bien fait)","Une demi-journée","Toute la journée (go)"] },
  { id:"budget",   Icon:Stickers.mandarine, color:C.orange,     bg:"#FFF4EE", text:"Le budget, on en est où ?",    sub:"Jugement zéro. Promis.", options:["Gratuit SVP 🙏","Correct (< 30€)","On lâche les chevaux 🐎"] },
];

const TYPE_CONFIG = {
  culture: { bg:"#EDE8FF", accent:"#5B35CC", tag:"CULTURE", Icon:Stickers.culture },
  nature:  { bg:"#E8F5E2", accent:"#3D7A35", tag:"NATURE",  Icon:Stickers.nature  },
  food:    { bg:"#FFF0E8", accent:"#D05020", tag:"BOUFFE",  Icon:Stickers.food    },
  sport:   { bg:"#FFF4E0", accent:"#C07010", tag:"SPORT",   Icon:Stickers.sport   },
  detente: { bg:"#FFE8F2", accent:"#B04070", tag:"DÉTENTE", Icon:Stickers.detente },
  musee:   { bg:"#EAF0FF", accent:"#3A5FA5", tag:"MUSÉE",   Icon:Stickers.musee   },
  loisir:  { bg:"#FFFBEA", accent:"#C8A020", tag:"LOISIR",  Icon:Stickers.loisir  },
};

const TRANSPORT_OPTIONS = [
  { id:"foot",    label:"À pied",     emoji:"🚶", radius:"Quartier (2 km)",        km:2  },
  { id:"bike",    label:"Vélo",       emoji:"🚲", radius:"Ville (10 km)",           km:10 },
  { id:"transit", label:"Transports", emoji:"🚇", radius:"Agglomération (30 km)",  km:30 },
  { id:"car",     label:"Voiture",    emoji:"🚗", radius:"Région (80 km)",          km:80 },
];

const POPULAR_CITIES = ["Paris","Lyon","Marseille","Bordeaux","Toulouse","Nantes","Strasbourg","Lille","Nice","Rennes","Montpellier","Grenoble","Rouen","Toulon","Dijon","Angers","Reims","Le Havre","Saint-Étienne","Clermont-Ferrand","Aix-en-Provence","Brest","Tours","Amiens","Metz","Perpignan","Besançon","Orléans","Caen","Nancy","Bayonne","Pau","Biarritz","Avignon","Nîmes","Cannes","Antibes","Ajaccio","Bastia"];

const LOADING_LINES = [
  "On vérifie que c'est pas fermé le lundi…",
  "On évite les endroits avec trop de monde…",
  "On cherche des trucs vraiment bien…",
  "On demande à nos sources locales…",
  "Presque ! On finalise ton programme…",
];

async function reverseGeocode(lat, lon) {
  const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=fr`);
  const data = await res.json();
  const a = data.address || {};
  const city = a.city || a.town || a.village || a.municipality || a.county || "";
  return { lat, lon, city, display: city || "Ta zone", source: "gps" };
}

function ActivityCard({ activity, index, visible, onReplace, replacing }) {
  const s = TYPE_CONFIG[activity.type] || TYPE_CONFIG.loisir;
  const StickerIcon = s.Icon;
  return (
    <div style={{ opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(28px)", transition:`all 0.5s ease ${index*0.09}s`, background:C.card, borderRadius:"22px", border:`2px solid ${replacing?C.pineapple:C.border}`, overflow:"hidden", marginBottom:"14px", boxShadow:"0 6px 20px rgba(0,0,0,0.07)" }}>
      <div style={{ background:s.bg, padding:"14px 16px", display:"flex", alignItems:"center", gap:"14px", borderBottom:`2px solid ${s.accent}20` }}>
        <div style={{ flexShrink:0, filter:"drop-shadow(2px 3px 0px rgba(0,0,0,0.13))" }}>
          {replacing ? <div style={{width:58,height:58,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"}}>⏳</div> : <StickerIcon size={58}/>}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"4px" }}>
            <span style={{ background:s.accent, color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"10px", padding:"2px 10px", borderRadius:"20px", letterSpacing:"0.8px" }}>{s.tag}</span>
            <div style={{ display:"flex", gap:"5px" }}>
              <span style={{ background:`${s.accent}22`, color:s.accent, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"12px", padding:"2px 8px", borderRadius:"20px" }}>{activity.time}</span>
              <span style={{ background:"#0000000A", color:C.muted, fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"12px", padding:"2px 8px", borderRadius:"20px" }}>{activity.duration}</span>
            </div>
          </div>
          <p style={{ margin:0, fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"16px", color:C.ink, lineHeight:1.2 }}>{replacing ? "Recherche d'une alternative…" : activity.name}</p>
        </div>
      </div>
      <div style={{ padding:"12px 16px" }}>
        {!replacing && (
          <>
            <p style={{ margin:"0 0 10px", fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"13px", color:"#5A4A3A", lineHeight:1.55 }}>{activity.description}</p>
            <div style={{ background:"#EEF6EE", borderRadius:"12px", padding:"8px 12px", display:"flex", gap:"6px", alignItems:"flex-start" }}>
              <span style={{ fontSize:"14px", flexShrink:0 }}>🍃</span>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"12px", color:C.leaf, lineHeight:1.45 }}>{activity.tip}</span>
            </div>
            {activity.address && <p style={{ margin:"8px 0 0", fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"12px", color:C.muted }}>📍 {activity.address}</p>}
          </>
        )}
        <button onClick={onReplace} disabled={replacing}
          style={{ marginTop:"10px", width:"100%", background:replacing?"#f0f0f0":C.cream, color:replacing?C.muted:C.strawberry, border:`1.5px dashed ${replacing?C.border:C.strawberry}`, borderRadius:"10px", padding:"8px", fontSize:"12px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:replacing?"default":"pointer" }}>
          {replacing ? "⏳ Remplacement en cours…" : "🔄 Remplacer cette activité"}
        </button>
      </div>
    </div>
  );
}

function CityInput({ onConfirm, onSkip }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [transport, setTransport] = useState(null);

  const handleInput = (val) => {
    setInput(val);
    setSuggestions(val.length >= 2 ? POPULAR_CITIES.filter(c => c.toLowerCase().startsWith(val.toLowerCase())).slice(0,5) : []);
  };

  const confirm = (city) => {
    if (!transport) return;
    const t = TRANSPORT_OPTIONS.find(t => t.id === transport);
    onConfirm({ city, display:city, source:"manual", transport:t.id, transportLabel:t.label, transportEmoji:t.emoji, radiusKm:t.km, radiusLabel:t.radius });
  };

  const canConfirm = input.trim() && transport;

  return (
    <div style={{ minHeight:"100vh", background:C.cream, overflowY:"auto", padding:"24px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet"/>
      <div style={{ maxWidth:"440px", margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"24px", paddingTop:"8px" }}>
          <div style={{ display:"inline-block", filter:"drop-shadow(2px 4px 0px rgba(0,0,0,0.15))", marginBottom:"10px" }}><Stickers.nature size={70}/></div>
          <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"26px", color:C.ink, margin:"0 0 4px" }}>Où & comment ?</h2>
          <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"14px", color:C.muted, margin:0 }}>On adapte les suggestions à ton rayon d'action.</p>
        </div>
        <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"20px", padding:"18px", marginBottom:"14px", boxShadow:"0 4px 16px rgba(0,0,0,0.06)" }}>
          <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"13px", color:C.ink, margin:"0 0 10px" }}>📍 Ta ville de départ</p>
          <div style={{ position:"relative" }}>
            <input value={input} onChange={e => handleInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && canConfirm && confirm(input.trim())}
              placeholder="Trémouilles, Ploubazlanec, Châteaugiron…" autoFocus
              style={{ width:"100%", padding:"12px 16px", borderRadius:suggestions.length?"12px 12px 0 0":"12px", border:`2px solid ${C.border}`, fontSize:"15px", fontFamily:"'Nunito',sans-serif", fontWeight:700, color:C.ink, background:C.cream, outline:"none", boxSizing:"border-box" }}/>
          </div>
          {suggestions.length > 0 && (
            <div style={{ background:C.card, border:`2px solid ${C.border}`, borderTop:"none", borderRadius:"0 0 12px 12px", overflow:"hidden" }}>
              {suggestions.map(city => (
                <button key={city} onClick={() => { setInput(city); setSuggestions([]); }}
                  style={{ display:"block", width:"100%", padding:"10px 16px", background:"none", border:"none", borderTop:`1px solid ${C.border}`, fontSize:"14px", fontFamily:"'Nunito',sans-serif", fontWeight:700, color:C.ink, cursor:"pointer", textAlign:"left" }}
                  onMouseEnter={e => e.currentTarget.style.background="#FFF0F0"}
                  onMouseLeave={e => e.currentTarget.style.background="none"}>📍 {city}</button>
              ))}
            </div>
          )}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"12px" }}>
            {["Paris","Lyon","Marseille","Bordeaux","Toulouse","Nantes","Lille","Nice"].map(city => (
              <button key={city} onClick={() => { setInput(city); setSuggestions([]); }}
                style={{ background:input===city?C.strawberry:C.cream, border:`2px solid ${input===city?C.strawberry:C.border}`, color:input===city?"#fff":C.ink, borderRadius:"20px", padding:"5px 12px", fontSize:"12px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer" }}>
                {city}
              </button>
            ))}
          </div>
        </div>
        <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"20px", padding:"18px", marginBottom:"14px", boxShadow:"0 4px 16px rgba(0,0,0,0.06)" }}>
          <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"13px", color:C.ink, margin:"0 0 12px" }}>🚦 Comment tu te déplaces ?</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
            {TRANSPORT_OPTIONS.map(t => {
              const sel = transport === t.id;
              return (
                <button key={t.id} onClick={() => setTransport(t.id)} style={{ background:sel?C.pineapple:C.cream, border:`2px solid ${sel?C.pineapple:C.border}`, borderRadius:"14px", padding:"12px 10px", cursor:"pointer", textAlign:"left", transition:"all 0.15s" }}>
                  <div style={{ fontSize:"22px", marginBottom:"4px" }}>{t.emoji}</div>
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"13px", color:C.ink }}>{t.label}</div>
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"11px", color:sel?C.ink:C.muted, marginTop:"2px" }}>{t.radius}</div>
                </button>
              );
            })}
          </div>
        </div>
        <button onClick={() => canConfirm && confirm(input.trim())} style={{ width:"100%", background:canConfirm?`linear-gradient(135deg, ${C.strawberry}, ${C.orange})`:"#ddd", color:canConfirm?"#fff":C.muted, border:"none", borderRadius:"18px", padding:"16px", fontSize:"15px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:canConfirm?"pointer":"default", marginBottom:"12px" }}>
          {canConfirm ? "C'est parti ! →" : "Choisis ta ville + ton transport"}
        </button>
        <div style={{ textAlign:"center" }}>
          <button onClick={onSkip} style={{ background:"none", border:"none", color:C.muted, fontFamily:"'Nunito',sans-serif", fontSize:"13px", fontWeight:700, cursor:"pointer", textDecoration:"underline" }}>Continuer sans localisation</button>
        </div>
      </div>
    </div>
  );
}

function ItineraryMap({ activities, transportMode }) {
  const COLORS = ["#D63E3E","#3A6EA5","#4A8C3F","#E8823A","#B04070","#5B35CC","#C07010"];
  const TYPE_ICONS = { culture:"🎨", nature:"🌿", food:"🍜", sport:"🏀", detente:"☕", musee:"🏛️", loisir:"⭐" };
  const points = (activities||[]).filter(a => a.lat && a.lng);
  const mapsUrl = points.length > 0 ? `https://www.google.com/maps/dir/${points.map(p=>`${p.lat},${p.lng}`).join("/")}` : null;
  const transportEmoji = { foot:"🚶", bike:"🚲", transit:"🚇", car:"🚗" }[transportMode] || "📍";
  const transportLabel = { foot:"À pied", bike:"Vélo", transit:"Transports", car:"Voiture" }[transportMode] || "";

  return (
    <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"20px", overflow:"hidden", marginBottom:"20px", boxShadow:"0 6px 20px rgba(0,0,0,0.07)" }}>
      <div style={{ background:`linear-gradient(135deg, #FDF0E8, #FDF6EE)`, padding:"12px 16px", borderBottom:`2px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"13px", color:C.ink, margin:"0 0 2px" }}>🗺️ Ton itinéraire</p>
          {transportLabel && <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"11px", color:C.muted, margin:0 }}>{transportEmoji} {transportLabel}</p>}
        </div>
        {mapsUrl && (
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ background:"#3A6EA5", color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"12px", padding:"6px 14px", borderRadius:"20px", textDecoration:"none" }}>
            🗺️ Ouvrir Maps
          </a>
        )}
      </div>
      <div style={{ padding:"16px" }}>
        {(activities||[]).map((a, i) => {
          const color = COLORS[i % COLORS.length];
          const icon = TYPE_ICONS[a.type] || "📍";
          const mapsStop = a.address ? `https://www.google.com/maps/search/${encodeURIComponent(a.name+" "+a.address)}` : null;
          const isLast = i === (activities||[]).length - 1;
          return (
            <div key={i} style={{ display:"flex", gap:"12px" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:"36px", flexShrink:0 }}>
                <div style={{ width:"36px", height:"36px", borderRadius:"50%", background:color, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"16px", flexShrink:0 }}>{i+1}</div>
                {!isLast && <div style={{ width:"3px", flex:1, minHeight:"24px", background:`linear-gradient(${color}, ${COLORS[(i+1)%COLORS.length]})`, borderRadius:"2px", margin:"4px 0" }}/>}
              </div>
              <div style={{ flex:1, paddingBottom:isLast?"0":"12px" }}>
                <div style={{ background:`${color}10`, border:`1.5px solid ${color}30`, borderRadius:"14px", padding:"10px 12px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
                        <span style={{ fontSize:"16px" }}>{icon}</span>
                        <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"14px", color:C.ink }}>{a.name}</span>
                      </div>
                      <div style={{ display:"flex", gap:"6px" }}>
                        <span style={{ background:color, color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"10px", padding:"1px 8px", borderRadius:"20px" }}>{a.time}</span>
                        <span style={{ background:"#0000001A", color:C.muted, fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"10px", padding:"1px 8px", borderRadius:"20px" }}>{a.duration}</span>
                      </div>
                      {a.address && <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"11px", color:C.muted, margin:"4px 0 0" }}>📍 {a.address}</p>}
                    </div>
                    {mapsStop && (
                      <a href={mapsStop} target="_blank" rel="noopener noreferrer" style={{ background:"#fff", border:`1.5px solid ${color}`, color, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"11px", padding:"4px 10px", borderRadius:"20px", textDecoration:"none", flexShrink:0, marginLeft:"8px" }}>Maps →</a>
                    )}
                  </div>
                </div>
                {!isLast && <div style={{ textAlign:"center", fontSize:"14px", margin:"2px 0", color:C.muted, opacity:0.6 }}>{transportEmoji}</div>}
              </div>
            </div>
          );
        })}
      </div>
      {mapsUrl && (
        <div style={{ borderTop:`2px solid ${C.border}`, padding:"12px 16px" }}>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", background:`linear-gradient(135deg, ${C.strawberry}, ${C.orange})`, color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"14px", padding:"12px", borderRadius:"14px", textDecoration:"none" }}>
            🗺️ Ouvrir tout l'itinéraire dans Google Maps
          </a>
        </div>
      )}
    </div>
  );
}

function ShareSheet({ text }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyText = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };
  const shareWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");

  return (
    <div style={{ marginBottom:"12px" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width:"100%", background:open?C.ink:`linear-gradient(135deg, #4A8C3F, #6DB560)`, color:"#fff", border:"none", borderRadius:"18px", padding:"14px", fontSize:"15px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
        <span>{open ? "✕" : "📤"}</span>
        {open ? "Fermer" : "Partager ce programme"}
      </button>
      {open && (
        <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"18px", padding:"16px", marginTop:"8px", display:"flex", flexDirection:"column", gap:"10px" }}>
          <button onClick={shareWhatsApp} style={{ display:"flex", alignItems:"center", gap:"12px", background:"#25D366", color:"#fff", border:"none", borderRadius:"14px", padding:"13px 16px", cursor:"pointer", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"14px", textAlign:"left" }}>
            <span style={{ fontSize:"22px" }}>💬</span>
            <div>
              <div>Envoyer sur WhatsApp</div>
              <div style={{ fontWeight:600, fontSize:"11px", opacity:0.85 }}>Ouvre WhatsApp avec le programme</div>
            </div>
          </button>
          <button onClick={copyText} style={{ display:"flex", alignItems:"center", gap:"12px", background:copied?"#4A8C3F":C.cream, color:copied?"#fff":C.ink, border:`2px solid ${copied?"#4A8C3F":C.border}`, borderRadius:"14px", padding:"13px 16px", cursor:"pointer", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"14px", textAlign:"left" }}>
            <span style={{ fontSize:"22px" }}>{copied ? "✅" : "📋"}</span>
            <div>
              <div>{copied ? "Copié !" : "Copier le résumé texte"}</div>
              <div style={{ fontWeight:600, fontSize:"11px", color:copied?"rgba(255,255,255,0.8)":C.muted }}>À coller dans n'importe quelle appli</div>
            </div>
          </button>
          <div style={{ background:"#F8F4EE", border:`1px dashed ${C.border}`, borderRadius:"12px", padding:"12px", maxHeight:"120px", overflowY:"auto" }}>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"11px", color:C.muted, margin:"0 0 6px", textTransform:"uppercase", letterSpacing:"1px" }}>Aperçu</p>
            <pre style={{ fontFamily:"'Nunito',sans-serif", fontSize:"12px", color:C.ink, margin:0, whiteSpace:"pre-wrap", lineHeight:1.6 }}>{text}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState("welcome");
  const [location, setLocation] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [loadingLine, setLoadingLine] = useState(0);
  const [replacingIndex, setReplacingIndex] = useState(null);
  const resultRef = useRef(null);

  const FONTS = <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet"/>;

  useEffect(() => {
    if (step === "loading") {
      const t = setInterval(() => setLoadingLine(l => (l+1) % LOADING_LINES.length), 1800);
      return () => clearInterval(t);
    }
  }, [step]);

  useEffect(() => {
    if (step === "result" && result) {
      setTimeout(() => { setCardsVisible(true); resultRef.current?.scrollIntoView({ behavior:"smooth" }); }, 200);
    }
  }, [step, result]);

  const requestLocation = () => {
    setStep("locating");
    if (!navigator.geolocation) { setStep("manualInput"); return; }
    navigator.geolocation.getCurrentPosition(
      async pos => {
        try {
          const geo = await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
          setLocation(geo); setStep("questions");
        } catch {
          setLocation({ city:"", display:"Position détectée", source:"gps" });
          setStep("questions");
        }
      },
      () => setStep("manualInput"),
      { timeout: 8000 }
    );
  };

  const handleAnswer = option => {
    const newAnswers = { ...answers, [QUESTIONS[currentQ].id]: option };
    setAnswers(newAnswers);
    if (currentQ < QUESTIONS.length - 1) setCurrentQ(i => i + 1);
    else generatePlan(newAnswers);
  };

  const generatePlan = async (finalAnswers, loc) => {
    const usedLoc = loc !== undefined ? loc : location;
    setStep("loading"); setError(null); setCardsVisible(false);

    const city = usedLoc?.city || usedLoc?.display || "";
    const transportInfo = usedLoc?.transportLabel ? ` Transport: ${usedLoc.transportLabel}, rayon ${usedLoc.radiusKm}km.` : "";
    const locationCtx = city
      ? `Ville: ${city}.${transportInfo} Propose de vrais lieux locaux avec adresses precises.`
      : "Ville inconnue. Propose des suggestions pour une ville francaise.";

    const dur = finalAnswers.duration || "";
    const nb = dur.includes("journée") || dur.includes("go") ? 5 : dur.includes("demi") ? 4 : 3;

    const system = `Tu es un guide local sympa. ${locationCtx}
Reponds avec du JSON valide uniquement, sans backticks ni texte autour.
Format: {"intro":"...","city":"...","vibe":"...","activities":[{"time":"10h00","duration":"1h30","name":"...","type":"food","emoji":"emoji","description":"...","tip":"...","address":"...","lat":48.85,"lng":2.35}]}
Types: culture, nature, food, sport, detente, musee, loisir. Nombre: ${nb} activites. Repas si plus de 2 activites.`;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system,
          userContent: `Groupe: ${finalAnswers.group}. Humeur: ${finalAnswers.mood}. Duree: ${finalAnswers.duration}. Budget: ${finalAnswers.budget}.`
        })
      });
      if (!res.ok) throw new Error("reseau");
      const data = await res.json();
      if (data.error) {
        const msg = data.error || "";
        if (msg.toLowerCase().includes("rate")) throw new Error("ratelimit");
        throw new Error("api");
      }
      const raw = (data.raw || "").trim();
      const i1 = raw.indexOf("{");
      const i2 = raw.lastIndexOf("}");
      if (i1 === -1 || i2 <= i1) throw new Error("json");
      const parsed = JSON.parse(raw.slice(i1, i2 + 1));
      if (!Array.isArray(parsed.activities) || !parsed.activities.length) throw new Error("vide");
      setError(null);
      setResult(parsed);
      setStep("result");
    } catch(e) {
      if (e.message === "ratelimit") {
        setError("Trop de requêtes, patiente 1-2 minutes et réessaie 🙏");
      } else {
        setError("Oups, ça a planté. On réessaie ?");
      }
      setStep("questions");
    }
  };

  const replaceActivity = async (index) => {
    if (replacingIndex !== null) return;
    setReplacingIndex(index);
    const current = result.activities[index];
    const others = result.activities.filter((_,i) => i !== index).map(a => a.name).join(", ");
    const loc = location;
    const locCtx = loc?.city ? `Ville: ${loc.city}.` : "";
    const prompt = `${locCtx} Activites deja presentes: ${others}. Remplace "${current.name}" (type: ${current.type}, heure: ${current.time}, duree: ${current.duration}) par une nouvelle activite differente. JSON uniquement: {"time":"${current.time}","duration":"${current.duration}","name":"...","type":"...","emoji":"...","description":"...","tip":"...","address":"...","lat":0,"lng":0}`;
    try {
      const res = await fetch("/api/generate", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:500, system:"Reponds uniquement en JSON valide sans backticks.", messages:[{ role:"user", content:prompt }] })
      });
      const data = await res.json();
      const raw = (data.content||[]).map(b=>b.text||"").join("").trim();
      const i1 = raw.indexOf("{"); const i2 = raw.lastIndexOf("}");
      if (i1 !== -1 && i2 > i1) {
        const act = JSON.parse(raw.slice(i1, i2+1));
        setResult(prev => ({ ...prev, activities: prev.activities.map((a,i) => i===index ? act : a) }));
      }
    } catch {}
    finally { setReplacingIndex(null); }
  };

  const reset = () => { setStep("welcome"); setAnswers({}); setCurrentQ(0); setResult(null); setCardsVisible(false); setLocation(null); setReplacingIndex(null); };

  const shareText = () => {
    if (!result) return "";
    const city = result.city || location?.city || "";
    const lines = [
      `JMN — ${result.vibe || "Mon programme"}`,
      city ? `📍 ${city}` : "",
      "",
      ...(result.activities||[]).map((a,i) => `${i+1}. ${a.time} — ${a.name}\n   📍 ${a.address||""}\n   ⏱ ${a.duration}`),
      "",
      "Généré avec JMN 🤙",
    ];
    return lines.filter(Boolean).join("\n");
  };

  if (step === "welcome") return (
    <div style={{ minHeight:"100vh", background:C.cream, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      {FONTS}
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      <div style={{ maxWidth:"400px", width:"100%", textAlign:"center" }}>
        <div style={{ position:"relative", height:"120px", marginBottom:"4px" }}>
          {[{S:Stickers.food,l:"0%",t:"22%",d:"0s",s:56},{S:Stickers.sport,l:"17%",t:"2%",d:"0.4s",s:62},{S:Stickers.nature,l:"37%",t:"6%",d:"0.2s",s:68},{S:Stickers.culture,l:"59%",t:"2%",d:"0.55s",s:58},{S:Stickers.detente,l:"80%",t:"20%",d:"0.3s",s:52}].map(({S,l,t,d,s},i) => (
            <div key={i} style={{ position:"absolute", left:l, top:t, animation:`float 2.8s ease-in-out ${d} infinite`, filter:"drop-shadow(2px 3px 0px rgba(0,0,0,0.13))" }}><S size={s}/></div>
          ))}
        </div>
        <h1 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"56px", color:C.ink, margin:"0 0 2px", lineHeight:1, letterSpacing:"-1px" }}>JMN</h1>
        <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"14px", color:C.muted, margin:"0 0 4px", letterSpacing:"2px", textTransform:"uppercase" }}>J'm'ennuie</p>
        <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"17px", color:C.ink, margin:"0 0 28px" }}>On s'en occupe. 🤙</p>
        <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"22px", padding:"18px 20px", marginBottom:"24px", textAlign:"left", boxShadow:"0 6px 20px rgba(0,0,0,0.06)" }}>
          {[["🎯","4 questions rapides"],["📍","Des vrais endroits près de toi"],["🎲","Un programme sur-mesure"]].map(([icon,text]) => (
            <div key={text} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"6px 0" }}>
              <span style={{ fontSize:"22px" }}>{icon}</span>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"14px", color:C.ink }}>{text}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          <button onClick={requestLocation} style={{ background:`linear-gradient(135deg, ${C.strawberry}, ${C.orange})`, color:"#fff", border:"none", borderRadius:"18px", padding:"16px", fontSize:"15px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", boxShadow:`0 6px 20px rgba(216,90,58,0.35)` }}>📍 Utiliser ma position GPS</button>
          <button onClick={() => setStep("manualInput")} style={{ background:C.card, color:C.ink, border:`2px solid ${C.border}`, borderRadius:"18px", padding:"14px", fontSize:"15px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer" }}>🏙️ Je tape ma ville</button>
          <button onClick={() => { setLocation(null); setStep("questions"); }} style={{ background:"none", border:"none", color:C.muted, fontFamily:"'Nunito',sans-serif", fontSize:"13px", fontWeight:700, cursor:"pointer", textDecoration:"underline" }}>Continuer sans localisation</button>
        </div>
      </div>
    </div>
  );

  if (step === "locating") return (
    <div style={{ minHeight:"100vh", background:C.cream, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"16px" }}>
      {FONTS}
      <style>{`@keyframes boing{0%,100%{transform:scale(1)}50%{transform:scale(1.25)}}`}</style>
      <div style={{ fontSize:"52px", animation:"boing 0.9s ease-in-out infinite" }}>📍</div>
      <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"20px", color:C.ink, margin:0 }}>On cherche où t'es…</p>
      <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"14px", color:C.muted, margin:0 }}>Autorise la localisation dans ton navigateur</p>
    </div>
  );

  if (step === "manualInput") return (
    <CityInput onConfirm={geo => { setLocation(geo); setStep("questions"); }} onSkip={() => { setLocation(null); setStep("questions"); }}/>
  );

  if (step === "questions") {
    const q = QUESTIONS[currentQ];
    const QIcon = q.Icon;
    return (
      <div style={{ minHeight:"100vh", background:q.bg, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
        {FONTS}
        <div style={{ maxWidth:"460px", width:"100%" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"28px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"20px", color:C.ink }}>JMN</span>
              <div style={{ display:"flex", gap:"8px" }}>
                {QUESTIONS.map((qq,i) => { const QQ = qq.Icon; return <div key={i} style={{ opacity:i<=currentQ?1:0.3, transform:i===currentQ?"scale(1.2)":"scale(1)", transition:"all 0.3s" }}><QQ size={34}/></div>; })}
              </div>
            </div>
            {location?.city && <span style={{ background:`${C.leaf}18`, color:C.leaf, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"12px", padding:"4px 12px", borderRadius:"20px" }}>📍 {location.city}</span>}
          </div>
          <div style={{ background:C.card, borderRadius:"26px", border:`2px solid ${C.border}`, padding:"28px 24px", boxShadow:"0 8px 28px rgba(0,0,0,0.08)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"18px" }}>
              <div style={{ filter:"drop-shadow(2px 3px 0 rgba(0,0,0,0.12))" }}><QIcon size={60}/></div>
              <div>
                <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"20px", color:C.ink, margin:"0 0 3px", lineHeight:1.3 }}>{q.text}</h2>
                <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:600, fontSize:"12px", color:C.muted, margin:0 }}>{q.sub}</p>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {q.options.map(opt => {
                const sel = answers[q.id] === opt;
                return (
                  <button key={opt} onClick={() => handleAnswer(opt)} style={{ background:sel?q.color:C.cream, color:sel?"#fff":C.ink, border:`2px solid ${sel?q.color:C.border}`, borderRadius:"14px", padding:"14px 18px", fontSize:"14px", fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", textAlign:"left", transition:"all 0.15s" }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
          {currentQ > 0 && <button onClick={() => setCurrentQ(i => i-1)} style={{ background:"none", border:"none", color:C.muted, fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"13px", cursor:"pointer", marginTop:"14px" }}>← Retour</button>}
          {error && <div style={{ marginTop:"12px", background:"#FDECEA", color:C.strawberry, padding:"12px 16px", borderRadius:"12px", fontSize:"13px", fontFamily:"'Nunito',sans-serif", fontWeight:700 }}>{error}</div>}
        </div>
      </div>
    );
  }

  if (step === "loading") return (
    <div style={{ minHeight:"100vh", background:C.cream, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"20px" }}>
      {FONTS}
      <style>{`@keyframes orbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      <div style={{ position:"relative", width:"110px", height:"110px" }}>
        <div style={{ position:"absolute", inset:0, animation:"orbit 3s linear infinite" }}>
          {[Stickers.food,Stickers.sport,Stickers.nature,Stickers.culture].map((S,i) => (
            <div key={i} style={{ position:"absolute", top:"50%", left:"50%", transform:`rotate(${i*90}deg) translateY(-50px) translateX(-50%)` }}><S size={30}/></div>
          ))}
        </div>
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}><Stickers.loisir size={40}/></div>
      </div>
      <div style={{ textAlign:"center" }}>
        <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"22px", color:C.ink, margin:"0 0 6px" }}>On cuisine ton programme…</p>
        {location?.city && <span style={{ background:`${C.leaf}18`, color:C.leaf, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"13px", padding:"4px 14px", borderRadius:"20px", display:"inline-block", marginBottom:"10px" }}>📍 {location.city}</span>}
        <div style={{ background:C.card, border:`2px solid ${C.border}`, borderRadius:"14px", padding:"12px 20px", marginTop:"8px" }}>
          <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"13px", color:C.muted, margin:0 }}>{LOADING_LINES[loadingLine]}</p>
        </div>
      </div>
    </div>
  );

  if (step === "result" && result) return (
    <div style={{ minHeight:"100vh", background:C.cream }}>
      {FONTS}
      <div style={{ background:`linear-gradient(135deg, ${C.strawberry}, ${C.orange})`, padding:"24px 20px 20px" }}>
        <div style={{ maxWidth:"520px", margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"14px" }}>
            <div>
              <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"13px", color:"rgba(255,255,255,0.7)", letterSpacing:"3px", textTransform:"uppercase", margin:"0 0 2px" }}>JMN · Ton programme</p>
              <h1 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"26px", color:"#fff", margin:"0 0 6px" }}>{result.vibe || "🍓 C'est parti !"}</h1>
              {(result.city||location?.city) && <span style={{ background:"rgba(255,255,255,0.25)", color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"12px", padding:"3px 12px", borderRadius:"20px" }}>📍 {result.city||location.city}</span>}
              {location?.transportEmoji && <span style={{ background:"rgba(255,255,255,0.2)", color:"#fff", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"12px", padding:"3px 12px", borderRadius:"20px", marginLeft:"6px" }}>{location.transportEmoji} {location.radiusLabel}</span>}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"4px", alignItems:"flex-end" }}>
              {[answers.group, answers.duration, answers.budget].map((a,i) => (
                <span key={i} style={{ background:"rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.9)", fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"11px", padding:"3px 10px", borderRadius:"20px" }}>{a?.split(" (")[0]}</span>
              ))}
            </div>
          </div>
          <div style={{ background:"rgba(255,255,255,0.2)", borderRadius:"16px", padding:"12px 16px", border:"1px solid rgba(255,255,255,0.3)" }}>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"14px", color:"#fff", margin:0, lineHeight:1.5 }}>{result.intro}</p>
          </div>
        </div>
      </div>
      <div ref={resultRef} style={{ maxWidth:"520px", margin:"0 auto", padding:"20px 16px" }}>
        <ItineraryMap activities={result.activities} transportMode={location?.transport}/>
        {result.activities?.map((a,i) => <ActivityCard key={`${i}-${a.name}`} activity={a} index={i} visible={cardsVisible} onReplace={() => replaceActivity(i)} replacing={replacingIndex===i}/>)}
        <ShareSheet text={shareText()}/>
        <div style={{ display:"flex", gap:"10px", marginTop:"12px", paddingBottom:"32px" }}>
          <button onClick={reset} style={{ flex:1, background:C.card, color:C.ink, border:`2px solid ${C.border}`, borderRadius:"18px", padding:"14px", fontSize:"14px", fontWeight:800, cursor:"pointer", fontFamily:"'Nunito',sans-serif" }}>↺ Recommencer</button>
          <button onClick={() => generatePlan(answers, location)} style={{ flex:1, background:`linear-gradient(135deg, ${C.strawberry}, ${C.orange})`, color:"#fff", border:"none", borderRadius:"18px", padding:"14px", fontSize:"14px", fontWeight:800, cursor:"pointer", fontFamily:"'Nunito',sans-serif" }}>🎲 Autre idée</button>
        </div>
      </div>
    </div>
  );

  return null;
}
