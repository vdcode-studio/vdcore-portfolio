import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer({ darkMode, scrollToSection }) {
  
  const squareButtonClass = `group relative w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] hover:border-indigo-400 shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-300/80 bg-[#f4f2ff] hover:border-indigo-500 shadow-[0_4px_14px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`;

  const arrowIconClass = `w-5 h-5 shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 ${
    darkMode 
      ? 'text-white group-hover:text-indigo-400' 
      : 'text-slate-900 group-hover:text-indigo-600'
  }`;

  return (
    /* Postavljeno tačno na pola puta (md:-mt-6) */
    <footer className="hidden md:block w-full mt-0 md:-mt-6 py-4 relative transition-colors duration-300 backdrop-blur-xl bg-transparent z-20">
      
      {/* FOOTER GRADIENT LINE */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${
        darkMode ? 'via-indigo-500/50' : 'via-indigo-400/60'
      } to-transparent`}></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-3 text-xs">
          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <span className="text-indigo-500">•</span>
          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
            Designed & Built by <span className={`font-extrabold tracking-tight select-none ${darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}`}>VDCore<span className="text-indigo-500">.</span></span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className={`font-mono inline-flex items-center gap-1.5 px-3 py-1 rounded-full border shadow-sm backdrop-blur-sm ${
            darkMode 
              ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
              : 'bg-indigo-50 border-indigo-200/90 text-indigo-700'
          }`}>
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse shrink-0" />
            <span className="text-[10px] font-bold tracking-wide uppercase">ONLINE</span>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            title="Scroll to top" 
            className={squareButtonClass}
          >
            <svg className={arrowIconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}