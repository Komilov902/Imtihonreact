// Dashboard.jsx
import React from 'react';
import './dashboard.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Kartochka uchun ma'lumotlar
  const cardsData = [
    { title: "Budget", value: "$24k", change: 12, positive: true },
    { title: "Total Customers", value: "1.6k", change: -16, positive: false },
    { title: "Task Progress", value: "75.5%", isProgress: true },
    { title: "Total Profit", value: "$15k" }
  ];

  // Savdo diagrammasi uchun ma'lumotlar
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [18000, 16000, 7000, 12000, 6000, 14000, 16000, 17000, 18000, 15000, 16000, 19000],
        backgroundColor: 'rgba(74, 144, 226, 0.7)',
      },
    ],
  };

  // Trafik manbalari diagrammasi uchun ma'lumotlar
  const trafficData = {
    labels: ['Desktop', 'Tablet', 'Phone'],
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#6a5acd', '#20c997', '#ff8c00'],
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Statistik kartochkalar */}
      <div className="dashboard__cards">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p className="card__value">{card.value}</p>
            {/* O‘zgarishlar (%) ko'rsatkichi */}
            {card.change !== undefined && (
              <p className={`card__change ${card.positive ? 'positive' : 'negative'}`}>
                {card.positive ? '↑' : '↓'} {Math.abs(card.change)}% Since last month
              </p>
            )}
            {/* Progress bar (faqat Task Progress uchun) */}
            {card.isProgress && (
              <div className="card__progress">
                <div className="card__progress-bar" style={{ width: card.value }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Savdo va trafik manbalari diagrammalari */}
      <div className="dashboard__charts">
        <div className="sales-chart">
          <h4>Sales</h4>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>
        <div className="traffic-source-chart">
          <h4>Traffic source</h4>
          <Doughnut data={trafficData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
