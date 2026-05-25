import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Rocket, Heart, Star, Award, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '150+', icon: Rocket },
  { label: 'Happy Clients', value: '120+', icon: Heart },
  { label: 'Years Experience', value: '5+', icon: Star },
  { label: 'Conversion Rate', value: '25%+', icon: Award },
];

const values = [
  { title: 'Excellence', description: 'We strive for perfection in every pixel and line of code.', icon: ShieldCheck },
  { title: 'Innovation', description: 'We stay ahead of digital trends to provide cutting-edge solutions.', icon: Zap },
  { title: 'Transparency', description: 'Clear communication and honest pricing are our core principles.', icon: Users },
  { title: 'Results', description: 'We measure our success by the growth and success of our clients.', icon: Target },
];

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              We Build <span className="text-blue-500">Digital Engines</span> For Growth
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Vista Visuals is a premium web design agency dedicated to helping businesses establish 
              a powerful online presence. We combine creative design with conversion-focused strategy 
              to deliver websites that don't just look good—they perform.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed">
              Our mission is to empower businesses with high-end digital solutions that drive growth, 
              build trust, and create lasting impressions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-[100px]" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/team/800/800" 
                alt="Our Team"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              The principles that guide our work and define our relationship with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-8">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 md:p-24 rounded-[60px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Vision</h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto italic">
            "To become the world's most trusted partner for businesses seeking to transform their digital presence 
            into a powerful asset for growth and success."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
