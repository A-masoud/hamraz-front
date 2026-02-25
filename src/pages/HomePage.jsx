import HeroSection from '@/components/home/HeroSection';
import Services from '@/components/home/Services';
import InfoBanner from '@/components/home/InfoBanner';
import StatsSection from '@/components/home/Statistics';
import ServicesSection from '@/components/home/BookingGuide';
import Categories from '@/components/home/Categories';
import CTABanner from '@/components/home/CTABanner';
import BlogSection from '@/components/home/BlogSection';

export default function HomePage() {
  return (
    <div className="min-h-screen " dir="rtl">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        <Categories />

        <HeroSection />

        <Services />

        <InfoBanner />

        <StatsSection />

        <ServicesSection />

        <CTABanner />

        <BlogSection />

      </main>

    </div>
  );
}