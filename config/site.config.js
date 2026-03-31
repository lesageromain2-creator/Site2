/**
 * Configuration du site - Friperie / Vente de vêtements (Site 2)
 * Style artistique et moderne - interface dédiée commerçants
 */
export const siteConfig = {
  siteId: 2,
  name: "Récup",
  type: "friperie",
  slogan: "Vêtements d'occasion, style unique",

  theme: {
    colors: {
      primary: "#C75B39",
      secondary: "#D4A853",
      accent: "#E8B923",
      background: "#0A0A0A",
      surface: "#141414",
      text: "#F5F0E8",
      textMuted: "#A39E94",
    },
    fonts: {
      heading: "Syne",
      body: "DM Sans",
      display: "Syne",
    },
  },

  features: {
    booking: false,
    ecommerce: true,
    events: false,
    gallery: true,
    chat: true,
    newsletter: true,
    menu: false,
  },

  business: {
    address: "22 Rue de la République, 69002 Lyon",
    city: "Lyon",
    postalCode: "69002",
    country: "France",
    phone: "+33 4 78 00 XX XX",
    email: "hello@recup-shop.fr",
    hours: {
      lundi: "Fermé",
      mardi: "11:00-19:00",
      mercredi: "11:00-19:00",
      jeudi: "11:00-19:00",
      vendredi: "11:00-19:30",
      samedi: "10:00-19:30",
      dimanche: "14:00-18:00",
    },
  },
};

export default siteConfig;
