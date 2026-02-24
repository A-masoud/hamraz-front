"use client";

import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Phone,
  Sparkles,
} from "lucide-react";
import { navItems } from "@/Items/Home";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <NavigationMenu.Root className="hidden md:flex justify-center relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

        <div className="w-full max-w-7xl px-6 flex items-center justify-between py-3">
          {/* CTA */}
          <Link
            href="/calender"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-pink-200 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            رزرو نوبت مشاوره
          </Link>

          {/* Menu */}
          <NavigationMenu.List className="flex items-center flex-row-reverse gap-1">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <NavigationMenu.Trigger
                      className={`group flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300
                      hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50
                      data-[state=open]:bg-gradient-to-r data-[state=open]:from-pink-50 data-[state=open]:to-blue-50
                      ${
                        item.active
                          ? "text-pink-600 font-bold"
                          : "text-gray-700"
                      }
                      hover:text-pink-600`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180 text-gray-400 group-hover:text-pink-500" />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content
                      className="
                        absolute top-full left-1/2 -translate-x-1/2 mt-3
                        bg-white rounded-2xl shadow-2xl shadow-pink-100/50 border border-gray-100
                        p-3 min-w-[240px]
                        z-50
                        data-[state=open]:animate-slideDown
                        data-[state=closed]:animate-slideUp
                        overflow-hidden
                      "
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>

                      <ul className="space-y-1 pt-2">
                        {item.dropdownItems?.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenu.Link asChild>
                              <Link
                                href={subItem.href || "#"}
                                className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 hover:text-pink-600 transition-all duration-200"
                              >
                                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-pink-500 transition-colors"></span>
                                {subItem.name}
                              </Link>
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </>
                ) : (
                  <NavigationMenu.Link asChild>
                    <Link
                      href={item.href || "#"}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300
                      hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50
                      ${
                        item.active
                          ? "text-pink-600 font-bold"
                          : "text-gray-700"
                      }
                      hover:text-pink-600`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenu.Link>
                )}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </div>
      </NavigationMenu.Root>

      {/* ================= MOBILE NAV ================= */}
      <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-gray-800">آرامش</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/calender"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold rounded-lg shadow-md"
            >
              رزرو نوبت
            </Link>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white absolute w-full left-0 shadow-2xl shadow-pink-100/50 animate-slideDown">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 cursor-pointer list-none transition-all duration-200">
                        <span
                          className={
                            item.active ? "text-pink-600 font-bold" : ""
                          }
                        >
                          {item.name}
                        </span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-gray-400" />
                      </summary>

                      <ul className="pr-4 mt-2 space-y-1 mr-3 border-r-2 border-pink-300">
                        {item.dropdownItems?.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href || "#"}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50/50 rounded-lg transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                      ${
                        item.active
                          ? "text-pink-600 font-bold bg-pink-50"
                          : "text-gray-700"
                      }
                      hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.active ? "bg-pink-500" : "bg-gray-300"
                        }`}
                      ></span>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Contact */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="tel:09123456789"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-pink-500" />
                  </div>
                  ۰۹۱۲۳۴۵۶۷۸۹
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}