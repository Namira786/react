import React from 'react';
import { Form } from 'react-bootstrap';

const RadioButtonGroup = ({ label, name, value, onChange, options }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      {options.map((option, idx) => (
        <Form.Check
          key={idx}
          type="radio"
          label={option.label}
          value={option.value}
          name={name}
          onChange={onChange}
          checked={value === option.value}
        />
      ))}
    </Form.Group>
  );
};

export default RadioButtonGroup;
