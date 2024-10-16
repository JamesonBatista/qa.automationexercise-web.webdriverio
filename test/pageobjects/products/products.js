import { findAttribute } from "../../uilts/helpers";

export default {
  global: {
    verify: async (tag, text) => {
      const isTextExisting = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(isTextExisting).toBe(true);
    },
  },
  searchProduct: async function () {
    (await findAttribute("search_product")).addValue("Blue Top");
    (await findAttribute("submit_search")).click();
    await this.global.verify("h2", "Searched Products");
    await this.global.verify("p", "Blue Top");
  },

  addProduct: async function () {
    await $(`//a[text()='Add to cart']`).click();
    await this.global.verify("h4", "Added!");
  },
  removeProduct: async function () {
    await this.global.verify("h4", "Added!");
    await $(`//u[text()='View Cart']`).click();

  },
};
