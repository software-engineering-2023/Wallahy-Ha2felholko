import React, { useState } from 'react';
import './NotificationDropdown.css'; // Import the CSS file for styling
import notificationsIcon from '../img/notifications-icon.png';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    {
      id: 1,
      message: 'Interest Rates recent spike...- CEO',
      time: '30 minutes ago'
    },
    {
      id: 2,
      message: "It's time to pay your gas bill ! - Reminder",
      time: '1 hour ago'
    },
    {
      id: 3,
      message: 'RE: Credit Card issue... -Mr. Ahmed',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="notification-dropdown">
      <button className="notification-button" onClick={toggleDropdown}>
        <img src={notificationsIcon} className="notification-icon"/>
      </button>
      {isOpen && (
        <div className="notification-list">
          {notifications.map(notification => (
            <div className="notification-item" key={notification.id}>
              <span className="notification-message">{notification.message}</span>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
