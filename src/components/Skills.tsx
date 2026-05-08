import { motion } from 'framer-motion';
import { Layout, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    category: "Frontend Engineering",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Laravel", "PHP", "Express", "Python"]
  },
  {
    category: "Mobile & Database",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["React Native", "PostgreSQL", "MongoDB", "MySQL", "Redis"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[var(--accent-bg)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Proficiency</h2>
          <p className="text-[var(--text)] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life, with a strong emphasis on frontend performance and user experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--text)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
