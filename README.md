# Spark Studio Landing Page

A modern, motion-rich landing page built with React, Vite, Tailwind CSS, and Framer Motion. This project is designed as a polished production-style frontend experience with strong visual hierarchy, immersive interactions, responsive layout behavior, and reusable component structure.

## Overview

This landing page was created to showcase a high-impact marketing experience rather than a basic static layout. The interface focuses on:

- cinematic hero storytelling
- smooth scroll-based interaction
- animated feature presentation
- interactive gallery previews
- testimonial and stats sections with motion
- validated contact flow
- responsive behavior across desktop and mobile
- clean project organization suitable for GitHub and deployment

## Features

- Sticky navigation with smooth section scrolling
- Hero section with animated rotating headline copy
- Scroll progress indicator
- Intro loader animation
- Dark and light theme toggle
- Animated feature cards with hover effects
- Interactive gallery with modal preview
- Animated stats / counter section
- Testimonial slider with auto-rotation
- Contact form with validation and success toast
- Responsive footer and polished visual system

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS
- Framer Motion
- React Hook Form
- React Hot Toast
- React Modal
- React Icons
- React Scroll

## Project Structure

```text
src/
  Components/     Reusable UI sections and interface elements
  Context/        Theme provider and shared context values
  Hooks/          Custom hooks for theme, typing, counter, and scroll logic
  Utils/          Shared constants, animations, and validators
  assets/         Static project assets
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Create a production build

```bash
npm run build
```

### 4. Run lint checks

```bash
npm run lint
```

### 5. Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production bundle
- `npm run lint` runs ESLint checks
- `npm run preview` previews the production build locally

## Design Direction

The visual system is built around:

- layered gradients and soft-glass surfaces
- bold editorial typography
- high-contrast hero messaging
- subtle but meaningful micro-interactions
- animation used for emphasis, not noise

The goal is to make the page feel premium, memorable, and launch-ready.

## Reusability

The codebase is structured so content and behavior are easy to evolve:

- most content is driven from `src/Utils/Constants.js`
- animation presets are centralized in `src/Utils/Animations.js`
- form rules are managed in `src/Utils/Validators.js`
- custom hooks keep component logic smaller and easier to maintain

## Deployment

This project is ready to be deployed on platforms such as:

- Vercel
- Netlify

Recommended deployment flow:

1. Push the project to GitHub
2. Import the repository into Vercel or Netlify
3. Use the default build command:

```bash
npm run build
```

4. Use the default output directory:

```text
dist
```

## Quality Checks

The project has been verified with:

- `npm run lint`
- `npm run build`

## Customization

To adapt this project for another brand or concept:

- update copy and labels in `src/Utils/Constants.js`
- adjust motion behavior in `src/Utils/Animations.js`
- refine colors and shared styles in `src/index.css`
- replace imagery in `src/assets/`

## Author Notes

This project was built with a focus on production-level frontend presentation, maintainable structure, and strong UI polish suitable for portfolio use.
