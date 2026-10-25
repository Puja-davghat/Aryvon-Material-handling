/**
 * ARYVON - MATERIAL HANDLING SOLUTIONS
 * Centralized Product Catalogue & Category Data
 * Strict product scope: 4 approved categories only
 * 1. Vertical Reciprocating Conveyor (VRC)
 * 2. Scissor Lift (Self-Propelled & Floor-Mounted)
 * 3. EOT Crane (Single Girder & Double Girder)
 * 4. Conveyor (Roller Conveyor & Chain Conveyor)
 */

export const categories = [
  {
    id: 1,
    name: 'VRC',
    fullName: 'Vertical Reciprocating Conveyor',
    slug: 'vrc',
    path: '/products/vrc',
    tagline: 'Powering vertical movement. Built for industrial demands.',
    description: 'Powering vertical movement. Built for industrial demands. Engineered for uncompromising performance. ARYVON VRC systems combine heavy-duty structural engineering, precise load handling, and integrated safety protection to move industrial materials between floors with confidence.',
    image: '/assets/images/products/vrc-goods-lift.jpg',
    fallback: '/assets/images/hero/hero-vrc-warehouse.jpg',
    productSlug: 'vertical-reciprocating-conveyor',
    priceRange: 'Custom Quote (Starting from ₹4,50,000)',
    leadTime: '3 - 5 Weeks',
    images: [
      {
        url: '/assets/images/products/vrc-goods-lift.jpg',
        title: 'VRC Goods Lift with Enclosed Safety Cage',
        caption: 'Heavy-duty structural steel mast with interlocked landing doors and multi-level floor access'
      },
      {
        url: '/assets/images/hero/hero-vrc-warehouse.jpg',
        title: 'Multi-Floor Warehouse Installation',
        caption: 'High-bay warehouse goods transfer between ground floor, mezzanine, and upper storage decks'
      },
      {
        url: '/assets/images/products/vrc-goods-lift.jpg',
        title: 'Precision Hydraulic Lift Platform',
        caption: 'Dual-side guide columns with electro-mechanical interlocks and pushbutton station'
      }
    ],
    features: [
      'Engineered for pallets, heavy totes, and bulk materials between floor levels',
      'Fully enclosed safety wire mesh cage with electrical interlocks',
      'Electro-mechanical or hydraulic hoisting with fail-safe velocity fuses',
      'Push-button control stations at every landing with emergency stop',
      'Custom platform dimensions and carriage configurations to fit existing shafts or open floor voids',
      'Low maintenance guide columns with self-lubricating roller bearings'
    ],
    specifications: {
      'Load Capacity': '500 kg to 5,000 kg (custom configurations available)',
      'Travel Height': 'Up to 18 meters (G+1 to G+4 levels)',
      'Lifting Speed': '0.15 m/s to 0.35 m/s (variable via VFD)',
      'Platform Dimensions': 'Standard 1,500 x 1,500 mm up to 3,000 x 3,000 mm',
      'Mast Construction': 'Heavy-duty ISMC channel structural steel framework',
      'Drive Mechanism': 'Hydraulic cylinder with wire-rope multiplier or motorized chain drive',
      'Power Supply': '415V AC, 3 Phase, 50 Hz',
      'Safety Interlocks': 'Limit switches, mechanical anti-drop catches & door interlocks'
    },
    applications: [
      'Multi-tier warehousing and logistics distribution hubs',
      'Manufacturing plants with mezzanine assembly lines',
      'Automotive component stores and spare parts distribution',
      'Food & beverage processing facilities',
      'Packaging and print facilities'
    ],
    subcategories: [
      {
        id: '1a',
        name: 'Single Mast VRC Goods Lift',
        slug: 'single-mast-vrc',
        description: 'Compact vertical conveyor designed for loads up to 1,500 kg where floor space is at a premium. Perfect for mezzanine floors and parts storage.',
        image: '/assets/images/products/vrc-goods-lift.jpg',
        capacity: '500 kg – 1,500 kg',
        height: 'Up to 9 meters'
      },
      {
        id: '1b',
        name: 'Dual Mast Heavy-Duty VRC',
        slug: 'dual-mast-vrc',
        description: 'Heavy structural twin-column lift engineered for multi-pallet transfer, heavy dies, and high-throughput industrial facilities.',
        image: '/assets/images/hero/hero-vrc-warehouse.jpg',
        capacity: '2,000 kg – 5,000 kg',
        height: 'Up to 18 meters'
      }
    ]
  },
  {
    id: 2,
    name: 'Scissor Lift',
    fullName: 'Scissor Lift',
    slug: 'scissor-lift',
    path: '/products/scissor-lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Heavy-duty hydraulic scissor lifts for precise material positioning at working height — available as self-propelled mobile units or stationary floor-mounted platforms.',
    image: '/assets/images/products/scissor-self-propelled.jpg',
    fallback: '/assets/images/products/scissor-floor-mounted.jpg',
    promoImage: '/assets/images/products/scissor-lift-promo.svg',
    priceRange: 'Starting from ₹2,75,000 (Based on Lift Height & Model)',
    leadTime: '2 - 4 Weeks',
    images: [
      {
        url: '/assets/images/products/scissor-self-propelled.jpg',
        title: 'Self-Propelled Electric Scissor Lift',
        caption: 'Mobile wheeled drive chassis with extendable elevated work platform and safety guardrails'
      },
      {
        url: '/assets/images/products/scissor-floor-mounted.jpg',
        title: 'Stationary Floor-Mounted Hydraulic Scissor Lift',
        caption: 'Heavy-gauge flat steel platform table with dual hydraulic cylinders floor-bolted for assembly lines'
      },
      {
        url: '/assets/images/products/scissor-self-propelled.jpg',
        title: 'Hydraulic Pantograph Mechanism',
        caption: 'Solid high-tensile steel scissor arms with precision pivot bushings and emergency lowering'
      }
    ],
    features: [
      'Available in both Self-Propelled mobile electric units and Stationary floor-mounted models',
      'Self-propelled unit offers battery drive with proportional joystick control for smooth maneuvering',
      'Floor-mounted unit provides rigid workstation positioning for ergonomic pallet loading',
      'Hydraulic overload relief valve and velocity fuse to prevent platform drop',
      'Non-marking industrial solid tires on mobile units for clean indoor floors',
      'Heavy-duty pantograph scissor structure engineered with high-strength structural steel'
    ],
    specifications: {
      'Load Capacity': '300 kg to 3,000 kg',
      'Platform Height': 'Up to 14 meters (Self-Propelled) / 1.5m to 4m (Floor-Mounted)',
      'Platform Deck': 'Anti-skid chequered plate with perimeter safety toe-guards',
      'Power Source': '24V DC battery pack (Self-Propelled) / 415V 3-Phase AC power pack (Floor-Mounted)',
      'Control System': 'Platform-mounted joystick controller & ground pendant station',
      'Safety Devices': 'Emergency stop button, manual lowering release, tilt sensor & warning beacon',
      'Finish': 'Industrial grade polyurethane powder coated finish'
    },
    applications: [
      'Factory ceiling maintenance, lighting, and electrical installations',
      'Workstation ergonomic height adjustment and pallet packing lines',
      'Loading docks and vehicle loading platform height bridging',
      'Aircraft and heavy machinery manufacturing assembly bays',
      'High-bay warehouse inventory access and inspections'
    ],
    subcategories: [
      {
        id: '2a',
        name: 'Self-Propelled Scissor Lift',
        slug: 'self-propelled-scissor-lift',
        description: 'Mobile electric scissor lift with wheeled drive chassis and elevated work platform with safety railings for indoor maintenance, installation, and overhead access tasks.',
        image: '/assets/images/products/scissor-self-propelled.jpg',
        capacity: '300 kg – 680 kg',
        height: 'Working height up to 14m'
      },
      {
        id: '2b',
        name: 'Floor-Mounted Scissor Lift',
        slug: 'floor-mounted-scissor-lift',
        description: 'Stationary hydraulic scissor lift table bolted to the factory floor — designed for ergonomic material loading, pallet positioning, and height adjustment at fixed workstations.',
        image: '/assets/images/products/scissor-floor-mounted.jpg',
        capacity: '500 kg – 3,000 kg',
        height: 'Raised height 1,200 mm – 4,000 mm'
      }
    ]
  },
  {
    id: 3,
    name: 'EOT Crane',
    fullName: 'EOT Crane',
    slug: 'eot-crane',
    path: '/products/eot-crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Electric Overhead Travelling cranes engineered for heavy lifting across manufacturing bays, fabrication shops, and logistics handling areas.',
    image: '/assets/images/products/eot-single-girder.jpg',
    fallback: '/assets/images/products/eot-double-girder-real.png',
    promoImage: '/assets/images/products/eot-crane-promo.svg',
    priceRange: 'Starting from ₹3,80,000 (Based on Span & Tonnage)',
    leadTime: '4 - 6 Weeks',
    images: [
      {
        url: '/assets/images/products/eot-single-girder.jpg',
        title: 'Single Girder EOT Overhead Crane',
        caption: 'Single box-section bridge girder with underslung motorized wire rope electric hoist'
      },
      {
        url: '/assets/images/products/eot-double-girder-real.png',
        title: 'Double Girder Heavy-Duty EOT Crane',
        caption: 'Twin parallel bridge girders with top-running crab trolley and full-length service walkway'
      },
      {
        url: '/assets/images/products/eot-double-girder.jpg',
        title: 'Industrial Heavy Manufacturing Crane Bay',
        caption: 'High-capacity overhead travelling crane system spanning heavy fabrication and assembly workshops'
      }
    ],
    features: [
      'Fabricated box-type or rolled section girders designed as per IS 807 and IS 3177 standards',
      'Precision wire rope electric hoist with hardened alloy steel gears and dual braking systems',
      'Smooth variable speed cross-travel and long-travel via Variable Frequency Drives (VFD)',
      'Dual control options: Ergonomic pendant pushbutton and wireless radio remote control',
      'End carriages with forged alloy steel wheels mounted on anti-friction spherical roller bearings',
      'Overload protection limit switch and cross-travel rotary limit switches for complete operator safety'
    ],
    specifications: {
      'Lifting Capacity': '1 Ton to 50 Tons (Single Girder: 1T-15T, Double Girder: 5T-50T)',
      'Crane Span': '6 meters to 32 meters (custom designed for factory bays)',
      'Lifting Height': '6 meters to 24 meters',
      'Operating Duty': 'Class II (Medium), Class III (Heavy), Class IV (Extra Heavy Duty)',
      'Design Standards': 'Compliant with IS 3177 / IS 807 / IS 4137',
      'Hoist Type': 'Electric wire rope hoist with rotary limit switch and fail-safe electromagnetic brake',
      'Control Mode': 'Wireless Radio Remote + Independent Pushbutton Pendant backup',
      'Power Supply': '415V AC, 3 Phase, 50 Hz with Shrouded DSL busbar system'
    },
    applications: [
      'Heavy fabrication and structural steel workshops',
      'Steel mills, coil handling, and metal processing facilities',
      'Automotive assembly, stamping, and engine manufacturing bays',
      'Power plants, paper mills, and transformer fabrication plants',
      'Logistics freight hubs, container depots, and heavy equipment storage'
    ],
    subcategories: [
      {
        id: '3a',
        name: 'Single Girder Crane',
        slug: 'single-girder-eot-crane',
        description: 'Single bridge girder EOT crane with underslung electric hoist and motorized trolley — economical choice for light to medium duty lifting across manufacturing and warehousing bays.',
        image: '/assets/images/products/eot-single-girder.jpg',
        capacity: '1 Ton – 15 Tons',
        span: 'Up to 24 meters'
      },
      {
        id: '3b',
        name: 'Double Girder Crane',
        slug: 'double-girder-eot-crane',
        description: 'Twin bridge girder EOT crane with top-running crab trolley and hoist — designed for heavy-duty industrial lifting with a maintenance walkway on the girder for service access.',
        image: '/assets/images/products/eot-double-girder-real.png',
        capacity: '5 Tons – 50 Tons',
        span: 'Up to 32 meters'
      }
    ]
  },
  {
    id: 4,
    name: 'Conveyor',
    fullName: 'Conveyor',
    slug: 'conveyor',
    path: '/products/conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Robust industrial conveyor systems for continuous, automated movement of goods, components, and materials across production lines and distribution facilities.',
    image: '/assets/images/products/roller-conveyor-real.png',
    fallback: '/assets/images/products/roller-conveyor-line.png',
    priceRange: 'Custom Quote (Per Running Meter / Modular Configuration)',
    leadTime: '2 - 4 Weeks',
    images: [
      {
        url: '/assets/images/products/roller-conveyor-real.png',
        title: 'Powered Roller Bed Conveyor (Client Reference)',
        caption: 'Heavy-gauge steel frame with precision motorized drive rollers, yellow chain drive guards, and box handling'
      },
      {
        url: '/assets/images/products/chain-conveyor-real.png',
        title: 'Heavy-Duty Industrial Chain Conveyor (Client Reference)',
        caption: 'Blue structural steel frame with dual roller chain tracks and electric gear motor for heavy pallet loads'
      },
      {
        url: '/assets/images/products/roller-conveyor-line.png',
        title: 'Modular Roller Conveyor Transfer System',
        caption: 'Multi-directional carton accumulation and transfer conveyor for automated distribution lines'
      }
    ],
    features: [
      'Built exactly to client reference designs for both Roller Conveyor and Chain Conveyor configurations',
      'Roller conveyor available in Motorized Drive Roller (powered) and heavy gravity accumulation designs',
      'Chain conveyor engineered with twin or triple industrial roller chain tracks for rugged pallet transit',
      'Structural steel frames powder coated or painted in industrial safety blue and safety yellow guards',
      'Variable Frequency Drive (VFD) for precision speed matching with upstream and downstream lines',
      'Low friction sealed precision bearings ensuring whisper-quiet continuous operation and extended lifespan'
    ],
    specifications: {
      'Conveyor Types': 'Powered Roller Conveyor, Gravity Roller Bed, Multi-Strand Chain Conveyor',
      'Frame Construction': 'Heavy-duty laser-cut and formed structural steel channel frame',
      'Roller Specifications': 'Zinc-plated or stainless steel rollers, 50 mm to 89 mm diameter, spring-loaded axles',
      'Chain Specifications': 'Simplex or duplex high-tensile industrial roller chain on ultra-high molecular wear strips',
      'Load Capacity': 'Up to 2,500 kg per meter (Chain) / up to 500 kg per roller (Heavy Roller Bed)',
      'Conveyor Speed': 'Variable 5 to 30 meters/min with VFD speed control',
      'Drive Unit': 'Inline helical geared motor with high-efficiency IE3 rating',
      'Control Sensors': 'Integrated photoelectric retro-reflective sensors for zero pressure accumulation (ZPA)'
    },
    applications: [
      'Automated e-commerce sortation, packaging, and dispatch lines',
      'Manufacturing assembly lines and component feeder systems',
      'Heavy pallet and container movement in cold storage and warehouses',
      'Automotive engine block, transmission, and body panel transfer',
      'FMCG, beverage, and boxed carton distribution facilities'
    ],
    subcategories: [
      {
        id: '4a',
        name: 'Roller Conveyor',
        slug: 'roller-conveyor',
        description: 'Industrial roller bed conveyor with heavy-gauge steel frame — available as powered (motorized drive roller) and gravity-feed configurations for box, tote, and pallet movement.',
        image: '/assets/images/products/roller-conveyor-real.png',
        capacity: 'Boxes, totes & pallets',
        speed: '5 – 30 m/min adjustable'
      },
      {
        id: '4b',
        name: 'Chain Conveyor',
        slug: 'chain-conveyor',
        description: 'Heavy-duty chain-driven conveyor with clearly visible industrial chain tracks and a sturdy steel supporting frame — ideal for conveying heavy pallets, dies, and assemblies.',
        image: '/assets/images/products/chain-conveyor-real.png',
        capacity: 'Pallets up to 2,500 kg',
        type: 'Multi-strand chain drive'
      }
    ]
  }
];

// Flat product list for cards & individual detail lookups
export const products = [
  {
    id: 1,
    name: 'Vertical Reciprocating Conveyor (VRC)',
    slug: 'vertical-reciprocating-conveyor',
    category_id: 1,
    category_slug: 'vrc',
    category_name: 'VRC',
    tagline: 'Powering vertical movement. Built for industrial demands.',
    description: 'Powering vertical movement. Built for industrial demands. Engineered for uncompromising performance. ARYVON VRC systems combine heavy-duty structural engineering, precise load handling, and integrated safety protection to move industrial materials between floors with confidence.',
    image_url: '/assets/images/products/vrc-goods-lift.jpg',
    fallback_image: '/assets/images/hero/hero-vrc-warehouse.jpg',
    price_range: 'Starting from ₹4,50,000 (Custom Quotation)',
    is_active: true,
    specifications: {
      'Lift Type': 'Vertical Reciprocating Conveyor (Goods Lift)',
      'Application': 'Multi-level pallet and goods transfer',
      'Safety Features': 'Enclosed mesh cage, interlocked landing gates',
      'Structural Frame': 'Heavy-duty steel mast and guide columns',
      'Drive': 'Electric hydraulic or chain-drive system',
      'Control': 'Push-button station at each level'
    }
  },
  {
    id: 2,
    name: 'Self-Propelled Scissor Lift',
    slug: 'self-propelled-scissor-lift',
    category_id: 2,
    category_slug: 'scissor-lift',
    category_name: 'Scissor Lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Mobile electric scissor lift with wheeled drive chassis and elevated work platform with safety railings for indoor maintenance, installation, and overhead access tasks.',
    image_url: '/assets/images/products/scissor-self-propelled.jpg',
    fallback_image: '/assets/images/products/scissor-floor-mounted.jpg',
    price_range: 'Starting from ₹3,50,000',
    is_active: true,
    specifications: {
      'Type': 'Self-Propelled Electric Scissor Lift',
      'Drive': 'Battery-electric wheel drive',
      'Platform': 'Elevated work deck with safety railing',
      'Scissor Mechanism': 'Hydraulic pantograph cross-arm',
      'Tires': 'Non-marking solid industrial tires',
      'Control': 'Platform and ground-level pendant'
    }
  },
  {
    id: 3,
    name: 'Floor-Mounted Scissor Lift',
    slug: 'floor-mounted-scissor-lift',
    category_id: 2,
    category_slug: 'scissor-lift',
    category_name: 'Scissor Lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Stationary hydraulic scissor lift table bolted to the factory floor — designed for ergonomic material loading, pallet positioning, and height adjustment at fixed workstations.',
    image_url: '/assets/images/products/scissor-floor-mounted.jpg',
    fallback_image: '/assets/images/products/scissor-self-propelled.jpg',
    price_range: 'Starting from ₹2,75,000',
    is_active: true,
    specifications: {
      'Type': 'Stationary Floor-Mounted Hydraulic Scissor Lift',
      'Platform': 'Heavy-duty flat steel deck',
      'Drive': 'Hydraulic with electric power unit',
      'Cylinders': 'Dual hydraulic ram design',
      'Mounting': 'Anchor bolt floor-fixed base frame',
      'Control': 'Push-button pendant or foot switch'
    }
  },
  {
    id: 4,
    name: 'Single Girder EOT Crane',
    slug: 'single-girder-eot-crane',
    category_id: 3,
    category_slug: 'eot-crane',
    category_name: 'EOT Crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Single bridge girder EOT crane with underslung electric hoist and motorized trolley — economical choice for light to medium duty lifting across manufacturing and warehousing bays.',
    image_url: '/assets/images/products/eot-single-girder.jpg',
    fallback_image: '/assets/images/products/eot-double-girder-real.png',
    price_range: 'Starting from ₹3,80,000',
    is_active: true,
    specifications: {
      'Type': 'Single Girder EOT Overhead Travelling Crane',
      'Bridge': 'Single box section steel girder',
      'Hoist': 'Electric wire rope hoist, underslung trolley',
      'Cross-Travel': 'Motorized end carriage on runway rails',
      'Control': 'Pendant pushbutton and wireless radio remote',
      'Standards': 'IS 3177 / IS 807 compliant design'
    }
  },
  {
    id: 5,
    name: 'Double Girder EOT Crane',
    slug: 'double-girder-eot-crane',
    category_id: 3,
    category_slug: 'eot-crane',
    category_name: 'EOT Crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Twin bridge girder EOT crane with top-running crab trolley and hoist — designed for heavy-duty industrial lifting with a maintenance walkway on the girder for service access.',
    image_url: '/assets/images/products/eot-double-girder-real.png',
    fallback_image: '/assets/images/products/eot-single-girder.jpg',
    price_range: 'Starting from ₹6,20,000',
    is_active: true,
    specifications: {
      'Type': 'Double Girder EOT Overhead Travelling Crane',
      'Bridge': 'Twin parallel box girder structure',
      'Hoist': 'Electric crab trolley top-running on girders',
      'Walkway': 'Maintenance service walkway on bridge',
      'Cross-Travel': 'Heavy-duty motorized end carriage',
      'Control': 'Cabin or radio remote control'
    }
  },
  {
    id: 6,
    name: 'Roller Conveyor',
    slug: 'roller-conveyor',
    category_id: 4,
    category_slug: 'conveyor',
    category_name: 'Conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Industrial roller bed conveyor with heavy-gauge steel frame — available as powered (motorized drive roller) and gravity-feed configurations for box, tote, and pallet movement.',
    image_url: '/assets/images/products/roller-conveyor-real.png',
    fallback_image: '/assets/images/products/roller-conveyor-line.png',
    price_range: 'Custom Quote / Per Meter Configuration',
    is_active: true,
    specifications: {
      'Type': 'Industrial Roller Conveyor (Powered / Gravity)',
      'Frame': 'Heavy-gauge powder-coated steel channel',
      'Rollers': 'Steel precision rollers, adjustable pitch',
      'Drive': 'Motorized Drive Roller (MDR) or chain drive',
      'Load Capacity': 'Per specification and roller pitch',
      'Speed': 'Adjustable for powered configurations'
    }
  },
  {
    id: 7,
    name: 'Chain Conveyor',
    slug: 'chain-conveyor',
    category_id: 4,
    category_slug: 'conveyor',
    category_name: 'Conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Heavy-duty chain-driven conveyor with clearly visible industrial chain tracks and a sturdy steel supporting frame — ideal for conveying heavy pallets, dies, and assemblies.',
    image_url: '/assets/images/products/chain-conveyor-real.png',
    price_range: 'Custom Quote / Per Meter Configuration',
    is_active: true,
    specifications: {
      'Type': 'Chain Drive Industrial Conveyor',
      'Frame': 'Robust welded steel supporting structure',
      'Chain': 'Heavy-duty industrial roller chain tracks',
      'Drive': 'Electric geared motor with chain drive',
      'Application': 'Pallets, dies, heavy assemblies',
      'Speed': 'Adjustable via VFD control'
    }
  }
];

// Helper: get categories list with product counts
export function getCategories() {
  return categories.map(cat => ({
    ...cat,
    count: products.filter(p => p.category_id === cat.id && p.is_active).length
  }));
}

// Helper: get a category by its slug ('vrc', 'scissor-lift', 'eot-crane', 'conveyor')
export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = String(slug).toLowerCase().trim();
  return categories.find(c => c.slug === cleanSlug || c.productSlug === cleanSlug) || null;
}

// Helper: get products filtered by category and search
export function getProducts({ category = 'all', search = '', limit = null } = {}) {
  let list = products.filter(p => p.is_active);

  if (category !== 'all') {
    list = list.filter(p => String(p.category_id) === String(category) || p.category_slug === String(category));
  }

  if (search && search.trim()) {
    const q = search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category_name.toLowerCase().includes(q)
    );
  }

  if (limit) {
    list = list.slice(0, limit);
  }

  return list;
}

// Helper: get a single product by numeric ID or by slug
export function getProductById(idOrSlug) {
  if (!idOrSlug) return null;
  const asNum = Number(idOrSlug);
  if (!isNaN(asNum) && asNum > 0) {
    return products.find(p => p.id === asNum) || null;
  }
  return products.find(p => p.slug === String(idOrSlug)) || null;
}

// Helper: get a single product by slug
export function getProductBySlug(slug) {
  if (!slug) return null;
  return products.find(p => p.slug === String(slug)) || null;
}
