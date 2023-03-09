export const comps = {
  "processors": [
    {
      "name": "AMD Ryzen 9 5950X",
      "price": 799.99,
      "photo": "https://example.com/images/ryzen-9-5950x.jpg",
      "description": "16-core, 32-thread processor with a base clock speed of 3.4 GHz",
      "characteristics": {
        "cores": 16,
        "threads": 32,
        "baseClock": "3.4 GHz",
        "boostClock": "4.9 GHz",
        "socket": "AM4",
      },
    },
    {
      "name": "Intel Core i9-11900K",
      "price": 599.99,
      "photo": "https://example.com/images/core-i9-11900k.jpg",
      "description": "8-core, 16-thread processor with a base clock speed of 3.5 GHz",
      "characteristics": {
        "cores": 8,
        "threads": 16,
        "baseClock": "3.5 GHz",
        "boostClock": "5.3 GHz",
        "socket": "LGA1200",
      },
    },
    // more processors...
  ],
  "video_cards": [
    {
      "name": "NVIDIA GeForce RTX 3080",
      "price": 1499.99,
      "photo": "https://example.com/images/geforce-rtx-3080.jpg",
      "description": "10 GB GDDR6X video memory with 8704 CUDA cores",
      "characteristics": {
        "memory": "10 GB GDDR6X",
        "cudaCores": 8704,
        "boostClock": "1.71 GHz",
        "memoryClock": "19 Gbps",
        "powerDraw": "320W",
      },
    },
    {
      "name": "AMD Radeon RX 6800 XT",
      "price": 899.99,
      "photo": "https://example.com/images/radeon-rx-6800-xt.jpg",
      "description": "16 GB GDDR6 video memory with 4608 Stream processors",
      "characteristics": {
        "memory": "16 GB GDDR6",
        "streamProcessors": 4608,
        "boostClock": "2.25 GHz",
        "memoryClock": "16 Gbps",
        "powerDraw": "300W",
      },
    },
    // more video cards...
  ],
  "motherboards": [
    {
      "name": "ASUS ROG Strix Z590-E",
      "price": 399.99,
      "photo": "https://example.com/images/rog-strix-z590-e.jpg",
      "description": "ATX motherboard with Intel Z590 chipset and LGA1200 socket",
      "characteristics": {
        "chipset": "Intel Z590",
        "socket": "LGA1200",
        "formFactor": "ATX",
        "memorySlots": 4,
        "maxMemory": "128 GB",
        "PCIeSlots": "3 x16, 3 x1",
      },
    },
    {
      "name": "GIGABYTE AORUS X570 Master",
      "price": 599.99,
      "photo": "https://example.com/images/aorus-x570-master.jpg",
      "description": "ATX motherboard with AMD X570 chipset and AM4 socket",
      "characteristics": {
        "chipset": "AMD X570",
        "socket": "AM4",
        "formFactor": "ATX",
        "memorySlots": 4,
        "maxMemory": "128 GB",
        "PCIeSlots": "3 x16, 2 x8, 1 x4",
      },
    },
    // more motherboards...
    ],
    "RAM": [
      {
        "name": "Corsair Vengeance LPX 32GB",
        "price": 179.99,
        "photo":"https://example.com/images/corsair-vengeance-lpx-32gb.jpg",
        "description": "32 GB DDR4 RAM with 3200 MHz frequency and CL16 latency",
        "characteristics": {
          "capacity": "32 GB",
          "type": "DDR4",
          "frequency": "3200 MHz",
          "latency": "CL16",
          "voltage": "1.35V",
          "modules": "2 x 16GB",
        },
      },
      {
        "name": "G.SKILL Trident Z Royal 64GB",
        "price": 429.99,
        "photo": "https://example.com/images/trident-z-royal-64gb.jpg",
        "description": "64 GB DDR4 RAM with 3600 MHz frequency and CL16 latency",
        "characteristics": {
          "capacity": "64 GB",
          "type": "DDR4",
          "frequency": "3600 MHz",
          "latency": "CL16",
          "voltage": "1.35V",
          "modules": "4 x 16GB",
        },
      },
      // more RAM modules...
    ],
    "power_units": [
      {
        "name": "Corsair RM850x",
        "price": 139.99,
        "photo":"https://example.com/images/corsair-rm850x.jpg",
        "description": "850W 80+ Gold fully modular power supply",
        "characteristics": {
          "wattage": "850W",
          "efficiency": "80+ Gold",
          "modularity": "Fully Modular",
          "fan": "135mm",
          "cables": "All black, flat, low-profile",
        },
      },
      {
        "name": "EVGA SuperNOVA 1000 G5",
        "price": 199.99,
        "photo": "https://example.com/images/evga-supernova-1000-g5.jpg",
        "description": "1000W 80+ Gold fully modular power supply",
        "characteristics": {
          "wattage": "1000W",
          "efficiency": "80+ Gold",
          "modularity": "Fully Modular",
          "fan": "135mm",
          "cables": "All black, flat, low-profile",
        },
      },
      // more power supplies...
    ],
    "SSD": [
      {
        "name": "Samsung 970 EVO Plus 1TB",
        "price": 189.99,
        "photo": "https://example.com/images/samsung-970-evo-plus-1tb.jpg",
        "description": "1TB NVMe M.2 SSD with read/write speeds of up to 3500/3300 MB/s",
        "characteristics": {
          "capacity": "1TB",
          "interface": "M.2 NVMe",
          "readSpeed": "Up to 3500 MB/s",
          "writeSpeed": "Up to 3300 MB/s",
          "formFactor": "M.2 2280",
          "warranty": "5 years",
        },
      },
    ],
    "HDD": [
      {
        "name": "Seagate BarraCuda 4TB",
        "price": 109.99,
        "photo": "https://example.com/images/seagate-barracuda-4tb.jpg",
        "description": "4TB 3.5-inch hard drive with 5400 RPM spindle speed and 256MB cache",
        "characteristics": {
          "capacity": "4 TB",
          "formFactor": "3.5 inches",
          "spindleSpeed": "5400 RPM",
          "cache": "256 MB",
          "interface": "SATA 6 Gb/s",
        },
      },
    ]
  }