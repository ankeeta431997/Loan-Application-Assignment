import React, { useState } from 'react';
 import { useNavigate ,useParams} from 'react-router-dom';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import LoanTypeDropdown from '../dashboardItems/LoanTypeDropdown';
import CoApplicantRadios from '../dashboardItems/CoApplicantRadios';
import LoanAmountInput from '../dashboardItems/LoanAmountInput';
import DepartmentCheckboxes from '../dashboardItems/DepartmentCheckboxes';

const ApprovedLoan = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const loanDetails = JSON.parse(localStorage.getItem('loanDetails')) || [];
  const loanStatus = loanDetails[parseInt(index)];
 

  const [departments, setDepartments] = useState({
    "Top Management": false,
    "Market Department": false,
    "Design Department": false,
    "Financial Department": false,
    "Supply Department": false
  });

  
  const departmentCheckboxHandler = (department) => {
    setDepartments(prevState => ({
      ...prevState,
      [department]: !prevState[department]
    }));
  };
  
 
  const approvedHandler = (e) => {
    e.preventDefault();
    const approved = {
      ...loanStatus,
      departments: Object.keys(departments).filter(department => departments[department])
    };
    const approvedLoan = JSON.parse(localStorage.getItem('approvedLoans')) || [];
    approvedLoan.push(approved);
    localStorage.setItem('approvedLoans', JSON.stringify(approvedLoan));
    const updateTransactions = loanDetails.filter((_, i) => i !== parseInt(index));
    localStorage.setItem('loanDetails', JSON.stringify(updateTransactions));
    navigate('/loanAppliedList');
  };

  const cancelHandler = () => {
    navigate('/appliedLoanList');
  };

  return (
    <Container className="mt-4">
      <Card className="dashboard-card border-0">
        <Card.Body>
          <Form onSubmit={approvedHandler}>
            <Row>
            <Col md={6} className="mr-md-3">
                <LoanTypeDropdown loanType={loanStatus.loanType} />
                <br />
                <DepartmentCheckboxes departments={departments} handleCheckboxChange={departmentCheckboxHandler} />
            </Col>

            <Col md={6}>
                <LoanAmountInput loanAmount={loanStatus.loanAmount} />
                <CoApplicantRadios coApplicant={loanStatus.coApplicant} />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Button variant="primary" type="submit" className="custom-button px-5 me-2">
                  Approve
                </Button>{" "}
                <Button variant="outline-secondary" className="custom-button px-5 ms-2" onClick={cancelHandler}>Cancel</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ApprovedLoan;
