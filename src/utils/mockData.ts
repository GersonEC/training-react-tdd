import { Appointment } from "./models";

const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

export const mockAppointments: Appointment[] = [
  {
    startsAt: at(9),
    customer: {
      firstName: "Charlie",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(10),
    customer: {
      firstName: "Frankie",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(11),
    customer: {
      firstName: "Casey",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(12),
    customer: {
      firstName: "Ashley",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(13),
    customer: {
      firstName: "Jordan",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(14),
    customer: {
      firstName: "Jay",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(15),
    customer: {
      firstName: "Alex",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(16),
    customer: {
      firstName: "Jules",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
  {
    startsAt: at(17),
    customer: {
      firstName: "Stevie",
      stylist: "Maggie",
      service: "Cut",
      notes: "Some note about stylist",
    },
  },
];
