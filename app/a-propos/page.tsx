import Image from "next/image";
import BlurFadeWrapper from "@/components/BlurFadeWrapper";

export default function AProposPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <BlurFadeWrapper>
          <h1 className="font-heading text-5xl text-secondary text-center mb-4">Notre histoire</h1>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-16" />
        </BlurFadeWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <BlurFadeWrapper>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image src="/images/about.jpg" alt="Notre boulanger au travail" fill className="object-cover" />
            </div>
          </BlurFadeWrapper>
          <BlurFadeWrapper delay={0.2}>
            <div>
              <h2 className="font-heading text-3xl text-secondary mb-4">Marc & Isabelle Fournier</h2>
              <p className="text-dark/75 leading-relaxed mb-4">
                Formé chez les Compagnons du Devoir, Marc Fournier a perfectionné son art du pain
                dans les meilleures boulangeries de France avant de revenir à Lyon,
                sa ville natale, pour ouvrir La Mie Dorée en 2012.
              </p>
              <p className="text-dark/75 leading-relaxed mb-4">
                Isabelle, pâtissière de formation, apporte sa touche créative avec des recettes
                qui revisitent les classiques lyonnais : tarte aux pralines roses, brioches
                au sucre perlé, gâteaux aux fruits de saison.
              </p>
              <p className="text-dark/75 leading-relaxed">
                « Le pain, c&apos;est du temps, de la patience et du respect pour la matière.
                Chaque miche raconte l&apos;histoire de ses ingrédients. »
              </p>
            </div>
          </BlurFadeWrapper>
        </div>

        <BlurFadeWrapper delay={0.3}>
          <div className="bg-white rounded-2xl p-10 shadow-card mb-16">
            <h2 className="font-heading text-3xl text-secondary mb-6 text-center">
              Notre levain, notre fierté
            </h2>
            <p className="text-dark/75 leading-relaxed mb-4">
              Notre levain naturel est né il y a plus de 12 ans. Nourri quotidiennement avec de la farine
              de blé T65 et de l&apos;eau filtrée, il donne à nos pains leur saveur unique — une pointe
              d&apos;acidité, une mie alvéolée, une croûte chantante.
            </p>
            <p className="text-dark/75 leading-relaxed mb-4">
              Contrairement aux levures industrielles, le levain naturel demande du temps :
              nos pains fermentent lentement pendant 18 à 24 heures. C&apos;est ce temps long
              qui développe les arômes et rend le pain plus digeste.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="font-heading text-3xl text-primary font-bold">12+</p>
                <p className="text-sm text-dark/60">ans de levain naturel</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl text-primary font-bold">4h</p>
                <p className="text-sm text-dark/60">début du travail chaque matin</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl text-primary font-bold">100%</p>
                <p className="text-sm text-dark/60">farines françaises</p>
              </div>
            </div>
          </div>
        </BlurFadeWrapper>

        <BlurFadeWrapper delay={0.4}>
          <div className="bg-accent/50 rounded-2xl p-10">
            <h2 className="font-heading text-3xl text-secondary mb-6 text-center">
              Nos engagements
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-xl text-secondary mb-2">Matières premières</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Farines de moulins français (Minoterie Foricher), beurre AOP Charentes-Poitou,
                  œufs fermiers plein air, chocolat Valrhona. Aucun additif, aucun conservateur.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-secondary mb-2">Circuit court</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Nos fruits viennent de producteurs de Rhône-Alpes, notre miel est récolté
                  dans les Monts du Lyonnais. Nous privilégions les filières locales et durables.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-secondary mb-2">Fait maison</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Tout est pétri, façonné et cuit sur place, chaque jour. Pas de pâtons surgelés,
                  pas de pré-mix industriels. Du vrai pain, de vraies pâtisseries.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-secondary mb-2">Anti-gaspillage</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Les invendus du jour sont redistribués à l&apos;association Les Restos du Cœur
                  de Lyon 7ème. Nous adaptons notre production pour limiter le gaspillage.
                </p>
              </div>
            </div>
          </div>
        </BlurFadeWrapper>
      </div>
    </div>
  );
}
