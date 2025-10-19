"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Github, Dribbble } from "lucide-react";

// The primary accent color from your Services component
const PRIMARY_COLOR = "#0A66C2";

// Define the link structure for the footer
const footerLinks = {
  company: {
    title: "Company",
    links: ["Services", "Team", "Portfolio", "Contact Us"],
  },
  services: {
    title: "Services",
    links: ["Web Development", "Mobile Development", "Cloud Solutions", "AI & Machine Learning"],
  },
};

// Simple link component with hover effect
const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-[#0A66C2] transition duration-300 text-sm md:text-base mb-2 block"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

// Simple social icon component with hover effect
const SocialIcon = ({ href, Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-[#0A66C2] transition duration-300 p-2 rounded-full hover:bg-[#EAF3FF]"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const Footer = () => {
  return (
    // Background is very light gray/blue, and the text is dark
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          
          {/* Column 1: Brand Info and Social Media */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-0 lg:pr-12">
            <h3 className="text-3xl font-extrabold text-gray-900">
              <span style={{ color: PRIMARY_COLOR }}>Origin</span> Geeks
            </h3>
            <p className="text-gray-600 max-w-sm">
              We build innovative software solutions for forward-thinking businesses around the world.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <SocialIcon href="#" Icon={Facebook} />
              <SocialIcon href="#" Icon={Instagram} />
              <SocialIcon href="#" Icon={Linkedin} />
              <SocialIcon href="#" Icon={Github} />
              <SocialIcon href="#" Icon={Dribbble} />
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              {footerLinks.company.title}
            </h4>
            <nav className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <FooterLink key={link} href={`/${link.toLowerCase().replace(/\s/g, '-')}`}>
                  {link}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 3: Services Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              {footerLinks.services.title}
            </h4>
            <nav className="space-y-2">
              {footerLinks.services.links.map((link) => (
                <FooterLink key={link} href={`/services#${link.toLowerCase().replace(/\s/g, '-')}`}>
                  {link}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Origin Geeks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Add the default export for use in the main App component
const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between font-sans">
            <main className="flex-grow">
                {/* Placeholder content to simulate a full page */}
                <div className="max-w-6xl mx-auto p-8">
                    <h1 className="text-3xl font-bold text-gray-800">Website Content</h1>
                    <p className="mt-4 text-gray-600">Scroll down to see the footer.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Footer;;
