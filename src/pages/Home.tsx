import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Globe, 
  Layout as LayoutIcon, 
  ShoppingCart, 
  MessageCircle, 
  ChevronRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const portfolioItems = [
  { 
    id: 1, 
    name: 'Blueeyes Eco Resort', 
    category: 'Resort & Hospitality Website', 
    description: 'Designed a premium resort website with room showcase, amenities, gallery, and booking-focused layout.'
  },
  { 
    id: 2, 
    name: 'n8n LaunchPad', 
    category: 'SaaS / Tech Website', 
    description: 'Built a modern SaaS-style website for a managed n8n hosting platform.'
  },
  { 
    id: 3, 
    name: 'Mahindra Auto', 
    category: 'Automotive Website', 
    description: 'Created a professional automotive-style website with vehicle showcase and inquiry-based conversion flow.'
  },
  { 
    id: 4, 
    name: 'Krishna Ayurveda', 
    category: 'Ayurveda / Wellness Website', 
    description: 'Designed a clean and trust-focused Ayurveda website with product presentation and easy navigation.'
  },
];

const services = [
  { title: 'Professional Website Design', icon: Globe, description: 'Custom-crafted websites that reflect your brand identity and values.' },
  { title: 'Business Website', icon: LayoutIcon, description: 'Complete digital presence for established businesses and startups.' },
  { title: 'Landing Pages', icon: Zap, description: 'High-converting pages designed to turn visitors into loyal customers.' },
  { title: 'Ecommerce Website', icon: ShoppingCart, description: 'Scalable online stores with seamless payment and inventory management.' },
];

const trustPoints = [
  { title: '14 Day Money Back Guarantee', icon: ShieldCheck },
  { title: 'Professional Design', icon: Star },
  { title: 'Fast Delivery', icon: Clock },
  { title: 'Conversion Focused', icon: TrendingUp },
];

const testimonials = [
  {
    quote: "Vista Visuals transformed our online presence. The new website is not only beautiful but also drives significantly more leads than our old one.",
    author: "Rama Chandra",
    company: "Blueeyes Eco Resort",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9W7-_cc6aw3XSD_bblNi3_85dmoIaDqiChg&s"
  },
  {
    quote: "The speed and professionalism of the team are unmatched. They delivered a high-converting landing page in record time.",
    author: "Nawed Hossain",
    company: "n8n LaunchPad",
    image: "https://yt3.googleusercontent.com/SH5wynKI1TEsYmCRO8Sea1gtNy3Tl2DNeJRQlzmHnLYSEJOibp4QxUtwFIpDZwRX-FMVpKNWgaE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    quote: "I was skeptical about the 14-day guarantee, but they exceeded my expectations. The design is premium and reflects our brand perfectly.",
    author: "Dr. Anjali Sharma",
    company: "Krishna Ayurveda",
    image: "https://i.pravatar.cc/150?u=anjali"
  }
];

const whyChooseUs = [
  { title: 'Premium Design', description: 'We don\'t use templates. Every design is custom-made for your brand.' },
  { title: 'Conversion Focused', description: 'Our designs are backed by psychology to drive more sales and leads.' },
  { title: 'Fast Turnaround', description: 'Get your professional website delivered in record time without compromising quality.' },
  { title: 'Money Back Guarantee', description: 'Not satisfied? We offer a 14-day money-back guarantee, no questions asked.' },
  { title: 'Dedicated Support', description: 'We are here for you even after the project is completed.' },
];

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function Home() {
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8"
          >
            <Star size={16} fill="currentColor" />
            <span>Premium Web Design Agency</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            We Design Professional <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Websites That Convert
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Premium business websites with fast delivery and 14-day money back guarantee. 
            Elevate your digital presence today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/portfolio"
              className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-black/40 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <point.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg leading-tight">{point.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide comprehensive digital solutions to help your business thrive in the modern world."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact" className="text-blue-500 font-semibold flex items-center gap-2 group/link">
                  Learn More
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionHeader 
                title="Selected Projects" 
                subtitle="A showcase of our recent work for clients across various industries."
                centered={false}
              />
            </div>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold flex items-center gap-2 mb-16"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-[32px] p-8 md:p-10 bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -mr-24 -mt-24 group-hover:bg-blue-500/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <Link to="/portfolio" className="text-blue-500 font-bold flex items-center gap-2 group/link">
                      View Case Study
                      <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-500 transition-colors">
                      <Zap size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what business owners have to say about working with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full border border-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Simple, Transparent Pricing" 
            subtitle="One premium package designed to cover everything your business needs."
          />
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setCurrency('INR')}
                className={cn(
                  "px-6 py-2 rounded-lg font-bold transition-all",
                  currency === 'INR' ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
              >
                INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={cn(
                  "px-6 py-2 rounded-lg font-bold transition-all",
                  currency === 'USD' ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
              >
                USD
              </button>
            </div>
          </div>
          
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[40px] bg-gradient-to-b from-blue-600 to-purple-700 shadow-2xl shadow-blue-500/20"
            >
              <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional Website Design</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold">{currency === 'INR' ? '₹35,000' : '$400'}</span>
                <span className="text-white/70">/project</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Custom Design',
                  'Mobile Responsive',
                  'SEO Friendly',
                  'Fast Loading',
                  'Contact Form',
                  'WhatsApp Integration',
                  'Free 3yrs Cloud Hosting & Domain',
                  '14 Day Money Back Guarantee'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-white" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="block w-full py-5 bg-white text-black rounded-2xl font-bold text-center hover:bg-black hover:text-white transition-all duration-300"
              >
                Start Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                title="Why Choose Vista Visuals?" 
                subtitle="We don't just build websites; we build growth engines for your business."
                centered={false}
              />
              <div className="space-y-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-[100px]" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[40px] overflow-hidden border border-white/10 bg-black/40 p-2"
              >
                <img 
                  src="https://picsum.photos/seed/agency/800/1000" 
                  alt="Agency Work"
                  referrerPolicy="no-referrer"
                  className="rounded-[32px] w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              Ready to get your <br />
              professional website?
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join dozens of successful businesses that have transformed their digital presence with Vista Visuals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Book Free Call
              </Link>
              <a
                href="https://wa.me/918260409721"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={24} fill="currentColor" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
