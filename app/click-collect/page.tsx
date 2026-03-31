"use client";

import { useState } from "react";
import Image from "next/image";
import BlurFadeWrapper from "@/components/BlurFadeWrapper";
import { ShoppingBag, Clock, MapPin, Check } from "lucide-react";

interface CartItem {
  name: string;
  price: number;
  qty: number;
  category: string;
}

const PRODUCTS = [
  { name: "Baguette tradition", price: 1.3, category: "Pains" },
  { name: "Pain au levain 500g", price: 4.2, category: "Pains" },
  { name: "Pain de campagne 600g", price: 4.5, category: "Pains" },
  { name: "Pain complet 500g", price: 4.8, category: "Pains" },
  { name: "Croissant pur beurre", price: 1.4, category: "Viennoiseries" },
  { name: "Pain au chocolat", price: 1.5, category: "Viennoiseries" },
  { name: "Chausson aux pommes", price: 2.1, category: "Viennoiseries" },
  { name: "Brioche tressée 400g", price: 5.9, category: "Viennoiseries" },
  { name: "Tarte pralines roses (part)", price: 3.8, category: "Pâtisseries" },
  { name: "Éclair au chocolat", price: 4.2, category: "Pâtisseries" },
  { name: "Millefeuille vanille", price: 4.5, category: "Pâtisseries" },
  { name: "Flan pâtissier (part)", price: 3.2, category: "Pâtisseries" },
];

const STEPS_INFO = [
  { icon: ShoppingBag, label: "Choisissez vos produits", desc: "Sélectionnez parmi nos pains, viennoiseries et pâtisseries" },
  { icon: Clock, label: "Choisissez votre créneau", desc: "Retrait dès le lendemain matin à partir de 7h" },
  { icon: MapPin, label: "Récupérez en boutique", desc: "23 Rue de la Guillotière — votre commande vous attend" },
];

export default function ClickCollectPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"shop" | "recap" | "confirmed">("shop");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("7h-8h");

  const addToCart = (product: (typeof PRODUCTS)[0]) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === product.name);
      if (existing) {
        return prev.map((c) =>
          c.name === product.name ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prev) =>
      prev
        .map((c) => (c.name === productName ? { ...c, qty: c.qty - 1 } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];

  if (step === "confirmed") {
    return (
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <BlurFadeWrapper>
            <div className="bg-white rounded-2xl p-10 shadow-card">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="font-heading text-4xl text-secondary mb-4">Commande confirmée !</h1>
              <p className="text-dark/70 mb-2">
                Merci {name}, votre commande de <strong>{total.toFixed(2)}€</strong> est enregistrée.
              </p>
              <p className="text-dark/70 mb-6">
                Rendez-vous demain entre <strong>{slot}</strong> au 23 Rue de la Guillotière.
              </p>
              <p className="text-sm text-dark/50">
                Nous vous enverrons un SMS de confirmation au {phone}.
              </p>
            </div>
          </BlurFadeWrapper>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <BlurFadeWrapper>
          <h1 className="font-heading text-5xl text-secondary text-center mb-2">Click & Collect</h1>
          <p className="text-center text-dark/60 mb-12">
            Commandez en ligne, récupérez en boutique sans attendre
          </p>
        </BlurFadeWrapper>

        {/* Steps */}
        <BlurFadeWrapper delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {STEPS_INFO.map((s, i) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-xs text-primary font-bold uppercase mb-1">Étape {i + 1}</p>
                <h3 className="font-heading text-lg text-secondary font-semibold mb-1">{s.label}</h3>
                <p className="text-sm text-dark/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </BlurFadeWrapper>

        {step === "shop" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product list */}
            <div className="lg:col-span-2 space-y-8">
              {categories.map((cat) => (
                <BlurFadeWrapper key={cat}>
                  <div>
                    <h2 className="font-heading text-2xl text-secondary mb-4">{cat}</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {PRODUCTS.filter((p) => p.category === cat).map((product) => {
                        const inCart = cart.find((c) => c.name === product.name);
                        return (
                          <div
                            key={product.name}
                            className="bg-white rounded-xl p-4 shadow-card border border-primary/5 flex items-center justify-between"
                          >
                            <div>
                              <h3 className="font-semibold text-secondary text-sm">{product.name}</h3>
                              <p className="text-primary font-bold">{product.price.toFixed(2)}€</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {inCart && (
                                <>
                                  <button
                                    onClick={() => removeFromCart(product.name)}
                                    className="w-8 h-8 rounded-full bg-secondary/10 text-secondary font-bold hover:bg-secondary/20 transition-colors"
                                  >
                                    −
                                  </button>
                                  <span className="font-bold text-secondary min-w-[20px] text-center">{inCart.qty}</span>
                                </>
                              )}
                              <button
                                onClick={() => addToCart(product)}
                                className="w-8 h-8 rounded-full bg-primary text-dark font-bold hover:bg-primary/80 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </BlurFadeWrapper>
              ))}
            </div>

            {/* Cart sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-card sticky top-28">
                <h3 className="font-heading text-xl text-secondary mb-4">Votre panier</h3>
                {cart.length === 0 ? (
                  <p className="text-sm text-dark/50">Votre panier est vide</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-4">
                      {cart.map((item) => (
                        <div key={item.name} className="flex justify-between text-sm">
                          <span>
                            {item.name} <span className="text-dark/40">x{item.qty}</span>
                          </span>
                          <span className="font-semibold">{(item.price * item.qty).toFixed(2)}€</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-primary/15 pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">{total.toFixed(2)}€</span>
                    </div>
                    <button
                      onClick={() => setStep("recap")}
                      className="w-full mt-4 bg-primary text-dark py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                    >
                      Valider la commande
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {step === "recap" && (
          <BlurFadeWrapper>
            <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl text-secondary mb-6">Finaliser votre commande</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span>{item.name} x{item.qty}</span>
                    <span className="font-semibold">{(item.price * item.qty).toFixed(2)}€</span>
                  </div>
                ))}
                <div className="border-t border-primary/15 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{total.toFixed(2)}€</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Votre nom</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Marc Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Créneau de retrait</label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none bg-white"
                  >
                    <option value="7h-8h">7h – 8h (tôt le matin)</option>
                    <option value="8h-9h">8h – 9h</option>
                    <option value="9h-10h">9h – 10h</option>
                    <option value="10h-11h">10h – 11h</option>
                    <option value="12h-13h">12h – 13h (midi)</option>
                    <option value="16h-17h">16h – 17h (goûter)</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep("shop")}
                  className="flex-1 border-2 border-secondary text-secondary py-3 rounded-full font-bold hover:bg-secondary/5 transition-colors"
                >
                  Modifier
                </button>
                <button
                  onClick={() => {
                    if (name && phone) setStep("confirmed");
                  }}
                  className="flex-1 bg-primary text-dark py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  Confirmer
                </button>
              </div>
              <p className="text-xs text-dark/40 text-center mt-4">
                Paiement en boutique au moment du retrait
              </p>
            </div>
          </BlurFadeWrapper>
        )}
      </div>
    </div>
  );
}
