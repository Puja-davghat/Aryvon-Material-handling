/**
 * ARYVON - MATERIAL HANDLING SOLUTIONS
 * Centralized Frontend Product Catalogue & Category Data
 * Strict product scope: 4 approved categories only
 */

export const categories = [
  {
    id: 1,
    name: 'VRC',
    fullName: 'Vertical Reciprocating Conveyor',
    slug: 'vrc',
    tagline: 'Move your goods between floors with ease.',
    description: 'Industrial goods lifts engineered for reliable vertical movement of pallets, materials, and goods between floor levels — with enclosed safety cages and structural steel masts.',
    image: '/assets/images/products/vrc-goods-lift.jpg',
    fallback: '/assets/images/hero/hero-vrc-warehouse.jpg',
    subcategories: null
  },
  {
    id: 2,
    name: 'Scissor Lift',
    fullName: 'Scissor Lift',
    slug: 'scissor-lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Heavy-duty hydraulic scissor lifts for precise material positioning at working height — available as self-propelled mobile units or stationary floor-mounted platforms.',
    image: '/assets/images/products/scissor-self-propelled.jpg',
    fallback: '/assets/images/products/scissor-floor-mounted.jpg',
    subcategories: [
      {
        id: '2a',
        name: 'Self-Propelled Scissor Lift',
        slug: 'self-propelled-scissor-lift',
        description: 'Mobile electric scissor lift with wheeled drive chassis and elevated work platform with safety railings for indoor maintenance, installation, and overhead access tasks.',
        image: '/assets/images/products/scissor-self-propelled.jpg'
      },
      {
        id: '2b',
        name: 'Floor-Mounted Scissor Lift',
        slug: 'floor-mounted-scissor-lift',
        description: 'Stationary hydraulic scissor lift table bolted to the factory floor — designed for ergonomic material loading, pallet positioning, and height adjustment at fixed workstations.',
        image: '/assets/images/products/scissor-floor-mounted.jpg'
      }
    ]
  },
  {
    id: 3,
    name: 'EOT Crane',
    fullName: 'EOT Crane',
    slug: 'eot-crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Electric Overhead Travelling cranes engineered for heavy lifting across manufacturing bays, fabrication shops, and logistics handling areas.',
    image: '/assets/images/products/eot-single-girder.jpg',
    fallback: '/assets/images/products/eot-double-girder.jpg',
    subcategories: [
      {
        id: '3a',
        name: 'Single Girder Crane',
        slug: 'single-girder-crane',
        description: 'Single bridge girder EOT crane with underslung electric hoist and motorized trolley — economical choice for light to medium duty lifting across manufacturing and warehousing bays.',
        image: '/assets/images/products/eot-single-girder.jpg'
      },
      {
        id: '3b',
        name: 'Double Girder Crane',
        slug: 'double-girder-crane',
        description: 'Twin bridge girder EOT crane with top-running crab trolley and hoist — designed for heavy-duty industrial lifting with a maintenance walkway on the girder for service access.',
        image: '/assets/images/products/eot-double-girder.jpg'
      }
    ]
  },
  {
    id: 4,
    name: 'Conveyor',
    fullName: 'Conveyor',
    slug: 'conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Robust industrial conveyor systems for continuous, automated movement of goods, components, and materials across production lines and distribution facilities.',
    image: '/assets/images/products/roller-conveyor-line.png',
    fallback: '/assets/images/products/roller-conveyor.jpg',
    subcategories: [
      {
        id: '4a',
        name: 'Roller Conveyor',
        slug: 'roller-conveyor',
        description: 'Industrial roller bed conveyor with heavy-gauge steel frame — available as powered (motorized drive roller) and gravity-feed configurations for box, tote, and pallet movement.',
        image: '/assets/images/products/roller-conveyor-line.png'
      },
      {
        id: '4b',
        name: 'Chain Conveyor',
        slug: 'chain-conveyor',
        description: 'Heavy-duty chain-driven conveyor with clearly visible industrial chain tracks and a sturdy steel supporting frame — ideal for conveying heavy pallets, dies, and assemblies.',
        image: '/assets/images/products/chain-conveyor.jpg'
      }
    ]
  }
];

// Flat product list for the products grid — 4 main + subcategory items
export const products = [
  {
    id: 1,
    name: 'Vertical Reciprocating Conveyor (VRC)',
    slug: 'vertical-reciprocating-conveyor',
    category_id: 1,
    category_name: 'VRC',
    tagline: 'Move your goods between floors with ease.',
    description: 'Industrial goods lift engineered for reliable vertical movement of pallets, materials, and goods between floor levels. Features enclosed safety cage, structural steel mast, and interlocked landing gates for safe operation.',
    image_url: '/assets/images/products/vrc-goods-lift.jpg',
    fallback_image: '/assets/images/hero/hero-vrc-warehouse.jpg',
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
    category_name: 'Scissor Lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Mobile electric scissor lift with wheeled drive chassis, hydraulic pantograph scissor mechanism, and elevated work platform with safety railings. Ideal for indoor maintenance, overhead installation, and access tasks.',
    image_url: '/assets/images/products/scissor-self-propelled.jpg',
    fallback_image: '/assets/images/products/scissor-floor-mounted.jpg',
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
    category_name: 'Scissor Lift',
    tagline: 'Lift Your Materials To The Perfect Height.',
    description: 'Stationary hydraulic scissor lift table floor-bolted to the facility. Designed for ergonomic material loading, pallet height adjustment, and workstation positioning. Features flat platform deck and dual hydraulic cylinders.',
    image_url: '/assets/images/products/scissor-floor-mounted.jpg',
    fallback_image: '/assets/images/products/scissor-self-propelled.jpg',
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
    category_name: 'EOT Crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Single bridge girder Electric Overhead Travelling crane with underslung electric hoist and motorized trolley. Economical solution for light to medium duty overhead lifting across manufacturing bays and warehouses.',
    image_url: '/assets/images/products/eot-single-girder.jpg',
    fallback_image: '/assets/images/products/eot-double-girder.jpg',
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
    category_name: 'EOT Crane',
    tagline: 'Reliable Lifting. Precise Movement.',
    description: 'Twin bridge girder Electric Overhead Travelling crane with top-running crab trolley and hoist. Engineered for heavy-duty industrial lifting with service walkway on the girder for maintenance access.',
    image_url: '/assets/images/products/eot-double-girder.jpg',
    fallback_image: '/assets/images/products/eot-single-girder.jpg',
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
    category_name: 'Conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Industrial roller bed conveyor with heavy-gauge painted steel frame. Available in powered motorized drive roller (MDR) and gravity-feed configurations for continuous movement of boxes, totes, and pallets along production and dispatch lines.',
    image_url: '/assets/images/products/roller-conveyor-line.png',
    fallback_image: '/assets/images/products/roller-conveyor.jpg',
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
    category_name: 'Conveyor',
    tagline: 'Keep Your Operations Moving.',
    description: 'Heavy-duty chain-driven conveyor system with clearly visible industrial chain tracks running in a sturdy steel supporting frame. Designed for reliable movement of heavy pallets, dies, engine assemblies, and bulk manufacturing loads.',
    image_url: '/assets/images/products/chain-conveyor.jpg',
    fallback_image: '/assets/images/products/roller-conveyor-line.png',
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

// Helper: get products filtered by category and search
export function getProducts({ category = 'all', search = '', limit = null } = {}) {
  let list = products.filter(p => p.is_active);

  if (category !== 'all') {
    list = list.filter(p => String(p.category_id) === String(category));
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
  // numeric id
  const asNum = Number(idOrSlug);
  if (!isNaN(asNum) && asNum > 0) {
    return products.find(p => p.id === asNum) || null;
  }
  // slug string fallback
  return products.find(p => p.slug === String(idOrSlug)) || null;
}

// Helper: get a single product by slug
export function getProductBySlug(slug) {
  if (!slug) return null;
  return products.find(p => p.slug === String(slug)) || null;
}
