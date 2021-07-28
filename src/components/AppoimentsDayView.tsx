import React, { useState } from "react";
import { Appointment as AppointmentModel } from "../utils/models";
import { Appointment } from "./Appointment";
import "./AppointmentsDayView.css";

const appointmentTimeOfDay = (startsAt: number) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

interface AppointmentsDayViewProps {
  appointments: AppointmentModel[];
}

export const AppointmentsDayView = (props: AppointmentsDayViewProps) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView" className="appointments_container">
      <ol style={{ listStyle: "none" }}>
        {props.appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              className="time_button"
              type="button"
              onClick={() => setSelectedAppointment(i)}
            >
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {props.appointments.length === 0 ? (
        <p>There are no appointments today</p>
      ) : (
        <Appointment appointment={props.appointments[selectedAppointment]} />
      )}
    </div>
  );
};
