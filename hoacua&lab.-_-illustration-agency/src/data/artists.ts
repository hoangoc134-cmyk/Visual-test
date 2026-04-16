import { Artist } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    slug: 'hoa-cua-uiux',
    name: 'Hoa Cua',
    location: 'Hanoi, Vietnam',
    specialty: 'UI/UX & Visual Design',
    bio: 'Nguyễn Ngọc Hòa (Hoa Cua) is a versatile designer specializing in UI/UX, Visual Design, and 2D Motion. Based in Hanoi, she creates impactful digital experiences through a blend of strategic thinking and aesthetic excellence.',
    thumbnailUrl: 'https://mir-s3-cdn-cf.behance.net/user/276/78589025.53b86022.jpg',
    clients: ['Techcombank', 'Vingroup', 'FPT', 'Behance Featured'],
    gallery: [
      { id: 'hc1', title: 'E-Commerce App Redesign', imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/78589025.53b86022.jpg' },
      { id: 'hc2', title: 'Financial Dashboard', imageUrl: 'https://picsum.photos/seed/uiux/1200/1600' },
      { id: 'hc3', title: 'Visual Identity System', imageUrl: 'https://picsum.photos/seed/visual/1600/1200' },
      { id: 'hc4', title: 'Motion Graphics Reel', imageUrl: 'https://picsum.photos/seed/motion/1200/1200' },
    ]
  },
  {
    id: '2',
    slug: 'travel-app-concept',
    name: 'Wanderlust Travel App',
    location: 'Hanoi, Vietnam',
    specialty: 'Mobile App Design',
    bio: 'A comprehensive travel application concept focusing on seamless user journeys and vibrant visual storytelling. This project explores modern UI trends and intuitive navigation for global travelers.',
    thumbnailUrl: 'https://picsum.photos/seed/travel/800/1000',
    clients: ['Personal Project', 'Case Study'],
    gallery: [
      { id: 't1', title: 'Onboarding Flow', imageUrl: 'https://picsum.photos/seed/onboarding/1200/1600' },
      { id: 't2', title: 'Destination Discovery', imageUrl: 'https://picsum.photos/seed/dest/1600/1200' },
    ]
  },
  {
    id: '3',
    slug: 'branding-identity-lab',
    name: 'HOACUA&LAB Branding',
    location: 'Hanoi, Vietnam',
    specialty: 'Brand Identity',
    bio: 'The visual identity for HOACUA&LAB, focusing on minimalist aesthetics and professional authority. The project includes logo design, typography systems, and digital brand guidelines.',
    thumbnailUrl: 'https://picsum.photos/seed/branding/800/1000',
    clients: ['HOACUA&LAB'],
    gallery: [
      { id: 'b1', title: 'Logo Construction', imageUrl: 'https://picsum.photos/seed/logo/1200/1600' },
      { id: 'b2', title: 'Brand Colors', imageUrl: 'https://picsum.photos/seed/colors/1600/1200' },
    ]
  },
  {
    id: '4',
    slug: 'motion-graphics-2024',
    name: '2D Motion Showcase',
    location: 'Hanoi, Vietnam',
    specialty: '2D Animation',
    bio: 'A collection of 2D motion graphics projects created for various digital campaigns. The focus is on fluid transitions and engaging character animations.',
    thumbnailUrl: 'https://picsum.photos/seed/animation/800/1000',
    clients: ['Digital Agencies', 'Startups'],
    gallery: [
      { id: 'm1', title: 'Character Animation', imageUrl: 'https://picsum.photos/seed/char/1200/1600' },
      { id: 'm2', title: 'Explainer Video', imageUrl: 'https://picsum.photos/seed/explainer/1600/1200' },
    ]
  },
  {
    id: '5',
    slug: 'oliver-bennett',
    name: 'Oliver Bennett',
    location: 'Berlin, Germany',
    specialty: 'Brutalist Graphic',
    bio: 'Oliver Bennett\'s work is a bold exploration of brutalist aesthetics and graphic power. His compositions are stark, high-contrast, and deeply impactful, often using limited color palettes to maximum effect.',
    thumbnailUrl: 'https://picsum.photos/seed/oliver/800/1000',
    clients: ['Volkswagen', 'Adidas', 'Zeit Magazin', 'Spotify'],
    gallery: [
      { id: 'o1', title: 'Concrete Jungle', imageUrl: 'https://picsum.photos/seed/concrete/1200/1600' },
      { id: 'o2', title: 'Stark Contrast', imageUrl: 'https://picsum.photos/seed/stark/1600/1200' },
      { id: 'o3', title: 'Graphic Force', imageUrl: 'https://picsum.photos/seed/force/1200/1200' },
      { id: 'o4', title: 'Berlin Pulse', imageUrl: 'https://picsum.photos/seed/berlin/1200/1600' },
    ]
  },
  {
    id: '6',
    slug: 'amara-diallo',
    name: 'Amara Diallo',
    location: 'Paris, France',
    specialty: 'Vibrant Narrative',
    bio: 'Amara Diallo creates rich, narrative-driven illustrations bursting with color and life. Her work often explores themes of community, heritage, and the beauty of everyday moments.',
    thumbnailUrl: 'https://picsum.photos/seed/amara/800/1000',
    clients: ['Google', 'Airbnb', 'The Guardian', 'Lush'],
    gallery: [
      { id: 'a1', title: 'Market Day', imageUrl: 'https://picsum.photos/seed/market/1200/1600' },
      { id: 'a2', title: 'Community Spirit', imageUrl: 'https://picsum.photos/seed/spirit/1600/1200' },
      { id: 'a3', title: 'Vibrant Life', imageUrl: 'https://picsum.photos/seed/life/1200/1200' },
      { id: 'a4', title: 'Parisian Morning', imageUrl: 'https://picsum.photos/seed/paris/1200/1600' },
    ]
  },
  {
    id: '7',
    slug: 'lucas-dubois',
    name: 'Lucas Dubois',
    location: 'Lyon, France',
    specialty: 'Abstract Expressionism',
    bio: 'Lucas Dubois uses bold colors and energetic strokes to convey emotion and movement in his abstract illustrations.',
    thumbnailUrl: 'https://picsum.photos/seed/lucas/800/1000',
    clients: ['Renault', 'Le Monde', 'Lacoste'],
    gallery: [{ id: 'l1', title: 'Emotion', imageUrl: 'https://picsum.photos/seed/emotion/1200/1600' }]
  },
  {
    id: '8',
    slug: 'elena-petrova',
    name: 'Elena Petrova',
    location: 'Moscow, Russia',
    specialty: 'Folk Illustration',
    bio: 'Elena Petrova combines traditional Slavic folk art with modern digital techniques to create whimsical and detailed narratives.',
    thumbnailUrl: 'https://picsum.photos/seed/elena/800/1000',
    clients: ['Yandex', 'Aeroflot', 'Russian Post'],
    gallery: [{ id: 'p1', title: 'Folk Tale', imageUrl: 'https://picsum.photos/seed/folk/1200/1600' }]
  },
  {
    id: '9',
    slug: 'chen-wei',
    name: 'Chen Wei',
    location: 'Shanghai, China',
    specialty: 'Cyberpunk Art',
    bio: 'Chen Wei specializes in futuristic, neon-drenched cyberpunk illustrations that capture the high-tech, low-life aesthetic.',
    thumbnailUrl: 'https://picsum.photos/seed/chen/800/1000',
    clients: ['Tencent', 'Huawei', 'DJI'],
    gallery: [{ id: 'c1', title: 'Neon City', imageUrl: 'https://picsum.photos/seed/neon/1200/1600' }]
  },
  {
    id: '10',
    slug: 'isabella-garcia',
    name: 'Isabella Garcia',
    location: 'Madrid, Spain',
    specialty: 'Botanical Illustration',
    bio: 'Isabella Garcia creates intricate and scientifically accurate botanical illustrations with a modern artistic twist.',
    thumbnailUrl: 'https://picsum.photos/seed/isabella/800/1000',
    clients: ['Zara', 'Loewe', 'El País'],
    gallery: [{ id: 'ig1', title: 'Flora', imageUrl: 'https://picsum.photos/seed/flora/1200/1600' }]
  },
  {
    id: '11',
    slug: 'liam-wilson',
    name: 'Liam Wilson',
    location: 'Sydney, Australia',
    specialty: 'Surf Culture Art',
    bio: 'Liam Wilson\'s art is deeply inspired by the ocean and the vibrant surf culture of Australia\'s coastlines.',
    thumbnailUrl: 'https://picsum.photos/seed/liam/800/1000',
    clients: ['Quiksilver', 'Billabong', 'Rip Curl'],
    gallery: [{ id: 'lw1', title: 'The Wave', imageUrl: 'https://picsum.photos/seed/wave/1200/1600' }]
  },
  {
    id: '12',
    slug: 'zara-ahmed',
    name: 'Zara Ahmed',
    location: 'Dubai, UAE',
    specialty: 'Islamic Geometric Art',
    bio: 'Zara Ahmed explores the mathematical beauty of Islamic geometric patterns through contemporary digital illustration.',
    thumbnailUrl: 'https://picsum.photos/seed/zara/800/1000',
    clients: ['Etihad', 'Emirates', 'Dubai Tourism'],
    gallery: [{ id: 'za1', title: 'Pattern', imageUrl: 'https://picsum.photos/seed/pattern/1200/1600' }]
  },
  {
    id: '13',
    slug: 'noah-smith',
    name: 'Noah Smith',
    location: 'Toronto, Canada',
    specialty: 'Minimalist Portraiture',
    bio: 'Noah Smith captures the essence of his subjects through minimalist lines and a carefully curated color palette.',
    thumbnailUrl: 'https://picsum.photos/seed/noah/800/1000',
    clients: ['Shopify', 'Lululemon', 'The Globe and Mail'],
    gallery: [{ id: 'ns1', title: 'Portrait', imageUrl: 'https://picsum.photos/seed/portrait/1200/1600' }]
  },
  {
    id: '14',
    slug: 'mia-andersen',
    name: 'Mia Andersen',
    location: 'Copenhagen, Denmark',
    specialty: 'Scandinavian Design',
    bio: 'Mia Andersen\'s work embodies the clean lines and functional beauty of Scandinavian design principles.',
    thumbnailUrl: 'https://picsum.photos/seed/mia/800/1000',
    clients: ['IKEA', 'Lego', 'Bang & Olufsen'],
    gallery: [{ id: 'ma1', title: 'Hygge', imageUrl: 'https://picsum.photos/seed/hygge/1200/1600' }]
  },
  {
    id: '15',
    slug: 'ethan-brown',
    name: 'Ethan Brown',
    location: 'Austin, USA',
    specialty: 'Vintage Poster Art',
    bio: 'Ethan Brown creates modern illustrations with a nostalgic, vintage poster aesthetic, often featuring Americana themes.',
    thumbnailUrl: 'https://picsum.photos/seed/ethan/800/1000',
    clients: ['Tesla', 'Whole Foods', 'SXSW'],
    gallery: [{ id: 'eb1', title: 'Vintage', imageUrl: 'https://picsum.photos/seed/vintage/1200/1600' }]
  },
  {
    id: '16',
    slug: 'ava-jones',
    name: 'Ava Jones',
    location: 'London, UK',
    specialty: 'Whimsical Children\'s Art',
    bio: 'Ava Jones creates magical and whimsical illustrations that transport viewers into the imaginative worlds of children\'s stories.',
    thumbnailUrl: 'https://picsum.photos/seed/ava/800/1000',
    clients: ['BBC', 'Walker Books', 'Waterstones'],
    gallery: [{ id: 'aj1', title: 'Magic', imageUrl: 'https://picsum.photos/seed/magic/1200/1600' }]
  }
];
