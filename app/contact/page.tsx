"use client";

import { useState } from "react";
import BlurFadeWrapper from "@/components/BlurFadeWrapper";
import MapSection from "@/components/MapSection";
import { api } from "@/lib/api";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import address from "@/content/address.json";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.contact(form);
      setSent(true);
    } catch {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
    setLoading(false);
  };

  return (
    <div className="pt-28 pb-0">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <BlurFadeWrapper>
          <h1 className="font-heading text-5xl text-secondary text-center mb-2">Contact</h1>
          <p className="text-center text-dark/60 mb-16">
            Une question, une commande spéciale ? Écrivez-nous.
          </p>
        </BlurFadeWrapper>

        <div className="grid lg:grid-cols-2 gap-12">
          <BlurFadeWrapper>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary">Adresse</h3>
                  <p className="text-dark/70">{address.address}</p>
                  <p className="text-sm text-dark/50">Métro B — Jean Macé · Tram T1 — Guillotière</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary">Téléphone</h3>
                  <a href="tel:0478582210" className="text-dark/70 hover:text-primary transition-colors">
                    {address.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <a href={`mailto:${address.email}`} className="text-dark/70 hover:text-primary transition-colors">
                    {address.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary">Horaires</h3>
                  <div className="text-dark/70 text-sm space-y-1">
                    <p>Lundi – Samedi : 6h30 – 19h30</p>
                    <p>Dimanche : 7h – 13h</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6 mt-4">
                <h3 className="font-heading text-lg text-secondary mb-2">Commandes spéciales</h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  Gâteaux d&apos;anniversaire, pièces montées, commandes pour événements —
                  contactez-nous au moins 48h à l&apos;avance. Nous réalisons vos commandes sur mesure.
                </p>
              </div>
            </div>
          </BlurFadeWrapper>

          <BlurFadeWrapper delay={0.2}>
            {sent ? (
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h2 className="font-heading text-2xl text-secondary mb-2">Message envoyé</h2>
                <p className="text-dark/70">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/15 focus:ring-2 focus:ring-primary outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-white py-4 rounded-full font-bold hover:bg-secondary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? "Envoi..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </BlurFadeWrapper>
        </div>
      </div>

      <MapSection
        data={{
          lat: address.lat,
          lng: address.lng,
          address: address.address,
          name: address.name,
        }}
      />
    </div>
  );
}
