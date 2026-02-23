import React from 'react'
import { categories } from '@/Items/Home'
export default function Categories() {
    return (
        <section className="mb-10">
            <div className="flex justify-center gap-6 flex-wrap">
                {categories.map((cat) => (
                    <div key={cat.id} className="flex flex-col items-center gap-2  cursor-pointer group">
                        <div className={`w-16 h-16 rounded-full border ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <cat.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm text-gray-700">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
