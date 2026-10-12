-- =====================================================================
-- ARYVON - MATERIAL HANDLING SOLUTIONS
-- MySQL Database Schema
-- Database: aryvon_db
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `aryvon_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `aryvon_db`;

-- 1. Table: product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table: products
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `description` TEXT NOT NULL,
    `category_id` INT NOT NULL,
    `image_url` VARCHAR(500) NOT NULL,
    `specifications` JSON NULL,
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_products_category` (`category_id`),
    INDEX `idx_products_active` (`is_active`),
    CONSTRAINT `fk_products_category` FOREIGN KEY (`category_id`) 
        REFERENCES `product_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table: enquiries
CREATE TABLE IF NOT EXISTS `enquiries` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(150) NOT NULL,
    `company_name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('new', 'in progress', 'resolved') DEFAULT 'new',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_enquiries_status` (`status`),
    INDEX `idx_enquiries_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table: enquiry_products (Junction table)
CREATE TABLE IF NOT EXISTS `enquiry_products` (
    `enquiry_id` INT NOT NULL,
    `product_id` INT NOT NULL,
    PRIMARY KEY (`enquiry_id`, `product_id`),
    CONSTRAINT `fk_ep_enquiry` FOREIGN KEY (`enquiry_id`) 
        REFERENCES `enquiries` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_ep_product` FOREIGN KEY (`product_id`) 
        REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
-- Seed Data: Sample Categories & Verified Material Handling Offerings
-- =====================================================================

INSERT INTO `product_categories` (`id`, `name`, `description`) VALUES
(1, 'Pallet Trucks & Stackers', 'Manual, semi-electric, and fully electric pallet handling equipment for warehouse and shop-floor transport.'),
(2, 'Forklifts & Reach Trucks', 'Heavy-duty industrial electric counterbalance forklifts and high-reach aisle stackers for high-density storage.'),
(3, 'Industrial Cranes & Hoists', 'Overhead travelling cranes, gantry systems, and wire rope electric hoists for overhead lifting operations.'),
(4, 'Conveyors & Sorting Systems', 'Modular powered roller, belt, and flexible expanding conveyor lines for continuous movement of cartons and totes.'),
(5, 'Warehouse Storage & Racking', 'Heavy-duty selective pallet racks, drive-in systems, and cantilever racking for long goods.'),
(6, 'Dock Levelers & Scissor Lifts', 'Electro-hydraulic stationary dock levellers, container ramps, and scissor lifting tables.')
ON DUPLICATE KEY UPDATE `name`=VALUES(`name`);

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `category_id`, `image_url`, `specifications`, `is_active`) VALUES
(1, 'Heavy-Duty Hydraulic Hand Pallet Truck', 'hydraulic-hand-pallet-truck-2-5t', 
 'Rugged standard hand pallet truck engineered for daily warehouse movement of standard pallets with sealed leak-proof hydraulic pump and tandem polyurethane rollers.', 
 1, '/assets/images/products/hand-pallet-truck.jpg', 
 '{"Capacity": "2,500 kg / 3,000 kg", "Fork Length": "1150 mm / 1220 mm", "Fork Width": "550 mm / 685 mm", "Lowered Fork Height": "85 mm", "Max Lift Height": "200 mm", "Steering Wheel": "Polyurethane / Nylon", "Operation": "Manual Hydraulic"}', 
 1),

(2, 'Walkie Electric Stacker', 'walkie-electric-stacker-1-5t', 
 'Compact powered lifting and travel stacker designed for narrow aisle warehouse stacking, rack loading, and trailer unloading.', 
 1, '/assets/images/products/electric-stacker.jpg', 
 '{"Capacity": "1,500 kg", "Lift Height": "1,600 mm - 3,500 mm", "Mast Type": "Duplex / Simplex", "Battery": "24V / 210Ah Industrial Traction", "Turning Radius": "1,490 mm", "Control": "Ergonomic Curtis Tiller Head"}', 
 1),

(3, '4-Wheel Electric Counterbalance Forklift', '4-wheel-electric-forklift-3t', 
 'Zero-emission AC electric forklift delivering high torque, low noise, and minimal maintenance for indoor manufacturing facilities and high-throughput distribution hubs.', 
 2, '/assets/images/products/electric-forklift.jpg', 
 '{"Capacity": "3,000 kg", "Load Center": "500 mm", "Lift Height": "3,000 mm - 6,000 mm", "Battery Voltage": "80V / 500Ah High-Efficiency Lithium/Lead-Acid", "Travel Speed": "16 km/h", "Mast": "Triplex Full Free Lift Mast"}', 
 1),

(4, 'Stand-on Electric Reach Truck', 'stand-on-electric-reach-truck', 
 'Specialized high-lift reach truck designed for high-density racking aisles with articulated chassis and precision proportional controls.', 
 2, '/assets/images/products/reach-truck.jpg', 
 '{"Capacity": "1,600 kg - 2,000 kg", "Max Lift Height": "8,500 mm", "Aisle Width Required": "2,750 mm (800x1200 pallet)", "Reach Travel": "600 mm", "Speed Control": "Regenerative Electronic Braking", "Steering": "360-degree Electronic Power Steering"}', 
 1),

(5, 'Single Girder EOT Overhead Crane', 'single-girder-eot-crane', 
 'Custom-engineered electrical overhead travelling crane providing efficient lifting across fabrication shops, machine bays, and assembly lines.', 
 3, '/assets/images/products/eot-crane.jpg', 
 '{"Capacity": "3 Ton - 15 Ton", "Span Range": "7.5 m - 28.5 m", "Hoisting Speed": "4 / 8 m/min dual speed", "Cross Travel Speed": "20 m/min variable frequency", "Crane Control": "Pendant Pushbutton & Wireless Radio Remote", "Design Standard": "IS 3177 / IS 807 compliant"}', 
 1),

(6, 'Automated Powered Roller Conveyor', 'powered-roller-conveyor-system', 
 'Motorized zero-pressure accumulation roller conveyor line for smooth component transit between manufacturing cells, packaging, and shipping docks.', 
 4, '/assets/images/products/roller-conveyor.jpg', 
 '{"Conveyor Width": "450 mm - 1,000 mm", "Load Capacity": "Up to 120 kg per linear meter", "Drive Type": "Motorized Drive Roller (MDR) 24V DC / Chain Drive", "Speed": "5 to 45 m/min adjustable", "Structure": "Powder-coated heavy gauge steel channel", "Sensors": "Integrated photoelectric accumulation sensors"}', 
 1),

(7, 'Heavy-Duty Selective Pallet Racking', 'heavy-duty-pallet-racking', 
 'High-capacity industrial steel storage racking designed for multi-tier warehouse pallet storage with direct accessibility to every pallet.', 
 5, '/assets/images/products/pallet-racking.jpg', 
 '{"Beam Load Capacity": "1,000 kg - 4,000 kg per beam level", "Frame Height": "2,000 mm - 11,000 mm", "Depth": "1,000 mm / 1,100 mm", "Material": "High-tensile cold-rolled steel (IS 2062)", "Finish": "High-durability electrostatic epoxy polyester powder coat", "Safety": "Locking pins, column protectors, and frame row spacers"}', 
 1),

(8, 'Stationary Hydraulic Dock Leveler', 'hydraulic-dock-leveler-10t', 
 'Pit-mounted electro-hydraulic dock leveler bridging the height gap between warehouse loading docks and commercial transport vehicle beds for safe forklift transit.', 
 6, '/assets/images/products/dock-leveler.jpg', 
 '{"Static / Dynamic Capacity": "10,000 kg / 6,000 kg", "Platform Size": "2000 mm x 2500 mm", "Lip Length": "400 mm telescopic / swing lip", "Working Range": "+300 mm above dock / -300 mm below dock", "Hydraulic Power": "1.1 kW 415V 3-phase unit", "Safety Features": "Emergency velocity fuse stop, toe guards, maintenance strut"}', 
 1)
ON DUPLICATE KEY UPDATE `name`=VALUES(`name`);
