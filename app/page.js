import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/ui/Nabar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    
    {/* Portfolio Section */}
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-b from-white via-[#F5F5F5] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#0A66C2]">Portfolio</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Check out our recent projects and success stories.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Project {item}</h3>
              <p className="text-gray-600 mt-2">Description of the amazing project we built for our client.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className=" py-20 bg-white ">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our <span className="text-[#0A66C2]">Team</span>
          </h2>
          <p className="text-gray-600 mt-3">
            The talented people behind Origin Geeks.
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 ">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Team Member {member}</h3>
              <p className="text-gray-600 text-sm">Role / Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactForm/>
    <Footer/>
    </>
  );
}
