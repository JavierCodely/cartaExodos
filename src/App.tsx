import  { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { DrinkGrid } from './components/DrinkGrid';
import { Footer } from './components/Footer';
import { drinks } from './data/drinks';
import { DrinkCategory } from './types/drink';

const categories = [
  { key: 'all' as const, label: 'Todas' },
  { key: 'combos' as const, label: 'Combos' },
  { key: 'cervezas' as const, label: 'Cervezas' },
  { key: 'vinos' as const, label: 'Vinos' },
  { key: 'vodkas' as const, label: 'Vodkas' },
  { key: 'sin-alcohol' as const, label: 'Sin Alcohol' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<DrinkCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrinks = useMemo(() => {
    let filtered = drinks;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(drink => drink.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(drink =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drink.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by price (highest first), then by popularity
    return filtered.sort((a, b) => {
      // Convert price strings to numbers for comparison
      const priceA = parseFloat(a.price.replace(/[^\d]/g, ''));
      const priceB = parseFloat(b.price.replace(/[^\d]/g, ''));
      
      // Sort by highest price first
      if (priceB !== priceA) return priceB - priceA;
      
      // If prices are equal, sort by popularity
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      
      return 0;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 ">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <CategoryFilter
              categories={categories as { key: DrinkCategory | 'all'; label: string }[]}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <DrinkGrid drinks={filteredDrinks} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;