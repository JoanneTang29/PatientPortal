import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './App.css';

const PartialTodo = () => {
  return (
    <div className="PartialTodo">
      <h2>To-Do</h2>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>{' '}
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
    </div>
  );
};

export default PartialTodo;
