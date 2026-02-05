# Next.js Optimization & BFF Challenge

## Overview

This repository contains a legacy Next.js application with a product detail page that needs to be refactored. The current implementation suffers from poor SEO, exposed secrets, and suboptimal performance patterns.

## Scenario

You've inherited a product page (`pages/product/[id].tsx`) that was built quickly without following Next.js best practices. The page is functional but has several critical issues:

- **Poor SEO**: No server-side rendering, causing search engines to miss content
- **Security Risk**: API keys are hardcoded and exposed to the client
- **Performance Issues**: Client-side data fetching causes slow initial page loads
- **Poor UX**: Layout shifts and white screens during loading
- **Inefficient Data Handling**: Storing entire API responses when only a few fields are needed

## Your Task

Refactor the product page to address these issues. You have **30 minutes** to complete the challenge.

## Objectives

### 1. Fix the Rendering Strategy
Choose and implement either:
- **ISR (Incremental Static Regeneration)** - If product data doesn't change frequently
- **SSR (Server-Side Rendering)** - If you need real-time data

Replace the client-side `useEffect` + `fetch` pattern with the appropriate Next.js data fetching method (`getStaticProps` or `getServerSideProps`).

### 2. Implement a BFF (Backend for Frontend) Pattern
- Create a Next.js API Route (`pages/api/product/[id].ts`) to act as a BFF
- Move the API key to the server-side (use environment variables)
- Transform the API response to only return the fields needed by the UI:
  - `id`
  - `title`
  - `description`
  - `price`
  - `rating`
  - `stock`
  - `brand`
  - `images` (first image only)
- Calculate the price with tax on the server side

### 3. Improve User Experience
- Add proper loading states (no more `return null`)
- Implement error handling
- Add SEO metadata using `next/head` or `next/legacy/head`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Navigate to a product page (e.g., `/product/1`) to see the current implementation

## API Reference

The product page fetches data from:
```
GET https://dummyjson.com/products/{id}
```

## Evaluation Criteria

Your solution will be evaluated on:

- ✅ Correct use of Next.js data fetching methods
- ✅ Proper BFF implementation with data transformation
- ✅ Security: API keys moved to server-side
- ✅ SEO: Proper metadata and server-side rendering
- ✅ UX: Smooth loading states and error handling
- ✅ Code quality: Clean, maintainable code

## Time Limit

**30 minutes**

Good luck! 🚀
