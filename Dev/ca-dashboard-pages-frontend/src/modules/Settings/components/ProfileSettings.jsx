import React from 'react';
import FormSelect from '../../../components/FormSelect';
const ProfileSettings = ({ form, register, errors, control }) => {
  const renderForm = () => {
    return form.map((field, i) => {
      const { placeholder, type, rules, name, id, options = [] } = field;
      return (
        <FormSelect
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
          options={options}
        />
      );
    });
  };
  return <div>{renderForm()}</div>;
};

export default ProfileSettings;
