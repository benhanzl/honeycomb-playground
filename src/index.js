require("dotenv").config();

const app = require("./app");
const productsRouter = require("./controllers/products");

app.use("/api/products", productsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
