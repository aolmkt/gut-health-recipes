import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export const FavoriteButton = ({ isFavorite, onToggle, className }: FavoriteButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "p-2 rounded-full transition-all",
        isFavorite
          ? "bg-accent text-accent-foreground"
          : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent",
        className
      )}
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
    </button>
  );
};
