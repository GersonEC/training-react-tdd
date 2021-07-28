import React from "react";
import { Appointment as AppointmentModel } from "../utils/models";
import "./Appointment.css";
interface AppointmentProps {
  appointment: AppointmentModel;
}
export const Appointment = (props: AppointmentProps) => {
  return (
    <div className="appointment_container">
      <h3>Today's Appointment</h3>
      {props.appointment && (
        <>
          <p>
            Customer: {props.appointment.customer.firstName}{" "}
            {props.appointment.customer.lastName}
          </p>
          <p>Stylist: {props.appointment.stylist}</p>
          <p>Service: {props.appointment.service}</p>
          <p>Notes: {props.appointment.notes}</p>
        </>
      )}
    </div>
  );
};
