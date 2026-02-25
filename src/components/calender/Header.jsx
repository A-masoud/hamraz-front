import React from 'react'
import {Sparkles } from "lucide-react";

export default function Header() {
    return (
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 text-pink-500" />
                سیستم نوبت‌دهی آنلاین
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                تقویم{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
                    نوبت‌دهی
                </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                تاریخ مورد نظر خود را انتخاب کنید و از بین تایم‌های موجود، نوبت خود
                را رزرو کنید
            </p>
        </div>
    )
}
