import Image from "next/image";
import Link from "next/link";
import BlurFadeWrapper from "@/components/BlurFadeWrapper";

const CATEGORIES = {
  pains: {
    title: "Nos Pains",
    items: [
      { name: "Pain au levain", desc: "Farine T65, levain naturel, cuisson longue au four à sole", price: "4,20€", weight: "500g" },
      { name: "Baguette tradition", desc: "Farine de tradition française, croûte croustillante", price: "1,30€", weight: "250g" },
      { name: "Pain de campagne", desc: "Mélange de farines de blé et de seigle, mie dense et savoureuse", price: "4,50€", weight: "600g" },
      { name: "Pain complet", desc: "Farine complète T150, riche en fibres et en goût", price: "4,80€", weight: "500g" },
      { name: "Pain aux noix", desc: "Pain de campagne agrémenté de cerneaux de noix du Dauphiné", price: "5,50€", weight: "500g" },
      { name: "Fougasse aux olives", desc: "Huile d'olive, olives noires de Nyons, herbes de Provence", price: "3,90€", weight: "300g" },
    ],
  },
  viennoiseries: {
    title: "Viennoiseries",
    items: [
      { name: "Croissant pur beurre", desc: "Beurre AOP Charentes-Poitou, feuilletage maison 48h", price: "1,40€", weight: "" },
      { name: "Pain au chocolat", desc: "Deux barres de chocolat Valrhona, pâte feuilletée levée", price: "1,50€", weight: "" },
      { name: "Chausson aux pommes", desc: "Compote maison, pommes Granny Smith, pâte feuilletée", price: "2,10€", weight: "" },
      { name: "Brioche tressée", desc: "Beurre, œufs fermiers, sucre perlé", price: "5,90€", weight: "400g" },
      { name: "Pain aux raisins", desc: "Crème pâtissière maison, raisins secs macérés au rhum", price: "1,80€", weight: "" },
      { name: "Croissant aux amandes", desc: "Garni de crème d'amande, amandes effilées torréfiées", price: "2,30€", weight: "" },
    ],
  },
  patisseries: {
    title: "Pâtisseries",
    items: [
      { name: "Tarte aux pralines roses", desc: "Pralines de Saint-Genix, pâte sablée maison", price: "3,80€", weight: "part" },
      { name: "Éclair au chocolat", desc: "Pâte à choux, crème pâtissière au chocolat noir 70%", price: "4,20€", weight: "" },
      { name: "Millefeuille vanille", desc: "Feuilletage caramélisé, crème diplomate à la vanille Bourbon", price: "4,50€", weight: "" },
      { name: "Tarte au citron meringuée", desc: "Crème au citron de Menton, meringue italienne torchée", price: "4,00€", weight: "part" },
      { name: "Paris-Brest", desc: "Crème pralinée aux noisettes du Piémont, pâte à choux", price: "4,80€", weight: "" },
      { name: "Flan pâtissier", desc: "Recette traditionnelle, vanille Bourbon, pâte brisée", price: "3,20€", weight: "part" },
    ],
  },
};

export default function ProduitsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <BlurFadeWrapper>
          <h1 className="font-heading text-5xl text-secondary text-center mb-2">Nos Produits</h1>
          <p className="text-center text-dark/60 mb-4">
            Tout est fait maison, chaque jour, à partir de matières premières sélectionnées
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-16" />
        </BlurFadeWrapper>

        {/* Product images */}
        <BlurFadeWrapper>
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              { src: "/images/service-1.jpg", alt: "Pains artisanaux" },
              { src: "/images/service-2.jpg", alt: "Viennoiseries" },
              { src: "/images/service-3.jpg", alt: "Pâtisseries" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </BlurFadeWrapper>

        {(["pains", "viennoiseries", "patisseries"] as const).map((cat, ci) => (
          <BlurFadeWrapper key={cat} delay={ci * 0.15}>
            <div className="mb-16">
              <h2 className="font-heading text-3xl text-secondary mb-8 text-center">
                {CATEGORIES[cat].title}
              </h2>
              <div className="space-y-5">
                {CATEGORIES[cat].items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline gap-2 group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-secondary font-semibold group-hover:text-primary transition-colors">
                        {item.name}
                        {item.weight && (
                          <span className="text-sm text-dark/40 font-body ml-2">({item.weight})</span>
                        )}
                      </h3>
                      <p className="text-sm text-dark/60">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0 border-b border-dotted border-primary/30 flex-1 mx-2 min-w-[40px]" />
                    <span className="font-heading text-lg text-primary font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFadeWrapper>
        ))}

        <BlurFadeWrapper delay={0.5}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-2xl text-secondary mb-2">Commandez en Click & Collect</h3>
            <p className="text-dark/60 mb-6">
              Commandez vos produits préférés en ligne et récupérez-les en boutique sans attendre.
            </p>
            <Link
              href="/click-collect"
              className="inline-block bg-primary text-dark px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Commander maintenant
            </Link>
          </div>
        </BlurFadeWrapper>
      </div>
    </div>
  );
}
