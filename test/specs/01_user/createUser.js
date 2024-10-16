import { createUser, deleteUser } from "../../uilts/imports";

describe("TC001 - Registro de novo usuario /login", () => {
  it("UC001 - Efetuando novo registro", async () => {
    await createUser.global.verify("h2", "New User Signup!");
    await createUser.createUser();
    await createUser.form();
  });
  it("UC002 - Deletando usuário do sistema ", async () => {
    deleteUser.delete("a", " Delete Account")
  });
});
