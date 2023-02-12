## Getting Started

To run the development server:

```bash
yarn
npx prisma generate
yarn dev
```

## About this project

This is a project using NextJS 13, TailwindCSS, Prisma and MongoDB. Prisma is used to generate the database models and MongoDB is used as the database. The project is a simple blog where you can create posts and view them. The project is still in development and more features will be added.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [mongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)

## What is Prisma?

Prisma is an open-source database toolkit that makes it easy for developers to reason about their data and how they access it. Prisma is used to query data from a database inside a Node.js or TypeScript application. It can be used as an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) (Object-Relational Mapping) or as a [query builder](https://en.wikipedia.org/wiki/Query_builder).

## When updating Prisma Schema

```bash
    npx prisma generate
```
