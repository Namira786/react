<<<<<<< HEAD
=======


>>>>>>> 641080a24446cc838eaf1487313abc3fd46152cc
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SubmitButton from './SubmitButton';
import DropdownInput from './DropdownInput';
import RadioButtonGroup from './RadioButtonGroup';
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
        {fields.map((field, index) => {
          switch (field.type) {
            case 'text':
            case 'email':
            case 'password':
            case 'tel':
              return (
                <Form.Group key={index} controlId={field.name}>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    name={field.name}
                  />
                </Form.Group>
              );
            case 'dropdown':
              return (
                <DropdownInput
                  key={index}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  options={field.options}
                />
              );
            case 'radio':
              return (
                <RadioButtonGroup
                  key={index}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  options={field.options}
                />
              );
            default:
              return null;
          }
        })}
        <SubmitButton label="Submit" />
      </Form>
    </div>
  );
};

export default FormComponent;
