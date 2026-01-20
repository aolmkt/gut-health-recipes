import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search as SearchIcon, ArrowRight, X } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useSearch } from '@/hooks/useSearch';

const SearchPage = () => {
  const { query, setQuery, results } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Layout>
      <div className="page-transition min-h-screen">
        {/* Header */}
        <header className="bg-cream pt-20 pb-12 md:pt-24 md:pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              Buscar Recetas
            </h1>

            {/* Search Input */}
            <div className={`relative transition-all ${isFocused ? 'ring-2 ring-primary' : ''} rounded-lg`}>
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nombre de receta..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-12 pr-12 py-4 bg-background border border-border rounded-lg text-lg focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Results */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {query.trim() === '' ? (
            <div className="text-center py-12">
              <SearchIcon className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Escribe el nombre de una receta para buscar
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron recetas para "{query}"
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground mb-6">
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'} para "{query}"
              </p>
              <div className="grid gap-4">
                {results.map((recipe, index) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/receta/${recipe.id}`}
                      className="group block p-6 rounded-lg border border-border hover:border-primary hover:bg-cream transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
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
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
