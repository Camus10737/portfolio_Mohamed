'use client';

import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">Nhésitez pas à me contacter pour discuter de vos projets</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">mohamedcamara19992021@gmail.com</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:mohamedcamara19992021@gmail.com">
                    Envoyer un email
                  </a>
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Téléphone</h3>
                <p className="text-muted-foreground mb-4">+1 613-240-6911</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+16132406911">
                    Appeler
                  </a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}