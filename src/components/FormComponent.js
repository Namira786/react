// src/components/FormComponent.js

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import '../App.css';

const FormComponent = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="form-header">Dynamic Form</h2>
        {fields.map((field, index) => (
          <TextInput
            key={index}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            name={field.name}
          />
        ))}
        <SubmitButton label="Submit" />
      </Form>
    </div>
  );
};

export default FormComponent;

