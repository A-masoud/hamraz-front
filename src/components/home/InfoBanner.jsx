import React from 'react';
import Image from 'next/image';
const InfoBanner = () => {
    return (
        <section className="relative bg-gradient-to-br rounded-2xl mt-2 from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" dir="rtl">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
                            <span className="ml-2">💜</span>
                            حال نو
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            حال نو:
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
                                جایی که آرامش را بازتعریف می‌کنیم!
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            در حال نو  تیمی از مشاوران متخصص از جمله روانشناسان، مشاوران خانواده و متخصصان فرزندپروری گرد هم آمده‌اند. ما با استفاده از روش‌های نوین و تکنیک‌های مدرن، به شما کمک می‌کنیم تا با چالش‌های زندگی روبرو شوید و به رشد فردی و ارتباطی دست یابید.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                                شروع مشاوره رایگان
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600 transition-all duration-300">
                                درباره ما بیشتر بدانید
                            </button>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                               <Image
                                        className='w-full h-80 object-cover'
                                        src="/img/wellness-img-0003.webp"
                                        alt="wellness"
                                        width={600}
                                        height={400}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                                                        <Image
                                        className='h-60 w-full object-cover'
                                        src="/img/study-advice.jpg"
                                        alt="wellness"
                                        width={600}
                                        height={400}
                                    />   
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl">
                                    <div className="text-3xl font-bold mb-1">+۱۰ سال</div>
                                    <div className="text-sm opacity-90">تجربه در مشاوره</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500 fill-current">
                                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="2" />
                                </pattern>
                                <rect width="100" height="100" fill="url(#dots)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBanner;