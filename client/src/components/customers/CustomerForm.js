import { useState } from "react";
import axios from "axios";

const CustomerForm = ({ getCustomers }) => {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();
    try {
      const customerData = {
        name: customerName,
      };
      await axios.post("http://localhost:5000/customer", customerData);
      getCustomers();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <form onSubmit={saveCustomer}>
      <input
        type="text"
        placeholder="Customer name"
        onChange={(e) => {
          setCustomerName(e.target.value);
        }}
        value={customerName}
      />
      <button type="submit">Save new customer</button>
    </form>
  );
};

export default CustomerForm;
