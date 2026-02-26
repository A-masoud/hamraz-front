"use client";

import React from "react";
import { categories } from "@/Items/Home";

/* =========================
   Static Gradients
========================= */
const STORY_GRADIENTS = [
  "from-pink-500 via-purple-500 to-blue-500",
  "from-blue-500 via-cyan-500 to-teal-500",
  "from-purple-500 via-pink-500 to-rose-500",
  "from-green-500 via-emerald-500 to-teal-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-rose-500 via-pink-500 to-orange-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
];

/* =========================
   Category Card (Memoized)
========================= */
const CategoryCard = React.memo(function CategoryCard({
  cat,
  gradient,
  hasStory,
}) {
  const Icon = cat.icon;

  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className="relative">
        
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 scale-150" />

        {/* Story Ring */}
        <div
          className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px]
          bg-gradient-to-tr ${gradient}
          ${hasStory ? "animate-gradient-xy" : "grayscale opacity-60"}
          group-hover:scale-105 transition-transform duration-300 will-change-transform`}
        >
          <div className="w-full h-full rounded-full bg-white p-[3px]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden group-hover:from-pink-50 group-hover:to-blue-50 transition-colors duration-300">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Badge */}
        {hasStory && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
            +
          </div>
        )}
      </div>

      <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300 text-center max-w-[80px] md:max-w-[100px]">
        {cat.name}
      </span>
    </div>
  );
});

/* =========================
   Main Component
========================= */
export default function Categories() {
  return (
    <section className="py-8 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
          {categories.map((cat, index) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              gradient={
                STORY_GRADIENTS[index % STORY_GRADIENTS.length]
              }
              hasStory={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}