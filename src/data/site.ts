export const brand = {
  name: "SaraLu Doces Artesanais",
  phoneDisplay: "(61) 98622-0805",
  phoneInternational: "5561986220805",
  instagramHandle: "@saraludocesartesanais",
  instagramUrl: "https://www.instagram.com/saraludocesartesanais/",
  region: "Brasília e entorno",
  logo: "/images/brand/logo-saralu.webp",
  hero: "/images/brand/hero-doces.webp",
  saraCampaign: "/images/sara/sara-campanha.webp",
};

export const copy = {
  heroEyebrow: "FEITOS COM CARINHO, PARA VOCÊ",
  heroTitleBefore: "Seu momento ",
  heroTitleHighlight: "mais doce",
  heroTitleAfter: " começa aqui!",
  heroDescription: "Brigadeiros, brownies, bolos e delícias artesanais para transformar pequenos momentos em grandes lembranças.",
  productsIntro: "Uma seleção de gostosuras para você se apaixonar a cada mordida.",
  about: "Por trás da SaraLu está a Sara, colocando seu toque pessoal em cada encomenda. Uma marca feita para quem acredita que os pequenos prazeres tornam os dias mais especiais.",
};

export type Product = { name: string; slug: string; description: string; image: string; imageAlt: string };

export const products: Product[] = [
  { name: "Brigadeiros", slug: "brigadeiros", description: "Pequenos momentos de alegria em cada mordida.", image: "/images/products/brigadeiros.webp", imageAlt: "Brigadeiros artesanais em forminhas rosadas" },
  { name: "Brownies", slug: "brownies", description: "Para aquela pausa que merece um doce especial.", image: "/images/products/brownies.webp", imageAlt: "Pedaços de brownie sobre prato de cerâmica" },
  { name: "Palha italiana", slug: "palha-italiana", description: "Uma delícia para compartilhar ou guardar só para você.", image: "/images/products/palha-italiana.webp", imageAlt: "Pedaços de palha italiana em prato rosado" },
  { name: "Copo da felicidade", slug: "copo-da-felicidade", description: "Camadas de doçura para deixar o dia ainda melhor.", image: "/images/products/copo-da-felicidade.webp", imageAlt: "Copo da felicidade com camadas de doce e morango" },
  { name: "Bolo no pote", slug: "bolo-no-pote", description: "Um carinho em porção individual.", image: "/images/products/bolo-no-pote.webp", imageAlt: "Bolo no pote em camadas" },
  { name: "Bala baiana", slug: "bala-baiana", description: "Uma escolha encantadora para adoçar a ocasião.", image: "/images/products/bala-baiana.webp", imageAlt: "Balinhas baianas caramelizadas" },
  { name: "Coxinha de morango", slug: "coxinha-de-morango", description: "Um doce que surpreende já na primeira mordida.", image: "/images/products/coxinha-de-morango.webp", imageAlt: "Coxinhas de morango com uma unidade cortada" },
  { name: "Bolos caseiros", slug: "bolos-caseiros", description: "O aconchego de um bolo para momentos especiais.", image: "/images/products/bolos-caseiros.webp", imageAlt: "Bolo caseiro com fatia servida" },
  { name: "Fatias de bolos", slug: "fatias-de-bolos", description: "A fatia perfeita para fazer uma pausa deliciosa.", image: "/images/products/fatias-de-bolos.webp", imageAlt: "Fatias de bolo claro e de chocolate" },
];

export type MenuCategory = { name: string; price: number; flavors: string[]; featured?: boolean };

export const brigadeiroMenu: MenuCategory[] = [
  { name: "Tradicionais", price: 165, flavors: ["Brigadeiro", "Beijinho", "Paçoca", "Churros", "Leite em pó", "Casadinho"] },
  { name: "Gourmet", price: 260, featured: true, flavors: ["Ninho com Nutella", "Amêndoas", "Castanha de Caju", "Castanha do Pará", "Oreo", "Ninho com Oreo", "Ovomaltine", "Olho de Sogra", "Ameixa", "Surpresa de Uva"] },
  { name: "Especiais", price: 270, flavors: ["Pistache", "Damasco"] },
];

export const whatsappMessage = {
  general: "Olá, Sara! Conheci a SaraLu pelo site e gostaria de fazer uma encomenda.",
  product: (name: string) => `Olá, Sara! Gostaria de saber mais sobre ${name.toLowerCase()}.`,
  brigadeiro: (name: string) => `Olá, Sara! Gostaria de encomendar brigadeiros ${name.toLowerCase()}. Pode me passar mais informações?`,
};

export function whatsappUrl(message: string): string {
  return `https://wa.me/${brand.phoneInternational}?text=${encodeURIComponent(message)}`;
}

export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
