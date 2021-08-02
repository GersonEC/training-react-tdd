import React from "react";
import ReactDOM from "react-dom";
import { AppointmentsDayView } from "../components/AppoimentsDayView";
import { Appointment } from "../components/Appointment";
import ReactTestUtils from "react-dom/test-utils";

describe("Appointment", () => {
  let customer;
  let container;
  let appointment;

  const render = (component) => ReactDOM.render(component, container);
  beforeEach(() => {
    container = document.createElement("div");
  });

  it("renders the customer first name", () => {
    const today = new Date();
    const notes = "Some note about the stylist.";
    customer = { firstName: "Ashley" };
    appointment = {
      startsAt: today.setHours(12, 0),
      customer: customer,
      stylist: "Maggie",
      service: "hair wash",
      notes: notes,
    };
    render(<Appointment appointment={appointment} />);

    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another customer first name", () => {
    const today = new Date();
    const notes = "Some note about the stylist.";
    customer = {
      firstName: "Jordan",
      lastName: "Nima",
      phoneNumber: "1234567",
    };
    appointment = {
      startsAt: today.setHours(12, 0),
      customer: customer,
      stylist: "Maggie",
      service: "hair wash",
      notes: notes,
    };
    render(<Appointment appointment={appointment} />);

    expect(container.textContent).toMatch("Jordan");
  });

  it("renders stylist name and salon service", () => {
    const today = new Date();
    const notes = "Some note about the stylist.";
    customer = {
      firstName: "Gerson",
      lastName: "Enriquez",
      phoneNumber: "1234567",
    };
    appointment = {
      startsAt: today.setHours(12, 0),
      customer: customer,
      stylist: "Maggie",
      service: "hair wash",
      notes: notes,
    };
    render(<Appointment appointment={appointment} />);
    expect(container.textContent).toMatch("Maggie");
    expect(container.textContent).toMatch("hair wash");
    expect(container.textContent).toMatch(notes);
  });
});

describe("AppointmentsDayView", () => {
  let container;
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });

  it("initially show a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch("There are no appointments today");
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("each li element has a button", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });
});
