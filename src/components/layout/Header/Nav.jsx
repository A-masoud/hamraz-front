'use client'

import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  ChevronDown,
  Menu,
  X,

} from 'lucide-react'
import { navItems } from '@/Items/Home'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <NavigationMenu.Root className="hidden md:flex justify-center border-t border-gray-100 relative z-50 bg-white">

        <div className="w-full max-w-6xl px-4 flex items-center justify-between">

          {/* CTA Button */}
          <button className="px-6 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 active:scale-95 transition-all shadow-sm hover:shadow-md">
            رزرو نوبت مشاوره
          </button>

          {/* Menu */}
          <NavigationMenu.List className="flex items-center flex-row-reverse gap-2 py-3">

            {navItems.map((item, index) => (
              <NavigationMenu.Item key={index} className="relative ">

                {item.hasDropdown ? (
                  <>
                    <NavigationMenu.Trigger
                      className={`group flex items-center gap-1 px-4 py-2 text-sm rounded-md transition-all
                      hover:bg-pink-50
                      data-[state=open]:bg-pink-50
                      ${item.active ? 'text-pink-500 font-medium' : 'text-gray-700'}
                      hover:text-pink-500`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content
                      className="
                        absolute top-full left-1/2 -translate-x-1/2 mt-2
                        bg-white rounded-xl shadow-xl border border-gray-100
                        p-2 min-w-[220px]
                        z-50
                      "
                    >
                      <ul className="space-y-1">
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavigationMenu.Link asChild>
                              <a
                                href={subItem.href || '#'}
                                className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-pink-50 hover:text-pink-500 transition-colors"
                              >
                                {subItem.name}
                              </a>
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </>
                ) : (
                  <NavigationMenu.Link asChild>
                    <a
                      href={item.href || '#'}
                      className={`px-4 py-2 text-sm rounded-md transition-colors
                      hover:bg-pink-50
                      ${item.active ? 'text-pink-500 font-medium' : 'text-gray-700'}
                      hover:text-pink-500`}
                    >
                      {item.name}
                    </a>
                  </NavigationMenu.Link>
                )}

              </NavigationMenu.Item>
            ))}

          </NavigationMenu.List>

        </div>
      </NavigationMenu.Root>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden border-t border-gray-100 bg-white relative z-40">
        <div className="flex items-center justify-between px-4 py-3">

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 active:scale-95 transition-all">
            رزرو نوبت
          </button>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
            <ul className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.hasDropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-3 py-3 text-sm text-gray-700 rounded-lg hover:bg-pink-50 cursor-pointer list-none">
                        <span className={item.active ? 'text-pink-500 font-medium' : ''}>
                          {item.name}
                        </span>
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>

                      <ul className="pr-4 mt-1 space-y-1 border-r-2 border-pink-100 mr-3">
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href || '#'}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-md transition-colors"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a
                      href={item.href || '#'}
                      className={`block px-3 py-3 text-sm rounded-lg hover:bg-pink-50 transition-colors
                      ${item.active ? 'text-pink-500 font-medium' : 'text-gray-700'}
                      hover:text-pink-500`}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </>
  )
}