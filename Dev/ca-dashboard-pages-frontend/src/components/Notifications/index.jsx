import React from 'react';
import './styles.scss';

const Notifications = ({ notifications }) => {
  const lastIndex = notifications.length - 1;
  const removeLine = (index) =>
    index === lastIndex || notifications.length === 0;

  const renderNotificationTemplate = ({ notification, index }) => {
    const content = notification || "You don't have any notifications yet.";
    return (
      <div className="d-flex mb-1" key={index}>
        <div className="d-flex flex-column pr-4 align-items-center">
          <div className="rounded-circle rounded-icons text-white mb-1">
            <i className="bi bi-bell position-relative"></i>
          </div>
          {!removeLine(index) && <div className="line h-100"></div>}
        </div>
        <div className="text-wrapper">
          <h5 className="text-dark">{content}</h5>
          {notifications.length !== 0 && (
            <p className="lead text-muted pb-3">1234AM</p>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className="stepper d-flex flex-column">
      <h3 className="title">Notification</h3>
      {notifications.length === 0 && renderNotificationTemplate({})}
      {notifications.map((notification, index) => {
        return renderNotificationTemplate({ notification, index });
      })}
    </div>
  );
};

export default Notifications;
