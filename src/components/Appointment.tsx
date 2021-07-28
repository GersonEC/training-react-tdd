import React from "react";
import { Appointment as AppointmentModel } from "../utils/models";
import { appointmentTimeOfDay } from "../utils/utilities";
import "./Appointment.css";
interface AppointmentProps {
  appointment: AppointmentModel;
}
export const Appointment = (props: AppointmentProps) => {
  const { customer } = props.appointment;
  const { stylist, service, notes, startsAt } = props.appointment;
  return (
    <div className="appointment_container">
      <h3>Today's Appointment at {appointmentTimeOfDay(startsAt)}</h3>
      <p>
        Customer: {customer.firstName} {customer.lastName}
      </p>
      <p>Stylist: {stylist}</p>
      <p>Service: {service}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};
