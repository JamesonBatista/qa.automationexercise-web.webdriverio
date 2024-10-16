import { products } from "../../uilts/imports";

describe("TC003 - Adicionar produtos ao carrinho /products", () => {
  it("UC001 - Adicionar produtoo", async () => {
    await products.global.verify("h2", "All Products");
    await products.searchProduct();
    await products.addProduct();
  });
});
