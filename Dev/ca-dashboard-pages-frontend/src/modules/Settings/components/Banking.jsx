import React from 'react';
import BankCard from './BankCard';
import CreditCardsCard from './CreditCardsCard';

const Banking = ({
  bankFields,
  creditCardFields,
  Controller,
  control,
  bankRemove,
  bankUpdate,
  errors,
  bankAppend,
  creditCardRemove,
  creditCardAppend,
  creditCardUpdate,
  resetField
}) => {
  const renderBankCards = () => {
    return bankFields.map((bank, i) => (
      <BankCard
        Controller={Controller}
        bank={bank}
        index={i}
        control={control}
        bankRemove={bankRemove}
        bankUpdate={bankUpdate}
        key={i}
        errors={errors}
        resetField={resetField}
      />
    ));
  };

  const handleAddBank = () => {
    bankAppend({
      accountHolder: '',
      bankNumber: '',
      ifscCode: '',
      branchName: '',
    });
  };

  const handleAddCreditCard = () => {
    creditCardAppend({
      number: '',
    });
  };

  const renderCreditCards = () => {
    return creditCardFields.map((cCard, i) => (
      <CreditCardsCard
        Controller={Controller}
        creditCard={cCard}
        index={i}
        control={control}
        creditCardRemove={creditCardRemove}
        creditCardUpdate={creditCardUpdate}
        key={i}
        errors={errors}
      />
    ));
  };

  return (
    <div className="banks-card-wrapper">
      {renderBankCards()}
      <button className="btn btn-primary mb-5" onClick={handleAddBank}>
        Add New Bank Account
      </button>
      {renderCreditCards()}
      <button className="btn btn-primary mb-5" onClick={handleAddCreditCard}>
        Add new Credit card.
      </button>
    </div>
  );
};

export default Banking;
