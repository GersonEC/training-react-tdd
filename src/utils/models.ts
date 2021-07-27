export interface Customer {
  firstName: string;
  stylist: string;
  service: string;
  notes?: string;
}

export interface Appointment {
  startsAt: number;
  customer: Customer;
}
