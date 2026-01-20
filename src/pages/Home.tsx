import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ebookSections } from '@/data/ebookContent';
import heroBread from '@/assets/hero-bread.jpg';

const Home = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end">
          <div className="absolute inset-0">
            <img
              src={heroBread}
              alt="Pan artesanal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-4">
                Pan Sin Hinchazón
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Manual completo para comer pan sin inflamación
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="reading-content"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
              Este libro nace de una pregunta que muchos nos hacemos: <em className="font-serif font-medium text-foreground">¿Por qué el pan me inflama?</em>
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light mt-6">
              La respuesta no es simple, pero la solución sí puede serlo. Descubre cómo disfrutar del pan sin molestias.
            </p>
          </motion.div>
        </section>

        {/* Table of Contents */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-12 text-center"
            >
              Contenido
            </motion.h2>
            
            <div className="grid gap-4">
              {ebookSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/seccion/${section.id}`}
                    className="group flex items-center justify-between p-5 md:p-6 rounded-lg bg-background hover:shadow-soft transition-all border border-transparent hover:border-border"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-serif text-lg">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        {section.recipes && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {section.recipes.length} recetas
                          </p>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Reading CTA */}
        <section className="max-w-3xl mx-auto px-5 md:px-6 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
              Comienza tu lectura
            </h2>
            <p className="text-lg md:text-base text-muted-foreground mb-8 max-w-md mx-auto">
              Tu viaje hacia un pan que nutre sin inflamar comienza ahora.
            </p>
            <Link
              to="/seccion/introduccion"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors min-h-[52px] text-lg"
            >
              Comenzar a leer
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Pan Sin Hinchazón — Manual Completo
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
