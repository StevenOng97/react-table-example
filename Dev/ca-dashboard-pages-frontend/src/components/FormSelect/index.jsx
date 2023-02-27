import { ErrorMessage } from '@hookform/error-message';
import './style.scss';
import Select from '../Select';

const FormSelect = ({
  name,
  register,
  rules,
  errors = {},
  className,
  control,
  label,
  type,
  ...props
}) => {
  const errorMessages = errors[name];
  const hasError = !!(errors && errorMessages);

  const renderSelect = () => {
    return (
      <Select
        name={name}
        aria-invalid={hasError}
        className={className}
        {...props}
        {...(register && register(name, rules))}
      />
    );
  };

  return (
    <div aria-live="polite" className="mb-3 position-relative">
      {
        <p className="mb-1">
          <span>{label}</span>
          {!rules?.required && <span> - Optional</span>}
        </p>
      }
      {renderSelect()}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <small className="mb-0 text-danger error-text">{message}</small>
        )}
      />
    </div>
  );
};

export default FormSelect;
