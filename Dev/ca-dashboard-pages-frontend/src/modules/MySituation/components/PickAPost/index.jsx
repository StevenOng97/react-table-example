import React, { useState, useEffect } from 'react';
import columns from '../../table-data-columns/PickAPostTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableSituations } from '../../../../redux/actions/situation';

const PickAPost = () => {
  const dispatch = useDispatch();
  const availableSituations = useSelector(state => state.situation.availableSituations);

  useEffect(() => {
    dispatch(getAvailableSituations());
  }, []);


  return (
    <div className="situation-pick-a-post-container">
      <Table columns={columns} data={availableSituations} />
    </div>
  );
};

export default PickAPost;
