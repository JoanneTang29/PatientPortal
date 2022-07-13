import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PartialMessages from './PartialMessages';
import PartialAppointments from './PartialAppointments';
import PartialNotifications from './PartialNotifications';
import PartialTodo from './PartialTodo';
import axios from 'axios';

const Home = () => {
  const [inboxMessages, setInboxMessages] = useState([]);

  const helperFunction = async () => {
    const res = await axios.get('/api/inbox');
    const result = res.data;
    setInboxMessages(result.data);
  };

  useEffect(() => {
    helperFunction();
  }, []);

  return (
    <div className="Home">
      <h1>Dashboard</h1>
      <div className="HomeGrid">
        <PartialAppointments />
        <PartialMessages inboxMessages={inboxMessages} />
        <PartialNotifications />
        <PartialTodo />
      </div>
    </div>
  );
};

export default Home;
