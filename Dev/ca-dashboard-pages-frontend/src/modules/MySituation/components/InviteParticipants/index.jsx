import React, { useState } from 'react';
import Backward from '../../../../components/Backward';
import Card from '../../../../components/Card';
import { getFormalDate } from '../../../../helpers/helpers';
import columns from '../../table-data-columns/InviteParticipantsTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';
import filterIcon from '../../../../assets/images/Common/filter-icon.png';

const mockContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const InviteParticipants = () => {
  const [editPost, setEditPost] = useState(null);
  const [rowData, setRowData] = useState(initialValue);

  const getDate = () => {
    return getFormalDate(new Date());
  };

  const renderLeftCol = () => {
    return (
      <div className="situation-wrapper">
        <div className="title-wrapper">
          <h5 className="me-1">Situation</h5>
          <span className="my-2 d-block">Published on {getDate()}</span>
        </div>
        {editPost && (
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            defaultValue={mockContent}
          ></textarea>
        )}
        {!editPost && <span>{mockContent}</span>}
        {editPost && (
          <div className="action-wrapper d-flex justify-content-end align-items-end">
            <button
              className="btn btn-outline-primary remove-btn-border me-2"
              onClick={() => setEditPost(!editPost)}
            >
              CANCEL
            </button>
            <button className="btn btn-primary">SAVE</button>
          </div>
        )}
        {!editPost && (
          <div className="action-wrapper d-flex justify-content-end align-items-end">
            <button
              className="btn btn-outline-primary remove-btn-border me-2"
              onClick={() => setEditPost(!editPost)}
            >
              EDIT POST
            </button>
            <button className="btn btn-primary">PUBLISH</button>
          </div>
        )}
      </div>
    );
  };

  const renderTable = () => <Table columns={columns} data={rowData} />;

  return (
    <div className="invite-participants-wrapper">
      <Backward className="justify-content-between">
        <div className="filter-wrapper d-flex">
          <div className="text-wrapper d-flex align-items-center">
            <img
              src={filterIcon}
              width="11px"
              height="11px"
              alt="filter-icon"
            />
            <span className="d-block me-3 ms-1">Filter</span>
          </div>
          <select className="form-select" aria-label="Default select example">
            <option disabled selected>
              Attribute
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </Backward>

      <div className="card-wrapper">
        <Card className=" big-card mt-5">{renderLeftCol()}</Card>
        <Card className=" big-card mt-5">{renderTable()}</Card>
      </div>
    </div>
  );
};

export default InviteParticipants;
