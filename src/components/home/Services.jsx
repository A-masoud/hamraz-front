import React from "react";
import { services } from "@/Items/Home";
import { Sparkles } from "lucide-react";

/* =========================
   Gradient Colors (Static)
========================= */
const ICON_GRADIENTS = [
  "from-pink-500 to-rose-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-purple-500",
];

/* =========================
   Service Card (Memoized)
========================= */
const ServiceCard = React.memo(function ServiceCard({
  service,
  gradientColor,
}) {
  const Icon = service.icon;

  return (
    <div className="group relative flex flex-col items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-pink-200/40 hover:border-pink-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 will-change-transform">
      
      {/* Icon Container */}
      <div
        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColor}
        flex items-center justify-center shadow-lg shadow-pink-200/50
        group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Service Name */}
      <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors duration-300 text-center">
        {service.name}
      </span>

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full group-hover:w-1/2 transition-all duration-300"></div>
    </div>
  );
});

/* =========================
   Main Component
========================= */
export default function Services() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" dir="rtl">
      
      {/* Background Decorations (سبک‌تر شده blur) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            خدمات تخصصی
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            خدمات مرکز مشاوره{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
              حال نو
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            بزرگترین مرکز مشاوره تلفنی ایران؛ در حوزه‌های تخصصی مشاوره سلامت
            روان، روانشناسی فردی، زوج و خانواده
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              gradientColor={
                ICON_GRADIENTS[index % ICON_GRADIENTS.length]
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span>مشاهده همه خدمات</span>
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}