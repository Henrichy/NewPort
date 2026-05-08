import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <br/> <span className="text-[var(--accent)]">amazing together.</span></h2>
        <p className="text-xl text-[var(--text)] mb-12 max-w-2xl mx-auto">
          Currently open for new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="mailto:henrynzekwe25@gmail.com"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-[var(--accent)]/20"
          >
            <Mail size={20} /> Send an Email
          </a>
          <a 
            href="https://wa.me/2347064761627"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border)] rounded-xl font-medium hover:bg-[var(--social-bg)] transition-all"
          >
            <MessageCircle size={20} /> WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
