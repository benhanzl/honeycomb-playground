const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const NEW_PRODUCT_COUNT = 5;
const productData = Array(NEW_PRODUCT_COUNT)
  .fill()
  .map(() => {
    return {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.url(),
    };
  });

async function main() {
  console.log(`Startnig to seed database`);

  for (const product of productData) {
    const newProduct = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${newProduct.id}`);
  }

  console.log(`Seeding finished!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
