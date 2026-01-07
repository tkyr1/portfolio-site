import React from 'react';
import FadeIn from './components/FadeIn';
import { HERO_CONTENT, ABOUT_CONTENT, PROJECTS, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-background text-text selection:bg-accent selection:text-background font-serif overflow-hidden relative">
      
      {/* Technical Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern bg-[length:40px_40px] opacity-20 z-0"></div>
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background z-0"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10">
        <div className="max-w-4xl w-full text-center">
          <FadeIn delay={200}>
            <p className="font-mono text-accent text-xs md:text-sm tracking-wide mb-8 opacity-80 lowercase">
              portfolio
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-text mb-6">
              {HERO_CONTENT.name}
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
             {/* Mathematical divider */}
            <div className="flex justify-center items-center gap-4 mb-8 opacity-40">
                <div className="h-px w-12 bg-accent"></div>
                <span className="font-mono text-[10px] text-accent">∀x ∈ ℝ</span>
                <div className="h-px w-12 bg-accent"></div>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <p className="font-mono text-subtext text-xs md:text-sm max-w-lg mx-auto leading-relaxed lowercase">
              {HERO_CONTENT.title}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 flex justify-center relative z-10">
        <div className="max-w-3xl w-full">
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-8 border-b border-white/5 pb-2">
                <span className="font-mono text-accent text-xs">01</span>
                <h2 className="font-serif text-2xl text-text/80 italic">Context</h2>
            </div>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-text/90 font-light">
              {ABOUT_CONTENT}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-baseline gap-4 border-b border-white/5 pb-2">
                <span className="font-mono text-accent text-xs">02</span>
                <h2 className="font-serif text-2xl text-text/80 italic">projects</h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {PROJECTS.map((project, index) => (
              <FadeIn key={project.id} delay={index * 100}>
                <div className="group relative p-6 border border-white/5 hover:border-accent/30 transition-all duration-500 bg-surface/20 hover:bg-surface/40 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] text-accent/60 mb-1">
                             #{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-serif text-text group-hover:text-white transition-colors duration-300">
                        {project.title}
                        </h3>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                             <p className="font-mono text-xs text-subtext/70 lowercase">{project.category}</p>
                        </div>
                        <span className="font-mono text-xs text-accent opacity-50">{project.year}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 flex flex-col items-center justify-center min-h-[60vh] relative z-10">
        <FadeIn>
          <div className="text-center">
            <div className="mb-12">
                 <span className="font-mono text-accent text-xs block mb-4">03 — signal</span>
                <p className="font-serif text-3xl md:text-5xl text-text/90 italic font-light">
                Let us distill signal from noise.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="font-mono text-xs lowercase text-subtext hover:text-accent transition-colors duration-300"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
        
        <footer className="absolute bottom-8 w-full text-center">
          <FadeIn delay={200}>
            <p className="font-mono text-[9px] text-white/10 lowercase">
              designed by {HERO_CONTENT.name} — {new Date().getFullYear()}
            </p>
          </FadeIn>
        </footer>
      </section>

    </main>
  );
};

export default App;