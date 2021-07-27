import React from "react";
import { AppointmentsDayView } from "./components/AppoimentsDayView";
import { mockAppointments } from "./utils/mockData";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppointmentsDayView appointments={mockAppointments} />
    </div>
  );
}

export default App;
