import { products, cart } from "../../uilts/imports";

describe("TC005 - Detalhes do produto /products", () => {
  it("UC001 - Abrir detalhes do produto", async () => {
    await products.global.verify("h2", "All Products");
    await products.searchProduct();
    await cart.detailsProduct();

  });
});
