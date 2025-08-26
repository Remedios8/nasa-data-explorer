# NASA Data Explorer — Frontend

This is the React + Vite frontend for NASA Data Explorer. Service available on [https://nasa-data-explorer-fe.vercel.app/](https://nasa-data-explorer-fe.vercel.app/)

## Features
- Browse APOD, Mars Rover, Asteroids, and Earth imagery
- Infinite scroll, skeleton loaders, and smart caching
- Theme switcher (light/dark)
- Responsive sidebar and navigation
- Animated hero section and cosmos background

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file for environment variables (see below).
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open it in your browser.

## Environment Variables
Create a `.env` file in the `frontend/` directory with the following:

```
VITE_NASA_APOD_URL=http://backend-url-here.com
```

- `VITE_NASA_APOD_URL`: Backend API endpoint for APOD

## License
MIT
