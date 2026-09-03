import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Sparkles, MessageCircleMore, Send, User, Mail, MessageCircle, X } from 'lucide-react';
import CvLink from './CvLink';

export default function Contact({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });
  const [errorMessage, setErrorMessage] = useState("Oops! Something went wrong. Please try again later.");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

// EMAILJS Service
  const EMAILJS_SERVICE_ID = "service_c2kig83"; 
  const EMAILJS_TEMPLATE_ID = "portfolio_form";
  const EMAILJS_PUBLIC_KEY = "czv52IPTXk6idb8KG";

  const actionButtonClass = `group w-14 h-14 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer shrink-0 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] text-[#f3f4f6] hover:border-indigo-400 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-400/40 bg-[#faf9fc] text-slate-900 hover:border-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`;

  // Send button
  const sendButtonClass = `group w-14 h-14 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer shrink-0 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] text-[#f3f4f6] hover:border-indigo-400 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-400/40 bg-[#faf9fc] text-slate-900 hover:border-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`;

  const socialButtonClass = `group w-14 h-14 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer shrink-0 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] text-[#f3f4f6] hover:border-indigo-400 hover:text-indigo-300 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-400/40 bg-[#faf9fc] text-slate-800 hover:border-indigo-600 hover:text-indigo-700 shadow-[0_4px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`;

  const contactIconClass = `w-7 h-7 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
    darkMode 
      ? 'text-white group-hover:text-indigo-400' 
      : 'text-slate-900 group-hover:text-indigo-600'
  }`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botcheck) {
      return; 
    }

    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      setErrorMessage("Please wait a minute before sending another message.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }

    if (formData.name.trim().length < 2) {
      setErrorMessage("Please enter a valid name.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }

    if (formData.message.trim().length < 32) {
      setErrorMessage("Message is too short. Please write at least 32 characters.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }

    setStatus({ loading: true, success: false, error: false });

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setLastSubmitTime(Date.now());
      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '', botcheck: '' });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMessage("Failed to send message. Please try again later.");
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/vdcode-studio',
      svg: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/vladimir-dejanovic-16700238b',
      svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> 
    },
    { 
      name: 'Discord', 
      href: 'https://discord.com/users/1506806041625624643',
      svg: <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/> 
    },
    { 
      name: 'X', 
      href: 'https://twitter.com',
      svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> 
    }
  ];

  return (
    <section id="contact" className="w-full flex flex-col items-center pt-0 sm:pt-1 md:pt-0 pb-16 md:pb-12 scroll-mt-28">
      <div className={`w-full px-4 sm:px-6 md:px-8 relative transition-all duration-500 ${darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}`}>
        <div className="max-w-3xl md:max-w-none mx-auto text-center space-y-3.5 sm:space-y-4 md:space-y-3 relative z-10 py-1 sm:py-2 md:py-1">
          
          <div className="mb-2 sm:mb-3 px-1 flex items-center justify-center">
            <div className={`font-mono inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border shadow-sm backdrop-blur-sm ${darkMode ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'}`}>
               <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin text-indigo-500 shrink-0" />
               <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase">Let's build something great</span>
            </div>
          </div>
        <h2 className="text-3xl sm:text-4xl md:text-[2.35rem] font-black tracking-tight leading-tight">
             <span className={`block ${darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}`}>Ready to start your</span>
             <span className={`block mt-1 pb-1 text-transparent bg-clip-text bg-gradient-to-r ${
          darkMode 
             ? 'from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]' 
             : 'from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_2px_8px_rgba(99,102,241,0.2)]'
            }`}>
            next project ?
       </span>
        </h2>
 

          <div className="w-full max-w-xl mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent rounded-full my-3.5 sm:my-4"></div>

      <div className={`w-full max-w-xl mx-auto p-3.5 sm:p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${darkMode ? 'border-indigo-500/30 bg-[#12141c]/40 text-slate-300 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]' : 'border-indigo-200/90 bg-white/60 text-slate-700 shadow-[0_6px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]'}`}>
            <p className="block md:hidden text-xs sm:text-sm leading-relaxed font-medium">
              Whether you have an exciting project,<br />
              backend challenge or an opportunity,<br />
              my inbox is always open.
            </p>
            <p className="hidden md:block text-[0.95rem] leading-relaxed font-medium">
              Whether you have an exciting project, backend challenge or an opportunity, my inbox is always open.
            </p>
          </div>

 
          <div className="flex items-center justify-center gap-4 pt-2 pb-3 sm:pb-4 mt-6 sm:mt-7 mb-4 sm:mb-5">
            <button onClick={() => setIsOpen(true)} className={actionButtonClass} title="Get in touch">
              <MessageCircleMore className={contactIconClass} />
            </button>
            <CvLink className={actionButtonClass} title="Download CV" darkMode={darkMode} variant="hero" />
          </div>

          <div className="w-full max-w-[200px] mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent rounded-full mb-3 sm:mb-4"></div>

          <div className="pt-1 sm:pt-2">
            <p className={`text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-4 sm:mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Connect Across Platforms</p>
            <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 mt-5 md:mt-0">
              {socialLinks.map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noreferrer" className={socialButtonClass} title={item.name}>
                  <svg className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">{item.svg}</svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto ${darkMode ? 'bg-black/60 backdrop-blur-md' : 'bg-slate-900/40 backdrop-blur-md'}`}>
          <div onClick={(e) => e.stopPropagation()} className={`w-full max-w-lg md:max-w-lg p-6 sm:p-10 md:p-8 rounded-[2.5rem] border relative my-auto overflow-hidden ${darkMode ? 'border-indigo-500/35 bg-[#12131c] text-[#f3f4f6] shadow-[0_20px_50px_rgba(0,0,0,0.95)]' : 'border-indigo-200 bg-white text-slate-900 shadow-[0_20px_40px_rgba(99,102,241,0.15)]'}`}>
            {darkMode && (
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            )}

        <button 
  onClick={() => setIsOpen(false)} 
  title="Close" 
  aria-label="Close" 
  className={`group absolute top-4 right-4 sm:top-6 sm:right-6 md:top-6 md:right-6 p-2 rounded-full border transition-all duration-300 z-20 cursor-pointer hover:rotate-90 hover:scale-110 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#08090e]/80 text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10' 
      : 'border-indigo-200 bg-slate-100/80 text-slate-500 hover:text-red-600 hover:border-red-300 hover:bg-red-50'
  }`}
>
  <X className="w-4 h-4 shrink-0 transition-colors duration-300" />
</button>

            <div className="mb-6 md:mb-6 pr-8 relative z-10">
              <div className={`font-mono inline-flex items-center px-4 py-2 rounded-full border shadow-sm backdrop-blur-sm mb-3.5 ${darkMode ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'}`}>
                <span className="text-xs font-bold tracking-wider uppercase">CONTACT</span>
               </div>
            </div>

            {status.success ? (
              <div className="py-8 md:py-8 text-center flex flex-col items-center relative z-10">
                <div className="w-12 h-12 md:w-12 md:h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-3 border border-emerald-500/30 text-lg md:text-xl font-bold">✓</div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Message Sent Successfully!</h4>
                <p className={`text-sm md:text-sm mb-6 md:mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Thank you for reaching out. I'll get back to you soon.<br/> Please check your Spam folder.</p>
                <div className="flex justify-center w-full">
                  <button onClick={() => { setIsOpen(false); setStatus({ loading: false, success: false, error: false }); }} className={`group px-6 md:px-6 py-2.5 md:py-3 font-semibold text-sm md:text-sm rounded-xl border transition-all duration-300 cursor-pointer ${darkMode ? 'border-indigo-500/35 bg-[#08090e] hover:bg-indigo-500/15 hover:border-indigo-400 text-slate-200' : 'border-indigo-200 bg-slate-100 hover:bg-slate-200 text-slate-800'}`}>
                    <span>Close</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-4 relative z-10">
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="botcheck" id="botcheck" value={formData.botcheck} onChange={(e) => setFormData({...formData, botcheck: e.target.value})} tabIndex="-1" autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="flex items-center gap-1.5 text-xs md:text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-indigo-400 cursor-pointer">
                    <User className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Name</span>
                  </label>
                  <input type="text" id="name" name="name" autoComplete="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-4 md:px-4 py-3 md:py-3 rounded-xl border text-[16px] md:text-sm focus:outline-none transition-all duration-300 ${darkMode ? 'bg-[#08090e] border-indigo-500/35 text-[#f3f4f6] focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-slate-50 border-indigo-200 text-slate-900 focus:border-indigo-500'}`} />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-1.5 text-xs md:text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-indigo-400 cursor-pointer">
                    <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Email</span>
                  </label>
                  <input type="email" id="email" name="email" autoComplete="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full px-4 md:px-4 py-3 md:py-3 rounded-xl border text-[16px] md:text-sm focus:outline-none transition-all duration-300 ${darkMode ? 'bg-[#08090e] border-indigo-500/35 text-[#f3f4f6] placeholder:text-slate-600 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-slate-50 border-indigo-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500'}`} />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-1.5 text-xs md:text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-indigo-400 cursor-pointer">
                    <MessageCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Message</span>
                  </label>
                  <textarea id="message" name="message" autoComplete="off" rows="4" required minLength="32" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Min 32 characters..." className={`w-full px-4 md:px-4 py-3 md:py-3 rounded-xl border text-[16px] md:text-sm resize-none focus:outline-none transition-all duration-300 ${darkMode ? 'bg-[#08090e] border-indigo-500/35 text-[#f3f4f6] placeholder:text-slate-600 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-slate-50 border-indigo-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500'}`}></textarea>
                </div>

                {status.error && <p className="text-xs md:text-xs text-red-400 text-center font-medium">{errorMessage}</p>}
                
<div className="flex justify-center mt-2">
  {/* Send Button sa tekstom i hover animacijom */}
<button 
  type="submit" 
  disabled={status.loading} 
  title="Send Message" 
  aria-label="Send Message" 
  className={`group px-6 py-3 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] text-indigo-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/15 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-400/40 bg-[#faf9fc] text-indigo-700 hover:text-slate-950 hover:border-indigo-600 hover:bg-indigo-50 shadow-[0_4px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`}
>
  {status.loading ? (
    <span className="text-xs font-mono font-bold animate-pulse px-1">Sending...</span>
  ) : (
    <>
      <span className="text-xs font-mono font-bold uppercase tracking-wider leading-none">Send</span>
      <Send className={`relative top-[0.5px] transition-all duration-300 shrink-0 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-0.5 ${
        darkMode 
          ? 'w-4 h-4 text-indigo-300 group-hover:text-white' 
          : 'w-4 h-4 text-indigo-700 group-hover:text-slate-950'
      }`} />
    </>
  )}
</button>
</div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}