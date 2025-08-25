# NASA Data Explorer — Backend

This is the Node.js/Express backend for NASA Data Explorer.

## Features
- REST API for APOD, Mars Rover, Asteroids, and Earth imagery
- Smart caching and batching for NASA API requests
- CORS support for frontend integration
- Environment variable support for API keys and config

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file for environment variables (see `.env.example`).
3. Start the development server:
   ```bash
   npm run start
   ```
4. The API will be available at [http://localhost:4000](http://localhost:4000) by default

## Environment Variables
- `NASA_API_KEY` — Your NASA API key
- `NASA_API_URL` — NASA API base URL
- `FRONTEND_URL` — F/E base URL


## License
MIT
