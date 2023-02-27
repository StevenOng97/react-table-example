import React, { forwardRef } from 'react';

const Select = forwardRef(
  (
    {
      id,
      name,
      label,
      type = 'text',
      className = '',
      placeholder,
      options,
      ...props
    },
    ref
  ) => {
    return (
      <select className={className} id={id} ref={ref} name={name} {...props}>
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
);

export default Select;
