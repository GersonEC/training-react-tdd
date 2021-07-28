import React from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../components/CustomerForm";

describe("CustomerForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = (id) => container.querySelector(`form[id="${id}"]`);

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form("customer")).not.toBeNull();
  });

  it("render an input field inside the customer form", () => {
    render(<CustomerForm />);
    const field = form("customer").elements.firstName;
    expectToBeInputFieldOfTypeText(field);
  });
});
