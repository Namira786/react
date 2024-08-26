

import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ label }) => {
  return (
    <Button variant="primary" type="submit">
      {label}
    </Button>
  );
};

export default SubmitButton;
