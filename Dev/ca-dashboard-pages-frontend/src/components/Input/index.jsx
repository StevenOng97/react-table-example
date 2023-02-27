import React, { forwardRef } from 'react';

const Input = forwardRef(
  (
    { id, name, label, type = 'text', className = '', placeholder, ...props },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    );
  }
);

export default Input;
