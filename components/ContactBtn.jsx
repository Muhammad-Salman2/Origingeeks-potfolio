"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactBtn = () => {
  return (
    <Link href="/contact">
      <motion.button
        className="
          cursor-pointer
          relative
          flex items-center justify-center
          px-6 py-3
          text-lg font-semibold
          text-white
          bg-[#0A66C2]          // Origin Geeks Primary Blue
          rounded-xl
          shadow-lg
          overflow-hidden
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-[#0A66C2]/40
        "
        whileHover={{
          scale: 1.05,
          backgroundColor: "#004182", // Dark hover blue
          boxShadow:
            "0 10px 15px -3px rgba(0, 65, 130, 0.5), 0 4px 6px -2px rgba(0, 65, 130, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="flex items-center whitespace-nowrap"
          variants={{
            rest: { x: 0 },
            hover: { x: -8 },
          }}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <span>Get in Touch</span>
          <motion.div
            className="ml-2"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.span>
      </motion.button>
    </Link>
  );
};

export default ContactBtn;
