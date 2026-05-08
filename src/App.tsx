import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        
        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Journey</h2>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-1/4">
                  <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Expertise</span>
                  <h3 className="text-xl font-bold mt-2">Frontend Engineering</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-lg leading-relaxed">
                    With a deep focus on <span className="text-[var(--text-h)] font-medium">React and Next.js</span>, I specialize in building highly performant, accessible, and scalable user interfaces. I have extensive experience in state management, component architecture, and advanced CSS techniques.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-1/4">
                  <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Capabilities</span>
                  <h3 className="text-xl font-bold mt-2">Fullstack Development</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-lg leading-relaxed">
                    Beyond the frontend, I am proficient in <span className="text-[var(--text-h)] font-medium">Laravel, Node.js, and PHP</span>. I build robust APIs, manage complex databases, and handle server-side logic to deliver end-to-end solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-1/4">
                  <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Mobile</span>
                  <h3 className="text-xl font-bold mt-2">App Development</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-lg leading-relaxed">
                    Developed and launched <span className="text-[var(--text-h)] font-medium">Tarpup</span> on the App Store, showcasing my ability to build cross-platform mobile applications using React Native.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
