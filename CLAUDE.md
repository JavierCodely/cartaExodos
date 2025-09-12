# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + TypeScript drink catalog application built with Vite. The architecture follows a component-based structure:

### Core Structure
- **Main App (`src/App.tsx`)**: Entry point managing state for category filtering and search functionality
- **Data Layer (`src/data/drinks.ts`)**: Contains the drinks catalog with categories like combos, sin-alcohol, vinos
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
- **Filtering System**: Combines category filtering and text search with automatic sorting by popularity and price
- **Categories**: combos, shots, cervezas, vinos, sin-alcohol, premium (though data currently uses 'combos' instead of 'cocteles')
- **Responsive Design**: Uses Tailwind CSS with a dark theme (bg-gray-900)

### Data Management
- Static data in `src/data/drinks.ts` with drink objects containing id, name, description, price, category, image, and optional fields
- Category filtering and search handled via `useMemo` hook in main App component
- Images stored in `./img/` directory

### Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons
- ESLint for code quality