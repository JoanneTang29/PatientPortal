import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';

const PartialAppointments = () => {
  return (
    <div className="PartialAppointments">
      <h2>Appointments</h2>
      <Table>
        <tbody>
          <tr>
            <td>10:00 - 11:30</td>
            <td>Paige</td>
            <td>Turner</td>
            <td>Diabetes</td>
          </tr>
          <tr>
            <td>13:00 - 14:00</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Allergy</td>
          </tr>
          <tr>
            <td>18:00 - 20:00</td>
            <td>Harry</td>
            <td>Smith</td>
            <td>Flu</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PartialAppointments;
