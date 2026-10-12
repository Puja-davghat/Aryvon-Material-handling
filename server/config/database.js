const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'aryvon_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool = null;
let isConnected = false;

// Default in-memory seed dataset for development when MySQL is offline
const fallbackData = {
  categories: [
    {
      id: 1,
      name: 'Pallet Trucks & Stackers',
      description: 'Manual, semi-electric, and fully electric pallet handling equipment for warehouse and shop-floor transport.'
    },
    {
      id: 2,
      name: 'Forklifts & Reach Trucks',
      description: 'Heavy-duty industrial electric counterbalance forklifts and high-reach aisle stackers for high-density storage.'
    },
    {
      id: 3,
      name: 'Industrial Cranes & Hoists',
      description: 'Overhead travelling cranes, gantry systems, and wire rope electric hoists for overhead lifting operations.'
    },
    {
      id: 4,
      name: 'Conveyors & Sorting Systems',
      description: 'Modular powered roller, belt, and flexible expanding conveyor lines for continuous movement of cartons and totes.'
    },
    {
      id: 5,
      name: 'Warehouse Storage & Racking',
      description: 'Heavy-duty selective pallet racks, drive-in systems, and cantilever racking for long goods.'
    },
    {
      id: 6,
      name: 'Dock Levelers & Scissor Lifts',
      description: 'Electro-hydraulic stationary dock levellers, container ramps, and scissor lifting tables.'
    }
  ],
  products: [
    {
      id: 1,
      name: 'Heavy-Duty Hydraulic Hand Pallet Truck',
      slug: 'hydraulic-hand-pallet-truck-2-5t',
      description: 'Rugged standard hand pallet truck engineered for daily warehouse movement of standard pallets with sealed leak-proof hydraulic pump and tandem polyurethane rollers.',
      category_id: 1,
      category_name: 'Pallet Trucks & Stackers',
      image_url: '/assets/images/products/hand-pallet-truck.svg',
      specifications: {
        "Capacity": "2,500 kg / 3,000 kg",
        "Fork Length": "1150 mm / 1220 mm",
        "Fork Width": "550 mm / 685 mm",
        "Lowered Fork Height": "85 mm",
        "Max Lift Height": "200 mm",
        "Steering Wheel": "Polyurethane / Nylon",
        "Operation": "Manual Hydraulic"
      },
      is_active: 1
    },
    {
      id: 2,
      name: 'Walkie Electric Stacker',
      slug: 'walkie-electric-stacker-1-5t',
      description: 'Compact powered lifting and travel stacker designed for narrow aisle warehouse stacking, rack loading, and trailer unloading.',
      category_id: 1,
      category_name: 'Pallet Trucks & Stackers',
      image_url: '/assets/images/products/electric-stacker.svg',
      specifications: {
        "Capacity": "1,500 kg",
        "Lift Height": "1,600 mm - 3,500 mm",
        "Mast Type": "Duplex / Simplex",
        "Battery": "24V / 210Ah Industrial Traction",
        "Turning Radius": "1,490 mm",
        "Control": "Ergonomic Curtis Tiller Head"
      },
      is_active: 1
    },
    {
      id: 3,
      name: '4-Wheel Electric Counterbalance Forklift',
      slug: '4-wheel-electric-forklift-3t',
      description: 'Zero-emission AC electric forklift delivering high torque, low noise, and minimal maintenance for indoor manufacturing facilities and high-throughput distribution hubs.',
      category_id: 2,
      category_name: 'Forklifts & Reach Trucks',
      image_url: '/assets/images/products/electric-forklift.svg',
      specifications: {
        "Capacity": "3,000 kg",
        "Load Center": "500 mm",
        "Lift Height": "3,000 mm - 6,000 mm",
        "Battery Voltage": "80V / 500Ah Lithium/Lead-Acid",
        "Travel Speed": "16 km/h",
        "Mast": "Triplex Full Free Lift Mast"
      },
      is_active: 1
    },
    {
      id: 4,
      name: 'Stand-on Electric Reach Truck',
      slug: 'stand-on-electric-reach-truck',
      description: 'Specialized high-lift reach truck designed for high-density racking aisles with articulated chassis and precision proportional controls.',
      category_id: 2,
      category_name: 'Forklifts & Reach Trucks',
      image_url: '/assets/images/products/reach-truck.svg',
      specifications: {
        "Capacity": "1,600 kg - 2,000 kg",
        "Max Lift Height": "8,500 mm",
        "Aisle Width Required": "2,750 mm (800x1200 pallet)",
        "Reach Travel": "600 mm",
        "Speed Control": "Regenerative Electronic Braking",
        "Steering": "360-degree Electronic Power Steering"
      },
      is_active: 1
    },
    {
      id: 5,
      name: 'Single Girder EOT Overhead Crane',
      slug: 'single-girder-eot-crane',
      description: 'Custom-engineered electrical overhead travelling crane providing efficient lifting across fabrication shops, machine bays, and assembly lines.',
      category_id: 3,
      category_name: 'Industrial Cranes & Hoists',
      image_url: '/assets/images/products/eot-crane.svg',
      specifications: {
        "Capacity": "3 Ton - 15 Ton",
        "Span Range": "7.5 m - 28.5 m",
        "Hoisting Speed": "4 / 8 m/min dual speed",
        "Cross Travel Speed": "20 m/min variable frequency",
        "Crane Control": "Pendant Pushbutton & Wireless Radio Remote",
        "Design Standard": "IS 3177 / IS 807 compliant"
      },
      is_active: 1
    },
    {
      id: 6,
      name: 'Automated Powered Roller Conveyor',
      slug: 'powered-roller-conveyor-system',
      description: 'Motorized zero-pressure accumulation roller conveyor line for smooth component transit between manufacturing cells, packaging, and shipping docks.',
      category_id: 4,
      category_name: 'Conveyors & Sorting Systems',
      image_url: '/assets/images/products/roller-conveyor.svg',
      specifications: {
        "Conveyor Width": "450 mm - 1,000 mm",
        "Load Capacity": "Up to 120 kg per linear meter",
        "Drive Type": "Motorized Drive Roller (MDR) 24V DC / Chain",
        "Speed": "5 to 45 m/min adjustable",
        "Structure": "Powder-coated heavy gauge steel channel",
        "Sensors": "Integrated photoelectric accumulation sensors"
      },
      is_active: 1
    },
    {
      id: 7,
      name: 'Heavy-Duty Selective Pallet Racking',
      slug: 'heavy-duty-pallet-racking',
      description: 'High-capacity industrial steel storage racking designed for multi-tier warehouse pallet storage with direct accessibility to every pallet.',
      category_id: 5,
      category_name: 'Warehouse Storage & Racking',
      image_url: '/assets/images/products/pallet-racking.svg',
      specifications: {
        "Beam Load Capacity": "1,000 kg - 4,000 kg per level",
        "Frame Height": "2,000 mm - 11,000 mm",
        "Depth": "1,000 mm / 1,100 mm",
        "Material": "High-tensile cold-rolled steel (IS 2062)",
        "Finish": "Electrostatic epoxy polyester powder coat",
        "Safety": "Locking pins, column protectors, row spacers"
      },
      is_active: 1
    },
    {
      id: 8,
      name: 'Stationary Hydraulic Dock Leveler',
      slug: 'hydraulic-dock-leveler-10t',
      description: 'Pit-mounted electro-hydraulic dock leveler bridging the height gap between warehouse loading docks and commercial transport vehicle beds for safe forklift transit.',
      category_id: 6,
      category_name: 'Dock Levelers & Scissor Lifts',
      image_url: '/assets/images/products/dock-leveler.svg',
      specifications: {
        "Static / Dynamic Capacity": "10,000 kg / 6,000 kg",
        "Platform Size": "2000 mm x 2500 mm",
        "Lip Length": "400 mm telescopic / swing lip",
        "Working Range": "+300 mm above dock / -300 mm below dock",
        "Hydraulic Power": "1.1 kW 415V 3-phase unit",
        "Safety Features": "Emergency velocity fuse stop, toe guards"
      },
      is_active: 1
    }
  ],
  enquiries: []
};

async function initDatabase() {
  try {
    pool = mysql.createPool(dbConfig);
    const connection = await pool.getConnection();
    console.log(`[Database] MySQL connected successfully to ${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);
    connection.release();
    isConnected = true;
  } catch (err) {
    console.warn(`[Database] MySQL connection notice (${err.message}). Using resilient verified in-memory fallback dataset for development.`);
    isConnected = false;
    pool = null;
  }
}

// Initialise DB on load
initDatabase();

module.exports = {
  getPool: () => pool,
  isDbConnected: () => isConnected,
  fallbackData,
  initDatabase
};
