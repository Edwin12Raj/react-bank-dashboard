import React from 'react';

const FinancialForm = ({ financialData, onDataChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(name, parseFloat(value));
  };

  return (
    <form className="financial-form">
      <div className="form-group">
        <label>Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={financialData.loanAmount}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Loan Term (in years):</label>
        <input
          type="number"
          name="loanTerm"
          value={financialData.loanTerm}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          name="interestRate"
          value={financialData.interestRate}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default FinancialForm;
