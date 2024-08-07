import React from 'react';
import { Form } from 'react-bootstrap';
import { BsFillCaretDownFill } from 'react-icons/bs';

const LoanTypeDropdown = ({ loanType, onChange }) => (
  <Form.Group controlId="loanType" className="text-start">
    <Form.Label>Loan Type:</Form.Label>
    <div style={{ position: 'relative' }}>
      <Form.Control
        as="select"
        value={loanType}
        onChange={onChange}
        style={{ paddingRight: '2.5rem', height: '48px', fontSize: '16px' }}
      >
        <option value="">Select</option>
        <option value="Office">Office</option>
        <option value="Home">Home</option>
        <option value="Car">Car</option>
      </Form.Control>
      <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
        <BsFillCaretDownFill />
      </div>
    </div>
  </Form.Group>
);

export default LoanTypeDropdown;
