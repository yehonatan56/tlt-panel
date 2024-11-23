import { useEffect, useState } from "react";
import { Button, Table } from "@mantine/core";
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
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getCustomersRequest(page).then((data) => {
      setCustomers(data);
    });
  }, [page]);
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
            <tr key={index}>
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

      <Button onClick={() => setPage(page + 1)}>Load More</Button>
    </div>
  );
};

export default Customers;
