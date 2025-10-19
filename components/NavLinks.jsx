"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, LifeBuoy } from "lucide-react";
import { Button } from "./ui/button";

// Nav Links Configuration
export const navLinksData = [
  { label: "Home", id: "home", isDesktopOnly: true },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Team", id: "team" },
  { label: "Blogs", id: "resources", dropdown: true, isDesktopOnly: true },
  { label: "Contact", id: "contact", isDesktopOnly: true },
];

// Resource Items for Dropdown
export const resourceItems = [
  {
    icon: <BookOpen className="w-9 h-9 text-green-600" />,
    title: "Our Blog",
    href: "/blog",
    description: "Read our latest tips and tricks.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-pink-600" />,
    title: "Help Center",
    href: "/help",
    description: "Get help and learn how to use our services.",
  },
];

// NavLink Component
export const NavLinkItem = ({ 
  link, 
  isMobile = false, 
  openDropdown, 
  setOpenDropdown,
  setIsMobileMenuOpen 
}) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const baseClass = `
    bg-transparent shadow-none border border-transparent text-black cursor-pointer
    hover:bg-red-50 hover:text-red-700 hover:border-red-700
    font-sansation tracking-wide transition-all duration-200 rounded-md
    ${isMobile ? 'w-full justify-start text-[17px]' : 'items-center text-[15px]'}
  `;

  if (link.dropdown) {
    return (
      <div className="relative">
        <Button
          onClick={() => setOpenDropdown(!openDropdown)}
          className={`flex items-center gap-1 ${baseClass} ${!isMobile ? '' : 'justify-between'}`}
        >
          {link.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              openDropdown ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>

        <AnimatePresence>
          {openDropdown && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
              animate={isMobile ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className={isMobile ? "flex flex-col mt-2 ml-4 gap-2" : "absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-lg border p-3 z-50"}
            >
              {resourceItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  className={isMobile ? "text-[15px] text-gray-700 hover:text-red-600 transition" : "flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"}
                  onClick={() => {
                    if (isMobile) {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(false);
                    }
                  }}
                >
                  {!isMobile && item.icon}
                  <div>
                    <h4 className={`font-semibold text-gray-900 ${isMobile ? 'text-[15px]' : 'text-sm'}`}>
                      {item.title}
                    </h4>
                    {!isMobile && (
                      <p className="text-sm text-gray-600 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Button
      onClick={() => handleScroll(link.id)}
      className={baseClass}
      key={link.id}
    >
      {link.label}
    </Button>
  );
};
