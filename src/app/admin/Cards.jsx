import React from 'react';
import { AppointmentsIcon, TotalAppointmentsIcon, AdminAccountsIcon } from './Icons';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="flex flex-wrap p-3 gap-3">
      <Card
        title="PENDING"
        value="15"
        
      />
      <Card
        title="APPOINTMENTS"
        value="50"
        
      />
      <Card
        title="ACCOUNTS"
        value="10"
        
      />
      {/* Add more cards here for other metrics */}
    </div>
  );
};

export default Dashboard;
