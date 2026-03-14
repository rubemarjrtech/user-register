import { mount } from "cypress/react";
import Button from "./index";

describe("<TopBackground />", () => {
  it("renders", () => {
    mount(<Button />);

    cy.get("button").should("exist").and("be.visible");
  });

  it("have specific text inside", () => {
    const buttonText = "Criar Usuario";
    mount(<Button>{buttonText}</Button>);

    cy.get("button").should("have.text", buttonText);
  });
});
