import { findAttribute } from "../../uilts/helpers";

export default {
  global: {
    verify: async (tag, text) => {
      const isTextExisting = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(isTextExisting).toBe(true);
    },
  },
  detailsProduct: async function () {
    (await $(`//a[text()='View Product']`)).click();

    this.global.verify("h2", "Blue Top");

    await $('//*[@id="quantity"]').setValue("4");

    await $("//button[contains(., 'Add to cart')]").click();

    (await $(`//u[text()='View Cart']`)).click();

    this.global.verify("u", "Shopping Cart");

    const verifyQnt = await $('//*[@id="product-1"]/td[4]/button');
    const extractText = await verifyQnt.getText();
    await expect(extractText).toBe("4")
  },
};
