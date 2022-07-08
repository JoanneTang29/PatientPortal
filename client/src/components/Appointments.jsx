import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appointments = () => {
  const [value, onChange, onClickDay] = useState(new Date());
  return (
    <div>
      <h1>Appointments</h1>
      <Calendar
        onChange={onChange}
        defaultView="month"
        value={value}
        prev2Label={null}
        next2Label={null}
        onClickDay={onClickDay}
      />
    </div>
  );
};

export default Appointments;
