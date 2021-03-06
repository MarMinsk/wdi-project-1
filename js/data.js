/* eslint-disable no-unused-vars */

var lines = {
  B: 'Bakerloo',
  C: 'Central',
  D: 'District',
  H: 'Hammersmith & City',
  J: 'Jubilee',
  M: 'Metropolitan',
  N: 'Northern',
  P: 'Piccadilly',
  V: 'Victoria',
  W: 'Waterloo & City'
};

var stations = {
  BST: 'Baker Street',
  CHX: 'Charing Cross',
  ERB: 'Edgware Road (Bakerloo)',
  ELE: 'Elephant and Castle',
  EMB: 'Embankment',
  HSD: 'Harlesden',
  HAW: 'Harrow and Wealdstone',
  KGN: 'Kensal Green',
  KNT: 'Kenton',
  KPK: 'Kilburn Park',
  LAM: 'Lambeth North',
  MDV: 'Maida Vale',
  MYB: 'Marylebone',
  NWM: 'North Wembley',
  OXC: 'Oxford Circus',
  PAD: 'Paddington',
  PIC: 'Piccadilly Circus',
  QPK: 'Queen\'s Park',
  RPK: 'Regent\'s Park',
  SKT: 'South Kenton',
  SPK: 'Stonebridge Park',
  WAR: 'Warwick Avenue',
  WLO: 'Waterloo',
  WEM: 'Wembley Central',
  WJN: 'Willesden Junction',
  BNK: 'Bank',
  BDE: 'Barkingside',
  BNG: 'Bethnal Green',
  BDS: 'Bond Street',
  BHL: 'Buckhurst Hill',
  CYL: 'Chancery Lane',
  CHG: 'Chigwell',
  DEB: 'Debden',
  EBY: 'Ealing Broadway',
  EAC: 'East Acton',
  EPP: 'Epping',
  FLP: 'Fairlop',
  GHL: 'Gants Hill',
  GRH: 'Grange Hill',
  GFD: 'Greenford',
  HAI: 'Hainault',
  HLN: 'Hanger Lane',
  HOL: 'Holborn',
  HPK: 'Holland Park',
  LAN: 'Lancaster Gate',
  LEY: 'Leyton',
  LYS: 'Leytonstone',
  LST: 'Liverpool Street',
  LTN: 'Loughton',
  MAR: 'Marble Arch',
  MLE: 'Mile End',
  NEP: 'Newbury Park',
  NAC: 'North Acton',
  NHT: 'Northolt',
  NHG: 'Notting Hill Gate',
  PER: 'Perivale',
  QWY: 'Queensway',
  RED: 'Redbridge',
  ROD: 'Roding Valley',
  RUG: 'Ruislip Gardens',
  SBC: 'Shepherd\'s Bush',
  SNB: 'Snaresbrook',
  SRP: 'South Ruislip',
  SWF: 'South Woodford',
  STP: 'St Paul\'s',
  SFD: 'Stratford',
  THB: 'Theydon Bois',
  TCR: 'Tottenham Court Road',
  WAN: 'Wanstead',
  WAC: 'West Acton',
  WRP: 'West Ruislip',
  WCT: 'White City',
  WFD: 'Woodford',
  ACT: 'Acton Town',
  ALE: 'Aldgate East',
  BKG: 'Barking',
  BCT: 'Barons Court',
  BEC: 'Becontree',
  BLF: 'Blackfriars',
  BWR: 'Bow Road',
  BBB: 'Bromley-by-Bow',
  CST: 'Cannon Street',
  CHP: 'Chiswick Park',
  DGE: 'Dagenham East',
  DGH: 'Dagenham Heathway',
  ECM: 'Ealing Common',
  ECT: 'Earl\'s Court',
  EHM: 'East Ham',
  EPY: 'East Putney',
  ERD: 'Edgware Road (H & C)',
  EPK: 'Elm Park',
  FBY: 'Fulham Broadway',
  GRD: 'Gloucester Road',
  GUN: 'Gunnersbury',
  HMD: 'Hammersmith (District and Picc)',
  HST: 'High Street Kensington',
  HCH: 'Hornchurch',
  OLY: 'Kensington (Olympia)',
  KEW: 'Kew Gardens',
  MAN: 'Mansion House',
  MON: 'Monument',
  PGR: 'Parsons Green',
  PLW: 'Plaistow',
  PUT: 'Putney Bridge',
  RCP: 'Ravenscourt Park',
  RMD: 'Richmond',
  SSQ: 'Sloane Square',
  SKN: 'South Kensington',
  SFS: 'Southfields',
  SJP: 'St. James\'s Park',
  STB: 'Stamford Brook',
  STG: 'Stepney Green',
  TEM: 'Temple',
  THL: 'Tower Hill',
  TGR: 'Turnham Green',
  UPM: 'Upminster',
  UPB: 'Upminster Bridge',
  UPY: 'Upney',
  UPK: 'Upton Park',
  VIC: 'Victoria',
  WBT: 'West Brompton',
  WHM: 'West Ham',
  WKN: 'West Kensington',
  WMS: 'Westminster',
  WCL: 'Whitechapel',
  WDN: 'Wimbledon',
  WMP: 'Wimbledon Park',
  ALD: 'Aldgate',
  BAR: 'Barbican',
  ESQ: 'Euston Square',
  FAR: 'Farringdon',
  GPS: 'Great Portland Street',
  HMS: 'Hammersmith',
  KXX: 'King\'s Cross St Pancras',
  MGT: 'Moorgate',
  BER: 'Bermondsey',
  CWR: 'Canada Water',
  CWF: 'Canary Wharf',
  CNT: 'Canning Town',
  CPK: 'Canons Park',
  DHL: 'Dollis Hill',
  FRD: 'Finchley Road',
  GPK: 'Green Park',
  KIL: 'Kilburn',
  KBY: 'Kingsbury',
  LON: 'London Bridge',
  NEA: 'Neasden',
  NGW: 'North Greenwich',
  QBY: 'Queensbury',
  SWK: 'Southwark',
  SJW: 'St John\'s Wood',
  STA: 'Stanmore',
  SWC: 'Swiss Cottage',
  WPK: 'Wembley Park',
  WHD: 'West Hampstead',
  WLG: 'Willesden Green',
  AME: 'Amersham',
  CLF: 'Chalfont and Latimer',
  CWD: 'Chorleywood',
  CLW: 'Colliers Wood',
  CRX: 'Croxley',
  ETE: 'Eastcote',
  HOH: 'Harrow on the Hill',
  HDN: 'Hillingdon',
  ICK: 'Ickenham',
  MPK: 'Moor Park',
  NHR: 'North Harrow',
  NWP: 'Northwick Park',
  NWD: 'Northwood',
  NWH: 'Northwood Hills',
  PIN: 'Pinner',
  RLN: 'Rayners Lane',
  RKY: 'Rickmansworth',
  RUI: 'Ruislip',
  RUM: 'Ruislip Manor',
  UXB: 'Uxbridge',
  WAT: 'Watford',
  WHR: 'West Harrow',
  ANG: 'Angel',
  ARC: 'Archway',
  BAL: 'Balham',
  BPK: 'Belsize Park',
  BOR: 'Borough',
  BTX: 'Brent Cross',
  BUR: 'Burnt Oak',
  CTN: 'Camden Town',
  CHF: 'Chalk Farm',
  CPC: 'Clapham Common',
  CPN: 'Clapham North',
  CPS: 'Clapham South',
  COL: 'Colindale',
  EFY: 'East Finchley',
  EDG: 'Edgware',
  EUS: 'Euston',
  FYC: 'Finchley Central',
  GGR: 'Golders Green',
  GST: 'Goodge Street',
  HMP: 'Hampstead',
  HND: 'Hendon Central',
  HBT: 'High Barnet',
  HIG: 'Highgate',
  KEN: 'Kennington',
  KTN: 'Kentish Town',
  LSQ: 'Leicester Square',
  MHE: 'Mill Hill East',
  MOR: 'Morden',
  MCR: 'Mornington Crescent',
  OLD: 'Old Street',
  OVL: 'Oval',
  SWM: 'South Wimbledon',
  STK: 'Stockwell',
  TBE: 'Tooting Bec',
  TBY: 'Tooting Broadway',
  TOT: 'Totteridge and Whetstone',
  TPK: 'Tufnell Park',
  WST: 'Warren Street',
  WFY: 'West Finchley',
  WSP: 'Woodside Park',
  ALP: 'Alperton',
  AGR: 'Arnos Grove',
  ARL: 'Arsenal',
  BOS: 'Boston Manor',
  BGR: 'Bounds Green',
  CRD: 'Caledonian Road',
  CFS: 'Cockfosters',
  COV: 'Covent Garden',
  FPK: 'Finsbury Park',
  HTX: 'Hatton Cross',
  HTF: 'Heathrow Terminal 4',
  HRV: 'Heathrow Terminal 5',
  HRC: 'Heathrow Terminals 123',
  HRD: 'Holloway Road',
  HNC: 'Hounslow Central',
  HNE: 'Hounslow East',
  HNW: 'Hounslow West',
  HPC: 'Hyde Park Corner',
  KNB: 'Knightsbridge',
  MNR: 'Manor House',
  NEL: 'North Ealing',
  NFD: 'Northfields',
  OAK: 'Oakwood',
  OST: 'Osterley',
  PRY: 'Park Royal',
  RSQ: 'Russell Square',
  SEL: 'South Ealing',
  SHR: 'South Harrow',
  SGT: 'Southgate',
  SHL: 'Sudbury Hill',
  STN: 'Sudbury Town',
  TPL: 'Turnpike Lane',
  WGN: 'Wood Green',
  BHR: 'Blackhorse Road',
  BRX: 'Brixton',
  HBY: 'Highbury and Islington',
  PIM: 'Pimlico',
  SVS: 'Seven Sisters',
  TTH: 'Tottenham Hale',
  VUX: 'Vauxhall',
  WAL: 'Walthamstow Central'
};

var stationsOnLine = {
  B: ['BST', 'CHX', 'ERB', 'ELE', 'EMB', 'HSD', 'HAW', 'KGN', 'KNT', 'KPK', 'LAM', 'MDV', 'MYB', 'NWM', 'OXC', 'PAD', 'PIC', 'QPK', 'RPK', 'SKT', 'SPK', 'WAR', 'WLO', 'WEM', 'WJN'],
  C: ['BNK', 'BDE', 'BNG', 'BDS', 'BHL', 'CYL', 'CHG', 'DEB', 'EBY', 'EAC', 'EPP', 'FLP', 'GHL', 'GRH', 'GFD', 'HAI', 'HLN', 'HOL', 'HPK', 'LAN', 'LEY', 'LYS', 'LST', 'LTN', 'MAR', 'MLE', 'NEP', 'NAC', 'NHT', 'NHG', 'OXC', 'PER', 'QWY', 'RED', 'ROD', 'RUG', 'SBC', 'SNB', 'SRP', 'SWF', 'STP', 'SFD', 'THB', 'TCR', 'WAN', 'WAC', 'WRP', 'WCT', 'WFD'],
  D: ['ACT', 'ALE', 'BKG', 'BCT', 'BEC', 'BLF', 'BWR', 'BBB', 'CST', 'CHP', 'DGE', 'DGH', 'EBY', 'ECM', 'ECT', 'EHM', 'EPY', 'ERD', 'EPK', 'EMB', 'FBY', 'GRD', 'GUN', 'HMD', 'HST', 'HCH', 'OLY', 'KEW', 'MAN', 'MLE', 'MON', 'OLY', 'PGR', 'PLW', 'PUT', 'RCP', 'RMD', 'SSQ', 'SKN', 'SFS', 'SJP', 'STB', 'STG', 'TEM', 'THL', 'TGR', 'UPM', 'UPB', 'UPY', 'UPK', 'VIC', 'WBT', 'WHM', 'WKN', 'WMS', 'WCL', 'WDN', 'WMP'],
  H: ['ALD', 'ALE', 'BST', 'BAR', 'BKG', 'BLF', 'BWR', 'BBB', 'CST', 'EHM', 'ERD', 'EMB', 'ESQ', 'FAR', 'GRD', 'GPS', 'HMS', 'HST', 'KXX', 'LST', 'MAN', 'MLE', 'MON', 'MGT', 'PAD', 'PLW', 'SSQ', 'SKN', 'SJP', 'STG', 'TEM', 'THL', 'UPK', 'VIC', 'WHM', 'WMS', 'WCL'],
  J: ['BST', 'BER', 'BDS', 'CWR', 'CWF', 'CNT', 'CPK', 'DHL', 'FRD', 'GPK', 'KIL', 'KBY', 'LON', 'NEA', 'NGW', 'QBY', 'SWK', 'SJW', 'STA', 'SFD', 'SWC', 'WLO', 'WPK', 'WHM', 'WHD', 'WMS', 'WLG'],
  M: ['ALD', 'AME', 'BST', 'BAR', 'CLF', 'CWD', 'CLW', 'CRX', 'ETE', 'ESQ', 'FAR', 'FRD', 'GPS', 'HOH', 'HDN', 'ICK', 'KXX', 'LST', 'MPK', 'MGT', 'NHR', 'NWP', 'NWD', 'NWH', 'PIN', 'RLN', 'RKY', 'RUI', 'RUM', 'UXB', 'WAT', 'WPK', 'WHR'],
  N: ['ANG', 'ARC', 'BAL', 'BNK', 'BPK', 'BOR', 'BTX', 'BUR', 'CTN', 'CHF', 'CHX', 'CPC', 'CPN', 'CPS', 'COL', 'CLW', 'EFY', 'EDG', 'ELE', 'EMB', 'EUS', 'FYC', 'GGR', 'GST', 'HMP', 'HND', 'HBT', 'HIG', 'KEN', 'KTN', 'KXX', 'LSQ', 'LON', 'MHE', 'MGT', 'MOR', 'MCR', 'OLD', 'OVL', 'SWM', 'STK', 'TBE', 'TBY', 'TCR', 'TOT', 'TPK', 'WST', 'WLO', 'WFY', 'WSP'],
  P: ['ACT', 'ALP', 'AGR', 'ARL', 'BCT', 'BOS', 'BGR', 'CRD', 'CFS', 'COV', 'ECM', 'ECT', 'ETE', 'FPK', 'GRD', 'GPK', 'HMD', 'HTX', 'HTF', 'HRV', 'HRC', 'HDN', 'HOL', 'HRD', 'HNC', 'HNE', 'HNW', 'HPC', 'ICK', 'KXX', 'KNB', 'LSQ', 'MNR', 'NEL', 'NFD', 'OAK', 'OST', 'PRY', 'PIC', 'RLN', 'RUI', 'RUM', 'RSQ', 'SEL', 'SHR', 'SKN', 'SGT', 'SHL', 'STN', 'TGR', 'TPL', 'UXB', 'WGN'],
  V: ['BHR', 'BRX', 'EUS', 'FPK', 'GPK', 'HBY', 'KXX', 'OXC', 'PIM', 'SVS', 'STK', 'TTH', 'VUX', 'VIC', 'WAL', 'WST'],
  W: ['BNK', 'WLO']
};

var linesAtStation = {
  BST: ['B', 'H', 'J', 'M'],
  CHX: ['B', 'N'],
  ERB: ['B'],
  ELE: ['B', 'N'],
  EMB: ['B', 'D', 'H', 'N'],
  HSD: ['B'],
  HAW: ['B'],
  KGN: ['B'],
  KNT: ['B'],
  KPK: ['B'],
  LAM: ['B'],
  MDV: ['B'],
  MYB: ['B'],
  NWM: ['B'],
  OXC: ['B', 'C', 'V'],
  PAD: ['B', 'H'],
  PIC: ['B', 'P'],
  QPK: ['B'],
  RPK: ['B'],
  SKT: ['B'],
  SPK: ['B'],
  WAR: ['B'],
  WLO: ['B', 'J', 'N', 'W'],
  WEM: ['B'],
  WJN: ['B'],
  BNK: ['C', 'N', 'W'],
  BDE: ['C'],
  BNG: ['C'],
  BDS: ['C', 'J'],
  BHL: ['C'],
  CYL: ['C'],
  CHG: ['C'],
  DEB: ['C'],
  EBY: ['C', 'D'],
  EAC: ['C'],
  EPP: ['C'],
  FLP: ['C'],
  GHL: ['C'],
  GRH: ['C'],
  GFD: ['C'],
  HAI: ['C'],
  HLN: ['C'],
  HOL: ['C', 'P'],
  HPK: ['C'],
  LAN: ['C'],
  LEY: ['C'],
  LYS: ['C'],
  LST: ['C', 'H', 'M'],
  LTN: ['C'],
  MAR: ['C'],
  MLE: ['C', 'D', 'H'],
  NEP: ['C'],
  NAC: ['C'],
  NHT: ['C'],
  NHG: ['C'],
  PER: ['C'],
  QWY: ['C'],
  RED: ['C'],
  ROD: ['C'],
  RUG: ['C'],
  SBC: ['C'],
  SNB: ['C'],
  SRP: ['C'],
  SWF: ['C'],
  STP: ['C'],
  SFD: ['C', 'J'],
  THB: ['C'],
  TCR: ['C', 'N'],
  WAN: ['C'],
  WAC: ['C'],
  WRP: ['C'],
  WCT: ['C'],
  WFD: ['C'],
  ACT: ['D', 'P'],
  ALE: ['D', 'H'],
  BKG: ['D', 'H'],
  BCT: ['D', 'P'],
  BEC: ['D'],
  BLF: ['D', 'H'],
  BWR: ['D', 'H'],
  BBB: ['D', 'H'],
  CST: ['D', 'H'],
  CHP: ['D'],
  DGE: ['D'],
  DGH: ['D'],
  ECM: ['D', 'P'],
  ECT: ['D', 'P'],
  EHM: ['D', 'H'],
  EPY: ['D'],
  ERD: ['D', 'H'],
  EPK: ['D'],
  FBY: ['D'],
  GRD: ['D', 'H', 'P'],
  GUN: ['D'],
  HMD: ['D', 'P'],
  HST: ['D', 'H'],
  HCH: ['D'],
  OLY: ['D'],
  KEW: ['D'],
  MAN: ['D', 'H'],
  MON: ['D', 'H'],
  PGR: ['D'],
  PLW: ['D', 'H'],
  PUT: ['D'],
  RCP: ['D'],
  RMD: ['D'],
  SSQ: ['D', 'H'],
  SKN: ['D', 'H', 'P'],
  SFS: ['D'],
  SJP: ['D', 'H'],
  STB: ['D'],
  STG: ['D', 'H'],
  TEM: ['D', 'H'],
  THL: ['D', 'H'],
  TGR: ['D', 'P'],
  UPM: ['D'],
  UPB: ['D'],
  UPY: ['D'],
  UPK: ['D', 'H'],
  VIC: ['D', 'H', 'V'],
  WBT: ['D'],
  WHM: ['D', 'H', 'J'],
  WKN: ['D'],
  WMS: ['D', 'H', 'J'],
  WCL: ['D', 'H'],
  WDN: ['D'],
  WMP: ['D'],
  ALD: ['H', 'M'],
  BAR: ['H', 'M'],
  ESQ: ['H', 'M'],
  FAR: ['H', 'M'],
  GPS: ['H', 'M'],
  HMS: ['H'],
  KXX: ['H', 'M', 'N', 'P', 'V'],
  MGT: ['H', 'M', 'N'],
  BER: ['J'],
  CWR: ['J'],
  CWF: ['J'],
  CNT: ['J'],
  CPK: ['J'],
  DHL: ['J'],
  FRD: ['J', 'M'],
  GPK: ['J', 'P', 'V'],
  KIL: ['J'],
  KBY: ['J'],
  LON: ['J', 'N'],
  NEA: ['J'],
  NGW: ['J'],
  QBY: ['J'],
  SWK: ['J'],
  SJW: ['J'],
  STA: ['J'],
  SWC: ['J'],
  WPK: ['J', 'M'],
  WHD: ['J'],
  WLG: ['J'],
  AME: ['M'],
  CLF: ['M'],
  CWD: ['M'],
  CLW: ['M', 'N'],
  CRX: ['M'],
  ETE: ['M', 'P'],
  HOH: ['M'],
  HDN: ['M', 'P'],
  ICK: ['M', 'P'],
  MPK: ['M'],
  NHR: ['M'],
  NWP: ['M'],
  NWD: ['M'],
  NWH: ['M'],
  PIN: ['M'],
  RLN: ['M', 'P'],
  RKY: ['M'],
  RUI: ['M', 'P'],
  RUM: ['M', 'P'],
  UXB: ['M', 'P'],
  WAT: ['M'],
  WHR: ['M'],
  ANG: ['N'],
  ARC: ['N'],
  BAL: ['N'],
  BPK: ['N'],
  BOR: ['N'],
  BTX: ['N'],
  BUR: ['N'],
  CTN: ['N'],
  CHF: ['N'],
  CPC: ['N'],
  CPN: ['N'],
  CPS: ['N'],
  COL: ['N'],
  EFY: ['N'],
  EDG: ['N'],
  EUS: ['N', 'V'],
  FYC: ['N'],
  GGR: ['N'],
  GST: ['N'],
  HMP: ['N'],
  HND: ['N'],
  HBT: ['N'],
  HIG: ['N'],
  KEN: ['N'],
  KTN: ['N'],
  LSQ: ['N', 'P'],
  MHE: ['N'],
  MOR: ['N'],
  MCR: ['N'],
  OLD: ['N'],
  OVL: ['N'],
  SWM: ['N'],
  STK: ['N', 'V'],
  TBE: ['N'],
  TBY: ['N'],
  TOT: ['N'],
  TPK: ['N'],
  WST: ['N', 'V'],
  WFY: ['N'],
  WSP: ['N'],
  ALP: ['P'],
  AGR: ['P'],
  ARL: ['P'],
  BOS: ['P'],
  BGR: ['P'],
  CRD: ['P'],
  CFS: ['P'],
  COV: ['P'],
  FPK: ['P', 'V'],
  HTX: ['P'],
  HTF: ['P'],
  HRV: ['P'],
  HRC: ['P'],
  HRD: ['P'],
  HNC: ['P'],
  HNE: ['P'],
  HNW: ['P'],
  HPC: ['P'],
  KNB: ['P'],
  MNR: ['P'],
  NEL: ['P'],
  NFD: ['P'],
  OAK: ['P'],
  OST: ['P'],
  PRY: ['P'],
  RSQ: ['P'],
  SEL: ['P'],
  SHR: ['P'],
  SGT: ['P'],
  SHL: ['P'],
  STN: ['P'],
  TPL: ['P'],
  WGN: ['P'],
  BHR: ['V'],
  BRX: ['V'],
  HBY: ['V'],
  PIM: ['V'],
  SVS: ['V'],
  TTH: ['V'],
  VUX: ['V'],
  WAL: ['V']
};
