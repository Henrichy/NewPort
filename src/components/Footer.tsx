const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[var(--text)] text-sm">
          © {new Date().getFullYear()} Henry Nzekwe. Built with React & Tailwind CSS.
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-[var(--accent)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
