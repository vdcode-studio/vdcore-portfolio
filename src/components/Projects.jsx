import React from 'react';

export default function Projects({ darkMode }) {
  const projectList = [
    {
      id: "01",
      title: "Spring Boot Cloud Engine",
      desc: "Enterprise REST API architecture secured with JWT and Spring Security, featuring scalable database migrations.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/vdcode-studio",
      liveUrl: null
    },
    {
      id: "02",
      title: "DevOps Automated Pipeline",
      desc: "Continuous integration and automated container deployment workflows orchestrated via Portainer panels.",
      tags: ["Docker", "Portainer", "CI/CD", "Bash"],
      githubUrl: "https://github.com/vdcode-studio",
      liveUrl: null
    },
    {
      id: "03",
      title: "Microservice Auth Gateway",
      desc: "Centralized authentication gateway managing token exchange, role-based access control, and request routing.",
      tags: ["Spring Security", "JWT", "Java", "Docker"],
      githubUrl: "https://github.com/vdcode-studio",
      liveUrl: null
    },
    {
      id: "04",
      title: "Linux System Automator",
      desc: "Bash and Docker-driven environment provisioning scripts tailored for fast local developer bootstrap.",
      tags: ["Bash", "Docker Compose", "Linux Fedora", "Git"],
      githubUrl: "https://github.com/vdcode-studio",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center pt-0.5 sm:pt-2 md:pt-2 pb-28 sm:pb-32 scroll-mt-28">
      
      <div className={`w-full px-3 sm:px-4 md:px-6 flex flex-col transition-all duration-500 ${
        darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'
      }`}>
        
        {/* Sections grid */}
        <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 md:gap-5 items-stretch">
          {projectList.map((project, idx) => (
            <div 
              key={idx} 
              className={`relative p-6 sm:p-7 md:p-8 rounded-3xl border transition-all duration-300 shadow-sm flex flex-col justify-between group overflow-hidden hover:-translate-y-1 md:hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-[#12131c] border-indigo-500/35 hover:border-indigo-400 shadow-[0_8px_30px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.25)]' 
                  : 'bg-white/95 border-indigo-200 hover:border-indigo-400 shadow-[0_10px_30px_rgba(99,102,241,0.12),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_14px_35px_rgba(99,102,241,0.22)]'
              }`}
            >
              {darkMode && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
              )}

              {/* Cards Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-xs border shadow-sm shrink-0 ${
                    darkMode ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                  }`}>
                    {project.id}
                  </div>
                  
                  {/* Moćno Repository dugme sa pojačanom hover animacijom */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`group/btn px-3.5 sm:px-4 py-2 rounded-xl border text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.03] active:scale-95 ${
                        darkMode 
                          ? 'border-indigo-500/40 bg-[#08090e] text-slate-200 hover:border-indigo-400 hover:bg-indigo-500/25 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]' 
                          : 'border-indigo-200 bg-indigo-50/70 text-indigo-900 hover:border-indigo-400 hover:bg-indigo-100 hover:text-indigo-950 hover:shadow-[0_4px_15px_rgba(99,102,241,0.2)]'
                      }`}
                      title="Inspect Source Code"
                    >
                      <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-6 shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                <h3 className={`text-base sm:text-xl md:text-[1.2rem] font-bold tracking-tight mb-1 ${darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-xs sm:text-sm md:text-[0.95rem] font-medium leading-relaxed mb-4 md:mb-5 relative z-10 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.desc}
                </p>
              </div>

              {/* Tags */}
              <div className={`flex flex-wrap gap-1.5 md:gap-2 pt-3.5 md:pt-4 border-t relative z-10 mt-auto ${darkMode ? 'border-indigo-500/30' : 'border-indigo-200'}`}>
                {project.tags.map((tech, i) => (
                  <span key={i} className={`text-[11px] sm:text-xs font-mono font-semibold px-2.5 py-1 md:px-3 md:py-1.5 rounded-xl border transition-all duration-300 ${
                    darkMode 
                      ? 'border-indigo-500/35 bg-[#08090e] text-slate-200 group-hover:border-indigo-400 group-hover:bg-indigo-500/15 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                      : 'border-indigo-200 bg-indigo-50/70 text-indigo-900 group-hover:border-indigo-300 group-hover:bg-indigo-100/60'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}