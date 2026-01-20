import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'pan-sin-hinchazón-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const toggleFavorite = useCallback((recipeId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId];
      
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((recipeId: string) => {
    return favorites.includes(recipeId);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite };
};
