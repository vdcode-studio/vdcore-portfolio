import React, { useRef } from 'react';
import { Sun, Moon, UserCheck, Layers, FolderKanban, Send } from 'lucide-react';

export default function Navbar({ activeMobileSection, setActiveMobileSection, darkMode, setDarkMode }) {
  
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef(null);

  const navItems = [
    { name: 'About', id: 'about', svg: <UserCheck className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 shrink-0" /> },
    { name: 'Skills', id: 'skills', svg: <Layers className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 shrink-0" /> }, 
    { name: 'Projects', id: 'projects', svg: <FolderKanban className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 shrink-0" /> },
    { name: 'Contact', id: 'contact', svg: <Send className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 shrink-0" /> }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    if (isClickScrolling.current) return;
    isClickScrolling.current = true;

    // 1. Skroluj glatko do željene sekcije
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // 2. Ažuriraj URL u adresnoj trci sa hešom (ispravno)
    window.history.pushState(null, '', `#${id}`);

    if (setActiveMobileSection) {
      setActiveMobileSection(id);
    }

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 400);
  };

  return (
    <>
      {/* 1. TOP NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-150 ${
        darkMode 
          ? 'md:border-b md:border-white/[0.08] md:bg-[#000000]/95 bg-[#000000]/70 backdrop-blur-xl md:shadow-black/80 text-[#f3f4f6]' 
          : 'md:border-b md:border-slate-200/80 md:bg-white/90 bg-transparent backdrop-blur-xl md:shadow-slate-200/50 text-slate-800'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 h-16 md:h-16 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center">
             <a 
               href="#about" 
               onClick={(e) => handleNavClick(e, 'about')}
               className="group flex items-center cursor-pointer py-1"
             >
                <img 
                  src={darkMode ? "/darklogo1.png" : "/lightlogo1.png"} 
                  alt="VDCore Logo" 
                  className="h-10 sm:h-12 md:h-11 max-h-[44px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
             </a>
          </div>

          {/* PC NAV & THEME TOGGLE */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center space-x-2 text-sm font-semibold">
              {navItems.map((item) => {
                const isActive = activeMobileSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`group px-4 py-2 rounded-2xl text-sm flex items-center gap-2 transition-all duration-150 cursor-pointer ${
                      isActive 
                        ? (darkMode 
                          ? 'bg-[#181c27] text-indigo-300 border border-indigo-500/30 shadow-sm scale-[1.02]' 
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm scale-[1.02]')
                        : (darkMode
                          ? 'text-[#f3f4f6] hover:text-indigo-300 hover:bg-white/5 border border-transparent'
                          : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100 border border-transparent')
                    }`}
                  >
                    {item.svg}
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-2xl border transition-all duration-150 cursor-pointer ${
                darkMode 
                  ? 'border-indigo-500/35 bg-[#12131c] text-amber-400 hover:border-indigo-400 shadow-[0_4px_16px_rgba(0,0,0,0.8)]' 
                  : 'border-slate-200 text-slate-700 hover:border-indigo-300 bg-transparent'
              }`}
              title="Toggle Theme"
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Sun className={`absolute w-4 h-4 transition-all duration-200 ${darkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                <Moon className={`absolute w-4 h-4 transition-all duration-200 ${darkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
              </div>
            </button>
          </div>

          {/* MOBILE THEME BUTTON */}
          <div className="md:hidden flex items-center mr-1">
             <button 
               onClick={() => setDarkMode(!darkMode)}
               className={`p-2.5 rounded-xl border transition-all duration-150 ${
                 darkMode 
                   ? 'border-indigo-500/35 bg-[#12131c] text-amber-400 shadow-[0_2px_8px_rgba(0,0,0,0.5)]' 
                   : 'border-indigo-400/40 bg-[#faf9fc] text-slate-700 shadow-[0_2px_8px_rgba(99,102,241,0.06)]'
               }`}
               title="Toggle Theme"
             >
               <div className="relative w-4 h-4 flex items-center justify-center">
                 <Sun className={`absolute w-4 h-4 transition-all duration-200 ${darkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                 <Moon className={`absolute w-4 h-4 transition-all duration-200 ${darkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
               </div>
             </button>
          </div>

        </div>
      </nav>

      {/* MOBILE BOTTOM BAR (DOCK) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-[999] pointer-events-auto">
        <div className={`relative py-3 px-4 backdrop-blur-xl flex justify-around items-center transition-colors duration-150 ${
          darkMode 
            ? 'bg-[#000000]/95 text-[#f3f4f6] shadow-[0_-10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-white/95 text-slate-700 shadow-[0_-5px_20px_rgba(0,0,0,0.08)]'
        }`}>
          
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"></div>

          {navItems.map((item) => {
            const isMobileActive = activeMobileSection === item.id;
            return (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transform transition-transform duration-150 ease-out cursor-pointer active:scale-95 ${
                  isMobileActive 
                    ? 'text-indigo-400 font-bold scale-105 translate-y-[-2px]' 
                    : darkMode 
                      ? 'text-slate-400 hover:text-slate-200' 
                      : 'text-slate-600 font-medium hover:text-slate-900'
                }`}
              >
                {item.svg}
                <span className="text-[10px] sm:text-[11px] font-sans mt-0.5 tracking-tight">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}