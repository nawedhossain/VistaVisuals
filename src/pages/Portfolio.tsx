import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const portfolioItems = [
  { 
    id: 1, 
    name: 'Blueeyes Eco Resort', 
    category: 'Resort & Hospitality Website', 
    image: 'https://picsum.photos/seed/resort/800/600', 
    description: 'Designed a premium resort website with room showcase, amenities, gallery, and booking-focused layout. The design reflects a calm beachside experience and helps visitors quickly explore rooms and contact for reservations.',
    highlights: ['Resort room showcase', 'Amenities section', 'Image gallery', 'Booking-focused CTA', 'Mobile responsive layout'],
    link: 'https://blueeyesecoresort.in/'
  },
  { 
    id: 2, 
    name: 'Kapiva', 
    category: 'D2C / Wellness Ecommerce', 
    image: 'https://picsum.photos/seed/wellness/800/600', 
    description: 'Developed a high-converting, modern storefront and layout optimization for Kapiva, a premier modern Ayurvedic brand. The layout focuses on product discovery, clean ingredient storytelling, and frictionless checkout flows.',
    highlights: ['Modern D2C e-commerce layout', 'Ingredient storytelling sections', 'Optimized category landing pages', 'Mobile-first design', 'High conversion optimization'],
    link: 'https://kapiva.in/'
  },
  { 
    id: 3, 
    name: 'Mahindra EV', 
    category: 'Automotive EV Website', 
    description: 'Created a professional automotive-style website with vehicle showcase, brand-focused layout, and inquiry-based conversion flow.',
    highlights: ['Vehicle showcase', 'Automotive UI layout', 'Inquiry form', 'Product highlight sections', 'Clean premium design'],
    link: 'https://www.mahindraelectricsuv.com/'
  },
  { 
    id: 4, 
    name: 'Krishna Ayurveda', 
    category: 'Ayurveda / Wellness Website', 
    image: 'https://picsum.photos/seed/wellness/800/600', 
    description: 'Designed a clean and trust-focused Ayurveda website with product presentation, wellness-focused layout, and easy navigation.',
    highlights: ['Ayurveda brand design', 'Product showcase', 'Clean UI', 'Trust-focused layout', 'Mobile responsive'],
    link: 'https://krishnaayurved.com/'
  },
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-blue-500">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Explore our collection of high-end digital experiences designed to drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-blue-500/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                      {item.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">The Challenge</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Key Deliverables</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {item.highlights?.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-end">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    Visit Website
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
