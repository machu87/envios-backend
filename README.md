
# Backend - API de Envíos

## Tecnologías
- NestJS
- Prisma
- MongoDB
- JWT

## Instalación

```bash
cd backend
npm install
npm run start:dev
```

## Variables de entorno

Crear un archivo `.env` con el contenido:

```
DATABASE_URL=mongodb://localhost:27017/envios
JWT_SECRET=supersecret
```

## Endpoints principales

- POST /auth/register
- POST /auth/login
- POST /orders (JWT)
- GET /orders (JWT)
- GET /orders/export (JWT)

## Seed opcional

Puedes registrar usuarios con el endpoint /auth/register o crear un seeder en `main.ts`.
