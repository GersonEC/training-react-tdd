import React from "react";
import { AppointmentsDayView } from "./components/AppoimentsDayView";
import { mockAppointments } from "./utils/mockData";
import "./App.css";
import { CustomerForm } from "./components/CustomerForm";

function App() {
  return (
    <div className="app">
      <AppointmentsDayView appointments={mockAppointments} />
      <CustomerForm firstName="Ashley" onSubmit={() => {}} />
    </div>
  );
}

export default App;
