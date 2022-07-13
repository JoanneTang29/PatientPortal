import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <div className="Messages">
      <h1> Messages </h1>
      {inboxMessages.map((messages) => (
        <Card id="CardMessages" key={messages._id}>
          <Card.Body>
            <Card.Title>{messages.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {messages.subject}
            </Card.Subtitle>
            <Card.Text>{messages.message}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {inboxMessages.map((messages) => (
            <tr key={messages.id}>
              <td>{messages.name}</td>
              <td>{messages.subject}</td>
            </tr>
          ))}
        </tbody> */}
      {/* </Table> */}
    </div>
  );
};

export default Messages;
