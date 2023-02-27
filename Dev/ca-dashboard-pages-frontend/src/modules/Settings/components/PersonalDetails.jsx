import React from 'react';
import FormInput from '../../../components/FormInput';

const PersonalDetails = ({ form, register, errors, control }) => {
  const renderForm = () => {
    return form.map((field, i) => {
      const { placeholder, type, rules, name, id } = field;
      return (
        <FormInput
          key={i}
          id={id}
          type={type}
          name={name}
          label={placeholder}
          className="mb-2 form-control"
          register={register}
          rules={rules}
          errors={errors}
          control={control}
        />
      );
    });
  };

  return <div>{renderForm()}</div>;
};

export default PersonalDetails;
