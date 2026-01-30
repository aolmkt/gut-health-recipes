import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { ebookSections } from '@/data/ebookContent';
import { cn } from '@/lib/utils';
interface SidebarProps {
  className?: string;
}
export const Sidebar = ({
  className
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['parte-1-recetas', 'parte-2-rotacion']);
  const location = useLocation();
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]);
  };
  const isActiveSection = (sectionId: string) => {
    return location.pathname.includes(sectionId);
  };
  const isActiveRecipe = (recipeId: string) => {
    return location.pathname.includes(recipeId);
  };
  const sidebarContent = <nav className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="block" onClick={() => setIsOpen(false)}>
          <h1 className="font-serif text-xl font-semibold text-sidebar-foreground leading-tight">
            Pan Sin Hinchazón
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Manual Completo</p>
        </Link>
      </div>

      {/* Quick Links */}
      <div className="p-4 border-b border-sidebar-border flex gap-2">
        <Link to="/buscar" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:bg-wheat transition-colors text-sm" onClick={() => setIsOpen(false)}>
          <Search className="w-4 h-4" />
          Buscar
        </Link>
        <Link to="/favoritos" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:bg-wheat transition-colors text-sm" onClick={() => setIsOpen(false)}>
          <Heart className="w-4 h-4" />
          Favoritos
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {ebookSections.map(section => <li key={section.id}>
              {section.recipes && section.recipes.length > 0 ? <div>
                  <button onClick={() => toggleSection(section.id)} className={cn("w-full flex items-center justify-between py-3 px-4 rounded-lg text-left text-base font-medium transition-colors min-h-[48px]", isActiveSection(section.id) ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground hover:bg-sidebar-accent")}>
                    <span className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5" />
                      {section.title}
                    </span>
                    {expandedSections.includes(section.id) ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  <AnimatePresence>
                    {expandedSections.includes(section.id) && <motion.ul initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.2
              }} className="overflow-hidden ml-4 mt-2 space-y-1">
                        {/* Section intro link */}
                        <li>
                          <Link to={`/seccion/${section.id}`} onClick={() => setIsOpen(false)} className={cn("block py-3 px-4 rounded-lg text-base transition-colors min-h-[44px] flex items-center", location.pathname === `/seccion/${section.id}` ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground")}>
                            Introducción
                          </Link>
                        </li>
                        {section.recipes.map(recipe => <li key={recipe.id}>
                            <Link to={`/receta/${recipe.id}`} onClick={() => setIsOpen(false)} className={cn("block py-3 px-4 rounded-lg text-base transition-colors min-h-[44px] flex items-center", isActiveRecipe(recipe.id) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground")}>
                              {recipe.title}
                            </Link>
                          </li>)}
                      </motion.ul>}
                  </AnimatePresence>
                </div> : <Link to={`/seccion/${section.id}`} onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium transition-colors min-h-[48px]", isActiveSection(section.id) ? "bg-primary text-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent")}>
                  <BookOpen className="w-5 h-5" />
                  {section.title}
                </Link>}
            </li>)}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground text-center">© 2026 Pan Sin Hinchazón</p>
      </div>
    </nav>;
  return <>
      {/* Mobile menu button - larger touch target */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-lg bg-background shadow-lg border border-border min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Mobile sidebar - optimized width for phones */}
      <AnimatePresence>
        {isOpen && <motion.aside initial={{
        x: '-100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '-100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed top-0 left-0 w-[85vw] max-w-[320px] h-full bg-sidebar z-40 shadow-xl lg:hidden overflow-hidden">
            {sidebarContent}
          </motion.aside>}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className={cn("hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 lg:left-0 bg-sidebar border-r border-sidebar-border", className)}>
        {sidebarContent}
      </aside>
    </>;
};