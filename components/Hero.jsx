"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white via-[#E8F1FB] to-[#DDEAFF]">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold text-black leading-tight">
        Transforming Ideas Into <br />
        <span className="text-[#0A66C2]">Digital Reality</span>
      </h1>

      {/* Typing Effect Paragraph */}
      <div className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl">
        <ReactTyped
          strings={[
            "Origin Geeks delivers innovative software solutions for forward-thinking businesses.",
            "We build digital products that help you grow, scale, and succeed.",
            "Your vision, our code — let's build the future together."
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-[#0A66C2] cursor-pointer text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#004182] transition">
          Get Started →
        </button>
        <button className="border border-[#0A66C2] cursor-pointer text-[#0A66C2] px-8 py-3 rounded-xl font-semibold hover:bg-[#E8F1FB] transition">
          View Our Work ▷
        </button>
      </div>
    </section>
  );
};

export default Hero;
