import React, { useState, useEffect } from 'react';
import editIcon from '../../../assets/images/Table/edit.png';
import deleteIcon from '../../../assets/images/Table/delete.png';
import { useWatch } from 'react-hook-form';

const BankCard = ({
  bank,
  index,
  control,
  bankRemove,
  Controller,
  bankUpdate,
  errors,
}) => {
  const [isEdit, setEdit] = useState(false);
  const banksData = useWatch({ control, name: `banks.${index}` });

  useEffect(() => {
    if (!validBank(bank)) return setEdit(true);
  }, []);

  const validBank = (data) => {
    return (
      data.accountHolder || data.dataNumber || data.branchName || data.ifscCode
    );
  };

  const bankEditTemplate = () => {
    return Object.keys(bank).map((key, i) => {
      delete bank.id;

      return (
        <li key={i} className="col-4">
          <Controller
            render={({ field, fieldState: { invalid } }) => (
              <div>
                <input
                  {...field}
                  className="form-control"
                  type="text"
                  placeholder={key}
                />
                <small
                  className={`mb-0 text-danger error-text ${
                    invalid ? '' : 'opacity-0'
                  }`}
                >
                  This field is required
                </small>
              </div>
            )}
            name={`banks.${index}.${key}`}
            control={control}
            rules={{ required: true }}
          />
        </li>
      );
    });
  };

  const onSave = () => {
    if (validBank(banksData)) {
      bankUpdate(index, banksData);
      setEdit(false);
    }
  };

  const onCancel = () => {
    if (validBank(banksData)) {
      setEdit(false);
    } else {
      bankUpdate(index, bank);
    }
  };

  return (
    <div className="bank card mb-5" key={index}>
      <div className="card-body">
        <div className="card-title-wrapper d-flex justify-content-between">
          <h5 className="card-title">Bank ACCOUNT</h5>
          <div className="action-wrapper">
            <img
              src={editIcon}
              alt="edit-icon"
              className="me-2"
              onClick={() => setEdit(true)}
            />
            <img
              src={deleteIcon}
              alt="delete-icon"
              onClick={() => bankRemove(index)}
            />
          </div>
        </div>
        {!isEdit && (
          <p className="card-text col-10">
            Account Holder: {bank.accountHolder}, Account Number:{' '}
            {bank.bankNumber}, IFSC Code: {bank.ifscCode}, Branch Name:{' '}
            {bank.branchName}
          </p>
        )}
        {isEdit && (
          <div className="row gy-1">
            {bankEditTemplate()}
            <div className="button-wrapper col-4">
              <button
                className="btn btn-small btn-outline-primary"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="btn btn-small btn-primary"
                onClick={onSave}
                disabled={errors?.banks?.length > 0 && errors?.banks[index]}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankCard;
