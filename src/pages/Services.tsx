import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Layout as LayoutIcon, 
  Zap, 
  ShoppingCart, 
  Search, 
  Smartphone, 
  BarChart3, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    title: 'Professional Website Design', 
    icon: Globe, 
    description: 'Custom-crafted websites that reflect your brand identity and values. We focus on aesthetics and usability to create a lasting impression.',
    features: ['Custom UI/UX Design', 'Brand Integration', 'Interactive Elements', 'Modern Typography']
  },
  { 
    title: 'Business Website', 
    icon: LayoutIcon, 
    description: 'Complete digital presence for established businesses and startups. Designed to build trust and showcase your services effectively.',
    features: ['Multi-page Structure', 'Service Showcases', 'Team Profiles', 'Testimonial Sections']
  },
  { 
    title: 'Landing Pages', 
    icon: Zap, 
    description: 'High-converting pages designed to turn visitors into loyal customers. Perfect for marketing campaigns and product launches.',
    features: ['Conversion Optimization', 'A/B Testing Ready', 'Fast Loading Speed', 'Clear Call-to-Actions']
  },
  { 
    title: 'Ecommerce Website', 
    icon: ShoppingCart, 
    description: 'Scalable online stores with seamless payment and inventory management. We build stores that sell.',
    features: ['Product Management', 'Secure Checkout', 'Payment Integration', 'Order Tracking']
  },
  { 
    title: 'SEO Optimization', 
    icon: Search, 
    description: 'Improve your visibility on search engines and drive organic traffic to your website.',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Tuning']
  },
  { 
    title: 'Mobile Responsive', 
    icon: Smartphone, 
    description: 'Your website will look and function perfectly on all devices, from desktops to smartphones.',
    features: ['Fluid Layouts', 'Touch Optimization', 'Cross-browser Support', 'Adaptive Images']
  },
  { 
    title: 'Analytics & Tracking', 
    icon: BarChart3, 
    description: 'Understand your visitors and track conversions with integrated analytics tools.',
    features: ['Google Analytics', 'Heatmaps', 'Conversion Tracking', 'Monthly Reports']
  },
  { 
    title: 'Maintenance & Support', 
    icon: ShieldCheck, 
    description: 'We provide ongoing support and maintenance to keep your website secure and up-to-date.',
    features: ['Security Updates', 'Regular Backups', 'Content Updates', 'Technical Support']
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-blue-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            We offer a wide range of digital services to help your business grow and succeed online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[60px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10"
          >
            <h2 className="text-4xl font-bold mb-6">Need a custom solution?</h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              We can tailor our services to meet your specific business requirements and goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
