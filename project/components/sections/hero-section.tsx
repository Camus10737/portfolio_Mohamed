'use client';

import { useRef, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set timeout to apply animations after component mounts
    const titleTimeout = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 100);

    const descTimeout = setTimeout(() => {
      if (descRef.current) {
        descRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 300);

    const buttonsTimeout = setTimeout(() => {
      if (buttonsRef.current) {
        buttonsRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 500);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(descTimeout);
      clearTimeout(buttonsTimeout);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            Salut, c’est  <span className="text-primary">Mohamed</span>
          </h1>
          <p
            ref={descRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            Développeur web passionné, spécialisé dans la création de sites web et d’applications modernes et responsives</p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <Button size="lg" className="font-medium">
              <Link href="/#projects">
                Voir mes travaux
              </Link>            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              <Link href="/#contact">
                Me Contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
        >
          <ArrowDownCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
}