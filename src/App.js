import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Navbar from './component/Navbar/navbar';
import Company from './component/Company/company';
import Dashboard from './component/Dashboard/dashboard';
import AppliedLoan from './component/Dashboard/appliedLoan/AppliedLoan';
import AppliedLoanList from './component/Dashboard/appliedLoan/AppliedLoanList';
import ApprovedLoan from './component/Dashboard/loanApproved/approvedLoan';
import Profile from './component/Profile/profile';
import Notifications from './component/Notifications/notification';
import Setting from './component/Setting/setting';
import Statistics from './component/Statistics/statistics';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/company" />} />
          <Route path="/company" element={<Company />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loanAppliedList" element={<AppliedLoan />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/loanApproved/:index" element={<ApprovedLoan />} />
          <Route path="/appliedLoanList" element={<AppliedLoanList />} />
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;
