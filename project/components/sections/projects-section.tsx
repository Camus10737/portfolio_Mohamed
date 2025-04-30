'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ProjectsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      title: 'SIGERA',
      description: 'SIGERA represente une avancee significative dans la digitalisation de la recherche academique en Guinee. Cette plateforme web innovante centralise l\'acces aux publications academiques, facilitant la gestion, la conservation et la diffusion des connaissances scientifiques.',
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
      technologies: [
        'Node.js',
        'React',
        'Next.js',
        'TypeScript',
        'MongoDB',
        'Prisma',
        'OVHcloud',
        'tailwind css',
        'Vercel',
        'Resend',
        'Cloudinary',
        'GitHub',
        'Clerk'
      ],
      liveUrl: 'https://www.sigera.online',
      githubUrl: 'https://github.com/Camus10737/SIGERA'
    },
    {
      title: 'Guinee Sang',
      description: 'Application mobile innovante visant a moderniser le processus de don de sang en Guinee. Elle facilite la mise en relation entre donneurs et patients, permet aux hopitaux de lancer des alertes urgentes, et optimise la gestion des stocks de sang.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      status: 'En cours de developpement',
      technologies: ['Node.js', 'React',
        'Next.js',
        'TypeScript',
        'GitHub',
        'Vercel',
        'SendGrid',
        'Nimba SMS',
        'Firebase',
        'GoDaddy',
        'tailwind css'
      ],
      liveUrl: 'https://www.guineesang.ca',
      inDevelopment: true,
      githubUrl: 'https://github.com/Camus10737/Dashbord-Guinee-Sang'

    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">Decouvrez mes realisations recentes</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              custom={index}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    {project.inDevelopment && (
                      <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-sm mb-2">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Voir le projet
                      </a>
                    </Button>
                    {!project.inDevelopment && (
                      <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Vous souhaitez voir plus de projets ou discuter dune collaboration ?
          </p>
          <Button asChild size="lg">
            <a
              href="mailto:mohamedcamara19992021@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Me contacter
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}