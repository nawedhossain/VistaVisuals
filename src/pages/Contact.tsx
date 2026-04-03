import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      businessName: formData.get('businessName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      details: formData.get('details'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState('success');
      } else {
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        setFormState('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Failed to connect to the server. Please check your connection.');
      setFormState('error');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Get In <span className="text-blue-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Ready to start your project? Fill out the form below or reach out to us directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email Us</h4>
                    <p className="text-gray-400 text-lg">care@vistavisuals.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <p className="text-gray-400 text-lg">+91 82604 09721</p>
                    <p className="text-gray-400 text-lg">Mon - Sat, 10am - 7pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Our Office</h4>
                    <p className="text-gray-400 text-lg">
                      14-15/1, Kamaraj Rd, Tasker Town,<br />
                      Shivaji Nagar, Bengaluru, Karnataka 560042
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[40px] bg-gradient-to-br from-blue-600 to-purple-700 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Chat?</h3>
              <p className="text-white/80 mb-8 text-lg">
                Prefer a faster way to communicate? Message us on WhatsApp for an instant response.
              </p>
              <a
                href="https://wa.me/918260409721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition-all"
              >
                <MessageCircle size={20} fill="currentColor" />
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 md:p-12 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden"
          >
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-gray-400 text-lg mb-10">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Business Name</label>
                    <input 
                      required
                      name="businessName"
                      type="text" 
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="care@vistavisuals.in"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="+91 82604 09721"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Project Details</label>
                  <textarea 
                    required
                    name="details"
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {formState === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formState === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
