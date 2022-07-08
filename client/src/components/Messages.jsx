import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
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
    <div>
      <h1> Messages </h1>
    </div>
  );
};

export default Messages;
