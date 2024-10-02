import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ChartDisplay = ({ financialData }) => {
  const totalLoanMonths = financialData.loanTerm * 12;
  const interestPerMonth = financialData.interestRate / 100 / 12;

  const monthlyPayment =
    (financialData.loanAmount * interestPerMonth * 
    (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - financialData.loanAmount;

  const pieData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [financialData.loanAmount, totalInterestGenerated],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={pieData} />
    </div>
  );
};

export default ChartDisplay;
