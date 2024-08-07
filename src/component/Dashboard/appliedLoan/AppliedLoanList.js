import React from 'react';
import { Table, Form, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AppliedLoanList.css'; 

const AppliedLoanList = () => {

    const navigate = useNavigate();
    const loanDetails = JSON.parse(localStorage.getItem("loanDetails")) || [];
    
    const handlerViewClick = (index) => {
        navigate(`/loanApproved/${index}`);
    };

    return (
        <div className="container-padding">
            <Card className="card-custom border-0">
                <Card.Body>
                    <Table className="custom-table">
                        <thead>
                            <tr>
                                <th>Loan Type</th>
                                <th>Amount</th>
                                <th>Co-Applicant</th>
                                <th>Loan Duration</th>
                                <th className="action-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanDetails.length > 0 ? (
                                loanDetails.map((loan, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={loan.loanType}
                                                readOnly
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={loan.loanAmount}
                                                readOnly
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={loan.coApplicant}
                                                readOnly
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={loan.loanDurationYears}
                                                readOnly
                                            />
                                        </td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                className="view-button"
                                                onClick={() => handlerViewClick(index)}
                                            >
                                                View
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No loan applications found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};


export default AppliedLoanList;
