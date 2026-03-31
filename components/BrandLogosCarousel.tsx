"use client";

import { motion } from "framer-motion";

interface Brand {
  name: string;
  tagline: string;
  color: string;
  initials: string;
}

export default function BrandLogosCarousel({ brands }: { brands: Brand[] }) {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden py-10">
      <p className="text-center text-sm opacity-50 uppercase tracking-widest mb-6">
        Nos fournisseurs de confiance
      </p>
      <motion.div
        className="flex gap-10 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ width: "200%" }}
      >
        {doubled.map((b, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[110px]"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-sm"
              style={{ backgroundColor: b.color }}
            >
              {b.initials}
            </div>
            <p className="text-xs font-semibold text-center">{b.name}</p>
            <p className="text-xs opacity-45 text-center">{b.tagline}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
