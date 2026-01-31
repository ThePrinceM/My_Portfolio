import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef } from 'react';
import profilePic from '../assets/pm_desktop.png';

const HeroSection = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles for the globe
    if (globeRef.current) {
      const globe = globeRef.current;
      globe.innerHTML = '';
      
      // Create orbital rings
      for (let ring = 0; ring < 3; ring++) {
        const ringEl = document.createElement('div');
        ringEl.className = 'globe-ring';
        ringEl.style.cssText = `
          position: absolute;
          inset: ${ring * 15}px;
          border: 1px solid hsl(185 85% 55% / ${0.3 - ring * 0.08});
          border-radius: 50%;
          animation: orbit-${ring % 2 === 0 ? 'normal' : 'reverse'} ${20 + ring * 10}s linear infinite;
        `;
        globe.appendChild(ringEl);
      }

      // Create floating particles
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const angle = Math.random() * Math.PI * 2;
        const radius = 80 + Math.random() * 120;
        const x = Math.cos(angle) * radius + 150;
        const y = Math.sin(angle) * radius + 150;
        
        particle.className = 'globe-particle';
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: hsl(${185 + Math.random() * 85} 85% 55%);
          border-radius: 50%;
          left: ${x}px;
          top: ${y}px;
          animation: particle-float ${3 + Math.random() * 4}s ease-in-out infinite;
          animation-delay: ${-Math.random() * 5}s;
          box-shadow: 0 0 ${size * 3}px hsl(185 85% 55% / 0.6);
        `;
        globe.appendChild(particle);
      }

      // Create mesh grid lines
      for (let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.className = 'globe-line';
        line.style.cssText = `
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, hsl(185 85% 55% / 0.2), transparent);
          top: ${50 + (i - 6) * 12}%;
          left: 0;
          transform: rotate(${i * 15}deg);
          animation: line-pulse ${2 + i * 0.2}s ease-in-out infinite;
        `;
        globe.appendChild(line);
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-4">
        {/* Hero Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="text-primary text-sm md:text-base font-medium mb-2 tracking-wider uppercase">Data Analyst/Engineer</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="gradient-text text-glow">Prince Maurya</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
            B.Tech CSE (Data Science) from RCOEM. Passionate about building 
            scalable web applications & ML-powered solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <a 
              href="https://github.com/ThePrinceM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full neo-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(185_85%_55%/0.3)]"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prince-maurya-037a9829a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full neo-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(185_85%_55%/0.3)]"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:princejmaurya10@gmail.com"
              className="p-3 rounded-full neo-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(185_85%_55%/0.3)]"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(185_85%_55%/0.4)]"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </Button>
        </div>

        {/* 3D Globe */}
        <div className="order-1 lg:order-2 relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse" />
          
          {/* Main globe container */}
          <div 
            ref={globeRef}
            className="absolute inset-4 rounded-full overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, hsl(185 85% 55% / 0.15), transparent 40%),
                radial-gradient(circle at 70% 70%, hsl(270 60% 55% / 0.15), transparent 40%),
                radial-gradient(circle at center, hsl(230 30% 12% / 0.8), hsl(230 25% 7%))
              `,
              boxShadow: `
                inset 0 0 60px hsl(185 85% 55% / 0.1),
                0 0 40px hsl(185 85% 55% / 0.2),
                0 0 80px hsl(270 60% 55% / 0.1)
              `
            }}
          />
          
          {/* Inner sphere highlight */}
          <div 
            className="absolute inset-12 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, hsl(185 85% 55% / 0.1), transparent 60%)`,
            }}
          />

          {/* Profile overlay centered over globe */}
          <img
            src={profilePic}
            alt="Prince Maurya"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover object-top ring-8 ring-primary/40 shadow-2xl z-30 hidden md:block"
            style={{ opacity: 1, objectPosition: '25% 15%' }}
          />

          {/* Rotating outer ring */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-rotate-slow" />
          <div className="absolute inset-2 rounded-full border border-secondary/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
          
          {/* Platform reflection */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
