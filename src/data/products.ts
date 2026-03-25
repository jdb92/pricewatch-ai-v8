import type { Product, PriceHistory } from '../types/index';

export function generatePriceHistory(basePrice: number, days: number = 90): PriceHistory[] {
  const history: PriceHistory[] = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const dateString = date.toISOString().split('T')[0];
    
    // Generate random fluctuation (±15%)
    const fluctuation = (Math.random() - 0.5) * 0.3;
    const adjustedPrice = basePrice * (1 + fluctuation);
    
    // Create prices for all stores with slight variations
    const prices: Record<string, number> = {};
    const storeIds = ['bol', 'coolblue', 'mediamarkt', 'amazon', 'alternate'];
    
    storeIds.forEach(storeId => {
      // Each store has its own base fluctuation pattern
      const storeOffset = Math.sin(i * 0.1 + storeIds.indexOf(storeId)) * 0.05;
      prices[storeId] = Math.round(adjustedPrice * (1 + storeOffset));
    });
    
    history.push({
      date: dateString,
      prices
    });
  }
  
  return history;
}

export const products: Product[] = [
  {
    id: 'macbook-air-m4-15',
    name: 'MacBook Air M4 15"',
    category: 'Laptops',
    image: 'https://placehold.co/300x300/4B0082/white?text=MacBook+Air+M4+15"',
    description: 'Apple MacBook Air met M4-chip voor ongeëvenaarde prestaties en batterijduur.',
    specs: {
      'Processor': 'Apple M4',
      'RAM': '16GB',
      'Opslag': '512GB SSD',
      'Scherm': '15.3" Liquid Retina',
      'Gewicht': '1.51 kg'
    },
    aiAdvice: {
      score: 9.5,
      verdict: 'Topkeuze voor professionals en studenten',
      factors: [
        'Uitstekende batterijduur',
        'M4-chip biedt superieure prestaties',
        'Lichte en draagbare constructie',
        'Perfecte integratie met Apple-ecosysteem'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1399, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/macbook-air-m4-15/930000001234567/' },
      { storeId: 'coolblue', price: 1419, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123456' },
      { storeId: 'mediamarkt', price: 1429, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789012' },
      { storeId: 'amazon', price: 1379, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234567' },
      { storeId: 'alternate', price: 1389, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987654' }
    ],
    priceHistory: generatePriceHistory(1400)
  },
  {
    id: 'thinkpad-x1-carbon-gen12',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    category: 'Laptops',
    image: 'https://placehold.co/300x300/4B0082/white?text=ThinkPad+X1+Carbon+Gen+12',
    description: 'Lichte en robuuste business laptop met uitstekende toetsenbord en beveiliging.',
    specs: {
      'Processor': 'Intel Core i7-1355U',
      'RAM': '16GB',
      'Opslag': '1TB SSD',
      'Scherm': '14" WUXGA',
      'Gewicht': '1.12 kg'
    },
    aiAdvice: {
      score: 9.2,
      verdict: 'Ideaal voor zakelijke gebruikers',
      factors: [
        'Bekend toetsenbordgevoel',
        'Uitstekende beveiliging en betrouwbaarheid',
        'Lange batterijduur',
        'Professionele uitstraling'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1799, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/thinkpad-x1-carbon-gen12/930000001234568/' },
      { storeId: 'coolblue', price: 1819, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123457' },
      { storeId: 'mediamarkt', price: 1829, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789013' },
      { storeId: 'amazon', price: 1779, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234568' },
      { storeId: 'alternate', price: 1789, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987655' }
    ],
    priceHistory: generatePriceHistory(1800)
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    category: 'Smartphones',
    image: 'https://placehold.co/300x300/4B0082/white?text=Galaxy+S25+Ultra',
    description: 'Samsungs topmodel met S Pen en ongeëvenaarde camera en prestaties.',
    specs: {
      'Processor': 'Snapdragon 8 Gen 4',
      'RAM': '12GB',
      'Opslag': '512GB',
      'Scherm': '6.8" Dynamic AMOLED 2X',
      'Batterij': '5000mAh'
    },
    aiAdvice: {
      score: 9.7,
      verdict: 'De beste Android smartphone op de markt',
      factors: [
        'Uitstekende camera-kwaliteit',
        'S Pen integratie voor productiviteit',
        'Topprestaties met Snapdragon 8 Gen 4',
        'Sterke software-updategarantie'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1199, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/samsung-galaxy-s25-ultra/930000001234569/' },
      { storeId: 'coolblue', price: 1219, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123458' },
      { storeId: 'mediamarkt', price: 1229, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789014' },
      { storeId: 'amazon', price: 1179, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234569' },
      { storeId: 'alternate', price: 1189, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987656' }
    ],
    priceHistory: generatePriceHistory(1200)
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    category: 'Smartphones',
    image: 'https://placehold.co/300x300/4B0082/white?text=iPhone+16+Pro',
    description: 'Apples nieuwste topmodel met verbeterde camera, batterij en AI-functionaliteiten.',
    specs: {
      'Processor': 'A18 Pro',
      'RAM': '8GB',
      'Opslag': '256GB',
      'Scherm': '6.3" Super Retina XDR',
      'Batterij': '4400mAh'
    },
    aiAdvice: {
      score: 9.4,
      verdict: 'Perfect voor Apple-gebruikers',
      factors: [
        'Uitstekende camera- en video-capaciteiten',
        'Langdurige software-ondersteuning',
        'Naadloze integratie met Apple-diensten',
        'Sterke prestaties met A18 Pro-chip'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1299, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/iphone-16-pro/930000001234570/' },
      { storeId: 'coolblue', price: 1319, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123459' },
      { storeId: 'mediamarkt', price: 1329, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789015' },
      { storeId: 'amazon', price: 1279, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234570' },
      { storeId: 'alternate', price: 1289, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987657' }
    ],
    priceHistory: generatePriceHistory(1300)
  },
  {
    id: 'lg-oled-c4-65',
    name: 'LG OLED C4 65"',
    category: 'TVs',
    image: 'https://placehold.co/300x300/4B0082/white?text=LG+OLED+C4+65"',
    description: 'Perfecte OLED-tv met uitstekende contrast, kleuren en gaming-functionaliteiten.',
    specs: {
      'Scherm': '65" OLED',
      'Resolutie': '4K UHD',
      'HDR': 'Dolby Vision IQ',
      'Hertz': '120Hz',
      'OS': 'webOS'
    },
    aiAdvice: {
      score: 9.8,
      verdict: 'De beste OLED-tv voor film en gaming',
      factors: [
        'Perfecte zwarte niveaus en contrast',
        'Uitstekende kleurweergave',
        '120Hz voor vloeiend gaming',
        'Goede smart-TV-functionaliteiten'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1499, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/lg-oled-c4-65/930000001234571/' },
      { storeId: 'coolblue', price: 1519, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123460' },
      { storeId: 'mediamarkt', price: 1529, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789016' },
      { storeId: 'amazon', price: 1479, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234571' },
      { storeId: 'alternate', price: 1489, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987658' }
    ],
    priceHistory: generatePriceHistory(1500)
  },
  {
    id: 'samsung-qn90d-55',
    name: 'Samsung QN90D 55"',
    category: 'TVs',
    image: 'https://placehold.co/300x300/4B0082/white?text=Samsung+QN90D+55"',
    description: 'QLED-tv met uitstekende helderheid en slimme functionaliteiten voor dagelijks gebruik.',
    specs: {
      'Scherm': '55" QLED',
      'Resolutie': '4K UHD',
      'HDR': 'HDR10+',
      'Hertz': '120Hz',
      'OS': 'Tizen'
    },
    aiAdvice: {
      score: 9.1,
      verdict: 'Uitstekende QLED voor heldere beelden',
      factors: [
        'Hoge helderheid voor lichte ruimtes',
        'Uitstekende kleurverzadiging',
        'Goede gaming-functionaliteiten',
        'Sterke smart-TV-apps'
      ]
    },
    prices: [
      { storeId: 'bol', price: 1199, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/samsung-qn90d-55/930000001234572/' },
      { storeId: 'coolblue', price: 1219, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123461' },
      { storeId: 'mediamarkt', price: 1229, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789017' },
      { storeId: 'amazon', price: 1179, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234572' },
      { storeId: 'alternate', price: 1189, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987659' }
    ],
    priceHistory: generatePriceHistory(1200)
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    category: 'Audio',
    image: 'https://placehold.co/300x300/4B0082/white?text=Sony+WH-1000XM5',
    description: 'Top koptelefoon met ongeëvenaarde actieve ruisonderdrukking en audio-kwaliteit.',
    specs: {
      'Type': 'Over-ear',
      'Batterij': '30 uur',
      'Ruisonderdrukking': 'Actief',
      'Connectiviteit': 'Bluetooth 5.3',
      'Microfoons': '8'
    },
    aiAdvice: {
      score: 9.6,
      verdict: 'De beste koptelefoon voor ruisonderdrukking',
      factors: [
        'Ongeëvenaarde ruisonderdrukking',
        'Uitstekende audio-kwaliteit',
        'Comfortabel voor lange dragerij',
        'Goede batterijduur en snelle oplading'
      ]
    },
    prices: [
      { storeId: 'bol', price: 399, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/sony-wh-1000xm5/930000001234573/' },
      { storeId: 'coolblue', price: 419, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123462' },
      { storeId: 'mediamarkt', price: 429, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789018' },
      { storeId: 'amazon', price: 379, inStock: true, shipping: 3.99, url: 'https://www.amazon.nl/dp/B0C1234573' },
      { storeId: 'alternate', price: 389, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987660' }
    ],
    priceHistory: generatePriceHistory(400)
  },
  {
    id: 'airpods-pro-3',
    name: 'Apple AirPods Pro 3',
    category: 'Audio',
    image: 'https://placehold.co/300x300/4B0082/white?text=AirPods+Pro+3',
    description: 'Apple AirPods Pro 3 met adaptieve ruisonderdrukking, Spatial Audio en USB-C opladen.',
    specs: { Driver: 'Custom Apple H3', Batterij: '6 uur (30 uur met case)', Connectiviteit: 'Bluetooth 5.3', Waterbestendig: 'IP54' },
    aiAdvice: {
      score: 7.8,
      verdict: 'Goede keuze voor Apple-gebruikers, maar prijs is hoog',
      factors: ['Uitstekende integratie met Apple', 'Adaptieve transparantie', 'Prijs boven gemiddelde', 'USB-C eindelijk standaard']
    },
    prices: [
      { storeId: 'bol', price: 279, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/airpods-pro-3/930000001234574/' },
      { storeId: 'coolblue', price: 279, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123463' },
      { storeId: 'mediamarkt', price: 289, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789019' },
      { storeId: 'amazon', price: 269, inStock: true, shipping: 0, url: 'https://www.amazon.nl/dp/B0C1234574' },
      { storeId: 'alternate', price: 285, inStock: false, shipping: 0, url: 'https://www.alternate.nl/product/987661' }
    ],
    priceHistory: generatePriceHistory(279)
  },
  {
    id: 'ps5-pro',
    name: 'PlayStation 5 Pro',
    category: 'Gaming',
    image: 'https://placehold.co/300x300/4B0082/white?text=PS5+Pro',
    description: 'Sony PlayStation 5 Pro met verbeterde GPU, 2TB SSD en 8K-ondersteuning.',
    specs: { GPU: 'Custom AMD RDNA 4', Opslag: '2TB SSD', RAM: '16GB GDDR6', Output: '8K/4K 120fps' },
    aiAdvice: {
      score: 6.5,
      verdict: 'Wacht op prijsdaling — net gelanceerd, weinig exclusieve Pro-titels',
      factors: ['Krachtigste console', 'Hoge lanceerprijs', 'Beperkt Pro-geoptimaliseerd aanbod', 'Retrocompatibel met PS4/PS5']
    },
    prices: [
      { storeId: 'bol', price: 799, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/ps5-pro/930000001234575/' },
      { storeId: 'coolblue', price: 799, inStock: false, shipping: 0, url: 'https://www.coolblue.nl/product/123464' },
      { storeId: 'mediamarkt', price: 799, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789020' },
      { storeId: 'amazon', price: 789, inStock: true, shipping: 0, url: 'https://www.amazon.nl/dp/B0C1234575' },
      { storeId: 'alternate', price: 799, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987662' }
    ],
    priceHistory: generatePriceHistory(799)
  },
  {
    id: 'steam-deck-oled',
    name: 'Steam Deck OLED 1TB',
    category: 'Gaming',
    image: 'https://placehold.co/300x300/4B0082/white?text=Steam+Deck+OLED',
    description: 'Valve Steam Deck OLED met 7.4" HDR OLED-scherm, 1TB NVMe SSD en verbeterde batterij.',
    specs: { Scherm: '7.4" OLED HDR 90Hz', Processor: 'AMD APU Zen 2', Opslag: '1TB NVMe SSD', Batterij: '50Wh' },
    aiAdvice: {
      score: 9.2,
      verdict: 'Beste draagbare PC-gaming ervaring — absolute topper',
      factors: ['Prachtig OLED-scherm', 'Enorme gamebibliotheek via Steam', 'Uitstekende prijs-kwaliteit', 'Linux-based maar zeer compatibel']
    },
    prices: [
      { storeId: 'bol', price: 679, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/steam-deck-oled/930000001234576/' },
      { storeId: 'coolblue', price: 679, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123465' },
      { storeId: 'mediamarkt', price: 699, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789021' },
      { storeId: 'amazon', price: 669, inStock: false, shipping: 0, url: 'https://www.amazon.nl/dp/B0C1234576' },
      { storeId: 'alternate', price: 679, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987663' }
    ],
    priceHistory: generatePriceHistory(679)
  },
  {
    id: 'canon-eos-r6-ii',
    name: 'Canon EOS R6 Mark II',
    category: 'Fotografie',
    image: 'https://placehold.co/300x300/4B0082/white?text=Canon+R6+II',
    description: 'Canon EOS R6 Mark II met 24.2MP full-frame sensor, 40fps burst en 6K video.',
    specs: { Sensor: '24.2MP Full-Frame CMOS', AF: 'Dual Pixel CMOS AF II', Video: '6K 60fps', Stabilisatie: '8 stops IBIS' },
    aiAdvice: {
      score: 8.5,
      verdict: 'Uitstekende hybride camera voor foto en video',
      factors: ['Razendsnelle autofocus', 'Geweldige low-light prestaties', 'Hoge prijs body-only', 'Geen CF Express slot']
    },
    prices: [
      { storeId: 'bol', price: 2699, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/canon-eos-r6-ii/930000001234577/' },
      { storeId: 'coolblue', price: 2649, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123466' },
      { storeId: 'mediamarkt', price: 2699, inStock: false, shipping: 0, url: 'https://www.mediamarkt.nl/product/789022' },
      { storeId: 'amazon', price: 2599, inStock: true, shipping: 0, url: 'https://www.amazon.nl/dp/B0C1234577' },
      { storeId: 'alternate', price: 2649, inStock: true, shipping: 0, url: 'https://www.alternate.nl/product/987664' }
    ],
    priceHistory: generatePriceHistory(2650)
  },
  {
    id: 'sony-a7c-ii',
    name: 'Sony A7C II',
    category: 'Fotografie',
    image: 'https://placehold.co/300x300/4B0082/white?text=Sony+A7C+II',
    description: 'Sony A7C II — compacte full-frame mirrorless met 33MP sensor en AI-autofocus.',
    specs: { Sensor: '33MP Full-Frame Exmor R', AF: 'AI-based Real-time AF', Video: '4K 60fps 10-bit', Gewicht: '514g' },
    aiAdvice: {
      score: 8.8,
      verdict: 'Beste compacte full-frame — ideaal voor reisfotografie',
      factors: ['Lichtste full-frame camera', 'AI-tracking autofocus', 'Beperkt weer sealed', 'Uitstekende beeldkwaliteit']
    },
    prices: [
      { storeId: 'bol', price: 2199, inStock: true, shipping: 0, url: 'https://www.bol.com/nl/p/sony-a7c-ii/930000001234578/' },
      { storeId: 'coolblue', price: 2149, inStock: true, shipping: 0, url: 'https://www.coolblue.nl/product/123467' },
      { storeId: 'mediamarkt', price: 2199, inStock: true, shipping: 0, url: 'https://www.mediamarkt.nl/product/789023' },
      { storeId: 'amazon', price: 2099, inStock: true, shipping: 0, url: 'https://www.amazon.nl/dp/B0C1234578' },
      { storeId: 'alternate', price: 2149, inStock: false, shipping: 0, url: 'https://www.alternate.nl/product/987665' }
    ],
    priceHistory: generatePriceHistory(2150)
  }
]