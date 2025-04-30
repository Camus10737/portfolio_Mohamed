import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Mohamed</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Développeur web passionné, spécialisé dans la création de sites web et d’applications modernes et responsives, avec un fort accent sur l’expérience utilisateur et la performance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Camus10737" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/mohamed-camara-790205246" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:mohamedcamara19992021@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-muted-foreground mb-2">
                Email: <a
                  href="mailto:mohamedcamara19992021@gmail.com"
                  className="text-primary hover:underline"
                >
                  mohamedcamara19992021@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground mb-2">
                Localisation: <a
                  href="https://maps.google.com/?q=Quebec,Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Quebec, Canada
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Mohamed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}