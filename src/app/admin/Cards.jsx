import React from 'react';
import { AppointmentsIcon, TotalAppointmentsIcon, AdminAccountsIcon } from './Icons';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="flex flex-wrap p-3 gap-3">
      <Card
        title="UPCOMING TODAY"
        value="27"
        
      />
      <Card
        title="TOTAL APPOINTMENTS"
        value="182"
        
      />
      <Card
        title="UNRESPONDED APPOIN..."
        value="12"
        
      />
      <Card
        title="USER MESSAGES"
        value="5"
        
      />
      <Card
        title="ACCOUNTS"
        value="3"
        
      />
      {/* Add more cards here for other metrics */}
    </div>
  );
};

export default Dashboard;
