// F1 2026 Season - All Teams and Drivers
// Sponsor data from 2025/2026 sources

export const teams = [
  {
    id: "ferrari",
    name: "Scuderia Ferrari HP",
    shortName: "Ferrari",
    color: "#dc0000",
    chassis: "SF-26",
    engine: "Ferrari 067",
    image: "/cars/ferrari.jpg",
    drivers: [
      { name: "Charles Leclerc", number: 16, country: "Monaco" },
      { name: "Lewis Hamilton", number: 44, country: "UK" }
    ],
    sponsors: [
      { name: "HP", url: "https://www.hp.com", category: "Title Sponsor" },
      { name: "Shell", url: "https://www.shell.com", category: "Major Partner" },
      { name: "Ray-Ban", url: "https://www.ray-ban.com", category: "Major Partner" },
      { name: "Puma", url: "https://www.puma.com", category: "Official Partner" },
      { name: "UniCredit", url: "https://www.unicreditgroup.eu", category: "Major Partner" },
      { name: "IBM", url: "https://www.ibm.com", category: "Technology Partner" },
      { name: "AWS", url: "https://aws.amazon.com", category: "Technology Partner" },
      { name: "Richard Mille", url: "https://www.richardmille.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" },
      { name: "Brembo", url: "https://www.brembo.com", category: "Technical Partner" },
      { name: "Giorgio Armani", url: "https://www.armani.com", category: "Official Partner" },
      { name: "Peroni", url: "https://www.peroniitaly.com", category: "Official Partner" },
      { name: "Celsius", url: "https://www.celsius.com", category: "Official Partner" }
    ]
  },
  {
    id: "mclaren",
    name: "McLaren Mastercard F1 Team",
    shortName: "McLaren",
    color: "#ff8000",
    chassis: "MCL40",
    engine: "Mercedes-AMG F1 M17",
    image: "/cars/mclaren.jpg",
    drivers: [
      { name: "Lando Norris", number: 1, country: "UK" },
      { name: "Oscar Piastri", number: 81, country: "Australia" }
    ],
    sponsors: [
      { name: "Mastercard", url: "https://www.mastercard.com", category: "Title Sponsor" },
      { name: "Google Chrome", url: "https://www.google.com/chrome", category: "Major Partner" },
      { name: "Dell Technologies", url: "https://www.dell.com", category: "Major Partner" },
      { name: "Splunk", url: "https://www.splunk.com", category: "Major Partner" },
      { name: "OKX", url: "https://www.okx.com", category: "Major Partner" },
      { name: "Hilton", url: "https://www.hilton.com", category: "Official Partner" },
      { name: "Monster Energy", url: "https://www.monsterenergy.com", category: "Official Partner" },
      { name: "Salesforce", url: "https://www.salesforce.com", category: "Official Partner" },
      { name: "Goldman Sachs", url: "https://www.goldmansachs.com", category: "Official Partner" },
      { name: "LEGO", url: "https://www.lego.com", category: "Official Partner" },
      { name: "eBay", url: "https://www.ebay.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "redbull",
    name: "Oracle Red Bull Racing",
    shortName: "Red Bull",
    color: "#1e41ff",
    chassis: "RB22",
    engine: "Red Bull Ford DM01",
    image: "/cars/redbull.jpg",
    drivers: [
      { name: "Max Verstappen", number: 3, country: "Netherlands" },
      { name: "Isack Hadjar", number: 6, country: "France" }
    ],
    sponsors: [
      { name: "Oracle", url: "https://www.oracle.com", category: "Title Sponsor" },
      { name: "Red Bull", url: "https://www.redbull.com", category: "Main Sponsor" },
      { name: "Honda", url: "https://www.honda.com", category: "Technical Partner" },
      { name: "Tag Heuer", url: "https://www.tagheuer.com", category: "Official Partner" },
      { name: "Mobil 1", url: "https://www.mobil.com", category: "Official Partner" },
      { name: "Visa", url: "https://www.visa.com", category: "Official Partner" },
      { name: "1Password", url: "https://1password.com", category: "Official Partner" },
      { name: "Siemens", url: "https://www.siemens.com", category: "Technical Partner" },
      { name: "Castore", url: "https://www.castore.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas F1 Team",
    shortName: "Mercedes",
    color: "#00d2be",
    chassis: "W17",
    engine: "Mercedes-AMG F1 M17",
    image: "/cars/mercedes.jpg",
    drivers: [
      { name: "George Russell", number: 63, country: "UK" },
      { name: "Kimi Antonelli", number: 12, country: "Italy" }
    ],
    sponsors: [
      { name: "Petronas", url: "https://www.petronas.com", category: "Title Sponsor" },
      { name: "INEOS", url: "https://www.ineos.com", category: "Principal Partner" },
      { name: "Crowdstrike", url: "https://www.crowdstrike.com", category: "Major Partner" },
      { name: "TeamViewer", url: "https://www.teamviewer.com", category: "Major Partner" },
      { name: "AMD", url: "https://www.amd.com", category: "Technical Partner" },
      { name: "IWC Schaffhausen", url: "https://www.iwc.com", category: "Official Partner" },
      { name: "WhatsApp", url: "https://www.whatsapp.com", category: "Official Partner" },
      { name: "adidas", url: "https://www.adidas.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "astonmartin",
    name: "Aston Martin Aramco F1 Team",
    shortName: "Aston Martin",
    color: "#006f62",
    chassis: "AMR26",
    engine: "Honda RA626H",
    image: "/cars/astonmartin.jpg",
    drivers: [
      { name: "Fernando Alonso", number: 14, country: "Spain" },
      { name: "Lance Stroll", number: 18, country: "Canada" }
    ],
    sponsors: [
      { name: "Aramco", url: "https://www.aramco.com", category: "Title Sponsor" },
      { name: "Cognizant", url: "https://www.cognizant.com", category: "Major Partner" },
      { name: "Honda", url: "https://www.honda.com", category: "Power Unit Partner" },
      { name: "Coinbase", url: "https://www.coinbase.com", category: "Official Partner" },
      { name: "TikTok", url: "https://www.tiktok.com", category: "Official Partner" },
      { name: "BOSS", url: "https://www.hugoboss.com", category: "Official Partner" },
      { name: "Puma", url: "https://www.puma.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    shortName: "Alpine",
    color: "#ff87bc",
    chassis: "A526",
    engine: "Mercedes-AMG F1 M17",
    image: "/cars/alpine.jpg",
    drivers: [
      { name: "Pierre Gasly", number: 10, country: "France" },
      { name: "Franco Colapinto", number: 43, country: "Argentina" }
    ],
    sponsors: [
      { name: "BWT", url: "https://www.bwt.com", category: "Title Sponsor" },
      { name: "Renault", url: "https://www.renault.com", category: "Major Partner" },
      { name: "Microsoft", url: "https://www.microsoft.com", category: "Technology Partner" },
      { name: "Binance", url: "https://www.binance.com", category: "Official Partner" },
      { name: "MSC Cruises", url: "https://www.msccruises.com", category: "Official Partner" },
      { name: "Castore", url: "https://www.castore.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "williams",
    name: "Atlassian Williams Racing",
    shortName: "Williams",
    color: "#005aff",
    chassis: "FW48",
    engine: "Mercedes-AMG F1 M17",
    image: "/cars/williams.jpg",
    drivers: [
      { name: "Alexander Albon", number: 23, country: "Thailand" },
      { name: "Carlos Sainz Jr.", number: 55, country: "Spain" }
    ],
    sponsors: [
      { name: "Atlassian", url: "https://www.atlassian.com", category: "Title Sponsor" },
      { name: "Santander", url: "https://www.santander.com", category: "Major Partner" },
      { name: "Gulf", url: "https://www.gulfoilltd.com", category: "Major Partner" },
      { name: "Duracell", url: "https://www.duracell.com", category: "Official Partner" },
      { name: "Kraken", url: "https://www.kraken.com", category: "Official Partner" },
      { name: "Puma", url: "https://www.puma.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "haas",
    name: "TGR Haas F1 Team",
    shortName: "Haas",
    color: "#ffffff",
    textColor: "#b6babd",
    chassis: "VF-26",
    engine: "Ferrari 067",
    image: "/cars/haas.jpg",
    drivers: [
      { name: "Esteban Ocon", number: 31, country: "France" },
      { name: "Oliver Bearman", number: 87, country: "UK" }
    ],
    sponsors: [
      { name: "Toyota Gazoo Racing", url: "https://toyotagazooracing.com", category: "Title Sponsor" },
      { name: "MoneyGram", url: "https://www.moneygram.com", category: "Major Partner" },
      { name: "Haas Automation", url: "https://www.haascnc.com", category: "Founding Partner" },
      { name: "Alpinestars", url: "https://www.alpinestars.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "racingbulls",
    name: "Visa Cash App Racing Bulls",
    shortName: "Racing Bulls",
    color: "#2b4562",
    chassis: "VCARB 03",
    engine: "Red Bull Ford DM01",
    image: "/cars/racingbulls.jpg",
    drivers: [
      { name: "Liam Lawson", number: 30, country: "New Zealand" },
      { name: "Arvid Lindblad", number: 41, country: "UK" }
    ],
    sponsors: [
      { name: "Visa", url: "https://www.visa.com", category: "Title Sponsor" },
      { name: "Cash App", url: "https://cash.app", category: "Title Sponsor" },
      { name: "Red Bull", url: "https://www.redbull.com", category: "Main Sponsor" },
      { name: "Hugo", url: "https://www.hugoboss.com", category: "Official Partner" },
      { name: "Tudor", url: "https://www.tudorwatch.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "audi",
    name: "Audi Revolut F1 Team",
    shortName: "Audi",
    color: "#990000",
    chassis: "R26",
    engine: "Audi AFR 26 Hybrid",
    image: "/cars/audi.jpg",
    drivers: [
      { name: "Gabriel Bortoleto", number: 5, country: "Brazil" },
      { name: "Nico Hülkenberg", number: 27, country: "Germany" }
    ],
    sponsors: [
      { name: "Revolut", url: "https://www.revolut.com", category: "Title Sponsor" },
      { name: "Audi", url: "https://www.audi.com", category: "Works Team" },
      { name: "Stake", url: "https://stake.com", category: "Major Partner" },
      { name: "Kick", url: "https://kick.com", category: "Major Partner" },
      { name: "Puma", url: "https://www.puma.com", category: "Official Partner" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  },
  {
    id: "cadillac",
    name: "Cadillac Formula 1 Team",
    shortName: "Cadillac",
    color: "#1c1c1c",
    chassis: "TBA",
    engine: "Ferrari 067",
    image: "/cars/cadillac.jpg",
    drivers: [
      { name: "Sergio Pérez", number: 11, country: "Mexico" },
      { name: "Valtteri Bottas", number: 77, country: "Finland" }
    ],
    sponsors: [
      { name: "Cadillac", url: "https://www.cadillac.com", category: "Works Team" },
      { name: "General Motors", url: "https://www.gm.com", category: "Parent Company" },
      { name: "Pirelli", url: "https://www.pirelli.com", category: "Official Supplier" }
    ]
  }
];

export const getTeamById = (id) => teams.find(t => t.id === id);
export const getAllDrivers = () => teams.flatMap(t => 
  t.drivers.map(d => ({ ...d, team: t.shortName, teamId: t.id, color: t.color }))
);
