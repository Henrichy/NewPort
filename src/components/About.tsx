import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import picture from '../assets/picture.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[var(--accent)]/20 rounded-2xl blur-xl group-hover:bg-[var(--accent)]/30 transition-all duration-500" />
              <img 
                src={picture} 
                alt="Profile" 
                className="relative rounded-2xl w-full h-auto object-cover border-2 border-[var(--border)] shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-[var(--text)] leading-relaxed mb-8">
              <p>
                Hello! I'm <span className="text-[var(--text-h)] font-semibold">Henry Nzekwe</span>, a passionate Fullstack Developer with a keen eye for Frontend Engineering. I love building digital products that are not only functional but also provide a delightful user experience.
              </p>
              <p>
                My journey in tech has led me to work with a diverse range of technologies, from modern frontend frameworks like <span className="text-[var(--text-h)] font-medium">React and Next.js</span> to robust backend solutions using <span className="text-[var(--text-h)] font-medium">Laravel and Node.js</span>.
              </p>
              <p>
                I'm also the creator of <span className="text-[var(--accent)] font-semibold">Tarpup</span>, a social platform available on the App Store, which demonstrates my capability in mobile app development using React Native.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my journey on social media.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="https://drive.google.com/file/d/1CFxB-q4wjU5GZxLMwB61B_2FD8noEiiQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-[var(--accent)]/20 group"
              >
                <FileText size={20} />
                Download CV
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
