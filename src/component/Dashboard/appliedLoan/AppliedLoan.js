import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './AppliedLoan.css'; 

const AppliedLoan = () => {
  const appliedloanDetails = JSON.parse(localStorage.getItem("loanDetails")) || [];
  const appliedLoanCount = appliedloanDetails.length;
  const approvedLoan = JSON.parse(localStorage.getItem("approvedLoans")) || [];
  const approvedLoanCount = approvedLoan.length;

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='d-flex justify-content-between'>
      <Link to="/appliedLoanList" className='text-decoration-none'>
        <div className='text-center mx-2'>
          <Card bg="light" className='d-flex align-items-center justify-content-center'style={{ height: "250px", width: "400px" }}>
            <span className='custom-card-text'>{appliedLoanCount}</span>
          </Card>
          <div className='custom-label'>Applied Loan</div>
        </div>
      </Link>
        <div className='text-center mx-2'>
          <Card bg="light" className='d-flex align-items-center justify-content-center'style={{ height: "250px", width: "400px" }}>
            <span className='custom-card-text'>{approvedLoanCount}</span>
          </Card>
          <div className='custom-label'>Approved Loan</div>
        </div>
        <div className='text-center mx-2'>
          <Card bg="light" className='d-flex align-items-center justify-content-center'style={{ height: "250px", width: "400px" }}>
            <span className='custom-card-text'>0</span>
          </Card>
          <div className='custom-label'>Notification Send</div>
        </div>
      </div>
    </div>
  );
}

export default AppliedLoan;
