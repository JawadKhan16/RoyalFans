const allProducts = [
    // FANS
    {
      name: 'Ceiling Fan',
      slug: 'ceiling-fan',
      category: 'Fan',
      image: '/Products/Fans/fan1.webp',
      description: 'Bajaj Semi Deco 1200mm 3 Blade Energy Efficient Ceiling Fan (Reliable Operation, Mid Buff)',
      price: '2300',
      brand: 'Bajaj'
    },
    {
      name: 'Tower Fan',
      slug: 'tower-fan',
      category: 'Fan',
      image: '/Products/Fans/fan2.webp',
      description: 'Usha 5000 Series Bladeless 2230 m3/hr Air Delivery Tower Fan with Remote (Quiet Sleep mode, Black)',
      price: '8999',
      brand: 'Usha'
    },
    {
      name: 'Wall Fan',
      slug: 'wall-fan',
      category: 'Fan',
      image: '/Products/Fans/fan3.webp',
      description: 'Havells ist Air Flo 400mm 3 Blade Inverter Technology Wall Mounted Fan (Easy Tilt, Light Blue)',
      price: '2300',
      brand: 'Havells'
    },
    {
      name: 'Mini Fan',
      slug: 'mini-fan',
      category: 'Fan',
      image: '/Products/Fans/fan4.webp',
      description: 'BAJAJ Pygmy Mini 110mm 3 Blade Rechargeable Personal Fan with 1800 mAh Battery (Silent Operation, White Smoke)',
      price: '1149',
      brand: 'Bajaj'
    },
    {
      name: 'Celling Fan',
      slug: 'celling-fan',
      category: 'Fan',
      image: '/Products/Fans/fan5.webp',
      description: 'Croma AF2093 5 Star 1200mm 3 Blade BLDC Motor Ceiling Fan with Remote (Energy Efficient, Smoke Brown)',
      price: '3199',
      brand: 'Croma'
    },
    {
      name: 'Table Fan',
      slug: 'table-fan',
      category: 'Fan',
      image: '/Products/Fans/fan6.webp',
      description: 'USHA Mist Air Flo 400mm 3 Blade Inverter Technology Table Fan (Durable Design, Light Blue)',
      price: '2499',
      brand: 'Usha'
    },
    
  
    // COOLERS
    {
      name: 'Desert Cooler',
      slug: 'desert-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler1.webp',
      description: 'Crompton Sumo 75 XL 75 Litres Desert Air Cooler with i-Pure Technology (Powerful +Air Fan, White).',
      price: '12499',
      brand: 'Crompton'
    },
    {
      name: 'Personal Cooler',
      slug: 'personal-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler2.webp',
      description: 'Orient HiFLO 40 Litres Room Air Cooler with i-Pure Technology (Cool Flow Dispenser, Light Grey).',
      price: '6399',
      brand: 'Orient'
    },
    {
      name: 'Window Cooler',
      slug: 'window-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler3.webp',
      description: 'Bajaj Altima-I 70 Litres Desert Air Cooler with Inverter Compatible (Thermal Overload Protection, White & Champagne Gold)',
      price: '11869',
      brand: 'Bajaj'
    },
    {
      name: 'Desert Air Cooler',
      slug: 'desert-air-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler4.webp',
      description: 'HAVELLS Convertible 80 Litres Desert Air Cooler with Metal Blade Fan (Powerful Air Delivery, White & Grey)',
      price: '11869',
      brand: 'Havells'
    },
    {
      name: 'Tower Air Cooler',
      slug: 'tower-air-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler5.webp',
      description: 'Havell Diet 3D 55i+ 55 Litres Room Air Cooler with Magnetic Remote (SMPS Technology, Black)',
      price: '11799',
      brand: 'Havells'
    },
    {
      name: 'Bajaj-Cooler',
      slug: 'bajaj-cooler',
      category: 'Cooler',
      image: '/Products/Coolers/cooler6.webp',
      description: 'BAJAJ Shield Skive Nios 36 Litres Tower Air Cooler with DuraMarine PRO Pump (Anti Bacterial Hexacool Master, White)',
      price: '10799',
      brand: 'Bajaj'
    },


    // WASHING MACHINES
    {
      name: 'Top Load Washer',
      slug: 'top-load-washer',
      category: 'Washing Machine',
      image: '/Products/wm/wm1.webp',
      description: 'SAMSUNG 7 kg 5 Star Fully Automatic Top Load Washing Machine (WA70BG4441BYTL, Diamond Drum, Lavender Gray)',
      price: '19200',
      brand: 'Samsung'
    },
    {
      name: 'Front Load Washer',
      slug: 'front-load-washer',
      category: 'Washing Machine',
      image: '/Products/wm/wm2.webp',
      description: 'Croma 7 kg 5 Star Inverter Fully Automatic Front Load Washing Machine (2025 Model, Built in heater, Silver Grey)',
      price: '26800',
      brand: 'Croma'
    },
    {
      name: 'Semi Automatic Washer',
      slug: 'semi-automatic-washer',
      category: 'Washing Machine',
      image: '/Products/wm/wm3.webp',
      description: 'LG 7.5 kg 5 Star Semi Automatic Washing Machine with 3 Wash Programs (GLWMS75CVGEL, Grey)',
      price: '12499',
      brand: 'Lg'
    },
    {
      name: 'Top Load Washer',
      slug: 'top-load',
      category: 'Washing Machine',
      image: '/Products/wm/wm4.webp',
      description: 'Whirlpool 7.5 kg 5 Star Fully Automatic Top Load Washing Machine (StainWash Pro, 31631, In-built Heater, Grey)',
      price: '18699',
      brand: 'Whirlpool'
    },
    {
      name: 'Front Load Washer',
      slug: 'front-load',
      category: 'Washing Machine',
      image: '/Products/wm/wm5.webp',
      description: 'Whirlpool 7 kg 5 Star Inverter Fully Automatic Front Load Washing Machine (XPERT CARE STEAM, XS7012BYM53E, In-built Heater, Midnight Grey)',
      price: '29990',
      brand: 'Whirlpool'
    },
    {
      name: 'Front Load Washer',
      slug: 'front-load-wash',
      category: 'Washing Machine',
      image: '/Products/wm/wm6.webp',
      description: 'SAMSUNG 12 kg 5 Star Wi-Fi Inverter Fully Automatic Front Load Washing Machine (WW12DG5B24ABTL, AI EcoBubble, Black)',
      price: '46000',
      brand: 'Samsung'
    },
  
    // MIXERS
    {
      name: '3 Jar Mixer Grinder',
      slug: '3-jar-mixer',
      category: 'Mixer',
      image: '/Products/Mixer/mixer1.webp',
      description: 'Croma 500 Watt 3 Jars Mixer Grinder (Rust Resistant, White/Purple)',
      price: '2599',
      brand: 'Croma'
    },
    {
      name: 'Juicer Mixer Grinder',
      slug: 'juicer-mixer-grinder',
      category: 'Mixer',
      image: '/Products/Mixer/mixer2.webp',
      description: 'PHILIPS 750 Watt 3 Jars Mixer Grinder (Turbo Motor, Premium Blue)',
      price: '3999',
      brand: 'Philips'
    },
    {
      name: 'Mini Mixer',
      slug: 'mini-mixer',
      category: 'Mixer',
      image: '/Products/Mixer/mixer3.webp',
      description: 'Prestige Regal 750 Watt 3 Jars Mixer Grinder (Sparkling Mirror Finish, Black & Red)',
      price: '3145',
      brand: 'Prestige'
    },
    {
      name: 'Juicer Mixer Grinder',
      slug: 'juicer-mixer',
      category: 'Mixer',
      image: '/Products/Mixer/mixer4.webp',
      description: 'PHILIPS Avance Collection 750 Watt 4 Jars Mixer Grinder (20000 RPM, Gear Drive Technology, Black)',
      price: '7699',
      brand: 'Philips'
    },
    {
      name: ' Mixer Grinder',
      slug: 'mixer-grinder',
      category: 'Mixer',
      image: '/Products/Mixer/mixer5.webp',
      description: 'BAJAJ Ninja Series Gracio Lilac 500 Watt 3 Jars Mixer Grinder (20000 RPM, Pulse Mode, White and Lilac)',
      price: '2599',
      brand: 'Bajaj'
    },
    {
      name: 'Juicer Mixer Grinder',
      slug: 'juicer',
      category: 'Mixer',
      image: '/Products/Mixer/mixer6.webp',
      description: 'BAJAJ JX 30 500 Watt 3 Jars Juicer Mixer Grinder (18000 RPM, ISI Approved, White/Pink)',
      price: '3999',
      brand: 'Bajaj'
    },
  ];
  
  export default allProducts;
  