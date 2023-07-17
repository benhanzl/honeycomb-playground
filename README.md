# Product Service

The product catalog API for a fictional store.

## Getting Started

```shell
cp .env.example .env
npm run start
```

## API

`GET /api/products` - Returns an array of all products.

- Response Code: 200 - Array of products
- Returns an empty array if no products exist.

`GET /api/products/:id` - Returns the product with the specified id.

- Response Code: 200 - Individual product.
- Response Code: 404 - Product does not exist.
