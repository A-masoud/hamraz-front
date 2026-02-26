"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, Sparkles } from "lucide-react";

const BANNERS = [
  {
    id: 1,
    gradient: "from-pink-500 to-pink-400",
    title: "مشاوره فردی",
    subtitle: "تخفیف ۲۰٪",
    icon: "🧠",
    shadow: "shadow-pink-200",
  },
  {
    id: 2,
    gradient: "from-blue-500 to-blue-400",
    title: "مشاوره زوج",
    subtitle: "جلسه اول رایگان",
    icon: "💑",
    shadow: "shadow-blue-200",
  },
  {
    id: 3,
    gradient: "from-purple-500 to-pink-500",
    title: "مشاوره کودک",
    subtitle: "پکیج ویژه",
    icon: "🧸",
    shadow: "shadow-purple-200",
  },
];

export default function HeroSection() {
  const banners = useMemo(() => BANNERS, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12" dir="rtl">
      
      {/* Promo Banners */}
      <div className="space-y-4 lg:order-2">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`
              relative p-6 rounded-2xl bg-gradient-to-r ${banner.gradient}
              text-white cursor-pointer overflow-hidden
              transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
              ${banner.shadow} group
            `}
          >
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

            <div className="flex justify-between items-center relative z-10">
              <div className="text-right">
                <p className="text-sm opacity-90 font-medium mb-1">
                  {banner.title}
                </p>
                <p className="text-xl font-bold">{banner.subtitle}</p>
              </div>

              <span className="text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {banner.icon}
              </span>
            </div>

            <ChevronLeft className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Main Banner */}
      <div className="lg:col-span-2 lg:order-1">
        <div className="relative min-h-[320px] rounded-3xl overflow-hidden shadow-xl group">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100" />

          {/* Background Image */}
          <Image
            src="/img/lake-tekapo-wallpaper-2560x1440-new-zealand-landscape-16351.jpg"
            alt="مشاوره روانشناسی"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover  "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />

          {/* Decorative Blurs */}
          <div className="absolute top-10 right-10 w-32 h-32 " />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative p-8 h-full flex flex-col justify-center items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-sm font-medium mb-6 shadow-lg shadow-pink-200">
              <Sparkles className="w-4 h-4" />
              شروع مشاوره آنلاین
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              رسیدن به{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
                آرامش فکری
              </span>{" "}
              و
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              بهبود امید به زندگی
            </h2>

            <p className="text-gray-600 text-base mb-8 max-w-md leading-relaxed">
              مشاوره در انواع زمینه‌های فردی، استرس، افسردگی، مشاوره زوج و
              خانواده، ترک اعتیاد و ...
            </p>

            <button className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span>دریافت مشاوره</span>
              <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}