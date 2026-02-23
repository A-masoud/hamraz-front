import Link from "next/link";
import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Brain,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "دسترسی سریع",
      links: [
        { label: "درباره ما", href: "/about" },
        { label: "نوبت دهی", href: "/appointment" },
        { label: "مقالات", href: "/blog" },
        { label: "تماس با ما", href: "/contact" },
      ],
    },
    {
      title: "خدمات ما",
      links: [
        { label: "مشاوره فردی", href: "#" },
        { label: "مشاوره زوج درمانی", href: "#" },
        { label: "درمان اضطراب", href: "#" },
        { label: "درمان افسردگی", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: "اینستاگرام", href: "#" },
    { icon: MessageCircle, label: "واتساپ", href: "#" },
    { icon: Mail, label: "ایمیل", href: "#" },
  ];

  return (
    <footer className="relative bg-white overflow-hidden" dir="rtl">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white">
              <Brain size={18} />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              مرکز مشاوره حال نو
            </h3>
          </div>

          <p className="text-sm leading-7 text-gray-600">
            همراه شما در مسیر رشد فردی، آرامش ذهن و سلامت روان.
            با تیمی از متخصصان با تجربه در کنار شما هستیم.
          </p>

          {/* Social */}
          <div className="flex gap-3 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-pink-500 hover:to-blue-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dynamic Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-bold text-gray-800 mb-5 relative inline-block">
              {section.title}
              <span className="absolute -bottom-1 right-0 w-8 h-1 bg-gradient-to-l from-pink-500 to-blue-500 rounded-full" />
            </h4>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-pink-500 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-5 relative inline-block">
            اطلاعات تماس
            <span className="absolute -bottom-1 right-0 w-8 h-1 bg-gradient-to-l from-pink-500 to-blue-500 rounded-full" />
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <MapPin size={16} />
              </span>
              <span className="text-gray-600 pt-1">
                تهران، خیابان مثال، پلاک ۱۲۳
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Phone size={16} />
              </span>
              <span className="text-gray-600 font-medium">
                ۰۹۱۲۳۴۵۶۷۸۹
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Mail size={16} />
              </span>
              <span className="text-gray-600">
                info@clinic.com
              </span>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6 p-4  rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 border border-pink-100">
            <p className="text-xs text-gray-600 mb-2 font-medium">
              عضویت در خبرنامه
            </p>

            <div className="flex flex-col  gap-2">
              <input
                type="email"
                placeholder="ایمیل شما..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {year} مرکز مشاوره آرامش - تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-pink-600 transition-colors"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/terms"
              className="hover:text-pink-600 transition-colors"
            >
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}