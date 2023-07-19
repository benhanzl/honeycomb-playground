import { Router } from "express";
import db from "../utils/db.js";

const productsRouter = new Router();

productsRouter.get("/", async (_, response) => {
  const products = await db.product.findMany();

  response.json(products);
});

productsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return response.status(404).send("Not Found");
  }

  response.json(product);
});

productsRouter.post("/", async (request, response) => {
  const { name, description, imageUrl } = request.body;

  if (name == null || name.trim().length === 0) {
    return response.status(400).send(`Argument 'name' is missing or empty.`);
  }

  if (imageUrl == null || imageUrl.trim().length === 0) {
    return response
      .status(400)
      .send(`Argument 'imageUrl' is missing or empty.`);
  }

  const newProduct = await db.product.create({
    data: { name, description, imageUrl },
  });

  response.status(201).json(newProduct);
});

productsRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { name, description, imageUrl } = request.body;

  if (name == null || name.trim().length === 0) {
    return response.status(400).send(`Argument 'name' is missing or empty.`);
  }

  if (imageUrl == null || imageUrl.trim().length === 0) {
    return response
      .status(400)
      .send(`Argument 'imageUrl' is missing or empty.`);
  }

  try {
    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        name,
        description,
        imageUrl,
      },
    });

    response.status(200).json(updatedProduct);
  } catch (error) {
    if (error.code === "P2025") {
      return response.status(404).send("Not Found");
    }

    throw error;
  }
});

productsRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await db.product.delete({
      where: { id },
    });

    response.status(200).json(deletedProduct);
  } catch (error) {
    if (error.code === "P2025") {
      return response.status(404).send("Not Found");
    }

    throw error;
  }
});

export default productsRouter;
