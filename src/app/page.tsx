import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AboutSara, BrigadeiroMenu, FinalCTA, Footer, Hero, HowToOrder, InstagramGallery, ProductGallery } from "@/components/Sections";

export default function Home() {
  return <><ScrollReveal /><Header /><main><Hero /><ProductGallery /><BrigadeiroMenu /><AboutSara /><HowToOrder /><InstagramGallery /><FinalCTA /></main><Footer /><WhatsAppButton /></>;
}
