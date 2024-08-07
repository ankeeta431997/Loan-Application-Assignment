import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const LoanAmountInput = ({ loanAmount }) => (
  <Form.Group controlId="loanAmount" className="text-start">
    <Form.Label>Loan Amount:</Form.Label>
    <InputGroup className="mb-3" style={{ height: '48px', fontSize: '16px' }}>
      <InputGroup.Text>INR </InputGroup.Text>
      <Form.Control
        type="text"
        value={loanAmount}
        readOnly
      />
    </InputGroup>
  </Form.Group>
);

export default LoanAmountInput;
