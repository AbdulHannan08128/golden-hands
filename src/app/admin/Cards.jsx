import React from 'react';

import Card from './Card';

const Dashboard = ({data}) => {
  const appointments = data?.APPOINTMENTS;
  const contacts = data?.CONTACTS;
  const admins = data?.ADMINS;
  
  const today = new Date().toISOString().split('T')[0];
  const upcomingToday = appointments?.filter(appointment => {
    const appointmentDate = new Date(appointment.date).toISOString().split('T')[0];
    return appointmentDate === today;
  });
  const unResponded = appointments?.filter(appointment => {
    return appointment?.STATUS=='PENDING';
  });
  const dismissed = appointments?.filter(appointment => {
    return appointment?.STATUS=='DISMISSED';
  });
  const accepted = appointments?.filter(appointment => {
    return appointment?.STATUS=='ACCEPTED';
  });
  const rescheduled = appointments?.filter(appointment => {
    return appointment?.STATUS=='RESCHEDULED';
  });
  

  return (
    <div className="flex flex-wrap p-3 gap-3">
      <Card
        title="UPCOMING TODAY"
        value={upcomingToday?.length}
        
      />
      <Card
        title="TOTAL APPOINTMENTS"
        value={appointments?.length}
        
      />
      <Card
        title="UNRESPONDED APPOIN..."
        value={unResponded?.length}
        
      />
      <Card
        title="DISMISSED APPOIN..."
        value={dismissed?.length}
        
      />
      <Card
        title="ACCEPTED APPOIN..."
        value={accepted?.length}
        
      />
      <Card
        title="RESCHEDULED APPOIN..."
        value={rescheduled?.length}
        
      />
      <Card
        title="USER MESSAGES"
        value={contacts?.length}
        
      />
      <Card
        title="ADMINS"
        value={admins?.length}
        
      />
      {/* Add more cards here for other metrics */}
    </div>
  );
};

export default Dashboard;
