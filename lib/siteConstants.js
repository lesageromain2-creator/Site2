/**
 * Constantes du site friperie (Site 2)
 */
import { siteConfig } from '../config/site.config';

export const DEFAULT_SITE = {
  name: siteConfig.name,
  tagline: siteConfig.slogan,
  address: siteConfig.business.address,
  city: siteConfig.business.city,
  postalCode: siteConfig.business.postalCode,
  phone: siteConfig.business.phone,
  email: siteConfig.business.email,
};

export const HERO_SELLING_POINTS = [
  { title: 'Pièces uniques', desc: 'Chaque vêtement est une trouvaille' },
  { title: 'Prix doux', desc: 'Mode accessible et responsable' },
  { title: 'Mode durable', desc: 'Réemploi et seconde vie' },
  { title: 'Sélection soignée', desc: 'Vintage et contemporain' },
];

export const NAV_ITEMS = [
  { href: '/', label: 'Accueil' },
  { href: '/products', label: 'Vêtements' },
  { href: '/galerie', label: 'Lookbook' },
  { href: '/contact', label: 'Contact' },
  { href: '/chat', label: 'Nous écrire' },
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Tout', slug: 'all' },
  { id: 'vestes', label: 'Vestes & Manteaux', slug: 'vestes' },
  { id: 'hauts', label: 'Hauts', slug: 'hauts' },
  { id: 'pantalons', label: 'Pantalons', slug: 'pantalons' },
  { id: 'robes', label: 'Robes & Jupes', slug: 'robes' },
  { id: 'accessoires', label: 'Accessoires', slug: 'accessoires' },
];
