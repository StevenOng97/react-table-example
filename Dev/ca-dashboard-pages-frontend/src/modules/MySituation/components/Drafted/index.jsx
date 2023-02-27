import React, { useState, useEffect } from 'react';
import columns from '../../table-data-columns/DraftedTableColumns';
import Table from '../../../../components/Table';
// import initialValue from './mockData';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Drafted = ({ situations }) => {
  const [situation, setSituation] = useState(null);
  const navigate = useNavigate();

  const getDataFromActions = (data) => {
    setSituation(data);
  };

  useEffect(() => {
    if (situation?.situationId) {
      navigate(`/post/${situation.situationId}`, { replace: true });
    }
  }, [situation]);

  return (
    <div className="drafted-container">
      <Table
        columns={columns}
        data={situations}
        getDataFromActions={getDataFromActions}
      />
    </div>
  );
};

export default Drafted;
