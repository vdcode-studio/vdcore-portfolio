import React from 'react';
import { Server, Terminal, Database, Wrench } from 'lucide-react';

export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      title: "Backend & Enterprise Core",
      desc: "Architecting scalable microservices, secure RESTful APIs, and modern backend solutions with the complete Spring ecosystem.",
      tags: ["Java", "Spring Boot", "Spring Security", "Spring AI", "Hibernate", "Maven", "REST APIs", "JWT"],
      icon: Server,
      highlight: "Primary Focus",
      isHero: true
    },
    {
      title: "DevOps & Containers",
      desc: "Environment isolation, multi-service container orchestration, and automated deployment pipelines.",
      tags: ["Docker Engine", "Docker Compose", "CI/CD", "Linux Fedora", "Git", "Bash"],
      icon: Terminal,
      highlight: "Infrastructure",
      isHero: false
    },
    {
      title: "Databases & Storage",
      desc: "Relational schema design, automated database migrations, and high-performance caching layers.",
      tags: ["PostgreSQL", "MySQL", "DBeaver", "Flyway", "Redis"],
      icon: Database,
      highlight: "Data Layer",
      isHero: false
    },
    {
      title: "Tools & Ecosystem",
      desc: "Precise endpoint testing, environment variable management, and responsive UI support layers.",
      tags: ["Bruno API", "React", "Vite", "Tailwind CSS", "JavaScript"],
      icon: Wrench,
      highlight: "Support & UI",
      isHero: false
    }
  ];

  return (
    <section id="skills" className="w-full flex flex-col items-center pt-0.5 sm:pt-2 md:pt-2 pb-28 sm:pb-32 scroll-mt-28">
      
      <div className={`w-full px-3 sm:px-4 md:px-6 flex flex-col transition-all duration-500 ${
        darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'
      }`}>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 items-stretch">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={idx} 
                className={`relative p-4.5 sm:p-5 md:p-6.5 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col justify-between group overflow-hidden hover:-translate-y-1 md:hover:-translate-y-1 ${
                  cat.isHero ? 'md:col-span-3' : 'md:col-span-1'
                } ${
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
                    <div>
                      <span className={`text-[10px] md:text-[10.5px] font-mono tracking-widest uppercase font-bold block mb-1 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        {cat.highlight}
                      </span>
                      <h3 className={`text-base sm:text-xl md:text-[1.2rem] font-bold tracking-tight mb-1 ${darkMode ? 'text-[#f3f4f6]' : 'text-slate-900'}`}>
                        {cat.title}
                      </h3>
                    </div>

                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0 ${
                      darkMode ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                    }`}>
                      <IconComponent className="w-5 h-5 md:w-5 md:h-5" />
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm md:text-[0.93rem] font-medium leading-relaxed mb-4 md:mb-4.5 relative z-10 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {cat.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className={`flex flex-wrap gap-1.5 md:gap-2 pt-3.5 md:pt-4 border-t relative z-10 mt-auto ${darkMode ? 'border-indigo-500/30' : 'border-indigo-200'}`}>
                  {cat.tags.map((tech, i) => (
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
            );
          })}
        </div>

      </div>
    </section>
  );
}