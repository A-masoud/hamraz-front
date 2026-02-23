"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const categories = [
    { name: "سلامت روان", color: "bg-pink-100 text-pink-700" },
    { name: "روابط عاطفی", color: "bg-blue-100 text-blue-700" },
    { name: "تربیت فرزند", color: "bg-green-100 text-green-700" },
    { name: "استرس و اضطراب", color: "bg-purple-100 text-purple-700" },
  ];

const articles = [
  {
    id: 1,
    title: "۱۰ راهکار عملی برای مدیریت استرس در محیط کار",
    excerpt:
      "یاد بگیرید چگونه با تکنیک‌های ساده روزانه، استرس محیط کاری خود را به حداقل برسانید و بهره‌وری خود را افزایش دهید.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
    category: "استرس و اضطراب",
    author: "دکتر سارا احمدی",
    date: "۱۵ بهمن ۱۴۰۳",
    readTime: "۵ دقیقه",
    likes: 245,
  },
  {
    id: 2,
    title: "چگونه ارتباط سالم با همسرمان داشته باشیم؟",
    excerpt:
      "رازهای یک رابطه پایدار و عمیق را بشناسید. نکات کلیدی برای بهبود گفتگو و درک متقابل در زندگی زناشویی.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    category: "روابط عاطفی",
    author: "دکتر محمد رضایی",
    date: "۱۲ بهمن ۱۴۰۳",
    readTime: "۸ دقیقه",
    likes: 189,
  },
  {
    id: 3,
    title: "تأثیر بازی درمانی بر رشد کودکان اوتیسم",
    excerpt:
      "بازی‌درمانی یکی از موثرترین روش‌های درمانی برای کودکان طیف اوتیسم است. در این مقاله با این روش آشنا شوید.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    category: "تربیت فرزند",
    author: "دکتر لیلا کریمی",
    date: "۱۰ بهمن ۱۴۰۳",
    readTime: "۶ دقیقه",
    likes: 321,
  },
];

const featuredArticle = {
  id: 4,
  title: "راهنمای جامع mindfulness و مدیتیشن برای مبتدی‌ها",
  excerpt:
    "مدیتیشن دیگر یک راز نیست! با این راهنمای گام به گام، سفر درونی خود را برای یافتن آرامش آغاز کنید.",
  image:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
  category: "سلامت روان",
  author: "دکتر نازنین موسوی",
  date: "۱۸ بهمن ۱۴۰۳",
  readTime: "۱۲ دقیقه",
  likes: 567,
};

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden" dir="rtl">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 text-sm font-medium mb-4">
            <span>📝</span>
            مجله سلامت روان
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            مقالات و <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">وبلاگ</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            جدیدترین مطالب تخصصی در حوزه روانشناسی، سلامت mental و بهبود کیفیت زندگی را از متخصصان ما بخوانید
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            همه مقالات
          </button>
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full ${cat.color} font-medium hover:shadow-md hover:scale-105 transition-all duration-300`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r"></div>
                <span className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-pink-600 text-sm font-bold">
                  {featuredArticle.category}
                </span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <span>👤</span> {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>📅</span> {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⏱️</span> {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 text-pink-600 font-bold hover:gap-4 transition-all duration-300"
                  >
                    ادامه مطلب
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <span>❤️</span> {featuredArticle.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{article.readTime} مطالعه</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  <Link href={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                      {article.author[0]}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{article.author}</span>
                  </div>
                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <span className="group-hover:text-red-500 transition-colors">❤️</span>
                    {article.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>مشاهده همه مقالات</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-pink-400 to-blue-500 shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="relative p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              از جدیدترین مقالات مطلع شوید!
            </h3>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto">
              با عضویت در خبرنامه، هر هفته بهترین مقالات روانشناسی را رایگان دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="flex-1 px-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              />
              <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
                عضویت رایگان
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}