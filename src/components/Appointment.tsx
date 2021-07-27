import React, { useState } from "react";
import { Appointment as AppointmentModel, Customer } from "../utils/models";

const appointmentTimeOfDay = (startsAt: number) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

interface AppointmentProps {
  customer: Customer;
}
export const Appointment = (props: AppointmentProps) => {
  return <div>{props.customer.firstName}</div>;
};

interface AppointmentsDayViewProps {
  appointments: AppointmentModel[];
}
export const AppointmentsDayView = (props: AppointmentsDayViewProps) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {props.appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {props.appointments.length === 0 ? (
        <p>There are no appointments today</p>
      ) : (
        <Appointment
          customer={props.appointments[selectedAppointment].customer}
        />
      )}
    </div>
  );
};
