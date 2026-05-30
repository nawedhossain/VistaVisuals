import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Pricing() {
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Simple <span className="text-blue-500">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            One premium package designed to cover everything your business needs to succeed online.
          </motion.p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setCurrency('INR')}
              className={cn(
                "px-8 py-3 rounded-lg font-bold transition-all",
                currency === 'INR' ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={cn(
                "px-8 py-3 rounded-lg font-bold transition-all",
                currency === 'USD' ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              USD
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch animate-fade-in">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-[40px] bg-white/5 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included?</h2>
                <p className="text-gray-400 mb-10 text-lg">
                  Our comprehensive package is designed to provide you with a high-end, 
                  conversion-optimized website that drives real business results.
                </p>
                <ul className="space-y-4">
                  {[
                    'Custom Premium Design',
                    'Mobile Responsive Layout',
                    'On-page SEO Optimization',
                    'Lightning Fast Loading Speed',
                    'Contact Form Integration',
                    'WhatsApp Chat Integration',
                    '14 Day Money Back Guarantee',
                    'Basic Analytics Setup',
                    'Free 3yrs Cloud Hosting & Domain',
                    '3 Months Free Support'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 rounded-[40px] bg-gradient-to-b from-blue-600 to-purple-700 shadow-2xl shadow-blue-500/20 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap size={120} fill="currentColor" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  Premium Package
                </div>
                <h3 className="text-3xl font-bold mb-2">Professional Website</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-bold">{currency === 'INR' ? '₹35,000' : '$400'}</span>
                  <span className="text-white/70">/project</span>
                </div>
                <p className="text-white/80 mb-10 text-lg leading-relaxed">
                  Perfect for businesses looking to establish a premium digital presence and convert more visitors into leads.
                </p>
              </div>
              
              <div className="relative z-10 space-y-4">
                <a
                  href="https://calendly.com/vistavisuals/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white text-black rounded-2xl font-bold text-center hover:bg-black hover:text-white transition-all duration-300 text-lg"
                >
                  Start Your Project
                </a>
                <a
                  href="https://wa.me/918260409721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-center hover:bg-white/20 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.05)] relative overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/30">
                  Custom Solutions
                </div>
                <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Custom</span>
                </div>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                  Tailored high-performance infrastructure, deep integrations, and advanced automation for scaling organizations.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'All Goodness of Pro Plan',
                    'AI Automations & Agents',
                    'Dedicated Server / Cloud Instance',
                    '24/7 Premium Priority Support',
                    'CloudFlare CDN & Enterprise Guard',
                    'Custom API & CRM Syncing',
                    'Bi-weekly Growth & Conversion Audits',
                    'Multi-language Support (i18n)'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className={cn("flex-shrink-0", item === 'All Goodness of Pro Plan' ? "text-purple-400 font-bold" : "text-purple-400")} />
                      <span className={cn("text-sm font-medium", item === 'All Goodness of Pro Plan' ? "text-white font-bold" : "text-gray-300")}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative z-10 space-y-4">
                <a
                  href="https://calendly.com/vistavisuals/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-center hover:opacity-90 transition-all duration-300 text-lg shadow-lg shadow-purple-500/15"
                >
                  Book Free Consultation
                </a>
                <a
                  href="https://wa.me/918260409721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white/5 text-gray-300 border border-white/10 rounded-2xl font-bold text-center hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-32 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: 'How long does it take to build a website?', a: 'Typically, a professional business website takes 7-14 days depending on the complexity and content availability.' },
              { q: 'Do I need to provide the content?', a: 'While we can help with basic copywriting, we recommend providing your business-specific content for the best results.' },
              { q: 'Is there any monthly fee?', a: 'No, we don\'t charge any monthly fees. You only pay for the project. However, you will need to renew your hosting and domain annually.' },
              { q: 'What if I\'m not satisfied?', a: 'We offer a 14-day money-back guarantee. If you\'re not happy with the initial design, we\'ll refund your payment, no questions asked.' }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5"
              >
                <h4 className="text-xl font-bold mb-3 text-white">{faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
