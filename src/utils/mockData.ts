import { Appointment } from "./models";
import { name, phone, lorem } from "faker";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

const stylists = ["Ashley", "Jo", "Pat", "Sam"];
const services = [
  "Cut",
  "Blow-dry",
  "Cut & color",
  "Beard trim",
  "Cut & beard trim",
  "Extensions",
];

const generateFakeCustomer = () => ({
  firstName: name.firstName(),
  lastName: name.lastName(),
  phoneNumber: phone.phoneNumberFormat(1),
});

const generateFakeAppointment = () => ({
  customer: generateFakeCustomer(),
  stylist: stylists[getRandomInt(5)],
  service: services[getRandomInt(7)],
  notes: lorem.paragraph(),
});

export const mockAppointments: Appointment[] = [
  { startsAt: at(9), ...generateFakeAppointment() },
  {
    startsAt: at(10),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(11),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(12),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(13),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(14),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(15),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(16),
    ...generateFakeAppointment(),
  },
  {
    startsAt: at(17),
    ...generateFakeAppointment(),
  },
];
