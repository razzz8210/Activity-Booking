# Activity Booking API

A complete Activity Booking API backend built with Next.js API routes, Prisma, SQLite, JWT authentication, and Zod validation.

## Tech Stack

- **Next.js** - API routes via `/pages/api`
- **Prisma** - ORM with SQLite provider
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **Zod** - Input validation
- **TypeScript** - Type safety

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables


### 3. Initialize Database

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev --name init
```

### 4. Seed Database


### 5. Start Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication

#### Register User
```bash
POST /api/auth/register
```

#### Login
```bash
POST /api/auth/login
```

### Activities

#### List All Activities
```bash
GET /api/activities
```

#### Get Single Activity
```bash
GET /api/activities/:id
```

#### Create Activity (Admin Only)
```bash
POST /api/activities
```

#### Update Activity (Admin Only)
```bash
PUT /api/activities/:id
```

#### Delete Activity (Admin Only)
```bash
DELETE /api/activities/:id
```

### Bookings

#### Create Booking
```bash
POST /api/bookings
```

#### Get My Bookings
```bash
GET /api/bookings/me
```

## cURL Examples
