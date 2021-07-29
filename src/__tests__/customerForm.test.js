import React from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../components/CustomerForm";
import ReactTestUtils from "react-dom/test-utils";

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

  const firstNameField = () => form("customer").elements.firstName;
  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form("customer")).not.toBeNull();
  });

  it("render an input field inside the customer form", () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it("includes the existing value for the first name", () => {
    render(<CustomerForm firstName="Ashley" />);
    expect(firstNameField().value).toEqual("Ashley");
  });

  it("render a label for the first name field", () => {
    render(<CustomerForm firstName="Ashley" />);
    expect(labelFor("firstName")).not.toBeNull();
    expect(labelFor("firstName").textContent).toEqual("First Name");
  });

  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomerForm />);
    expect(firstNameField().id).toEqual("firstName");
  });

  it("saves existing first name when submitted", async () => {
    expect.hasAssertions();
    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={(firstName) => expect(firstName).toEqual("Ashley")}
      />
    );
    await ReactTestUtils.Simulate.submit(form("customer"));
  });

  it("saves new first name when submitted", async () => {
    expect.hasAssertions();
    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={(firstName) => expect(firstName).toEqual("Jamie")}
      />
    );
    await ReactTestUtils.Simulate.change(firstNameField(), {
      target: { value: "Jamie" },
    });
    await ReactTestUtils.Simulate.submit(form("customer"));
  });
});
