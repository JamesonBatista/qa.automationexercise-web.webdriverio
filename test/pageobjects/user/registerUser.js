import { findFieldElement } from "../../uilts/helpers";
import { faker } from "@faker-js/faker";

const { $ } = require("@wdio/globals");

export default createUser = {
  global: {
    verify: async (tag, text) => {
      const isTextExisting = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(isTextExisting).toBe(true);
    },
  },
  createUser: async function () {
    (await findFieldElement("signup-name")).addValue(faker.person.firstName());

    (await findFieldElement("signup-email")).addValue(faker.internet.email());

    (await findFieldElement("signup-button")).click();
  },
  form: async function () {
    const nameAccount = faker.person.fullName();

    await this.global.verify("b", "Enter Account Information");

    $('[value="Mr"]').click();

    (await findFieldElement("password")).addValue(faker.internet.password());

    (await findFieldElement("days")).selectByVisibleText("10");
    (await findFieldElement("months")).selectByVisibleText("July");
    (await findFieldElement("years")).selectByVisibleText("1988");

    $('[name="newsletter"]').click();
    $('[name="optin"]').click();

    (await findFieldElement("first_name")).addValue(nameAccount);
    (await findFieldElement("last_name")).addValue(faker.person.fullName());
    (await findFieldElement("company")).addValue(faker.company.name());
    (await findFieldElement("address")).addValue(
      faker.location.streetAddress()
    );
    (await findFieldElement("address2")).addValue(
      faker.location.streetAddress()
    );

    (await findFieldElement("country")).selectByVisibleText("United States");
    (await findFieldElement("state")).addValue(faker.location.state());
    (await findFieldElement("city")).addValue(faker.location.city());

    (await findFieldElement("zipcode")).addValue(faker.location.zipCode());
    (await findFieldElement("mobile_number")).addValue(faker.phone.number());

    (await findFieldElement("create-account")).click();

    await this.global.verify("b", "Account Created!");

    $('[data-qa="continue-button"]').click();
  },
};
