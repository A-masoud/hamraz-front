
import "./globals.css";
import { vazir } from "../../public/font/vazir";
import { Layout } from "@/components/layout/Layout";

export const metadata = {
  title: "مرکز مشاوره حال نو | رزرو آنلاین نوبت مشاوره تلفنی",
  description:
    "مرکز مشاوره حال نو؛ رزرو آنلاین نوبت مشاوره فردی، زوج و خانواده، کودک و نوجوان با مشاوران متخصص. دریافت مشاوره تلفنی و آنلاین با کمترین زمان انتظار.",
  keywords: [
    "مشاوره تلفنی",
    "مشاوره آنلاین",
    "مشاوره خانواده",
    "مشاوره فردی",
    "مشاوره روانشناسی",
    "رزرو نوبت مشاوره",
    "حال نو",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "مرکز مشاوره حال نو | رزرو آنلاین نوبت مشاوره تلفنی",
    description:
      "رزرو سریع و آسان نوبت مشاوره روانشناسی و خانواده در مرکز مشاوره حال نو.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={vazir.variable} dir="rtl">
      <body className="font-[var(--font-vazir)]">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
