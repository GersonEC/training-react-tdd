export interface Customer {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface Appointment {
  startsAt: number;
  customer: Customer;
  stylist: string;
  service: string;
  notes: string;
}

export interface Comment {
  id: number;
  comment: string;
  author: string;
}
