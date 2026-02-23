import HeroSection from './HeroSection';
import React from 'react';
import Services from './Services';
import InfoBanner from './InfoBanner';
import StatsSection from './Statistics';
import ServicesSection from './BookingGuide';
import Categories from './Categories';
import CTABanner from './CTABanner';
import BlogSection from './BlogSection';

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