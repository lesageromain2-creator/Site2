"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export default function TestimonialsCarousel({ reviews }: { reviews: Review[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIdx((p) => (p + 1) % reviews.length),
      4200
    );
    return () => clearInterval(id);
  }, [paused, reviews.length]);

  return (
    <section
      className="py-20 bg-secondary/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto text-center px-6"
        >
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: reviews[idx].rating }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-primary"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl italic mb-6 leading-relaxed font-heading">
            &ldquo;{reviews[idx].text}&rdquo;
          </blockquote>
          <p className="font-semibold text-base">{reviews[idx].name}</p>
          <p className="text-sm opacity-60 mt-1">
            {reviews[idx].role} · {reviews[idx].date}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? "w-8 bg-secondary" : "w-2 bg-secondary/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
