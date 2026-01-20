import { useState, useMemo } from 'react';
import { getAllRecipes, Recipe } from '@/data/ebookContent';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const results = useMemo((): Recipe[] => {
    if (!query.trim()) return [];
    
    const normalizedQuery = query.toLowerCase().trim();
    const allRecipes = getAllRecipes();
    
    return allRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.description?.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return { query, setQuery, results };
};
