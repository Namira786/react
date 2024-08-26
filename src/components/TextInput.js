

import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ label, type, placeholder, value, onChange, name }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        name={name} 
      />
    </Form.Group>
  );
};

export default TextInput;
