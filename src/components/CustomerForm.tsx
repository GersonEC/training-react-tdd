import React from "react";

interface CustomerFormProps {
  firstName: string;
}
export const CustomerForm = (props: CustomerFormProps) => {
  return (
    <form id="customer">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={props.firstName}
        readOnly
      />
    </form>
  );
};
