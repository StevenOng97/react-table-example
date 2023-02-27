import './style.scss';

const Form = ({
  children,
  submit,
  btnText = 'Submit',
  className,
  hideButton = false,
}) => {
  const formClassName = className
    ? className
    : 'form__container form-group mt-5 col-6';

  return (
    <form className={formClassName} onSubmit={submit}>
      {children}
      {!hideButton && (
        <div className="w-100 text-center">
          <button className="btn btn-outline-primary remove-btn-border me-2">
            CANCEL
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
