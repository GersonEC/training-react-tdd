import { AppointmentsDayView } from "../components/AppoimentsDayView";
import { CustomerForm } from "../components/CustomerForm";
import { fakeAppointments } from "../utils/stubs";

export function AppointmentsApp() {
  return (
    <div>
      <AppointmentsDayView appointments={fakeAppointments} />
      <CustomerForm firstName="Ashley" onSubmit={() => {}} />
    </div>
  );
}
