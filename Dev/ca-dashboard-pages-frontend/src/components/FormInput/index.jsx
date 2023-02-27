import Input from '../Input';
import { ErrorMessage } from '@hookform/error-message';
import './style.scss';

const FormInput = ({
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

  const renderInput = () => {
    return (
      <Input
        name={name}
        aria-invalid={hasError}
        className={className}
        {...props}
        {...(register && register(name, rules))}
        type={type}
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
      {renderInput()}
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

export default FormInput;
