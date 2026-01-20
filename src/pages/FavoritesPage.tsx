import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { FavoriteButton } from '@/components/FavoriteButton';
import { useFavorites } from '@/hooks/useFavorites';
import { getAllRecipes } from '@/data/ebookContent';

const FavoritesPage = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const allRecipes = getAllRecipes();
  const favoriteRecipes = allRecipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <Layout>
      <div className="page-transition min-h-screen">
        {/* Header */}
        <header className="bg-cream pt-20 pb-12 md:pt-24 md:pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Mis Favoritos
            </h1>
            <p className="text-muted-foreground mt-2">
              {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'receta guardada' : 'recetas guardadas'}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {favoriteRecipes.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">
                Aún no has guardado ninguna receta favorita
              </p>
              <Link
                to="/seccion/parte-1-recetas"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explorar recetas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {favoriteRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all"
                >
                  <Link to={`/receta/${recipe.id}`} className="flex-1">
                    <p className="text-xs text-accent uppercase tracking-wider mb-1">
                      {recipe.block}
                    </p>
                    <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {recipe.title}
                    </h3>
                    {recipe.description && (
                      <p className="text-muted-foreground line-clamp-2">
                        {recipe.description}
                      </p>
                    )}
                  </Link>
                  <FavoriteButton
                    isFavorite={isFavorite(recipe.id)}
                    onToggle={() => toggleFavorite(recipe.id)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
