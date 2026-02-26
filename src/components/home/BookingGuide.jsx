import React from 'react';
import { Guides } from '@/Items/Home';

const BookingGuide = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            راهنمای دریافت نوبت مشاوره
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           با توجه به نیازتان میتوانید مشاور مناسب را انتخاب و رزرو کنید
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Guides.map((service, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-3xl p-6 border-2 ${service.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center text-pink-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>مشاهده جزئیات</span>
                <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingGuide;