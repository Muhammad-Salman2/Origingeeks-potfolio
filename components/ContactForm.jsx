"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

// Primary accent color from your components
const PRIMARY_COLOR = "#0A66C2";
const HOVER_COLOR = "#0857a0"; // A slightly darker blue for hover
const LIGHT_BG = "#EAF3FF"; // Very light blue background for subtle contrast

const ContactCard = ({ Icon, title, content }) => (
  <motion.div
    className="flex items-start p-6 rounded-xl shadow-md transition duration-300 w-full"
    style={{ backgroundColor: 'white', border: `1px solid ${LIGHT_BG}` }}
    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
  >
    <div className="flex-shrink-0 mr-4 p-3 rounded-full" style={{ backgroundColor: LIGHT_BG, color: PRIMARY_COLOR }}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{content}</p>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // EmailJS Configuration - Environment variables se load hongi
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Template parameters - ye variables EmailJS template me jayenge
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Origin Geeks Team", // Aap ka company name
    };

    try {
      // EmailJS se email send karo
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully!", response);
      setLoading(false);
      setStatus("✅ Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setLoading(false);
      setStatus("❌ Failed to send message. Please try again or email us directly.");
    }
  };

  const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-1 transition duration-200 focus:outline-none";

  return (
    <section id="contact" className="min-h-screen py-16 md:py-24 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Get In <span style={{ color: PRIMARY_COLOR }}>Touch</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg">
            Have a project in mind? Contact us to discuss how we can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Details (Cards) */}
          <div className="space-y-6 flex flex-col ">
            <ContactCard
              Icon={Mail}
              title="Email Us"
              content="originGeeks@gmail.com"
            />
            <ContactCard
              Icon={Phone}
              title="Call Us"
              content="+92 3201200650"
            />
            <ContactCard
              Icon={MapPin}
              title="Visit Us"
              content="https://www.linkedin.com/company/origin-geeks/about/"
            />
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="p-8 rounded-xl shadow-2xl" 
            style={{ 
                backgroundColor: 'white', 
                border: `2px solid ${PRIMARY_COLOR}20`, // Subtle border effect
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h3>
            <p className="text-gray-600 mt-2 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputStyle}
                  required
                  style={{ focus: { borderColor: PRIMARY_COLOR, boxShadow: `0 0 0 3px ${PRIMARY_COLOR}50` } }}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={inputStyle}
                  required
                  style={{ focus: { borderColor: PRIMARY_COLOR, boxShadow: `0 0 0 3px ${PRIMARY_COLOR}50` } }}
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="4"
                  className={`${inputStyle} resize-y`}
                  required
                  style={{ focus: { borderColor: PRIMARY_COLOR, boxShadow: `0 0 0 3px ${PRIMARY_COLOR}50` } }}
                />
              </div>

              {/* Status Message */}
              {status && (
                <p className="text-sm font-medium text-green-600 p-2 rounded-lg bg-green-50">
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 shadow-lg"
                style={{ backgroundColor: PRIMARY_COLOR }}
                whileHover={!loading ? { backgroundColor: HOVER_COLOR, scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;