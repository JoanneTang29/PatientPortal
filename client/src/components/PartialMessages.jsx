import React, { useEffect } from 'react';
import axios from 'axios';

const PartialMessages = ({ inboxMessages }) => {
  if (!inboxMessages) {
    return <div>No messages</div>;
  } else {
    return (
      <div>
        <div>
          <h1>Messages</h1>

          <ul>
            {inboxMessages.map((messages) => {
              return (
                <div key={messages._id}>
                  <li>{messages.name}</li>
                  <li>{messages.subject}</li>
                  <li>{messages.message}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default PartialMessages;
