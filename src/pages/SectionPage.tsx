import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { getSectionById, ebookSections } from '@/data/ebookContent';

const SectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? getSectionById(sectionId) : undefined;

  if (!section) {
    return <Navigate to="/" replace />;
  }

  const sectionIndex = ebookSections.findIndex(s => s.id === section.id);
  const previousSection = sectionIndex > 0 ? ebookSections[sectionIndex - 1] : undefined;
  const nextSection = sectionIndex < ebookSections.length - 1 ? ebookSections[sectionIndex + 1] : undefined;

  // Parse markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="mb-6 space-y-2">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85">
                <span className="text-accent mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        flushList();
        return;
      }

      // Headers
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-serif font-medium text-foreground mt-8 mb-4">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-10 mb-6">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ')) {
        inList = true;
        listItems.push(trimmedLine.replace('- ', ''));
        return;
      }

      // Bold text and paragraphs
      flushList();
      let processedLine = trimmedLine
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      
      elements.push(
        <p 
          key={index} 
          className="mb-6 text-lg leading-relaxed text-foreground/85"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });

    flushList();
    return elements;
  };

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="page-transition"
      >
        {/* Header */}
        <header className="bg-cream pt-20 pb-12 md:pt-24 md:pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-accent uppercase tracking-wider mb-4">
              {section.type === 'intro' && 'Introducción'}
              {section.type === 'block' && 'Bloque'}
              {section.type === 'part' && 'Parte'}
              {section.type === 'closing' && 'Cierre'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              {section.title}
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <div className="reading-content">
            {section.content && renderContent(section.content)}
          </div>

          {/* Recipe list if section has recipes */}
          {section.recipes && section.recipes.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                Recetas en esta sección
              </h2>
              <div className="grid gap-4">
                {section.recipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/receta/${recipe.id}`}
                      className="group block p-6 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all"
                    >
                      <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {recipe.title}
                      </h3>
                      {recipe.description && (
                        <p className="text-muted-foreground">
                          {recipe.description}
                        </p>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex justify-between items-stretch gap-4 pt-12 mt-12 border-t border-border">
            {previousSection ? (
              <Link
                to={`/seccion/${previousSection.id}`}
                className="flex-1 group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Anterior</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {previousSection.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextSection ? (
              <Link
                to={`/seccion/${nextSection.id}`}
                className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Siguiente</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {nextSection.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        </div>
      </motion.article>
    </Layout>
  );
};

export default SectionPage;
