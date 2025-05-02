'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award, Heart, Code, Lightbulb, Database, Brain, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Programmation',
      skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Python', 'Java', 'SQL'],
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Développement Front-End',
      skills: ['React.js', 'Intégration UI/UX', 'Tailwind CSS', 'shadcn/ui', 'WordPress', 'Elementor'],
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Développement Back-End',
      skills: ['Node.js', 'APIs REST'],
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Intelligence Artificielle',
      skills: ['Détection d\'objets', 'Vision par ordinateur', 'Modèles pré-entraînés'],
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Bases de données',
      skills: ['MySQL', 'MongoDB', 'Modélisation'],
      icon: <Database className="h-6 w-6 text-primary" />,
    },
  ];

  const timeline = [
    {
      year: '11/2023 - 03/2024',
      title: 'Analyste TI - Soutien infrastructure - CANADA',
      company: 'Agence du Revenu du Canada',
      description: 'Traitement des tickets, analyse de problèmes techniques, soutien stratégique aux décisions TI.',
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: '06/2024 - 09/2024',
      title: 'Stagiaire en développement web - GUINEE',
      company: 'MOMAKAN SARL',
      description: 'Conception et développement d\'applications web, optimisation multi-appareils, corrections de bugs.',
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: '05/2021 - 08/2021',
      title: 'Stagiaire en support informatique - GUINEE',
      company: 'GBS Sécurité SARL',
      description: 'Installation, mise à jour de logiciels, support utilisateur, maintenance des équipements et résolution de pannes.',
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: '09/2021 - 12/2024',
      title: 'Baccalauréat en informatique',
      company: 'Université du Québec à Trois-Rivières -  CANADA',
      description: 'Spécialisation en développement web et mobile.',
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: '10/2019 - 07/2021',
      title: 'Etudes en Genie informatique',
      company: 'Université Kofi Annan de Guinee - GUINEE',
      // description: 'Spécialisation en développement web et mobile.',
      icon: <GraduationCap className="h-5 w-5" />,
    },

  ];

  const traits = [
    {
      title: 'Passionné',
      description: 'Passionné par la technologie et la résolution de problèmes concrets.',
      icon: <Heart className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Curieux',
      description: 'Toujours en quête d\'apprentissage et d\'amélioration continue.',
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Autonome',
      description: 'Capable de travailler de manière indépendante et de prendre des initiatives.',
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Collaboratif',
      description: 'À l\'écoute et capable de travailler efficacement en équipe.',
      icon: <Code className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">Découvrez mon parcours et mes compétences</p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/imge.png"
              alt="Mohamed Camara"
              width={600}
              height={700}
              className="object-cover w-full h-[400px] md:h-[500px] transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="text-lg font-medium">Mohamed Camara</p>
              <p className="text-sm">Développeur Web & Mobile</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold mb-4"
            >
              Qui suis-je?
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-4"
            >
              Passionné par la technologie et la résolution de problèmes concrets, jai développé des compétences
              solides en développement web à travers mes projets personnels et mes expériences de stage.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-4"
            >
              Curieux, autonome et à lécoute, je madapte facilement et cherche à apporter des solutions
              pertinentes dans un environnement collaboratif.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-6"
            >
              Je suis motivé à contribuer activement à des projets ambitieux et à continuer de progresser
              dans le domaine du numérique.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/cv.pdf" download>
                  Télécharger CV</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:mohamedcamara19992021@gmail.com">Me Contacter</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Mes Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 }
                  }
                }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="font-medium text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Expérience & Formation</h3>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2 * index, duration: 0.5 }
                  }
                }}
                className="relative pl-8 pb-8 border-l border-muted last:pb-0"
              >
                <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-background border border-muted rounded-full p-1">
                  <div className="bg-primary/10 text-primary rounded-full p-1">
                    {item.icon}
                  </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-muted rounded mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-sm text-primary mb-1">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Traits Personnels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.1 * index, duration: 0.4 }
                  }
                }}
              >
                <Card className="p-6 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    {trait.icon}
                  </div>
                  <h4 className="font-medium text-lg mb-2">{trait.title}</h4>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}