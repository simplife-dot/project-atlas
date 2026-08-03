# Atlas

Atlas Milestone 1 is a production-ready Next.js application foundation with authentication, PostgreSQL persistence, theming, and a protected dashboard. Financial functionality is intentionally out of scope.

## Prerequisites

- Node.js 22 and npm
- Docker with Docker Compose
- A GitHub OAuth app

Set the OAuth app homepage to `http://localhost:3000` and its authorization callback URL to `http://localhost:3000/api/auth/callback/github`.

## Run locally

1. Create your environment file and replace the OAuth placeholders:

   ```bash
   cp .env.example .env
   openssl rand -base64 32 # copy the output to AUTH_SECRET
   ```

2. Start PostgreSQL:

   ```bash
   docker compose up -d db
   ```

3. Install dependencies and initialize the database:

   ```bash
   npm install
   npm run db:generate
   npm run db:deploy
   ```

4. Start Atlas at [http://localhost:3000](http://localhost:3000):

   ```bash
   npm run dev
   ```

The health endpoint is available at [http://localhost:3000/api/health](http://localhost:3000/api/health). Stop the database with `docker compose down`; add `-v` to remove its persisted data.

## Production container

Build with the required environment variables available to the build, then run the standalone image with the same variables at runtime:

```bash
docker build -t atlas .
docker run --env-file .env -p 3000:3000 atlas
```

Run `npm run db:deploy` as a release step before starting a new production version.
