import React, { SyntheticEvent, useState } from "react";

interface CustomerFormProps {
  firstName: string;
  onSubmit: (firstName: string) => void;
}
export const CustomerForm = (props: CustomerFormProps) => {
  const [customer, setCustomer] = useState(props.firstName);

  const handleChangeFirstName = (e: any) => {
    setCustomer(e.target.value);
  };

  return (
    <form id="customer" onSubmit={() => props.onSubmit(customer)}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={customer}
        onChange={handleChangeFirstName}
      />
    </form>
  );
};
