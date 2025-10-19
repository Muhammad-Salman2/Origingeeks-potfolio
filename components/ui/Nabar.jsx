"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import logo from '../../public/logo.png'
import { Button } from "./button"; 
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"; 
import GetBtn from "../ContactBtn";
import { navLinksData, NavLinkItem } from "../NavLinks";

const PerfectNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  return (
    <header className="w-full border-b border-gray-100 bg-gray-50 fixed z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-5">
        <Link href="/">
         <h3>Origin Geeks</h3>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {isClient && navLinksData
            .filter(link => !link.isDesktopOnly || window.innerWidth >= 1024)
            .map((link) => (
              <NavLinkItem 
                key={link.id} 
                link={link}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
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
                  {navLinksData.map((item, index) => (
                    <NavLinkItem 
                      key={index} 
                      link={item} 
                      isMobile={true}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                      setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
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
