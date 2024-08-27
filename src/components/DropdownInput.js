import React from 'react';
import { Form } from 'react-bootstrap';

const DropdownInput = ({ label, name, value, onChange, options }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" value={value} onChange={onChange} name={name}>
        <option value="">Select {label}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default DropdownInput;
