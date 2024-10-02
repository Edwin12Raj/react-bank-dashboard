import React, { useState } from 'react';
import FinancialForm from './Components/FinancialForm';
import ChartDisplay from './Components/ChartDisplay';
import './App.css';

const App = () => {
  const [financialData, setFinancialData] = useState({
    loanAmount: 100000,
    loanTerm: 30, // in years
    interestRate: 5, // in percentage
  });

  const handleDataChange = (name, value) => {
    setFinancialData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Bank Financial Dashboard</h1>
      </header>
      <main>
        <section className="financial-data">
          <FinancialForm financialData={financialData} onDataChange={handleDataChange} />
        </section>
        <section className="chart-display">
          <ChartDisplay financialData={financialData} />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Bank Dashboard</p>
      </footer>
    </div>
  );
};

export default App;
