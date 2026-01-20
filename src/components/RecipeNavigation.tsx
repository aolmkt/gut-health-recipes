import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Recipe } from '@/data/ebookContent';
import { cn } from '@/lib/utils';

interface RecipeNavigationProps {
  previous?: Recipe;
  next?: Recipe;
  className?: string;
}

export const RecipeNavigation = ({ previous, next, className }: RecipeNavigationProps) => {
  return (
    <nav className={cn("flex justify-between items-stretch gap-4 py-8 border-t border-border", className)}>
      {previous ? (
        <Link
          to={`/receta/${previous.id}`}
          className="flex-1 group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Anterior</p>
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {previous.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          to={`/receta/${next.id}`}
          className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all text-right"
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Siguiente</p>
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {next.title}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
};
