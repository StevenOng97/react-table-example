import React, { useState, useEffect } from 'react';
import editIcon from '../../../assets/images/Table/edit.png';
import deleteIcon from '../../../assets/images/Table/delete.png';
import { useWatch } from 'react-hook-form';

const CreditCardsCard = ({
  creditCard,
  index,
  control,
  creditCardRemove,
  Controller,
  creditCardUpdate,
  errors,
}) => {
  const [isEdit, setEdit] = useState(false);
  const creditCardsData = useWatch({ control, name: `creditCards.${index}` });

  useEffect(() => {
    if (!validCreditCard(creditCard)) return setEdit(true);
  }, []);

  const validCreditCard = (data) => {
    return data.number;
  };

  const bankEditTemplate = () => {
    return Object.keys(creditCard).map((key, i) => {
      delete creditCard.id;

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
            name={`creditCards.${index}.${key}`}
            control={control}
            rules={{ required: true }}
          />
        </li>
      );
    });
  };

  const onSave = () => {
    if (validCreditCard(creditCardsData)) {
      creditCardUpdate(index, creditCardsData);
      setEdit(false);
    }
  };

  const onCancel = () => {
    if (validCreditCard(creditCardsData)) {
      setEdit(false);
    } else {
      creditCardUpdate(index, creditCardsData);
    }
  };

  return (
    <div className="creditCard card mb-5" key={index}>
      <div className="card-body">
        <div className="card-title-wrapper d-flex justify-content-between">
          <h5 className="card-title">CREDIT CARD</h5>
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
              onClick={() => creditCardRemove(index)}
            />
          </div>
        </div>
        {!isEdit && <p className="card-text col-10">{creditCard.number}</p>}
        {isEdit && (
          <div className="row gy-1">
            {bankEditTemplate()}
            <div className="button-wrapper col-4">
              <button
                className="btn btn-small btn-outline-primary me-2"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="btn btn-small btn-primary"
                onClick={onSave}
                disabled={
                  errors?.creditCards?.length > 0 && errors?.creditCards[index]
                }
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

export default CreditCardsCard;
