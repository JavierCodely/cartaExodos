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
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'  
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};