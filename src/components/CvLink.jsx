import React from 'react';

export default function CvLink({ className, title, darkMode, variant = 'footer' }) {
  const isHero = variant === 'hero' || (className && className.includes('rounded-2xl'));

  // Svetli mod: Crni simbol -> Indigo na hover | Tamni mod: Beli simbol -> Svetlo plav na hover
  const iconColorClasses = darkMode 
    ? 'text-white group-hover:text-indigo-400' 
    : 'text-slate-900 group-hover:text-indigo-600';

  return (
    <a 
      href="/cv.pdf" 
      download 
      title={title || "Download CV"} 
      className={`${className} group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center`}
    >
      {isHero ? (
        /* HERO - Veličina w-7 h-7 (28px) sa crnim simbolom u light temi */
        <svg 
          className={`w-7 h-7 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${iconColorClasses}`} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ) : (
        /* FOOTER - Veličina w-6 h-6 (24px) */
        <svg 
          className={`w-6 h-6 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${iconColorClasses}`} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )}
    </a>
  );
}