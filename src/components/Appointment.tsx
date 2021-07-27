import React from "react";
import { Customer } from "../utils/models";
import "./Appointment.css";
interface AppointmentProps {
  customer: Customer;
}
export const Appointment = (props: AppointmentProps) => {
  return (
    <div className="appointment_container">
      <h3>Today's Appointment</h3>
      <p>Customer: {props.customer.firstName}</p>
      <p>Stylist: {props.customer.stylist}</p>
      <p>Service: {props.customer.service}</p>
      <p>Notes: {props.customer.notes}</p>
    </div>
  );
};
