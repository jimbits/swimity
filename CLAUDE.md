# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit application named "swimmity" using:
- **Svelte 5** with runes mode enabled (new reactive syntax)
- **TypeScript** with strict mode
- **Tailwind CSS v4** with Forms and Typography plugins
- **Bun** as the package manager

## Development Commands

```sh
# Start development server
bun run dev

# Start dev server and open in browser
bun run dev -- --open

# Build for production
bun run build

# Preview production build
bun run preview

# Type checking
bun run check

# Type checking with watch mode
bun run check:watch

# Format code
bun run format

# Check formatting
bun run lint
```

## Architecture

### SvelteKit Configuration

- **Compiler**: Svelte 5 runes mode is enforced for all project files (excluding node_modules)
- **Adapter**: Uses `adapter-auto` which auto-detects deployment environment
- **Vite**: Configured with Tailwind CSS v4 via `@tailwindcss/vite` plugin

### File Structure

- `src/routes/`: SvelteKit file-based routing
  - `+page.svelte`: Route pages
  - `+layout.svelte`: Layout components (uses Svelte 5 `{@render children()}` syntax)
  - `layout.css`: Global Tailwind imports and plugin declarations
- `src/lib/`: Shared components and utilities (accessible via `$lib` alias)
- `src/app.d.ts`: TypeScript type definitions for SvelteKit app namespace

### Svelte 5 Runes

This project uses Svelte 5 with runes enabled. Key differences from Svelte 4:
- Use `$state()`, `$derived()`, `$effect()` instead of reactive declarations
- Component props use `let { propName } = $props()`
- Children slots use `{@render children()}` syntax

### Styling

Tailwind CSS v4 is configured with:
- Forms plugin (`@tailwindcss/forms`)
- Typography plugin (`@tailwindcss/typography`)
- Import via `@import 'tailwindcss'` in `layout.css`

### TypeScript

- Strict mode enabled
- Module resolution: bundler
- Path aliases handled by SvelteKit (see `svelte.config.js`)
- `$lib` alias points to `src/lib/`
