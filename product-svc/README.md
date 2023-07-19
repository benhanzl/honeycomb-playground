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

`POST /api/products` - Creates a new product.

- Response Code: 201 - Returns the newly created product
- Response Code: 400 - Request missing a field

`PUT /api/products/:id` - Updates the product (all fields) with the specified id.

- Response Code: 200 - Returns the updated product.
- Response Code: 400 - Request missing a product field
- Response Code: 404 - Product does not exist.

`DELETE /api/products/:id` - Deletes the product with the specified id.

- Response Code: 200 - Returns the deleted product.
- Response Code: 404 - Product does not exist.
