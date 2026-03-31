import Link from "next/link";
import LsdevFooterCredit from "./LsdevFooterCredit";

const LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos produits", href: "/produits" },
  { label: "Click & Collect", href: "/click-collect" },
  { label: "Notre histoire", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-4">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-3 text-primary">La Mie Dorée</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Boulangerie pâtisserie artisanale au cœur de la Guillotière.
            Pains au levain, viennoiseries et pâtisseries fines depuis 2012.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary/80">Navigation</h4>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-primary text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary/80">Contact</h4>
          <div className="space-y-2 text-sm text-white/70">
            <p>23 Rue de la Guillotière, 69007 Lyon</p>
            <p>Tél : 04 78 58 22 10</p>
            <p>contact@lamiedoree-lyon.fr</p>
            <p className="mt-3">Lun-Sam : 6h30-19h30</p>
            <p>Dim : 7h-13h</p>
          </div>
        </div>
      </div>
      <LsdevFooterCredit />
    </footer>
  );
}
