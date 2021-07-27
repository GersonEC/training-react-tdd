import React from "react";
import { AppointmentsDayView } from "./components/Appointment";
import { mockAppointments } from "./utils/mockData";

function App() {
  return <AppointmentsDayView appointments={mockAppointments} />;
}

export default App;
