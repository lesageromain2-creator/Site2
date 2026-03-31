const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;
const SITE = process.env.NEXT_PUBLIC_SITE_ID;

export const api = {
  contact: (d: Record<string, unknown>) =>
    fetch(`${BACKEND}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, site_id: SITE }),
    }),
  booking: (d: Record<string, unknown>) =>
    fetch(`${BACKEND}/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, site_id: SITE }),
    }),
  reviews: () => fetch(`${BACKEND}/api/reviews/${SITE}`),
  products: () => fetch(`${BACKEND}/api/products/${SITE}`),
  orders: (d: Record<string, unknown>) =>
    fetch(`${BACKEND}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, site_id: SITE }),
    }),
};
