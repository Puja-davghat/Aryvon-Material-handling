import React from 'react';
import AnimatedSection from './AnimatedSection';

// ── 3D Isometric Illustration Components (Matching the exact design) ──

function Step01Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="42" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* 3D Clipboard Base (Deep Blue) */}
      <path d="M32 30 L74 16 L88 80 L46 94 Z" fill="#2b6cb0" />
      <path d="M46 94 L88 80 L88 84 L46 98 Z" fill="#1a4971" />
      <path d="M32 30 L46 94 L46 98 L32 34 Z" fill="#1e3a5f" />

      {/* Top Clip (Metallic Silver/Cyan) */}
      <rect x="50" y="14" width="22" height="10" rx="3" fill="#cbd5e1" transform="rotate(-18 61 19)" />
      <rect x="53" y="16" width="16" height="4" rx="2" fill="#94a3b8" transform="rotate(-18 61 18)" />

      {/* Document Sheet (Crisp White) */}
      <path d="M37 34 L73 22 L83 78 L47 90 Z" fill="#ffffff" />
      
      {/* Checklist Rows with Blue Checks */}
      <circle cx="48" cy="42" r="3" fill="#3b82f6" />
      <line x1="55" y1="41" x2="72" y2="36" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
      
      <circle cx="51" cy="54" r="3" fill="#3b82f6" />
      <line x1="58" y1="53" x2="75" y2="48" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="54" cy="66" r="3" fill="#3b82f6" />
      <line x1="61" y1="65" x2="78" y2="60" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />

      {/* 3D Magnifying Glass */}
      <g className="animate-3d-float">
        {/* Handle */}
        <path d="M78 72 L96 90" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
        <path d="M79 73 L95 89" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />

        {/* Outer Ring */}
        <ellipse cx="68" cy="60" rx="18" ry="18" fill="#dbeafe" fillOpacity="0.75" stroke="#2563eb" strokeWidth="4.5" />
        {/* Inner Glare Glass */}
        <ellipse cx="64" cy="56" rx="12" ry="12" fill="#ffffff" fillOpacity="0.45" />
        <path d="M58 52 Q64 48 70 52" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Step02Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="44" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* 3D Conveyor Bed & Frame */}
      <path d="M22 72 L72 44 L98 58 L48 86 Z" fill="#64748b" />
      <path d="M48 86 L98 58 L98 64 L48 92 Z" fill="#334155" />
      <path d="M22 72 L48 86 L48 92 L22 78 Z" fill="#1e293b" />

      {/* Conveyor Rollers / Track */}
      <path d="M28 73 L74 47" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 76 L80 50" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 80 L86 54" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

      {/* Large Yellow/Orange 3D Spur Gear */}
      <g transform="translate(62, 34)">
        <ellipse cx="0" cy="0" rx="16" ry="16" fill="#f59e0b" stroke="#d97706" strokeWidth="2.5" />
        {/* Gear Teeth */}
        <path d="M-3 -19 H3 V-15 H-3 Z M-3 15 H3 V19 H-3 Z M-19 -3 V3 H-15 V-3 Z M15 -3 V3 H19 V-3 Z" fill="#d97706" />
        <ellipse cx="0" cy="0" rx="6" ry="6" fill="#78350f" />
        <ellipse cx="-2" cy="-2" rx="3" ry="3" fill="#fef3c7" fillOpacity="0.6" />
      </g>

      {/* Small Secondary Dark Grey Gear */}
      <g transform="translate(82, 46)">
        <ellipse cx="0" cy="0" rx="10" ry="10" fill="#475569" stroke="#1e293b" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="4" ry="4" fill="#0f172a" />
      </g>

      {/* 3D Bright Green Curved Upward Arrow */}
      <g className="animate-3d-float-delayed">
        <path
          d="M78 40 C84 30 88 22 94 14"
          stroke="#22c55e"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <polygon points="90,8 102,12 96,24" fill="#16a34a" />
        <polygon points="90,8 98,11 94,18" fill="#4ade80" />
      </g>
    </svg>
  );
}

function Step03Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="42" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* 3D Structural Steel Rack / Frame (Blue/Slate) */}
      <g stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Vertical Uprights */}
        <line x1="28" y1="42" x2="28" y2="92" />
        <line x1="44" y1="32" x2="44" y2="82" />
        {/* Horizontal Beams */}
        <line x1="28" y1="48" x2="44" y2="38" />
        <line x1="28" y1="68" x2="44" y2="58" />
        <line x1="28" y1="88" x2="44" y2="78" />
        {/* Cross Bracing */}
        <line x1="28" y1="48" x2="44" y2="58" stroke="#3b82f6" strokeWidth="2" />
        <line x1="28" y1="68" x2="44" y2="78" stroke="#3b82f6" strokeWidth="2" />
      </g>

      {/* Blue Drafting Triangle / Set Square */}
      <polygon points="52,72 82,54 82,90" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
      <polygon points="62,72 74,65 74,80" fill="#ffffff" fillOpacity="0.9" />

      {/* 3D Yellow Engineer Safety Hardhat */}
      <g className="animate-3d-float" transform="translate(68, 62)">
        {/* Helmet Dome */}
        <ellipse cx="14" cy="12" rx="15" ry="11" fill="#facc15" />
        <path d="M-1 14 C-1 4 29 4 29 14 Z" fill="#eab308" />
        {/* Helmet Rim */}
        <ellipse cx="14" cy="14" rx="18" ry="4" fill="#ca8a04" />
        <ellipse cx="14" cy="13" rx="17" ry="3" fill="#fef08a" fillOpacity="0.8" />
        {/* Center Ridge */}
        <path d="M13 3 C13 3 14 11 15 13" stroke="#ca8a04" strokeWidth="2" />
      </g>
    </svg>
  );
}

function Step04Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="42" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* Monitor Stand Base */}
      <ellipse cx="64" cy="90" rx="14" ry="4" fill="#475569" />
      <rect x="62" y="78" width="4" height="12" rx="1" fill="#64748b" />

      {/* 3D Monitor Frame */}
      <rect x="28" y="32" width="60" height="46" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="2.5" />
      {/* Screen Area (Vibrant Cyan / Blueprint Blue) */}
      <rect x="33" y="37" width="50" height="36" rx="2" fill="#0f172a" />
      
      {/* 3D CAD Wireframe Isometric Box on Screen */}
      <g stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M46 56 L58 48 L70 54 L58 62 Z" fill="#0284c7" fillOpacity="0.3" />
        <path d="M46 56 L46 64 L58 70 L58 62 Z" fill="#0369a1" fillOpacity="0.3" />
        <path d="M58 62 L58 70 L70 62 L70 54 Z" fill="#075985" fillOpacity="0.3" />
        <line x1="46" y1="56" x2="58" y2="48" />
        <line x1="58" y1="48" x2="70" y2="54" />
        <line x1="70" y1="54" x2="58" y2="62" />
        <line x1="58" y1="62" x2="46" y2="56" />
      </g>

      {/* 3D Blue Engineering Gear (Floating next to monitor) */}
      <g className="animate-3d-float" transform="translate(88, 64)">
        <ellipse cx="0" cy="0" rx="13" ry="13" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
        {/* Teeth */}
        <path d="M-3 -15 H3 V-11 H-3 Z M-3 11 H3 V15 H-3 Z M-15 -3 V3 H-11 V-3 Z M11 -3 V3 H15 V-3 Z" fill="#1d4ed8" />
        <ellipse cx="0" cy="0" rx="5" ry="5" fill="#1e3a8a" />
        <ellipse cx="-2" cy="-2" rx="2" ry="2" fill="#93c5fd" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

function Step05Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="42" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* 3D Clipboard Base */}
      <rect x="28" y="24" width="46" height="62" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
      <rect x="38" y="20" width="26" height="8" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />

      {/* White Inspection Paper */}
      <rect x="33" y="32" width="36" height="48" rx="2" fill="#ffffff" />

      {/* Green Checkmarks */}
      <path d="M38 42 L41 45 L47 38" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="51" y1="42" x2="63" y2="42" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

      <path d="M38 52 L41 55 L47 48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="51" y1="52" x2="63" y2="52" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

      <path d="M38 62 L41 65 L47 58" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="51" y1="62" x2="63" y2="62" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

      {/* Dark Grey Machine Spur Gear */}
      <g transform="translate(82, 44)">
        <ellipse cx="0" cy="0" rx="12" ry="12" fill="#475569" stroke="#334155" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="4" ry="4" fill="#0f172a" />
      </g>

      {/* 3D Vernier Caliper / Micrometer Tool */}
      <g className="animate-3d-float-delayed" transform="translate(56, 74)">
        {/* Main Beam */}
        <rect x="0" y="4" width="38" height="5" rx="1" fill="#cbd5e1" stroke="#475569" strokeWidth="1.2" />
        {/* Fixed Jaw */}
        <path d="M0 4 L0 -6 L4 -4 L4 9 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1" />
        {/* Sliding Jaw */}
        <path d="M14 4 L14 -5 L18 -3 L18 9 Z" fill="#64748b" stroke="#334155" strokeWidth="1" />
        {/* Scale Ticks */}
        <line x1="8" y1="4" x2="8" y2="7" stroke="#475569" strokeWidth="0.8" />
        <line x1="12" y1="4" x2="12" y2="7" stroke="#475569" strokeWidth="0.8" />
        <line x1="20" y1="4" x2="20" y2="7" stroke="#475569" strokeWidth="0.8" />
        <line x1="24" y1="4" x2="24" y2="7" stroke="#475569" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

function Step06Illustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Ground Shadow */}
      <ellipse cx="60" cy="100" rx="42" ry="10" fill="#042c5c" fillOpacity="0.08" />

      {/* 3D Blue Engineering Blueprint Sheet */}
      <g transform="translate(36, 68)">
        <polygon points="0,10 38,0 48,22 10,32" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
        {/* Blueprint Grid Lines */}
        <line x1="10" y1="13" x2="38" y2="5" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="16" y1="20" x2="44" y2="12" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="20" y1="8" x2="26" y2="23" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      {/* 3D Yellow Hardhat */}
      <g className="animate-3d-float" transform="translate(48, 28)">
        <ellipse cx="20" cy="18" rx="18" ry="13" fill="#facc15" />
        <path d="M2 19 C2 7 38 7 38 19 Z" fill="#eab308" />
        <ellipse cx="20" cy="20" rx="22" ry="5" fill="#ca8a04" />
        <ellipse cx="20" cy="19" rx="20" ry="4" fill="#fef08a" fillOpacity="0.85" />
        <path d="M19 6 C19 6 20 16 21 19" stroke="#ca8a04" strokeWidth="2.5" />
      </g>

      {/* 3D Metallic Open-Ended Wrench */}
      <g className="animate-3d-float-delayed" transform="translate(68, 60) rotate(-35)">
        <rect x="0" y="8" width="8" height="28" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        {/* Wrench Jaw Head */}
        <path d="M-2 8 C-2 0 10 0 10 8 L7 10 L4 5 L1 10 Z" fill="#cbd5e1" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="4" cy="34" rx="3" ry="3" fill="#64748b" />
      </g>
    </svg>
  );
}

// ── The 6 Steps Data ──

const stepsData = [
  {
    number: '01',
    title: 'Application & Requirement Analysis',
    badgeColor: 'bg-[#2563eb]',
    illustration: Step01Illustration
  },
  {
    number: '02',
    title: 'Equipment Configuration & Load Assessment',
    badgeColor: 'bg-[#16a34a]',
    illustration: Step02Illustration
  },
  {
    number: '03',
    title: 'Structural Design & Engineering Calculations',
    badgeColor: 'bg-[#ea580c]',
    illustration: Step03Illustration
  },
  {
    number: '04',
    title: 'Design Development & Component Selection',
    badgeColor: 'bg-[#4f46e5]',
    illustration: Step04Illustration
  },
  {
    number: '05',
    title: 'Manufacturing Quality & Inspection',
    badgeColor: 'bg-[#0d9488]',
    illustration: Step05Illustration
  },
  {
    number: '06',
    title: 'Installation Planning & Operational Support',
    badgeColor: 'bg-[#e11d48]',
    illustration: Step06Illustration
  }
];

export default function EngineeringProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Giant "A" Watermark on bottom left matching the exact design */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-12 select-none text-[22rem] font-black leading-none text-slate-100/70"
        aria-hidden="true"
      >
        A
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Description (No marked slogan) */}
          <AnimatedSection animation="fade-right" className="lg:col-span-5 max-w-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy">
                  OUR ENGINEERING PROCESS
                </span>
                <span className="h-[2px] w-12 bg-slate-400" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy font-heading leading-[1.12]">
                From Your Requirements to the{' '}
                <span className="text-[#2563eb]">Right Solution.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At ARYVON, every project begins with understanding your application, evaluating site requirements, and identifying the right engineering approach. Through thoughtful design, structural analysis, and quality-focused manufacturing, we develop material handling equipment tailored to your operational needs. Our commitment extends beyond design and manufacturing to installation support and long-term equipment performance.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column: 2-Column Grid of 6 Steps with 3D Illustrations */}
          <AnimatedSection animation="fade-left" stagger className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
              {stepsData.map((step) => {
                const Illustration = step.illustration;
                return (
                  <div
                    key={step.number}
                    className="flex items-center gap-4 sm:gap-5 group"
                  >
                    {/* 3D Illustration */}
                    <div className="transition-transform duration-500 ease-out group-hover:scale-110">
                      <Illustration />
                    </div>

                    {/* Step Number Badge & Step Title */}
                    <div className="space-y-1.5 flex-1">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-extrabold text-xs shadow-md ${step.badgeColor}`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-sm sm:text-[15px] font-black text-brand-navy leading-snug group-hover:text-brand-orange transition-colors duration-200">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
