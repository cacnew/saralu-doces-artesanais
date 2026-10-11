import { MessageCircle } from "lucide-react";
import { whatsappMessage, whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer" aria-label="Fazer encomenda pelo WhatsApp"><MessageCircle size={25} aria-hidden="true" /></a>;
}
