import React from 'react'
import {promoBanners, services } from "@/Items/Home"
export default function Services() {
    return (
        <section className="text-center max-w-5xl mx-auto" >
            <h2 className="text-2xl font-bold  text-gray-800 mb-4">خدمات مرکز مشاوره حال نو</h2>
            <p className="text-gray-500 mb-8">بزرگترین مرکز مشاوره تلفنی ایران؛ در حوزه های تخصصی مشاوره سلامت روان...</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer">
                        <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center">
                            <service.icon className="w-7 h-7 text-orange-600" />
                        </div>
                        <span className="text-xs text-gray-700">{service.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
