import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto px-4 mb-2">
      <div className="absolute inset-y-0 left-0 px-4 flex  items-center pointer-events-none">
        <Search className=" h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Buscar bebidas..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className=" px-4 w-full pl-10 pr-3 py-3 border border-green-600 rounded-xl bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};