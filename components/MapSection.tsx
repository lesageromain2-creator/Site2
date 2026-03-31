"use client";

interface AddressData {
  lat: number;
  lng: number;
  address: string;
  name: string;
}

export default function MapSection({ data }: { data: AddressData }) {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-heading text-3xl mb-4 text-secondary">Nous trouver</h2>
          <p className="text-lg mb-2">{data.address}</p>
          <p className="text-sm opacity-70 mb-4">
            Métro B — Jean Macé · Tram T1 — Guillotière
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Lun-Sam :</strong> 6h30-19h30</p>
            <p><strong>Dimanche :</strong> 7h-13h</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
          <iframe
            src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&z=15&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            title="Localisation"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
