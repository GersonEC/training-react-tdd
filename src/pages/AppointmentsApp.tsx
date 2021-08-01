import { AppointmentsDayView } from "../components/AppoimentsDayView";
import { CustomerForm } from "../components/CustomerForm";
import { mockAppointments } from "../utils/mockData";

export function AppointmentsApp() {
  return (
    <div>
      <AppointmentsDayView appointments={mockAppointments} />
      <CustomerForm firstName="Ashley" onSubmit={() => {}} />
    </div>
  );
}
