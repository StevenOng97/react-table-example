import React, { useState } from 'react';
import columns from '../../table-data-columns/MyIncomeTable';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import '../../styles.scss';
import Charts from '../../../../components/Charts';
import Card from '../../../../components/Card';
import calendar from '../../../../assets/images/Common/calendar.png';
import DatePicker from '../../../../components/Calendar/DatePicker';
import DataTable from '../DataTable';
import { users } from '../../mockDataUsers';

const MyIncome = () => {
  const [rowData, setRowData] = useState(initialValue);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="my-income-container mt-5">
      <Table columns={columns} data={rowData} />

      <div className="my-income-status-container d-flex my-5 flex-wrap">
        <Card>
          <div className="card-custom-header d-flex justify-content-between align-items-center">
            <p>Total Income:</p>
            <h5>$ 10000</h5>
          </div>
          <Charts label="Income" />
        </Card>
        <Card>
          <div className="card-custom-header d-flex justify-content-between align-items-center">
            <p>Income by Time Period:</p>
            <img src={calendar} alt="calendar" />
          </div>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
          />
        </Card>
        <Card>
          <div className="card-custom-header d-flex justify-content-between align-items-center">
            <p>Income from</p>
          </div>
          <DataTable users={users} />
        </Card>
      </div>
    </div>
  );
};

export default MyIncome;
