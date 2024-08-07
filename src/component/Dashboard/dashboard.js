import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card, Row, Col, InputGroup,Alert } from 'react-bootstrap';
import LoanTypeDropdown from './dashboardItems/LoanTypeDropdown';
import LoanDurationCheckboxes from './dashboardItems/LoanDurationCheckboxes';
import CoApplicantRadios from './dashboardItems/CoApplicantRadios';


const Dashboard = () => {
  const navigate = useNavigate();
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDurationYears, setLoanDurationYears] = useState([]);
  const [coApplicant, setCoApplicant] = useState('');
  const [error, setError] = useState('');
  const loanTypeHandler = (e) => setLoanType(e.target.value);
  const loanAmountHandler = (e) => setLoanAmount(e.target.value);
  const loanDurationHandler = (year) => {
    setLoanDurationYears((prevYears) =>
      prevYears.includes(year) ? prevYears.filter((y) => y !== year) : [...prevYears, year]
    );
  };
  const coApplicantHandler = (e) => setCoApplicant(e.target.value);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loanType || !loanAmount || loanDurationYears.length === 0 || !coApplicant) {
      setError('All fields are required.');
      return;
    }
    const loanDetails = JSON.parse(localStorage.getItem('loanDetails')) || [];
    const newLoan = { loanType, loanAmount, loanDurationYears, coApplicant };
    localStorage.setItem('loanDetails', JSON.stringify([...loanDetails, newLoan]));
    navigate('/loanAppliedList');
  };
  const handlerClick = (index) => {
    window.location.reload()
  };
  return (
    <Container className="mt-4">
      <Card className="dashboard-card border-0">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col md={6} className="mr-md-3">
                <LoanTypeDropdown loanType={loanType} onChange={loanTypeHandler} />
                <br />
                <LoanDurationCheckboxes loanDurationYears={loanDurationYears} onChange={loanDurationHandler} />
              </Col>
              <Col md={6}>
                <Form.Group controlId="loanAmount" className="text-start">
                  <Form.Label>Loan Amount:</Form.Label>
                  <InputGroup className="mb-3" style={{ height: '48px', fontSize: '16px' }}>
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter loan amount"
                      value={loanAmount}
                      onChange={loanAmountHandler}
                    />
                  </InputGroup>
                </Form.Group>
                <CoApplicantRadios coApplicant={coApplicant} onChange={coApplicantHandler} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button variant="primary" type="submit" className="custom-button px-5 me-2">
                  Apply
                </Button>{" "}
                <Button variant="outline-secondary" className="custom-button px-5 ms-2" onClick={handlerClick}>Cancel</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
