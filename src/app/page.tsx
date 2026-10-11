import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AboutSara, BrigadeiroMenu, FinalCTA, Footer, Hero, HowToOrder, InstagramGallery, ProductGallery } from "@/components/Sections";

export default function Home() {
  return <><Header /><main><Hero /><ProductGallery /><BrigadeiroMenu /><AboutSara /><HowToOrder /><InstagramGallery /><FinalCTA /></main><Footer /><WhatsAppButton /></>;
}
