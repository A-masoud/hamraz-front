import React from 'react'
import { promoBanners,  } from '@/Items/Home'
import { ChevronLeft } from 'lucide-react'
export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Promo Banners */}
          <div className="space-y-4">
            {promoBanners.map((banner) => (
              <div key={banner.id} className={`relative p-6 rounded-xl bg-gradient-to-r ${banner.gradient} text-white cursor-pointer hover:shadow-lg`}>
                <div className="flex justify-between items-center">
                  <div className="text-right">
                    <div className="text-sm opacity-90">{banner.title}</div>
                    <div className="text-xl font-bold">{banner.subtitle}</div>
                  </div>
                  <span className="text-4xl">{banner.icon}</span>
                </div>
                <ChevronLeft className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6" />
              </div>
            ))}
          </div>

          {/* Main Banner */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[280px] rounded-xl bg-gradient-to-br from-orange-950   text-cyan-950 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://wallpapershome.com/images/pages/pic_h/26396.jpg')] bg-cover bg-center opacity-70" />
              <div className="relative p-8 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold">رسیدن به آرامش فکری و</h2>
                <h2 className="text-2xl font-bold mb-4">بهبود امید به زندگی</h2>
                <p className="text-blue-100 text-sm mb-6 max-w-md">
                  مشاوره در انواع زمینه های فردی، استرس، افسردگی، مشاوره زوج و خانواده، ترک اعتیاد و ...
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg w-fit">
                  <ChevronLeft className="w-5 h-5 text-white" />
                  دریافت مشاوره
                </button>
              </div>
            </div>
          </div>
        </section>
  )
}
