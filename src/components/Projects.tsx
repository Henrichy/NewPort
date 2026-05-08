import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "Tarpup",
    description: "A comprehensive social platform and audience management tool. Available on App Store.",
    link: "https://tarpup.ai",
    type: "Mobile App & Web",
    tags: ["React Native", "Next.js", "AI", "Node.js"],
    isApp: true
  },
  {
    title: "AdoDrive",
    description: "Professional platform for vehicle management and driving services.",
    link: "https://adodrive.com",
    type: "Web Application",
    tags: ["React", "Laravel", "Tailwind CSS"],
    isApp: false
  },
  {
    title: "AccVault NG",
    description: "Secure accounting and financial management platform.",
    link: "https://accvaultng.com",
    type: "Web Application",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    isApp: false
  },
  {
    title: "Flight Authenticator",
    description: "Travel verification and authentication system.",
    link: "https://flightauthenticator.com",
    type: "Web Application",
    tags: ["React", "Node.js", "API Integration"],
    isApp: false
  },
  {
    title: "Carlos Delivery",
    description: "A high-performance e-commerce platform for seamless delivery and shopping experiences.",
    link: "https://Carlosdelivery.com",
    type: "Web Application",
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    isApp: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-[var(--text)] max-w-xl">
              A selection of projects ranging from enterprise web applications to consumer mobile apps.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-sm">Web</span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-sm">Mobile</span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-sm">Fullstack</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                    {project.isApp ? <Smartphone size={24} /> : <ExternalLink size={24} />}
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--social-bg)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text)] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  Visit Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
