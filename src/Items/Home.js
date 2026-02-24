import React from 'react';
import { 
  User, 
  Heart,
  Baby,
  Brain,
  CloudRain,
  Zap,
  Users,
  Sparkles,
  Shield,
  Award,
  Home,
  BookOpen,
  MessageCircle,
  Palette 
} from 'lucide-react';


export const categories = [
  { id: 1, name: 'فرزند', icon: Baby, color: 'bg-orange-100 text-pink-500' },
  { id: 2, name: 'استرس و افسردگی', icon: CloudRain, color: 'bg-orange-100 text-blue-500' },
  { id: 3, name: 'افسردگی', icon: Brain, color: 'bg-orange-100 text-purple-500' },
  { id: 4, name: 'خیانت', icon: Heart, color: 'bg-orange-100 text-red-500' },
  { id: 5, name: 'زوج درمانی', icon: Users, color: 'bg-orange-100 text-teal-500' },
  { id: 6, name: 'مشاوره خانواده', icon: Home, color: 'bg-orange-100 text-orange-500' },
];

export const services = [
  { id: 1, name: 'مشاوره فردی', icon: User },
  { id: 2, name: 'مشاوره افسردگی', icon: Brain },
  { id: 3, name: 'مشاوره زوج درمانی', icon: Users },
  { id: 4, name: 'مشاوره پیش از ازدواج', icon: Heart },
  { id: 5, name: 'مشاوره خیانت', icon: Shield },
  { id: 6, name: 'مشاوره استرس', icon: Zap },
  { id: 7, name: 'مشاوره فوبیا و ترس', icon: Sparkles },
  { id: 8, name: 'مشاوره ترک اعتیاد', icon: Award },
  { id: 9, name: 'مشاوره تحصیلی', icon: BookOpen },
  { id: 10, name: 'مشاوره کودکان', icon: Baby },
  { id: 11, name: 'مشاوره والدین', icon: Users },
  { id: 12, name: 'مشاوره خانواده', icon: Home },
];

export const navItems = [
  { name: 'حال نو', active: true , href:"/" },
  { name: 'خدمات', hasDropdown: true,  dropdownItems:[{name:"خانواده", href:"#"},
    {name:"مشاوره افردگی", href:"#"},
    {name:"مشاور پیش از ازدواج", href:"#"},
    {name:"مشاوره خیانت", href:"#"},
    {name:"مشاوره استرس", href:"#"},
    {name:"مشاوره تحصیلی", href:"#"},
  ] },
  { name: 'مقالات' },
  { name: 'تماس با ما' },
  { name: 'درباره حال نو' },
  
];

export const promoBanners = [
  { id: 1, title: 'دریافت مشاوره', subtitle: 'زوج و خانواده', gradient: 'from-orange-700 to-orange-500', icon: '💍' },
  { id: 2, title: 'دریافت مشاوره', subtitle: 'اضطراب و افسردگی', gradient: 'from-amber-700 to-orange-600', icon: '⛈️' },
  { id: 3, title: 'دریافت مشاوره', subtitle: 'کودک و نوجوان', gradient: 'from-orange-600 to-amber-500', icon: '🧸' },
];


export const Guides = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'مشاوره فردی',
    description: 'جلسات خصوصی با روانشناسان متخصص برای حل چالش‌های شخصی و ارتقای سلامت روان',
    color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'مشاوره خانواده',
    description: 'بهبود روابط خانوادگی، حل اختلافات و تقویت بنیان خانواده با رویکرد سیستمی',
    color: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
    borderColor: 'border-pink-200',
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: 'مشاوره کودک',
    description: 'تخصصی‌ترین مرکز مشاوره کودک با روش‌های بازی‌درمانی و هنردرمانی',
    color: 'bg-green-50 text-green-600 hover:bg-green-100',
    borderColor: 'border-green-200',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'مشاوره ازدواج',
    description: 'آماده‌سازی برای ازدواج، بهبود روابط زناشویی و مشاوره پیش از طلاق',
    color: 'bg-red-50 text-red-600 hover:bg-red-100',
    borderColor: 'border-red-200',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'هنر درمانی',
    description: 'درمان از طریق هنر، موسیقی‌درمانی و حرکت‌درمانی برای کودکان و بزرگسالان',
    color: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
    borderColor: 'border-purple-200',
  },
];


export const Statistic = [
    { value: '۹۴.۵٪', label: 'رضایت کاربران', icon: '😊', color: 'from-green-400 to-green-500' },
    { value: '۱,۸۳۱,۷۷۱', label: 'ساعت مشاوره', icon: '⏰', color: 'from-blue-400 to-blue-500' },
    { value: '+۸۵۶', label: 'مشاور فعال', icon: '👨‍⚕️', color: 'from-purple-400 to-purple-500' },
    { value: '+۵۴۰', label: 'تخصص و درمان', icon: '🎯', color: 'from-pink-400 to-pink-500' },
];

 export const BlogCategories = [
    { name: "سلامت روان", color: "bg-pink-100 text-pink-700" },
    { name: "روابط عاطفی", color: "bg-blue-100 text-blue-700" },
    { name: "تربیت فرزند", color: "bg-green-100 text-green-700" },
    { name: "استرس و اضطراب", color: "bg-purple-100 text-purple-700" },
  ];

export const articles = [
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

export const featuredArticle = {
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


