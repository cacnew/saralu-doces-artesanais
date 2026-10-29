import Image from "next/image";
import { ArrowRight, ArrowUpRight, Camera, Check, Heart, MapPin, MessageCircle, PackageCheck, ShoppingBag, Sparkles } from "lucide-react";
import { asset, brand, brigadeiroMenu, copy, products, whatsappMessage, whatsappUrl, type MenuCategory, type Product } from "@/data/site";
import { CurrentYear } from "@/components/CurrentYear";

function HeartMark({ className = "" }: { className?: string }) {
  return <Heart className={className} size={19} strokeWidth={1.5} aria-hidden="true" />;
}

export function Hero() {
  return <section id="inicio" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><HeartMark /> {copy.heroEyebrow}</div>
        <h1>{copy.heroTitleBefore}<em>{copy.heroTitleHighlight}</em>{copy.heroTitleAfter}</h1>
        <p className="hero-description">{copy.heroDescription}</p>
        <div className="hero-actions">
          <a className="button button-primary button-large" href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer">Fazer minha encomenda <ArrowRight size={20} aria-hidden="true" /></a>
          <a className="text-link" href="#doces">Conhecer nossos doces <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="hero-notes"><span><HeartMark /> Produção artesanal</span><span><Sparkles size={17} aria-hidden="true" /> Feito com carinho</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-wrap"><Image src={asset(brand.hero)} alt="Brigadeiros, brownies e morangos em uma mesa delicada" fill priority sizes="(max-width: 760px) 100vw, 50vw" className="hero-photo" /></div>
        <div className="hero-seal"><HeartMark /><span>Um docinho pode<br />mudar o seu dia</span></div>
        <span className="hero-sparkle hero-sparkle-one">✧</span><span className="hero-sparkle hero-sparkle-two">✦</span>
      </div>
    </div>
    <svg className="section-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 28C247 85 420 6 719 32c302 27 469 37 721-10v48H0Z" fill="var(--color-ivory)" /></svg>
  </section>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card" data-reveal data-reveal-order={products.indexOf(product) % 3}>
    <div className="product-image-wrap"><Image src={asset(product.image)} alt={product.imageAlt} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw" className="product-image" /></div>
    <div className="product-card-body"><h3>{product.name}</h3><p>{product.description}</p>
      <a href={whatsappUrl(whatsappMessage.product(product.name))} target="_blank" rel="noopener noreferrer" aria-label={`Perguntar sobre ${product.name} pelo WhatsApp`}>Quero experimentar <ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
  </article>;
}

export function ProductGallery() {
  return <section id="doces" className="section products-section"><div className="container">
    <div className="section-heading center" data-reveal><span className="eyebrow">NOSSAS DELÍCIAS</span><h2>Escolha seu doce favorito <span className="heading-heart">♡</span></h2><p>{copy.productsIntro}</p></div>
    <div className="product-grid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div>
    <p className="photo-note">Imagens ilustrativas. Consulte as opções disponíveis para sua encomenda.</p>
  </div></section>;
}

function PriceCard({ category }: { category: MenuCategory }) {
  return <article className={`price-card${category.featured ? " price-card-featured" : ""}`} data-reveal data-reveal-order={brigadeiroMenu.indexOf(category)}>
    {category.featured && <span className="price-ribbon">Queridinhos da SaraLu</span>}
    <div className="price-card-top"><span className="price-ornament">✧</span><h3>{category.name}</h3><div className="price"><span>R$</span> {category.price.toFixed(2).replace(".", ",")}</div><p>o cento de brigadeiros</p></div>
    <ul>{category.flavors.map(flavor => <li key={flavor}><Check size={15} aria-hidden="true" /> {flavor}</li>)}</ul>
    <a className={`button ${category.featured ? "button-primary" : "button-outline"}`} href={whatsappUrl(whatsappMessage.brigadeiro(category.name))} target="_blank" rel="noopener noreferrer">Encomendar {category.name.toLowerCase()} <ArrowUpRight size={17} aria-hidden="true" /></a>
  </article>;
}

export function BrigadeiroMenu() {
  return <section id="cardapio" className="section menu-section"><div className="container">
    <div className="section-heading center" data-reveal><span className="eyebrow">CARDÁPIO DE BRIGADEIROS</span><h2>Brigadeiros para <em>adoçar sua festa</em></h2><p>Escolha os sabores que combinam com o seu momento.</p></div>
    <div className="price-grid">{brigadeiroMenu.map(category => <PriceCard key={category.name} category={category} />)}</div>
    <div className="menu-notes"><span><HeartMark /> Até 4 opções de sabores por cento.</span><span>Outros sabores gourmet: consulte a disponibilidade.</span></div>
  </div></section>;
}

export function AboutSara() {
  return <section id="sobre" className="section about-section"><div className="container about-grid">
    <div className="about-portrait" data-reveal><Image src={asset(brand.saraCampaign)} alt="Arte de campanha da SaraLu mostrando o preparo de brigadeiros" fill sizes="(max-width: 650px) 100vw, 50vw" className="about-campaign-image" /><span className="about-photo-label">Feitos com carinho ♡</span></div>
    <div className="about-copy" data-reveal data-reveal-order="1"><span className="eyebrow">PRAZER, SARA ♡</span><h2>Doces feitos <em>com carinho</em></h2><p>{copy.about}</p><div className="about-line"><HeartMark /><span>Cada encomenda começa com uma conversa.</span></div><a className="button button-outline" href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">Conheça nosso Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></div>
  </div></section>;
}

const orderSteps = [
  { title: "Escolha seus doces", body: "Explore nossos produtos e encontre seus favoritos.", icon: ShoppingBag },
  { title: "Fale com a Sara", body: "Envie seu pedido pelo WhatsApp.", icon: MessageCircle },
  { title: "Confirme a encomenda", body: "Para confirmar, é necessário o pagamento antecipado de 50% do valor.", icon: Heart },
  { title: "Receba ou retire", body: "Consulte a entrega e o valor conforme a localidade, ou combine a retirada.", icon: PackageCheck },
];

export function HowToOrder() {
  return <section id="encomendar" className="section order-section"><div className="container">
    <div className="section-heading center" data-reveal><span className="eyebrow">SIMPLES ASSIM</span><h2>Como encomendar <span className="heading-heart">♡</span></h2><p>Do primeiro desejo à hora de aproveitar: a Sara te ajuda em cada passo.</p></div>
    <div className="steps-grid">{orderSteps.map((step, i) => <div className="step" key={step.title} data-reveal data-reveal-order={i}><div className="step-icon"><step.icon size={27} strokeWidth={1.5} aria-hidden="true" /></div><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
    <div className="delivery-note"><MapPin size={20} aria-hidden="true" /><span>Delivery em {brand.region}. Consulte disponibilidade e taxa para seu endereço.</span></div>
  </div></section>;
}

const galleryImages = [
  { src: "/images/gallery/brigadeiros-saralu.webp", alt: "Arte SaraLu com brigadeiros" },
  { src: "/images/gallery/palha-italiana-saralu.webp", alt: "Arte SaraLu com palha italiana" },
  { src: "/images/gallery/bolos-saralu.webp", alt: "Arte SaraLu com bolo caseiro" },
  { src: "/images/gallery/copo-saralu.webp", alt: "Arte SaraLu com copo da felicidade" },
];

export function InstagramGallery() {
  return <section id="instagram" className="section instagram-section"><div className="container">
    <div className="instagram-top" data-reveal><div><span className="eyebrow">ACOMPANHE A SARALU</span><h2>Um pouquinho de doçura<br /><em>no seu feed ♡</em></h2><p>Acompanhe nossas novidades, inspirações e delícias.</p></div><a className="button button-outline" href={brand.instagramUrl} target="_blank" rel="noopener noreferrer"><Camera size={20} aria-hidden="true" /> Seguir no Instagram <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    <div className="instagram-grid">{galleryImages.map((image, i) => <a key={image.src} href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir o Instagram da SaraLu: ${image.alt}`} data-reveal data-reveal-order={i}><Image src={asset(image.src)} alt={image.alt} fill sizes="(max-width: 600px) 50vw, 25vw" /></a>)}</div>
    <a className="instagram-handle" href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">{brand.instagramHandle} <ArrowUpRight size={16} aria-hidden="true" /></a>
  </div></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><div className="container final-cta-inner" data-reveal><span className="final-heart final-heart-one">♡</span><span className="final-heart final-heart-two">♡</span><span className="eyebrow">UM CONVITE ESPECIAL</span><h2>Vai um docinho aí?</h2><p>Escolha seus favoritos e converse com a Sara para adoçar seu próximo momento.</p><a className="button button-light button-large" href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer">Encomendar pelo WhatsApp <ArrowUpRight size={19} aria-hidden="true" /></a></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Image src={asset(brand.logo)} alt="SaraLu Doces Artesanais" width={116} height={116} /><p>Feitos com carinho, para você.</p></div><div><h3>Explore</h3><nav aria-label="Navegação do rodapé"><a href="#inicio">Início</a><a href="#doces">Nossos doces</a><a href="#cardapio">Cardápio</a><a href="#sobre">Sobre a Sara</a></nav></div><div><h3>Vamos conversar?</h3><a href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer">WhatsApp {brand.phoneDisplay}</a><a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram {brand.instagramHandle}</a><span>{brand.region} · Delivery sob consulta</span></div></div><div className="container footer-bottom"><span>© <CurrentYear /> SaraLu Doces Artesanais. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>;
}
