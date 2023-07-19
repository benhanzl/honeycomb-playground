require("dotenv").config();

const app = require("./app");
const logger = require("./utils/logger");
const productsRouter = require("./controllers/products");

app.use("/api/products", productsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
