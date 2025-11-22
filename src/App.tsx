import  { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MarqueeBanner } from './components/MarqueeBanner';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { DrinkGrid } from './components/DrinkGrid';
import { Footer } from './components/Footer';
import { drinks } from './data/drinks';
import { DrinkCategory } from './types/drink';
import { PaymentMethod } from './utils/priceCalculations';

const categories = [
  { key: 'all' as const, label: 'Todas' },
  { key: 'Combos' as const, label: 'Combos' },
  { key: 'Promociones' as const, label: 'Promociones' },
  { key: 'Aperitivos' as const, label: 'Aperitivos' },
  { key: 'Vodkas' as const, label: 'Vodkas' },
  { key: 'Whiskys' as const, label: 'Whiskys' },
  { key: 'Gin' as const, label: 'Gin' },
  { key: 'Champan' as const, label: 'Champán' },
  { key: 'Cervezas' as const, label: 'Cervezas' },
  { key: 'Vinos' as const, label: 'Vinos' },
  { key: 'Sin-alcohol' as const, label: 'Sin Alcohol' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<DrinkCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('transferencia');

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

    // Sort by popularity first, then by price (highest first)
    return filtered.sort((a, b) => {
      // Sort by popularity first - popular drinks always come first
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;

      // If both are popular and both are Combos or Promociones, maintain code order
      if (a.isPopular && b.isPopular) {
        const isAComboOrPromo = a.category === 'Combos' || a.category === 'Promociones';
        const isBComboOrPromo = b.category === 'Combos' || b.category === 'Promociones';

        if (isAComboOrPromo && isBComboOrPromo) {
          return 0; // Maintain original order from code
        }
      }

      // Otherwise sort by highest price first
      const priceA = parseFloat(a.precioVenta.replace(/[^\d]/g, ''));
      const priceB = parseFloat(b.precioVenta.replace(/[^\d]/g, ''));
      return priceB - priceA;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-black ">
      <Header />
      <MarqueeBanner />

      <main className="py-4">
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

          <PaymentMethodSelector
            selectedMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
          />

          <DrinkGrid drinks={filteredDrinks} paymentMethod={paymentMethod} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;