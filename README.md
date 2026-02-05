# Code Challenge

## Overview

This repository contains a legacy Next.js application with a product detail page that needs to be refactored. The current implementation suffers from poor SEO, exposed secrets, and suboptimal performance patterns.

## Scenario

You've inherited a product page (`pages/product/[id].tsx`) that was built quickly without following Next.js best practices. The page is functional but has several critical issues:

- **Poor SEO**: Client-side rendering, causing search engines to miss content
- **Security Risk**: API keys are hardcoded and exposed to the client
- **Performance Issues**: Client-side data fetching causes slow initial page loads
- **Poor UX**: Layout shifts and white screens during loading
- **Inefficient Data Handling**: Storing entire API responses when only a few fields are needed

## Your Task

Refactor the product page to address these issues. You have **30 minutes** to complete the challenge.

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

## Time Limit

**30 minutes**

Good luck! 🚀
