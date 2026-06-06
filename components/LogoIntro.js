"use client";

import { useState, useEffect } from "react";

export default function LogoIntro() {
  const [phase,  setPhase]  = useState("idle");
  const [target, setTarget] = useState(null); // { tx, ty, scale }

  useEffect(() => {
    // No sessionStorage — plays on every page load / hard refresh
    const t1 = setTimeout(() => setPhase("center"), 80);

    const t2 = setTimeout(() => {
      const el = document.getElementById("hb-navbar-logo");
      if (el) {
        const r = el.getBoundingClientRect();
        setTarget({
          tx:    r.left + r.width  / 2 - window.innerWidth  / 2,
          ty:    r.top  + r.height / 2 - window.innerHeight / 2,
          scale: r.width / 200,
        });
      }
      setPhase("exit");
    }, 2600);

    const t3 = setTimeout(() => setPhase("done"), 3900);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  const isCentered = phase === "center";
  const isExit     = phase === "exit";

  /* ── Logo transform (GPU only — top/left never animate) ──────────────
     idle   : scale(0.72) opacity 0  → invisible, already at anchor
     center : scale(1)    opacity 1  → transition fires (spring pop-in)
     exit   : translate to navbar + scale down + fade                    */
  const logoTransform =
    isExit && target
      ? `translate(-50%,-50%) translate(${target.tx}px,${target.ty}px) scale(${target.scale})`
      : isCentered
      ? "translate(-50%,-50%) scale(1)"
      : "translate(-50%,-50%) scale(0.72)";

  /* Keeping a real transition even in idle means the transition is
     already "live" when center phase flips values — so the spring fires. */
  const logoTransition = isExit
    ? "transform 1.1s cubic-bezier(.76,0,.24,1), opacity .4s ease .82s"
    : "transform .65s cubic-bezier(.34,1.56,.64,1), opacity .5s ease";

  /* exit: target opacity=0 but CSS delay keeps it at 1 for .82 s first */
  const logoOpacity = isCentered ? 1 : 0;

  const bgFade = {
    opacity:    isExit ? 0 : 1,
    transition: isExit ? "opacity 1s ease 0.1s" : "opacity 0.5s ease",
    pointerEvents: isExit ? "none" : "all",
  };

  const barrX = Array.from({ length: 18 }, (_, i) => 50 + i * 80);
  const dashX  = Array.from({ length: 18 }, (_, i) => i * 84);

  return (
    <>
      {/* ── Construction Scene ── */}
      <div className="fixed inset-0 z-[9997] overflow-hidden" style={bgFade}>
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id="li-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#0c0e22" />
              <stop offset="65%"  stopColor="#141628" />
              <stop offset="100%" stopColor="#1c1830" />
            </linearGradient>
          </defs>
          <style>{`
            @keyframes li-rise  { from{transform:scaleY(0)} to{transform:scaleY(1)} }
            @keyframes li-blink { 0%,100%{opacity:.9} 50%{opacity:.35} }
            .li-bld { transform-box:fill-box; transform-origin:center bottom;
                      animation:li-rise 2.2s cubic-bezier(.16,1,.3,1) both }
            .li-d0{animation-delay:0s}   .li-d1{animation-delay:.14s}
            .li-d2{animation-delay:.26s} .li-d3{animation-delay:.40s}
            .li-wl { animation:li-blink 1.8s ease-in-out infinite }
          `}</style>

          <rect width="1440" height="900" fill="url(#li-sky)" />

          {/* Stars */}
          {[[110,65],[290,42],[530,78],[740,32],[960,60],[1170,48],[1370,75],[190,118],[800,105],[1260,92]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r={1+i%2*0.6} fill="white" opacity={0.28+i%3*0.1} />
          ))}

          {/* Background buildings */}
          <g opacity="0.45">
            <g className="li-bld li-d0"><rect x="28"   y="470" width="95"  height="270" fill="#1c1c2e" /></g>
            <g className="li-bld li-d1"><rect x="1318" y="440" width="122" height="300" fill="#1c1c2e" /></g>
          </g>

          {/* Building 1 */}
          <g className="li-bld li-d1">
            <rect x="88" y="370" width="158" height="370" fill="#282840" />
            {[390,432,474,516,558,600,642].map((y,ri)=>(
              <g key={ri}>{[106,132,158,184,210,236].map((x,ci)=>(
                <rect key={ci} x={x} y={y} width="16" height="22" fill={`rgba(251,191,36,${[.17,.11,.19,.13,.16,.12][ci]||.12})`} />
              ))}</g>
            ))}
          </g>

          {/* Building 2 */}
          <g className="li-bld li-d0">
            <rect x="292" y="215" width="172" height="525" fill="#232342" />
            {[235,275,315,355,395,435,475,515,555,595,635,675].map((y,ri)=>(
              <g key={ri}>{[310,338,366,394,422,450].map((x,ci)=>(
                <rect key={ci} x={x} y={y} width="16" height="22" fill={`rgba(251,191,36,${[.18,.12,.19,.10,.16,.14][ci]||.12})`} />
              ))}</g>
            ))}
          </g>

          {/* Building 3 — tallest */}
          <g className="li-bld li-d0">
            <rect x="516" y="128" width="192" height="612" fill="#252545" />
            {[148,190,232,274,316,358,400,442,484,526,568,610,652,692].map((y,ri)=>(
              <g key={ri}>{[534,558,582,606,630,654,678].map((x,ci)=>(
                <rect key={ci} x={x} y={y} width="16" height="22" fill={`rgba(251,191,36,${[.19,.12,.17,.11,.18,.13,.16][ci]||.12})`} />
              ))}</g>
            ))}
          </g>

          {/* Building 4 */}
          <g className="li-bld li-d1">
            <rect x="760" y="245" width="165" height="495" fill="#22223e" />
            {[265,307,349,391,433,475,517,559,601,643].map((y,ri)=>(
              <g key={ri}>{[778,804,830,856,882,906].map((x,ci)=>(
                <rect key={ci} x={x} y={y} width="16" height="22" fill={`rgba(251,191,36,${[.15,.19,.11,.17,.12,.18][ci]||.12})`} />
              ))}</g>
            ))}
          </g>

          {/* Building 5 */}
          <g className="li-bld li-d2">
            <rect x="980" y="382" width="158" height="358" fill="#252540" />
            {[402,444,486,528,570,612,654].map((y,ri)=>(
              <g key={ri}>{[998,1024,1050,1076,1104].map((x,ci)=>(
                <rect key={ci} x={x} y={y} width="16" height="22" fill={`rgba(251,191,36,${[.17,.12,.19,.14,.16][ci]||.12})`} />
              ))}</g>
            ))}
          </g>

          {/* Building 6 — skeleton under construction */}
          <g className="li-bld li-d3">
            {[1188,1248,1308,1368].map((x,i)=>(
              <rect key={i} x={x} y={280+i*20} width="14" height={460-i*20} fill="#2e2e4a" />
            ))}
            {[400,456,512,568,624,680,736].map((y,i)=>(
              <rect key={i} x="1188" y={y} width="194" height="9" fill="#36364e" />
            ))}
            {[1195,1206,1255,1266,1316,1327,1376,1387].map((x,i)=>(
              <line key={i} x1={x} y1="280" x2={x} y2={248+i%3*14} stroke="#c9a07a" strokeWidth="2" opacity="0.55" />
            ))}
          </g>

          {/* Road */}
          <rect x="0" y="740" width="1440" height="18"  fill="#1c1c2e" />
          <rect x="0" y="758" width="1440" height="100" fill="#0e0e18" />
          <line x1="0" y1="760" x2="1440" y2="760" stroke="white" strokeWidth="2.5" opacity="0.45" />
          <line x1="0" y1="854" x2="1440" y2="854" stroke="white" strokeWidth="2.5" opacity="0.45" />
          {dashX.map((x,i)=>(
            <line key={i} x1={x} y1="806" x2={x+52} y2="806" stroke="#fbbf24" strokeWidth="3" opacity="0.65" />
          ))}

          {/* Barricades */}
          {barrX.map((x,i)=>(
            <g key={i}>
              <polygon points={`${x+6},740 ${x+54},740 ${x+60},752 ${x},752`} fill="#d97706" opacity="0.82" />
              <polygon points={`${x+16},740 ${x+44},740 ${x+40},746 ${x+20},746`} fill="white" opacity="0.78" />
              <rect x={x} y="750" width="60" height="5" fill="#b45309" opacity="0.88" />
              {i%3===0 && <circle cx={x+30} cy="737" r="4.5" fill="#f97316" opacity="0.9" className="li-wl" />}
            </g>
          ))}
          <line x1="0" y1="738" x2="1440" y2="738" stroke="#f97316" strokeWidth="1.5" opacity="0.3" strokeDasharray="20,12" />
        </svg>
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/30"
        style={{
          opacity:    isExit ? 0 : 1,
          transition: isExit ? "opacity 1s ease 0.1s" : "opacity 0.4s ease",
          pointerEvents: isExit ? "none" : "all",
        }}
      />

      {/* ── Logo: pops in at center → flies to navbar ───────────────────── */}
      <div
        style={{
          position:   "fixed",
          top:        "50%",
          left:       "50%",
          width:      "200px",
          zIndex:     10000,
          transform:  logoTransform,
          opacity:    logoOpacity,
          transition: logoTransition,   /* transition always live — fires on value change */
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/1-crop.svg"
          alt="HouseBanao"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </>
  );
}
