import React, { useState } from 'react';
import { Sparkles, MessageCircleMore, Terminal, Minus, Square, X } from 'lucide-react';
import CvLink from './CvLink';

export default function Hero({ setActiveMobileSection, darkMode }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMinimized, setIsMinimized] = useState(false);
  const [terminalState, setTerminalState] = useState('active'); // 'active' or 'closed'
  const [isGlitching, setIsGlitching] = useState(false);


  const actionButtonClass = `group w-14 h-14 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer shrink-0 ${
    darkMode 
      ? 'border-indigo-500/30 bg-[#12131c] text-[#f3f4f6] hover:border-indigo-400 shadow-[0_12px_40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]' 
      : 'border-indigo-400/40 bg-[#faf9fc] text-slate-900 hover:border-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
  }`;

  const contactIconClass = `w-7 h-7 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
    darkMode 
      ? 'text-white group-hover:text-indigo-400' 
      : 'text-slate-900 group-hover:text-indigo-600'
  }`;

  // Animation X button
  const handleTerminalClose = () => {
    setTerminalState('closed');
    setTimeout(() => {
      setTerminalState('active');
    }, 3000); // auto reboot after 3 sec
  };

  // Maximize / Restore + Glitch animation (Square button)
  const handleMaximize = () => {
    setIsMinimized(false); // Maximize terminal if it was minimized
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 450);
  };

  return (
    <section 
      id="about" 
      className="w-full flex flex-col justify-center items-center pt-0 sm:pt-1 md:pt-2 pb-12 sm:pb-14 md:min-h-[calc(100vh-140px)]"
    >
      <div className={`w-full px-4 sm:px-12 md:px-16 flex flex-col justify-center transition-all duration-500 relative pt-0 sm:pt-1 ${
        darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'
      }`}>
        
        <div className="w-full flex flex-col md:grid md:grid-cols-12 gap-5 sm:gap-6 md:gap-12 items-center relative z-10">
          
          {/* MOBILNI PROFILE HEADER */}
          <div className="flex md:hidden items-center gap-4.5 w-full justify-start pt-0">
            <div className="relative flex justify-center items-center shrink-0">
              <div className={`absolute w-28 h-28 rounded-full blur-2xl pointer-events-none ${
                darkMode 
                  ? 'bg-gradient-to-tr from-indigo-600/50 via-purple-600/40 to-pink-500/30' 
                  : 'bg-black/10'
              }`}></div>
              
              <div className={`relative rounded-full overflow-hidden shrink-0 ${
                darkMode 
                  ? 'shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(99,102,241,0.3)]' 
                  : 'shadow-[0_10px_25px_rgba(0,0,0,0.2)]'
              }`} style={{ width: '6.5rem', height: '6.5rem' }}>
                <img src="/avatar.JPG" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col text-left justify-center">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest mb-1">
                <span>&gt;_ Hi, I am</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight mb-2">Vladimir</span>
              
              <div className={`inline-flex font-mono items-center gap-1.5 px-3 py-1 rounded-full border shadow-sm backdrop-blur-sm self-start ${
                darkMode 
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
                  : 'bg-indigo-50 border-indigo-200/90 text-indigo-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5 animate-spin text-indigo-500 shrink-0" />
                <span className="text-[10px] font-bold tracking-wide uppercase">Available for roles</span>
              </div>
            </div>
          </div>

          {/* PC Picture */}
          <div className="hidden md:flex w-full md:col-span-5 md:pl-16 flex-col items-center md:items-center order-first md:order-last group">
            <div className="relative w-full flex justify-center items-center">
              <div className={`absolute w-32 h-32 sm:w-52 sm:h-52 md:w-auto md:h-auto md:inset-[-14px] rounded-[2.5rem] pointer-events-none transition duration-1000 ${
                darkMode 
                  ? 'bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 opacity-45 blur-3xl group-hover:opacity-75' 
                  : 'bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-slate-900/25 opacity-70 blur-3xl group-hover:opacity-90'
              }`}></div>
              
              <div className={`relative w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-[2.2rem] bg-[#000000] overflow-hidden shrink-0 transition-all duration-500 group-hover:scale-[1.03] ${
                darkMode 
                  ? 'shadow-[0_12px_45px_-10px_rgba(0,0,0,0.85),0_0_25px_rgba(139,92,241,0.25)] border border-indigo-500/30' 
                  : 'shadow-[0_15px_35px_rgba(99,102,241,0.2)] border border-indigo-300/80 bg-white'
              }`}>
                <img src="/avatar.JPG" alt="Avatar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            <div className={`hidden md:flex mt-3 sm:mt-4 md:mt-5 w-full max-w-[170px] sm:max-w-[260px] md:max-w-[290px] p-2 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl border backdrop-blur-xl text-center flex-col items-center justify-center transition-all duration-300 ${
              darkMode 
                ? 'border-indigo-500/30 bg-[#12141c]/40 text-[#f3f4f6] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]' 
                : 'border-indigo-200/90 bg-white/60 text-slate-800 shadow-[0_6px_16px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]'
            }`}>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold mb-0.5">
                <span className="text-indigo-500 font-bold mr-1">&gt;_</span>Hi, I am
              </span>
              
              <div className="font-mono text-xs sm:text-base md:text-lg font-bold tracking-tight inline-flex items-center gap-1.5">
                <span className={darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}>Vladimir</span>
              </div>
            </div>
          </div>
          
          {/* TEXT & TERMINAL AREA */}
          <div className="w-full md:col-span-7 md:pr-6 flex flex-col gap-4 sm:gap-4 md:gap-5 text-center md:text-left items-center md:items-start mt-0 md:mt-0">
            
            <div className={`hidden md:inline-flex font-mono items-center gap-2 px-4 py-2 rounded-full border shadow-sm backdrop-blur-sm ${
              darkMode 
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
               <Sparkles className="w-3.5 h-3.5 animate-spin text-indigo-500 shrink-0" />
               <span className="text-xs font-bold tracking-wide">Available for professional roles</span>
            </div>

           <h1 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight w-full max-w-xl text-center md:text-center mx-auto ${
                darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'
              }`}>
               Java Backend & <br/>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
               darkMode 
                 ? 'from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]' 
                 : 'from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_2px_8px_rgba(99,102,241,0.2)]' // Svetlije boje + vrlo blaga senka
              }`}>
                  DevOps Engineer.
             </span>
            </h1>

            <div className="w-full max-w-xl h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent rounded-full my-1 mx-auto"></div>
            
            {/* TERMINAL BOX */}
            <div className={`w-full max-w-xl rounded-2xl border text-left font-mono overflow-hidden transition-all duration-300 backdrop-blur-xl mx-auto md:mx-auto ${
              darkMode 
                ? 'border-indigo-500/40 bg-[#131520]/95 text-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.1)]' 
                : 'border-indigo-300/80 bg-white text-slate-900 shadow-[0_6px_20px_rgba(99,102,241,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
            } ${isGlitching ? 'ring-2 ring-indigo-500 scale-[1.03] rotate-[0.5deg]' : ''}`}>
              
              {/* Header with commands */}
              <div className={`px-3.5 py-2.5 flex items-center justify-between border-b ${
                darkMode ? 'border-indigo-500/25 bg-[#12131c]/80' : 'border-indigo-200/85 bg-indigo-100/80'
              }`}>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold">
                  <Terminal className={`w-3.5 h-3.5 shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                      activeTab === 'overview' 
                        ? (darkMode ? 'bg-indigo-500/30 text-indigo-300 font-extrabold shadow-sm' : 'bg-indigo-200 text-indigo-900 font-extrabold shadow-sm') 
                        : (darkMode ? 'text-slate-400 hover:text-indigo-300' : 'text-slate-600 hover:text-indigo-700')
                    }`}
                  >
                    --about
                  </button>
                  <button 
                    onClick={() => setActiveTab('stack')}
                    className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                      activeTab === 'stack' 
                        ? (darkMode ? 'bg-indigo-500/30 text-indigo-300 font-extrabold shadow-sm' : 'bg-indigo-200 text-indigo-900 font-extrabold shadow-sm') 
                        : (darkMode ? 'text-slate-400 hover:text-indigo-300' : 'text-slate-600 hover:text-indigo-700')
                    }`}
                  >
                    --service
                  </button>
                </div>
                
                <div className={`flex items-center gap-2.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {/* MINIMIZE */}
                  <Minus 
                    onClick={() => setIsMinimized(true)} 
                    title="Minimize" 
                    className="w-3 h-3 hover:text-indigo-500 hover:scale-125 transition-all duration-200 cursor-pointer" 
                  />
                  {/* MAXIMIZE */}
                  <Square 
                    onClick={handleMaximize} 
                    title="Maximize / Restore" 
                    className="w-2.5 h-2.5 hover:text-indigo-500 hover:scale-125 transition-all duration-200 cursor-pointer" 
                  />
                  {/* X */}
                  <X 
                    onClick={handleTerminalClose} 
                    title="Close process" 
                    className="w-3 h-3 hover:text-red-500 hover:scale-125 hover:rotate-90 transition-all duration-200 cursor-pointer" 
                  />
                </div>
              </div>

              {/* TERMINAL */}
              <div className={`p-3.5 sm:p-4 text-xs sm:text-xs md:text-sm font-mono leading-relaxed transition-all duration-300 overflow-hidden flex flex-col justify-center ${
                isMinimized ? 'max-h-0 py-0 opacity-0' : 'h-[115px] sm:h-[125px] opacity-100'
              }`}>
                {terminalState === 'closed' ? (
                  <div className="text-red-500 dark:text-red-400 font-mono text-center animate-pulse tracking-wide font-bold py-2">
                    [ Process terminated. Rebooting kernel... ]
                  </div>
                ) : (
                  <>
                    {activeTab === 'overview' && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 font-bold">
                          <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>$</span>
                          <span className={darkMode ? 'text-slate-200' : 'text-slate-900'}>vdcore --about</span>
                        </div>
                        <p className={`font-mono leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {/* Mobile */}
                          <span className="block sm:hidden">
                            Certified Java Developer focused on scalable backend architecture, REST APIs, AI service integration, & containerized DevOps workflows...<span className="inline-block w-2 h-3.5 ml-1 bg-indigo-500 animate-pulse align-baseline"></span>
                          </span>

                          {/* PC */}
                          <span className="hidden sm:inline">
                            Certified Java Developer focused on scalable backend<br />
                            architecture, REST APIs, AI service integration,<br />
                            & containerized DevOps workflows...<span className="inline-block w-2 h-3.5 ml-1 bg-indigo-500 animate-pulse align-baseline"></span>
                          </span>
                        </p>
                      </div>
                    )}

                  {activeTab === 'stack' && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 font-bold">
                          <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>$</span>
                          <span className={darkMode ? 'text-slate-200' : 'text-slate-900'}>docker-compose up -d</span>
                        </div>
                        <div className={`font-mono text-[11px] sm:text-xs space-y-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <div className="text-emerald-700 dark:text-emerald-400 font-bold">[+] Running 3/3</div>
                          <div className="grid grid-cols-[auto_1fr] gap-x-3 text-emerald-700 dark:text-emerald-400 font-medium">
                            <span>✔ Container vdcore-db</span>
                            <span>... Started</span>
                          </div>
                          <div className="grid grid-cols-[auto_1fr] gap-x-3 text-emerald-700 dark:text-emerald-400 font-medium">
                            <span>✔ Container vdcore-jwt-auth</span>
                            <span>... Started</span>
                          </div>
                          <div className="text-indigo-600 dark:text-indigo-400 font-semibold pt-0.5">
                            &gt; Spring Boot 4 microservice online.
                            <span className="inline-block w-1.5 h-3 ml-1 bg-indigo-500 animate-pulse align-baseline"></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* PORTFOLIO STATS - MOBILE */}
            <div className="flex md:hidden w-full max-w-xl items-center justify-around pt-4 pb-2 mx-auto font-mono text-center">
              <div>
                <div className={`text-base font-extrabold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>12+</div>
                <div className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Projects</div>
              </div>
              <div className={`w-[1px] h-6 ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'}`}></div>
              <div>
                <div className={`text-base font-extrabold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>100%</div>
                <div className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Focused</div>
              </div>
              <div className={`w-[1px] h-6 ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'}`}></div>
              <div>
                <div className={`text-base font-extrabold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>24/7</div>
                <div className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Ready</div>
              </div>
            </div>

            {/* STATS FOR PC */}
            <div className="hidden md:flex flex-row w-full max-w-xl justify-between items-center mt-1 mx-auto">
              <div className="flex items-center gap-4 shrink-0">
                <a 
                  href="#contact" 
                  className={actionButtonClass}
                  title="Let's work"
                >
                  <MessageCircleMore className={contactIconClass} />
                </a>

                <CvLink 
                  className={actionButtonClass} 
                  title="Download CV" 
                  darkMode={darkMode}
                  variant="hero"
                />
              </div>

              <div className="flex items-center justify-center flex-1 gap-8 font-mono">
                <div className="text-center">
                  <div className={`text-xl font-extrabold leading-none mb-1.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>12+</div>
                  <div className={`text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Projects</div>
                </div>

                <div className={`h-9 border-l-2 ${darkMode ? 'border-indigo-500/25' : 'border-indigo-200'}`}></div>

                <div className="text-center">
                  <div className={`text-xl font-extrabold leading-none mb-1.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>100%</div>
                  <div className={`text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Focused</div>
                </div>

                <div className={`h-9 border-l-2 ${darkMode ? 'border-indigo-500/25' : 'border-indigo-200'}`}></div>

                <div className="text-center">
                  <div className={`text-xl font-extrabold leading-none mb-1.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>24/7</div>
                  <div className={`text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-700 font-semibold'}`}>Ready</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}