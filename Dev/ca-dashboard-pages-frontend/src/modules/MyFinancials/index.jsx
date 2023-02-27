import React, { useState } from 'react';
import MyIncome from './components/MyIncome';
import MyExpense from './components/MyExpense';
import './styles.scss';

const MyFinancials = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ['My Income', 'My Expense'];

  const renderTabsContent = () => {
    return tabIndex === 0 ? <MyIncome /> : <MyExpense />;
  };

  return (
    <div className="financial-container">
      <div className="title-wrapper">
        {tabs.map((tab, index) => (
          <span
            className={`title me-2${tabIndex === index ? ' active' : ''}`}
            key={index}
            onClick={() => setTabIndex(index)}
          >
            {tab}
          </span>
        ))}

        {renderTabsContent()}
      </div>
    </div>
  );
};

export default MyFinancials;
