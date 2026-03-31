/**
 * Données catalogue friperie - vêtements d'occasion
 */
export const productsByCategory = {
  vestes: [
    { id: 1, name: 'Veste en jean vintage', price: 28, size: 'M', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', category: 'vestes', condition: 'Très bon état' },
    { id: 2, name: 'Blouson cuir marron', price: 45, size: 'L', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600', category: 'vestes', condition: 'Bon état' },
    { id: 3, name: 'Trench beige années 90', price: 38, size: 'S', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600', category: 'vestes', condition: 'Très bon état' },
    { id: 4, name: 'Veste velours côtelé', price: 32, size: 'M', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600', category: 'vestes', condition: 'Comme neuf' },
  ],
  hauts: [
    { id: 10, name: 'Chemise oversize à carreaux', price: 18, size: 'L', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600', category: 'hauts', condition: 'Très bon état' },
    { id: 11, name: 'Pull cachemire gris', price: 35, size: 'M', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600', category: 'hauts', condition: 'Bon état' },
    { id: 12, name: 'T-shirt band vintage', price: 12, size: 'M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', category: 'hauts', condition: 'Très bon état' },
    { id: 13, name: 'Sweat lettering années 80', price: 22, size: 'L', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600', category: 'hauts', condition: 'Bon état' },
    { id: 14, name: 'Blouse soie imprimée', price: 26, size: 'S', image: 'https://images.unsplash.com/photo-1564257631407-2f66b0d893c6?w=600', category: 'hauts', condition: 'Comme neuf' },
  ],
  pantalons: [
    { id: 20, name: 'Jean mom fit vintage', price: 30, size: '32', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600', category: 'pantalons', condition: 'Très bon état' },
    { id: 21, name: 'Pantalon wide leg laine', price: 42, size: 'M', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600', category: 'pantalons', condition: 'Bon état' },
    { id: 22, name: 'Cargo beige', price: 28, size: 'L', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600', category: 'pantalons', condition: 'Très bon état' },
    { id: 23, name: 'Pantalon chino marron', price: 24, size: '34', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600', category: 'pantalons', condition: 'Comme neuf' },
  ],
  robes: [
    { id: 30, name: 'Robe midi fleurie', price: 34, size: 'M', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600', category: 'robes', condition: 'Très bon état' },
    { id: 31, name: 'Robe vintage soie', price: 48, size: 'S', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600', category: 'robes', condition: 'Bon état' },
    { id: 32, name: 'Robe noire minimaliste', price: 26, size: 'M', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600', category: 'robes', condition: 'Comme neuf' },
  ],
  accessoires: [
    { id: 40, name: 'Sac en cuir marron', price: 38, size: '-', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600', category: 'accessoires', condition: 'Très bon état' },
    { id: 41, name: 'Ceinture cuir tressée', price: 15, size: '-', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=600', category: 'accessoires', condition: 'Bon état' },
    { id: 42, name: 'Foulard soie imprimé', price: 14, size: '-', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600', category: 'accessoires', condition: 'Comme neuf' },
  ],
};

export const allProducts = Object.values(productsByCategory).flat();
