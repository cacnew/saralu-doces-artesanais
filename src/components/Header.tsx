"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { asset, brand, whatsappMessage, whatsappUrl } from "@/data/site";

const links = [
  { href: "#inicio", text: "Início" },
  { href: "#doces", text: "Nossos doces" },
  { href: "#cardapio", text: "Cardápio" },
  { href: "#sobre", text: "Sobre a Sara" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="container header-inner">
      <a className="header-logo" href="#inicio" aria-label="SaraLu Doces Artesanais, voltar ao início" onClick={() => setOpen(false)}>
        <Image src={asset(brand.logo)} alt="SaraLu Doces Artesanais" width={74} height={74} priority />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(link => <a key={link.href} href={link.href}>{link.text}</a>)}
      </nav>
      <a className="button button-primary header-cta" href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer">Encomendar <ArrowUpRight size={18} aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={26} /> : <Menu size={26} />}</button>
    </div>
    <nav id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Navegação móvel" inert={!open}>
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.text}</a>)}
      <a href={whatsappUrl(whatsappMessage.general)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Encomendar pelo WhatsApp</a>
    </nav>
  </header>;
}
