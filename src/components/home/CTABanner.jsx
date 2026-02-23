import Image from 'next/image';
import React from 'react';

const CTABanner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 shadow-2xl">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            {/* Image */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-110"></div>
                <Image
                  className="relative w-62 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  src="/img/jibba-hotel.jpg"
                  alt="wellness"
                  width={600}
                  height={400}
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  💡
                </div>

              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 text-center md:text-right text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                بدون معطلی وقت مشاوره‌ت رو رزرو کن!
              </h2>
              <p className="text-pink-100 text-lg mb-8 max-w-xl">
                همین حالا نوبت مشاوره خود را رزرو کنید و اولین قدم را به سوی زندگی بهتر بردارید
              </p>

              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pink-600 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-pink-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative flex items-center gap-2">
                  رزرو نوبت تلفنی مشاوره
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;