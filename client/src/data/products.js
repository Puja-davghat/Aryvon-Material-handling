/**
 * ARYVON - MATERIAL HANDLING SOLUTIONS
 * Centralized Frontend Product Catalogue & Category Data
 * Fully offline & independent of external backend APIs
 */

// Direct asset imports for guaranteed Vite bundling & resolution
import handPalletTruckImg from '../assets/hand-pallet-truck.jpg';
import electricStackerImg from '../assets/manual-stacker.jpg';
import electricForkliftImg from '../assets/electric-forklift.jpg';
import reachTruckImg from '../assets/reach-truck.jpg';
import chainHoistImg from '../assets/chain-hoist.jpg';
import equipmentScissorImg from '../assets/equipment.jpg';
import industrieRackingImg from '../assets/industrie.jpg';
import rollerConveyorImg from '../assets/roller-conveyor.png';

export const categories = [
  {
    id: 1,
    name: 'Pallet Trucks & Stackers',
    slug: 'pallet-trucks-stackers',
    description: 'Manual, semi-electric, and fully electric pallet handling equipment for warehouse transport and floor stacking.'
  },
  {
    id: 2,
    name: 'Forklifts & Reach Trucks',
    slug: 'forklifts-reach-trucks',
    description: 'Heavy-duty industrial electric counterbalance forklifts and high-reach aisle stackers for high-density storage.'
  },
  {
    id: 3,
    name: 'Industrial Cranes & Hoists',
    slug: 'industrial-cranes-hoists',
    description: 'Overhead travelling cranes, gantry systems, and wire rope electric hoists for overhead lifting operations.'
  },
  {
    id: 4,
    name: 'Conveyors & Sorting Systems',
    slug: 'conveyors-sorting-systems',
    description: 'Modular powered roller, belt, and flexible expanding conveyor lines for continuous movement of cartons and totes.'
  },
  {
    id: 5,
    name: 'Warehouse Storage & Racking',
    slug: 'warehouse-storage-racking',
    description: 'Heavy-duty selective pallet racks, drive-in systems, and cantilever racking for long goods.'
  },
  {
    id: 6,
    name: 'Dock Levelers & Scissor Lifts',
    slug: 'dock-levelers-scissor-lifts',
    description: 'Electro-hydraulic stationary dock levellers, container ramps, and scissor lifting tables.'
  }
];

export const products = [
  {
    id: 1,
    name: 'Heavy-Duty Hydraulic Hand Pallet Truck',
    slug: 'hydraulic-hand-pallet-truck-2-5t',
    category_id: 1,
    category_name: 'Pallet Trucks & Stackers',
    description: 'Rugged standard hand pallet truck engineered for daily warehouse movement of standard pallets with sealed leak-proof hydraulic pump and tandem polyurethane rollers.',
    image_url: handPalletTruckImg || '/assets/images/products/hand-pallet-truck.jpg',
    fallback_image: '/assets/images/products/hand-pallet-truck.jpg',
    is_active: true,
    specifications: {
      'Capacity': '2,500 kg / 3,000 kg',
      'Fork Length': '1150 mm / 1220 mm',
      'Fork Width': '550 mm / 685 mm',
      'Lowered Fork Height': '85 mm',
      'Max Lift Height': '200 mm',
      'Steering Wheel': 'Polyurethane / Nylon',
      'Operation': 'Manual Hydraulic'
    }
  },
  {
    id: 2,
    name: 'Walkie Electric Stacker',
    slug: 'walkie-electric-stacker-1-5t',
    category_id: 1,
    category_name: 'Pallet Trucks & Stackers',
    description: 'Compact powered lifting and travel stacker designed for narrow aisle warehouse stacking, rack loading, and trailer unloading.',
    image_url: electricStackerImg || '/assets/images/products/electric-stacker.jpg',
    fallback_image: '/assets/images/products/electric-stacker.jpg',
    is_active: true,
    specifications: {
      'Capacity': '1,500 kg',
      'Lift Height': '1,600 mm - 3,500 mm',
      'Mast Type': 'Duplex / Simplex',
      'Battery': '24V / 210Ah Industrial Traction',
      'Turning Radius': '1,490 mm',
      'Control': 'Ergonomic Curtis Tiller Head'
    }
  },
  {
    id: 3,
    name: '4-Wheel Electric Counterbalance Forklift',
    slug: '4-wheel-electric-forklift-3t',
    category_id: 2,
    category_name: 'Forklifts & Reach Trucks',
    description: 'Zero-emission AC electric forklift delivering high torque, low noise, and minimal maintenance for indoor manufacturing facilities and high-throughput distribution hubs.',
    image_url: electricForkliftImg || '/assets/images/products/electric-forklift.jpg',
    fallback_image: '/assets/images/products/electric-forklift.jpg',
    is_active: true,
    specifications: {
      'Capacity': '3,000 kg',
      'Load Center': '500 mm',
      'Lift Height': '3,000 mm - 6,000 mm',
      'Battery Voltage': '80V / 500Ah High-Efficiency Lithium/Lead-Acid',
      'Travel Speed': '16 km/h',
      'Mast': 'Triplex Full Free Lift Mast'
    }
  },
  {
    id: 4,
    name: 'Stand-on Electric Reach Truck',
    slug: 'stand-on-electric-reach-truck',
    category_id: 2,
    category_name: 'Forklifts & Reach Trucks',
    description: 'Specialized high-lift reach truck designed for high-density racking aisles with articulated chassis and precision proportional controls.',
    image_url: reachTruckImg || '/assets/images/products/reach-truck.jpg',
    fallback_image: '/assets/images/products/reach-truck.jpg',
    is_active: true,
    specifications: {
      'Capacity': '1,600 kg - 2,000 kg',
      'Max Lift Height': '8,500 mm',
      'Aisle Width Required': '2,750 mm (800x1200 pallet)',
      'Reach Travel': '600 mm',
      'Speed Control': 'Regenerative Electronic Braking',
      'Steering': '360-degree Electronic Power Steering'
    }
  },
  {
    id: 5,
    name: 'Single Girder EOT Overhead Crane',
    slug: 'single-girder-eot-crane',
    category_id: 3,
    category_name: 'Industrial Cranes & Hoists',
    description: 'Custom-engineered electrical overhead travelling crane providing efficient lifting across fabrication shops, machine bays, and assembly lines.',
    image_url: chainHoistImg || '/assets/images/products/eot-crane.jpg',
    fallback_image: '/assets/images/products/eot-crane.jpg',
    is_active: true,
    specifications: {
      'Capacity': '3 Ton - 15 Ton',
      'Span Range': '7.5 m - 28.5 m',
      'Hoisting Speed': '4 / 8 m/min dual speed',
      'Cross Travel Speed': '20 m/min variable frequency',
      'Crane Control': 'Pendant Pushbutton & Wireless Radio Remote',
      'Design Standard': 'IS 3177 / IS 807 compliant'
    }
  },
  {
    id: 6,
    name: 'Automated Powered Roller Conveyor',
    slug: 'powered-roller-conveyor-system',
    category_id: 4,
    category_name: 'Conveyors & Sorting Systems',
    description: 'Motorized zero-pressure accumulation roller conveyor line for smooth component transit between manufacturing cells, packaging, and shipping docks.',
    image_url: rollerConveyorImg || '/assets/images/products/roller-conveyor.png',
    fallback_image: rollerConveyorImg || '/assets/images/products/roller-conveyor.png',
    is_active: true,
    specifications: {
      'Conveyor Width': '450 mm - 1,000 mm',
      'Load Capacity': 'Up to 120 kg per linear meter',
      'Drive Type': 'Motorized Drive Roller (MDR) 24V DC / Chain Drive',
      'Speed': '5 to 45 m/min adjustable',
      'Structure': 'Powder-coated heavy gauge steel channel',
      'Sensors': 'Integrated photoelectric accumulation sensors'
    }
  },
  {
    id: 7,
    name: 'Heavy-Duty Selective Pallet Racking',
    slug: 'heavy-duty-pallet-racking',
    category_id: 5,
    category_name: 'Warehouse Storage & Racking',
    description: 'High-capacity industrial steel storage racking designed for multi-tier warehouse pallet storage with direct accessibility to every pallet.',
    image_url: industrieRackingImg || '/assets/images/products/pallet-racking.jpg',
    fallback_image: '/assets/images/products/pallet-racking.jpg',
    is_active: true,
    specifications: {
      'Beam Load Capacity': '1,000 kg - 4,000 kg per beam level',
      'Frame Height': '2,000 mm - 11,000 mm',
      'Depth': '1,000 mm / 1,100 mm',
      'Material': 'High-tensile cold-rolled steel (IS 2062)',
      'Finish': 'High-durability electrostatic epoxy polyester powder coat',
      'Safety': 'Locking pins, column protectors, and frame row spacers'
    }
  },
  {
    id: 8,
    name: 'Stationary Hydraulic Dock Leveler',
    slug: 'hydraulic-dock-leveler-10t',
    category_id: 6,
    category_name: 'Dock Levelers & Scissor Lifts',
    description: 'Pit-mounted electro-hydraulic dock leveler bridging the height gap between warehouse loading docks and commercial transport vehicle beds for safe forklift transit.',
    image_url: equipmentScissorImg || '/assets/images/products/dock-leveler.jpg',
    fallback_image: '/assets/images/products/dock-leveler.jpg',
    is_active: true,
    specifications: {
      'Static / Dynamic Capacity': '10,000 kg / 6,000 kg',
      'Platform Size': '2000 mm x 2500 mm',
      'Lip Length': '400 mm telescopic / swing lip',
      'Working Range': '+300 mm above dock / -300 mm below dock',
      'Hydraulic Power': '1.1 kW 415V 3-phase unit',
      'Safety Features': 'Emergency velocity fuse stop, toe guards, maintenance strut'
    }
  }
];

/**
 * Helper: Get categories with dynamically calculated accurate product count
 */
export function getCategories() {
  return categories.map(cat => ({
    ...cat,
    count: products.filter(p => p.category_id === cat.id && p.is_active).length
  }));
}

/**
 * Helper: Filter products synchronously entirely in the frontend
 */
export function getProducts({ category = 'all', search = '', limit = null } = {}) {
  let filtered = products.filter(p => p.is_active);

  // Filter by category
  if (category && category !== 'all') {
    const catId = Number(category);
    if (!isNaN(catId) && catId > 0) {
      filtered = filtered.filter(p => p.category_id === catId);
    } else {
      // Slug or name matching
      filtered = filtered.filter(p => {
        const cat = categories.find(
          c => c.slug === category || c.name.toLowerCase() === category.toLowerCase()
        );
        return cat ? p.category_id === cat.id : true;
      });
    }
  }

  // Filter by search query across name, description, category, and specifications
  if (search && search.trim() !== '') {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(q);
      const descMatch = p.description.toLowerCase().includes(q);
      const catMatch = p.category_name.toLowerCase().includes(q);
      const specMatch = p.specifications
        ? Object.entries(p.specifications).some(
            ([k, v]) => k.toLowerCase().includes(q) || String(v).toLowerCase().includes(q)
          )
        : false;
      return nameMatch || descMatch || catMatch || specMatch;
    });
  }

  if (limit && typeof limit === 'number' && limit > 0) {
    return filtered.slice(0, limit);
  }

  return filtered;
}

/**
 * Helper: Find product by ID
 */
export function getProductById(id) {
  if (!id) return null;
  return products.find(p => String(p.id) === String(id)) || null;
}

/**
 * Helper: Find product by Slug
 */
export function getProductBySlug(slug) {
  if (!slug) return null;
  return products.find(p => p.slug === slug) || null;
}

export default products;
