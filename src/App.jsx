import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [activeMobileSection, setActiveMobileSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'about';
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return true; 
  });

  // Stanje koje tera React da se ponovo iscrta pri resize-u prozora
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const isManualScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // DYNAMIC RESIZE LISTENER: Rešava problem sa skupljanjem/širenjem browsera u hodu
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleThemeToggle = (newDarkMode) => {
    const nextMode = typeof newDarkMode === 'function' ? newDarkMode(darkMode) : newDarkMode;
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');

    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPod/.test(ua);
    const isChromeOrFirefoxIOS = /CriOS|FxiOS|GSA/.test(ua);
    const isTrueMobileSafari = isIOS && !isChromeOrFirefoxIOS && /Safari/.test(ua);

    if (isTrueMobileSafari && window.innerWidth < 768) {
      localStorage.setItem('activeSection', activeMobileSection);
      localStorage.setItem('scrollPosition', window.scrollY);
      window.location.reload();
    } else {
      setDarkMode(nextMode);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const savedScroll = localStorage.getItem('scrollPosition');
    if (savedScroll !== null) {
      const scrollNum = parseInt(savedScroll, 10);
      localStorage.removeItem('scrollPosition');
      localStorage.removeItem('activeSection');
      
      window.scrollTo({ top: scrollNum, behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let ticking = false;

    const handleScroll = () => {
      if (isManualScrolling.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['about', 'skills', 'projects', 'contact'];
          const scrollPosition = window.scrollY + window.innerHeight * 0.35;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveMobileSection(sections[i]);
                localStorage.setItem('activeSection', sections[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowWidth]);

  const handleMobileSectionChange = (sectionId) => {
    setActiveMobileSection(sectionId);
    localStorage.setItem('activeSection', sectionId);
    
    if (window.innerWidth >= 768) {
      isManualScrolling.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 90; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'instant'
            });
          }
        });
      });
    }
  };

  const scrollToSection = (id) => {
    handleMobileSectionChange(id);
  };

  // Dinamička provera za prikaz sekcija u zavisnosti od širine prozora
  const isMobile = windowWidth < 768;

  return (
    <div className="h-auto font-sans antialiased overflow-x-hidden flex flex-col transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      <Navbar 
        activeMobileSection={activeMobileSection} 
        setActiveMobileSection={handleMobileSectionChange} 
        darkMode={darkMode} 
        setDarkMode={handleThemeToggle} 
      />

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-24 md:pt-24 pb-2 sm:pb-4 flex flex-col gap-8 md:gap-16">
         
         {/* HERO */}
         <div id="about-wrapper" className={`${isMobile && activeMobileSection !== 'about' ? 'hidden' : 'block'} w-full md:block`}>
            <div id="about" className="scroll-mt-24 md:flex md:flex-col md:justify-start md:pt-2">
              <Hero setActiveMobileSection={handleMobileSectionChange} darkMode={darkMode} />
            </div>
         </div>

         {/* SKILLS */}
         <div id="skills-wrapper" className={`${isMobile && activeMobileSection !== 'skills' ? 'hidden' : 'block'} w-full md:block`}>
            <div id="skills" className="md:w-full md:max-w-6xl md:mx-auto">
              <Skills darkMode={darkMode} />
            </div>
         </div>

         {/* PROJECTS */}
         <div id="projects-wrapper" className={`${isMobile && activeMobileSection !== 'projects' ? 'hidden' : 'block'} w-full md:block`}>
            <div id="projects" className="md:w-full md:max-w-6xl md:mx-auto">
              <Projects darkMode={darkMode} />
            </div>
         </div>

         {/* CONTACT */}
         <div id="contact-wrapper" className={`${isMobile && activeMobileSection !== 'contact' ? 'hidden' : 'block'} w-full md:block`}>
            <div id="contact" className="md:w-full md:max-w-6xl md:mx-auto">
              <Contact darkMode={darkMode} scrollToSection={scrollToSection} />
            </div>
         </div>

      </main>

      {/* FOOTER */}
      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />

    </div>
  );
}

export default App;