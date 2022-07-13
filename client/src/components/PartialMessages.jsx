import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

const PartialMessages = ({ inboxMessages }) => {
  if (!inboxMessages) {
    return <div>No messages</div>;
  } else {
    return (
      <div className="PartialMessages">
        <h2>New Messages</h2>
        {inboxMessages.map((messages) => (
          <Card id="CardPartialMessages" key={messages._id}>
            <Card.Body>
              <Card.Title>{messages.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {messages.subject}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
};

export default PartialMessages;
