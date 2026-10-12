const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'client', 'public', 'assets', 'images', 'products'),
  path.join(__dirname, 'client', 'public', 'assets', 'images', 'industries'),
  path.join(__dirname, 'client', 'public', 'assets', 'images', 'hero'),
  path.join(__dirname, 'client', 'public', 'assets', 'images', 'about')
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

function generateIndustrialSvg(title, subtitle, iconType, primaryColor = '#042c5c', accentColor = '#fc6c04') {
  let iconSvg = '';
  
  if (iconType === 'forklift') {
    iconSvg = `
      <g transform="translate(250, 150) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <rect x="20" y="40" width="90" height="45" rx="8" fill="${primaryColor}" stroke="${accentColor}" />
        <path d="M40 40 L60 15 L95 15 L95 40" stroke="#cfe0fa" stroke-width="4" fill="rgba(10, 74, 148, 0.4)" />
        <circle cx="40" cy="85" r="14" fill="#021a38" stroke="${accentColor}" stroke-width="5" />
        <circle cx="95" cy="85" r="14" fill="#021a38" stroke="${accentColor}" stroke-width="5" />
        <line x1="110" y1="5" x2="110" y2="85" stroke="#ffffff" stroke-width="6" />
        <line x1="118" y1="5" x2="118" y2="85" stroke="#ffffff" stroke-width="6" />
        <rect x="110" y="55" width="45" height="8" rx="2" fill="${accentColor}" />
      </g>
    `;
  } else if (iconType === 'pallet') {
    iconSvg = `
      <g transform="translate(260, 160) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <path d="M20 70 L50 20 L60 20 L35 70" stroke="#cfe0fa" stroke-width="5" />
        <circle cx="20" cy="80" r="12" fill="#021a38" stroke="${accentColor}" stroke-width="4" />
        <rect x="35" y="60" width="25" height="20" rx="4" fill="${primaryColor}" stroke="${accentColor}" />
        <line x1="60" y1="65" x2="150" y2="65" stroke="#ffffff" stroke-width="6" />
        <line x1="60" y1="75" x2="150" y2="75" stroke="#ffffff" stroke-width="4" />
        <circle cx="140" cy="80" r="8" fill="#021a38" stroke="${accentColor}" stroke-width="4" />
      </g>
    `;
  } else if (iconType === 'crane') {
    iconSvg = `
      <g transform="translate(250, 140) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <rect x="10" y="20" width="180" height="18" rx="4" fill="${primaryColor}" stroke="${accentColor}" />
        <line x1="10" y1="10" x2="10" y2="90" stroke="#cfe0fa" stroke-width="6" />
        <line x1="190" y1="10" x2="190" y2="90" stroke="#cfe0fa" stroke-width="6" />
        <rect x="80" y="38" width="40" height="24" rx="4" fill="${accentColor}" />
        <line x1="100" y1="62" x2="100" y2="95" stroke="#ffffff" stroke-width="4" />
        <path d="M92 95 Q100 110 108 95" stroke="${accentColor}" stroke-width="5" />
      </g>
    `;
  } else if (iconType === 'conveyor') {
    iconSvg = `
      <g transform="translate(250, 170) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <rect x="10" y="30" width="180" height="16" rx="8" fill="${primaryColor}" stroke="${accentColor}" />
        <circle cx="30" cy="38" r="6" fill="#ffffff" />
        <circle cx="65" cy="38" r="6" fill="#ffffff" />
        <circle cx="100" cy="38" r="6" fill="#ffffff" />
        <circle cx="135" cy="38" r="6" fill="#ffffff" />
        <circle cx="170" cy="38" r="6" fill="#ffffff" />
        <line x1="40" y1="46" x2="40" y2="85" stroke="#cfe0fa" stroke-width="5" />
        <line x1="160" y1="46" x2="160" y2="85" stroke="#cfe0fa" stroke-width="5" />
        <rect x="75" y="8" width="45" height="22" rx="4" fill="${accentColor}" stroke="#ffffff" />
      </g>
    `;
  } else if (iconType === 'racking') {
    iconSvg = `
      <g transform="translate(260, 140) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <line x1="20" y1="10" x2="20" y2="95" stroke="#cfe0fa" stroke-width="6" />
        <line x1="160" y1="10" x2="160" y2="95" stroke="#cfe0fa" stroke-width="6" />
        <line x1="20" y1="35" x2="160" y2="35" stroke="${accentColor}" stroke-width="6" />
        <line x1="20" y1="65" x2="160" y2="65" stroke="${accentColor}" stroke-width="6" />
        <line x1="20" y1="95" x2="160" y2="95" stroke="${accentColor}" stroke-width="6" />
        <rect x="35" y="16" width="45" height="18" rx="2" fill="${primaryColor}" />
        <rect x="95" y="16" width="45" height="18" rx="2" fill="${primaryColor}" />
        <rect x="35" y="46" width="45" height="18" rx="2" fill="${primaryColor}" />
        <rect x="95" y="46" width="45" height="18" rx="2" fill="${accentColor}" />
      </g>
    `;
  } else {
    // Default dock / warehouse
    iconSvg = `
      <g transform="translate(250, 150) scale(1.6)" stroke="${accentColor}" stroke-width="4" fill="none">
        <rect x="20" y="45" width="160" height="14" rx="3" fill="${accentColor}" />
        <polygon points="20,45 180,45 160,75 40,75" fill="${primaryColor}" stroke="#cfe0fa" />
        <line x1="40" y1="75" x2="40" y2="95" stroke="#ffffff" stroke-width="6" />
        <line x1="160" y1="75" x2="160" y2="95" stroke="#ffffff" stroke-width="6" />
      </g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#021a38" />
        <stop offset="60%" stop-color="#042c5c" />
        <stop offset="100%" stop-color="#0a4a94" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
      </linearGradient>
      <pattern id="gridPat" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      </pattern>
      <pattern id="stripePat" width="28" height="28" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="28" stroke="#fc6c04" stroke-width="12" />
        <line x1="14" y1="0" x2="14" y2="28" stroke="#021a38" stroke-width="16" />
      </pattern>
    </defs>
    
    <!-- Deep Industrial Background -->
    <rect width="800" height="500" fill="url(#bgGrad)"/>
    <rect width="800" height="500" fill="url(#gridPat)"/>
    
    <!-- Subtle Ambient Glow -->
    <circle cx="400" cy="220" r="240" fill="rgba(252, 108, 4, 0.08)" filter="blur(40px)"/>
    <circle cx="150" cy="100" r="180" fill="rgba(10, 74, 148, 0.25)" filter="blur(50px)"/>

    <!-- Central Showcase Platform -->
    <rect x="80" y="70" width="640" height="360" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

    <!-- Top Badge Header -->
    <g transform="translate(110, 105)">
      <rect x="0" y="0" width="110" height="26" rx="13" fill="#fc6c04" />
      <text x="55" y="17" fill="#ffffff" font-family="'Outfit', 'Segoe UI', sans-serif" font-size="11" font-weight="800" letter-spacing="1.5" text-anchor="middle">ARYVON MHE</text>
    </g>

    <!-- Technical Hardware Icon Graphic -->
    ${iconSvg}

    <!-- Bottom Hazard Strip -->
    <rect x="80" y="420" width="640" height="10" rx="2" fill="url(#stripePat)"/>

    <!-- Labels and Typography -->
    <text x="400" y="365" fill="#ffffff" font-family="'Outfit', 'Segoe UI', sans-serif" font-size="24" font-weight="800" letter-spacing="1" text-anchor="middle">${title.toUpperCase()}</text>
    <text x="400" y="395" fill="#ffb27a" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="600" letter-spacing="2" text-anchor="middle">${subtitle.toUpperCase()}</text>
  </svg>`;
}

const assets = [
  // Products
  { path: 'products/hand-pallet-truck.jpg', title: 'Hand Pallet Truck', subtitle: 'Capacity: 2,500 kg - 3,000 kg', icon: 'pallet' },
  { path: 'products/electric-stacker.jpg', title: 'Walkie Electric Stacker', subtitle: 'Lift Height: 3.5m | 1,500 kg', icon: 'pallet' },
  { path: 'products/electric-forklift.jpg', title: 'Electric Counterbalance Forklift', subtitle: '3.0T AC Drive | Zero Emission', icon: 'forklift' },
  { path: 'products/reach-truck.jpg', title: 'Electric Reach Truck', subtitle: 'High Lift Mast: 8.5m | Narrow Aisle', icon: 'forklift' },
  { path: 'products/eot-crane.jpg', title: 'Single Girder EOT Crane', subtitle: 'IS 3177 Compliant | 3T - 15T', icon: 'crane' },
  { path: 'products/roller-conveyor.jpg', title: 'Powered Roller Conveyor', subtitle: 'Zero Pressure Accumulation', icon: 'conveyor' },
  { path: 'products/pallet-racking.jpg', title: 'Heavy-Duty Pallet Racking', subtitle: 'High Density Multi-Tier Storage', icon: 'racking' },
  { path: 'products/dock-leveler.jpg', title: 'Hydraulic Dock Leveler', subtitle: 'Loading Bay Integration 10T - 15T', icon: 'dock' },
  
  // Industries
  { path: 'industries/manufacturing.jpg', title: 'Manufacturing Industry', subtitle: 'Component Transit & Assembly Line Logistics', icon: 'conveyor' },
  { path: 'industries/warehousing.jpg', title: 'Warehousing & Storage', subtitle: 'Vertical Stacking & Inventory Optimization', icon: 'racking' },
  { path: 'industries/logistics.jpg', title: 'Logistics & Distribution', subtitle: 'High-Throughput Loading & Dock Operations', icon: 'forklift' },
  
  // Hero & About
  { path: 'hero/hero-warehouse.jpg', title: 'Material Handling Solutions', subtitle: 'Engineered For Manufacturing, Warehousing & Logistics', icon: 'forklift' },
  { path: 'about/about-facility.jpg', title: 'ARYVON Operations & Engineering', subtitle: 'Reliable Industrial Equipment & Customer Support', icon: 'racking' }
];

assets.forEach(asset => {
  const filePath = path.join(__dirname, 'client', 'public', 'assets', 'images', asset.path);
  const svgContent = generateIndustrialSvg(asset.title, asset.subtitle, asset.icon);
  fs.writeFileSync(filePath, svgContent, 'utf8');
  // Also write .svg version for flexibility
  const svgPath = filePath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svgContent, 'utf8');
});

console.log('All 13 industrial graphic assets generated successfully!');
