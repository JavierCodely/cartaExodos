import React from 'react';
import { DrinkCategory } from '../types/drink';

interface CategoryFilterProps {
  categories: { key: DrinkCategory | 'all'; label: string }[];
  selectedCategory: DrinkCategory | 'all';
  onCategoryChange: (category: DrinkCategory | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center px-4">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => onCategoryChange(category.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category.key
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg border-2 border-green-400'
                  : 'bg-black text-gray-300 hover:bg-zinc-900 border-2 border-green-600 hover:border-green-500'
            }`}
            style={selectedCategory === category.key ? {
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.3)'
            } : {}}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};