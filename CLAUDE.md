# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + TypeScript drink catalog application built with Vite for a bar/restaurant menu.

### Core Structure
- **Main App (`src/App.tsx`)**: Entry point managing state for category filtering (selectedCategory) and search functionality (searchTerm)
- **Data Layer (`src/data/drinks.ts`)**: Contains the drinks catalog array with 30+ items across multiple categories
- **Type Definitions (`src/types/drink.ts`)**: Defines the `Drink` interface and `DrinkCategory` union type

### Component Hierarchy
```
App
├── Header
├── SearchBar (search functionality)
├── CategoryFilter (category selection)
├── DrinkGrid
│   └── DrinkCard (individual drink display)
└── Footer
```

### Key Features
- **Filtering System**:
  - Category filtering and text search combined via `useMemo` hook in `src/App.tsx:24-51`
  - Automatic sorting: popular items first (isPopular flag), then by highest price
  - Search matches against both drink name and description (case-insensitive)
- **Categories** (defined in `src/App.tsx:10-18`):
  - Combos, Aperitivos, Vodkas, Cervezas, Vinos, Sin-alcohol
  - Note: DrinkCategory type includes 'Premium' but it's not used in the current data
- **Data Structure**: Each drink has id, name, description, price (string), category, image path, optional isPopular flag, and optional alcoholContent

### Data Management
- Static data in `src/data/drinks.ts` organized by category sections with comments
- Images referenced from `/img/` directory (public folder)
- Price strings include formatting (e.g., "75.000", "7.000")
- Sorting logic in `src/App.tsx:41-50` - popular drinks always appear first, then sorted by price descending

### Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling (dark theme with bg-gray-900)
- Lucide React for icons
- ESLint with TypeScript support