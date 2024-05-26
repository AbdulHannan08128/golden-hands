import React from 'react';
import Card from './Card';

const Dashboard = ({ data }) => {
  const appointments = data?.APPOINTMENTS;
  const contacts = data?.CONTACTS;
  const admins = data?.ADMINS;
  
  const today = new Date().toISOString().split('T')[0];
  const upcomingToday = appointments?.filter(appointment => {
    const appointmentDate = new Date(appointment.date).toISOString().split('T')[0];
    return appointmentDate === today;
  });
  const unResponded = appointments?.filter(appointment => {
    return appointment?.STATUS === 'PENDING';
  });
  const dismissed = appointments?.filter(appointment => {
    return appointment?.STATUS === 'DISMISSED';
  });
  const accepted = appointments?.filter(appointment => {
    return appointment?.STATUS === 'ACCEPTED';
  });
  const rescheduled = appointments?.filter(appointment => {
    return appointment?.STATUS === 'RESCHEDULED';
  });

  return (
    <div className="flex flex-wrap p-3 gap-3">
      <Card
        title="UPCOMING TODAY"
        value={upcomingToday?.length}
        color="green"
        text_color="green"
      />
      <Card
        title="ACCEPTED APPOIN..."
        value={accepted?.length}
        color="green"
        text_color="green"
      />
      <Card
        title="TOTAL APPOINTMENTS"
        value={appointments?.length}
        color="blue"
        text_color="blue"
      />
      <Card
        title="UNRESPONDED APPOIN..."
        value={unResponded?.length}
        color="red"
        text_color="red"
      />
      <Card
        title="DISMISSED APPOIN..."
        value={dismissed?.length}
        color="red"
        text_color="red"
      />
      
      <Card
        title="RESCHEDULED APPOIN..."
        value={rescheduled?.length}
        color="blue"
        text_color="blue"
      />
      <Card
        title="USER MESSAGES"
        value={contacts?.length}
        color="blue"
        text_color="blue"
      />
      <Card
        title="ADMINS"
        value={admins?.length}
        color="green"
        text_color="green"
      />
    </div>
  );
};

export default Dashboard;
