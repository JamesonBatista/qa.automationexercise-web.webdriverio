import { products } from "../../uilts/imports";

describe("TC002 - Lista de produtos /products", () => {
  it("UC001 - Encontrar produto", async () => {
    await products.global.verify("h2", "All Products");
    await products.searchProduct();
  });
});
