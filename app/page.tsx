import Image from "next/image";
import Link from "next/link";
import BlurFadeWrapper from "@/components/BlurFadeWrapper";
import BrandLogosCarousel from "@/components/BrandLogosCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MapSection from "@/components/MapSection";
import { Wheat, Croissant, CakeSlice, ShoppingBag } from "lucide-react";

import brands from "../../content/brands.json";
import reviews from "../../content/reviews.json";
import address from "../../content/address.json";

const SERVICES = [
  {
    icon: Wheat,
    title: "Pains artisanaux",
    desc: "Pain au levain naturel, campagne, seigle, complet — pétrissage lent et cuisson au four à sole. Des farines françaises sélectionnées avec soin.",
  },
  {
    icon: Croissant,
    title: "Viennoiseries",
    desc: "Croissants pur beurre, pains au chocolat, brioches, chaussons aux pommes — feuilletage maison, beurre AOP Charentes-Poitou.",
  },
  {
    icon: CakeSlice,
    title: "Pâtisseries fines",
    desc: "Tartes aux pralines roses, éclairs, millefeuilles, entremets — des créations gourmandes qui célèbrent le terroir lyonnais.",
  },
  {
    icon: ShoppingBag,
    title: "Click & Collect",
    desc: "Commandez en ligne et récupérez vos produits en boutique. Pratique, rapide, sans attente. Disponible 7j/7.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="La Mie Dorée — boulangerie artisanale"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <BlurFadeWrapper>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Boulangerie Pâtisserie · Lyon 7ème
            </p>
          </BlurFadeWrapper>
          <BlurFadeWrapper delay={0.15}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
              La Mie Dorée
            </h1>
          </BlurFadeWrapper>
          <BlurFadeWrapper delay={0.3}>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              L&apos;artisan boulanger de la Guillotière depuis 2012
            </p>
          </BlurFadeWrapper>
          <BlurFadeWrapper delay={0.45}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/click-collect"
                className="bg-primary text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors shadow-glow"
              >
                Commander en ligne
              </Link>
              <Link
                href="/produits"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Nos produits
              </Link>
            </div>
          </BlurFadeWrapper>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <BrandLogosCarousel brands={brands} />

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <BlurFadeWrapper>
            <h2 className="font-heading text-4xl text-secondary text-center mb-4">
              Notre savoir-faire
            </h2>
            <p className="text-center text-dark/60 max-w-2xl mx-auto mb-14">
              Des matières premières nobles, un pétrissage patient, une cuisson maîtrisée — chaque produit est une promesse de qualité.
            </p>
          </BlurFadeWrapper>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <BlurFadeWrapper key={s.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-primary/10">
                  <s.icon className="w-10 h-10 text-primary mb-4 group-hover:text-secondary transition-colors" />
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-dark/70 leading-relaxed">{s.desc}</p>
                </div>
              </BlurFadeWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <BlurFadeWrapper>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/images/about.jpg"
                alt="Notre boulanger au travail"
                fill
                className="object-cover"
              />
            </div>
          </BlurFadeWrapper>
          <BlurFadeWrapper delay={0.2}>
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                Notre histoire
              </p>
              <h2 className="font-heading text-4xl text-secondary mb-4">
                Le goût du pain véritable
              </h2>
              <p className="text-dark/75 leading-relaxed mb-4">
                Fondée en 2012 par Marc et Isabelle Fournier, La Mie Dorée perpétue
                la tradition du pain au levain naturel. Chaque matin dès 4h, notre équipe
                pétrit, façonne et cuit avec passion des pains qui ont le goût de l&apos;authentique.
              </p>
              <p className="text-dark/75 leading-relaxed mb-6">
                Nos farines viennent de moulins français, notre beurre est AOP Charentes-Poitou,
                nos fruits sont cueillis en Rhône-Alpes. Ici, rien n&apos;est industriel, tout est fait
                à la main, avec le temps qu&apos;il faut.
              </p>
              <Link
                href="/a-propos"
                className="text-secondary font-semibold hover:text-primary transition-colors"
              >
                Découvrir notre histoire →
              </Link>
            </div>
          </BlurFadeWrapper>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <BlurFadeWrapper>
            <h2 className="font-heading text-4xl text-secondary text-center mb-12">
              La confiance au quotidien
            </h2>
          </BlurFadeWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/confiance-1.jpg", alt: "Relation client chaleureuse" },
              { src: "/images/confiance-2.jpg", alt: "Savoir-faire artisanal" },
              { src: "/images/confiance-3.jpg", alt: "Convivialité du quartier" },
            ].map((img, i) => (
              <BlurFadeWrapper key={img.src} delay={i * 0.15}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </BlurFadeWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <TestimonialsCarousel reviews={reviews} />

      {/* LYON */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <BlurFadeWrapper>
            <h2 className="font-heading text-4xl text-secondary text-center mb-4">
              Au cœur du 7ème
            </h2>
            <p className="text-center text-dark/60 max-w-2xl mx-auto mb-12">
              Rue de la Guillotière, dans le quartier le plus vivant et cosmopolite de Lyon — votre boulangerie de quartier.
            </p>
          </BlurFadeWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/lyon-1.jpg", alt: "Quais du Rhône" },
              { src: "/images/lyon-2.jpg", alt: "La Guillotière" },
              { src: "/images/lyon-3.jpg", alt: "Parc de la Tête d'Or" },
            ].map((img, i) => (
              <BlurFadeWrapper key={img.src} delay={i * 0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </BlurFadeWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <MapSection
        data={{
          lat: address.lat,
          lng: address.lng,
          address: address.address,
          name: address.name,
        }}
      />

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-secondary text-white text-center">
        <BlurFadeWrapper>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Envie de pain frais demain matin ?
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
            Commandez ce soir en Click & Collect et récupérez vos produits dès l&apos;ouverture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/click-collect"
              className="bg-primary text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Commander maintenant
            </Link>
            <a
              href="tel:0478582210"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              04 78 58 22 10
            </a>
          </div>
        </BlurFadeWrapper>
      </section>
    </>
  );
}
