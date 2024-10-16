export async function findFieldElement(selector) {
  const tags = [
    "input",
    "button",
    "textarea",
    "select",
    "div",
    "span",
    "a",
    "ul",
    "li",
  ];
  for (const tag of tags) {
    const locator = `//${tag}[@data-qa='${selector}']`;
    const element = await $(locator);

    if ((await element.isExisting()) && (await element.isDisplayed())) {
      return element;
    }
  }

  throw new Error(`Elemento com "${selector}" não encontrado`);
}
export async function findAttribute(selector) {
  const tags = ["id", "name", "class"];
  for (const tag of tags) {
    const locator = `//*[@${tag}="${selector}"]`;
    const element = await $(locator);

    if ((await element.isExisting()) && (await element.isDisplayed())) {
      return element;
    }
  }

  throw new Error(`Elemento com "${selector}" não encontrado`);
}
