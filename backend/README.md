# NASA Data Explorer — Backend

This is the Node.js/Express backend for NASA Data Explorer. Service available on [https://nasa-data-explorer-fe.vercel.app/](https://nasa-data-explorer-fe.vercel.app/)

## Features
- REST API for APOD, Mars Rover, Asteroids, and Earth imagery
- Smart caching and batching for NASA API requests
- CORS support for frontend integration
- Environment variable support for API keys and config

## API Endpoints

This project includes two main GET endpoints exposed through a controller using InversifyJS for clean and maintainable dependency injection.

#### GET /

Returns a simple welcome message to confirm that the API is running.

Example Response:

Hello from NASA Data Explorer!

#### GET /apod

Fetches NASA's Astronomy Picture of the Day (APOD) data for a given date range.

Query Parameters:

`start_date` (optional): Start date in YYYY-MM-DD format.

`end_date` (optional): End date in YYYY-MM-DD format.

Example Request:
```bash
GET /apod?start_date=2025-08-01&end_date=2025-08-05
```

Success Response:

Status: `200 OK`

Body: JSON array of APOD entries from NASA

Error Response:

Status: `400 Bad Request`

Body: Error message from NASA API or internal validation

## Code Structure & InversifyJS

This project uses InversifyJS
 to implement dependency injection, promoting cleaner, testable, and modular code. For example:

HomeController is decorated with @controller to define routes.

NasaService is injected into the controller using the @inject() decorator.

The API routes are defined using decorators like @httpGet.

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
