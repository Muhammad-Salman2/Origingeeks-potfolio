"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const servicesData = [
  {
    title: "Web Development",
    desc: "We create high-performance, responsive websites with modern UI/UX.",
    detail:
      "Our team builds scalable websites using Next.js, React, and Tailwind. We ensure SEO optimization, lightning-fast speed, and pixel-perfect design.",
  },
  {
    title: "App Development",
    desc: "Custom mobile apps with smooth performance & clean UI.",
    detail:
      "We specialize in cross-platform apps using React Native & Flutter. From MVP to full product, we handle it all.",
  },
  {
    title: "UI/UX Design",
    desc: "Modern, eye-catching designs to make your brand stand out.",
    detail:
      "Our designers craft intuitive and stunning interfaces with a focus on user experience and brand identity.",
  },
  {
    title: "Branding & Identity",
    desc: "Create your digital presence with strong branding.",
    detail:
      "Logo design, color palette, typography, and full brand guidelines tailored to your business.",
  },
  {
    title: "Digital Marketing",
    desc: "Grow faster with SEO, Social Media & Paid Ads.",
    detail:
      "We boost visibility with targeted strategies on Google, Meta, and LinkedIn for maximum conversion.",
  },
  {
    title: "Maintenance & Support",
    desc: "24/7 support and lifetime maintenance for clients.",
    detail:
      "From bug fixes to feature upgrades, we ensure your digital platforms stay smooth and updated.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full py-20 bg-gradient-to-b from-white via-[#EAF3FF] to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#0A66C2]">Services</span>
          </h2>
          <p className="text-gray-600 mt-3">
            We provide top-notch digital solutions to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>

              {/* Learn More */}
              <button
                onClick={() => toggleDetail(index)}
                className="mt-4 flex items-center gap-1 text-[#0A66C2] font-medium cursor-pointer hover:text-[#004182] transition-colors"
              >
                Learn More
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Expanded Detail */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
