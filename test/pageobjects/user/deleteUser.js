export default deleteUser = {
  global: {
    verify: async (tag, text) => {
      const isTextExisting = await $(`//${tag}[text()='${text}']`).isExisting();

      expect(isTextExisting).toBe(true);
    },
  },
  delete: async function (tag, text) {
    (await $(`//${tag}[text()='${text}']`)).click();
    this.global.verify("b", "Account Deleted!");
    (await $(`//a[text()='Continue']`)).click();
  },
};
