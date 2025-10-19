"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, BookOpen, LifeBuoy } from "lucide-react";
import logo from '../../public/logo.png'
import { Button } from "./button"; 
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"; 
import GetBtn from "../ContactBtn"; // The Contact Button component you created earlier

const PerfectNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "how-it-works", isDesktopOnly: true },
    { label: "Services", id: "why-origngeeks" },
    { label: "Portfolio", id: "features" },
    { label: "Team", id: "pricing" },
    { label: "Blogs", id: "resources", dropdown: true, isDesktopOnly: true },
    { label: "Contact", id: "faq", isDesktopOnly: true },
  ];

  const resourceItems = [
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

  const NavLinkItem = ({ link, isMobile = false }) => {
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
                      <h4 className={`font-semibold text-gray-900 ${isMobile ? 'text-[15px]' : 'text-sm'}`}>{item.title}</h4>
                      {!isMobile && <p className="text-sm text-gray-600 leading-snug">{item.description}</p>}
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
        className={`${baseClass} ${link.id === 'features' ? 'text-red-700 border-red-700' : ''}`}
        key={link.id}
      >
        {link.label}
      </Button>
    );
  };

  return (
    <header className="w-full border-b border-gray-100 bg-gray-50 fixed z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-5">
        <Link href="/">
         <h3>Origin Geeks</h3>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {isClient && navLinks
            .filter(link => !link.isDesktopOnly || window.innerWidth >= 1024)
            .map((link) => (
              <NavLinkItem key={link.id} link={link} />
            ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <GetBtn />
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6 text-gray-700" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[280px] sm:w-[320px] p-6 pt-10">
                <SheetHeader className="mb-6">
                  <SheetTitle className="border-b pb-4">
                    <Image src="/og-logo-placeholder.png" width={100} height={30} alt="Logo" className="w-auto h-8"/>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, index) => (
                    <NavLinkItem key={index} link={item} isMobile={true} />
                  ))}
                  <div className="mt-4">
                    <GetBtn />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PerfectNavbar;
