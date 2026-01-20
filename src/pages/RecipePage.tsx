import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { RecipeNavigation } from '@/components/RecipeNavigation';
import { FavoriteButton } from '@/components/FavoriteButton';
import { getRecipeById, getNextRecipe, getPreviousRecipe, getSectionById } from '@/data/ebookContent';
import { useFavorites } from '@/hooks/useFavorites';

const RecipePage = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const recipe = recipeId ? getRecipeById(recipeId) : undefined;
  const nextRecipe = recipeId ? getNextRecipe(recipeId) : undefined;
  const previousRecipe = recipeId ? getPreviousRecipe(recipeId) : undefined;
  const section = recipe ? getSectionById(recipe.section) : undefined;

  if (!recipe) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="page-transition"
      >
        {/* Header - Extra padding on mobile for menu button */}
        <header className="bg-cream pt-24 pb-10 md:pt-24 md:pb-16 px-5 md:px-6">
          <div className="max-w-3xl mx-auto">
            {section && (
              <Link 
                to={`/seccion/${section.id}`}
                className="inline-flex items-center gap-2 text-base text-accent hover:text-primary transition-colors mb-4 py-2 min-h-[44px]"
              >
                <ArrowLeft className="w-5 h-5" />
                {section.title}
              </Link>
            )}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm md:text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  {recipe.block}
                </p>
                <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                  {recipe.title}
                </h1>
                {recipe.description && (
                  <p className="text-lg md:text-lg text-muted-foreground mt-4 leading-relaxed">
                    {recipe.description}
                  </p>
                )}
              </div>
              <FavoriteButton
                isFavorite={isFavorite(recipe.id)}
                onToggle={() => toggleFavorite(recipe.id)}
                className="mt-2 min-w-[48px] min-h-[48px]"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <div className="reading-content">
            {/* Ingredients */}
            <section className="recipe-ingredients">
              <h3>Ingredientes</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Preparation */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6">Preparación</h2>
              <ol className="space-y-6">
                {recipe.preparation.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">
                      {index + 1}
                    </span>
                    <p className="text-lg leading-relaxed text-foreground/85 pt-1">
                      {step}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </section>

            {/* Body Feel */}
            {recipe.bodyFeel && (
              <section className="mb-12 p-6 md:p-8 rounded-lg bg-wheat border-l-4 border-accent">
                <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                  Cómo se siente tu cuerpo
                </h3>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {recipe.bodyFeel}
                </p>
              </section>
            )}

            {/* Tips */}
            {recipe.tips && recipe.tips.length > 0 && (
              <section className="mb-12">
                <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                  Consejos
                </h3>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-golden mt-1">💡</span>
                      <span className="text-lg text-foreground/85">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Navigation */}
          <RecipeNavigation previous={previousRecipe} next={nextRecipe} />
        </div>
      </motion.article>
    </Layout>
  );
};

export default RecipePage;
