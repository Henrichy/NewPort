import { motion } from 'framer-motion';
import { ArrowRight, Send, MessageCircle, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] text-sm font-medium mb-6">
            Henry Nzekwe — Fullstack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl text-left">
            Building exceptional <span className="text-[var(--accent)]">digital experiences</span> with a focus on fullstack development.
          </h1>
          <p className="text-xl text-[var(--text)] mb-10 max-w-2xl text-left leading-relaxed">
            I'm a fullstack engineer with a passion for creating beautiful, responsive, and user-centric web and mobile applications. Specializing in React, Next.js, and modern fullstack technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a 
                href="https://x.com/henrichyp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                title="Twitter"
              >
                <Send size={24} />
              </a>
              <a 
                href="https://wa.me/2347064761627" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="mailto:henrynzekwe25@gmail.com" 
                className="p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
