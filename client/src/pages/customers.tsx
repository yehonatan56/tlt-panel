import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { getCustomersRequest } from "../requests/customers.ts";
interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    getCustomersRequest().then((data) => {
      setCustomers(data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Customers</h1>
      <Table style={{ width: "80%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={index}
              style={{
                maxWidth: "100ox",
              }}
            >
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Customers;
