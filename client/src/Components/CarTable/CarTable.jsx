import React, { useState, useEffect } from "react";
import axios from "axios";

function CarTable() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/cars");
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.name}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CarTable;
