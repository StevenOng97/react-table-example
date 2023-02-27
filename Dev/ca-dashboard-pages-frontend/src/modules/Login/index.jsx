import React, { useEffect } from 'react';
import { Pattern } from '../../helpers/constants';
import Form from '../../components/Form';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/users';

const emailPattern = {
  value: Pattern.email,
  message: 'Enter a valid email address.',
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'all',
  });

  const dispatch = useDispatch();

  const form = [
    {
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      type: 'text',
      rules: {
        required: 'You must enter your email.',
        pattern: emailPattern,
      },
    },
    {
      id: 'password',
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      rules: {
        required: 'You must enter your password.',
        // pattern: passwordPattern,
        maxLength: {
          value: 16,
          message: 'Your password is too long',
        },
      },
    },
  ];

  const onSubmit = handleSubmit(async (data) => {
    // Object.keys(data).forEach((key, index) => {
    //   data[key] = data[key].trim();
    // });
    dispatch(login(data));
    const finalData = JSON.parse(JSON.stringify(data));
  });

  return (
    <div className="d-flex justify-content-center align-items-center flex-column full-height w-50">
      {/* <div className="col-6"> */}
      <Form submit={onSubmit} btnText={null}>
        {form.map((field, i) => {
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
        })}
      </Form>
      {/* </div> */}
    </div>
  );
};

export default Login;
