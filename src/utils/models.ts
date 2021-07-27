export interface Customer {
  firstName: string;
}

export interface Appointment {
  startsAt: number;
  customer: Customer;
}
