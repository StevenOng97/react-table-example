import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Card from '../../components/Card';
import {
  Pattern,
  industryOptions,
  organizationStageOptions,
  careerStageOptions,
  functionOptions,
  countryOptions,
  domainOptions,
} from '../../helpers/constants';
import ProfileSettings from './components/ProfileSettings';
import PersonalDetails from './components/PersonalDetails';
import Banking from './components/Banking';
import './styles.scss';
import Form from '../../components/Form';
import { getCurrentUser } from '../../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import _ from 'lodash';

const emailPattern = {
  value: Pattern.email,
  message: 'Enter a valid email address.',
};

const passwordPattern = {
  value: Pattern.password,
  message:
    'Your password should contains at least 8 characters, at least one captailize letter and one number',
};

const Settings = () => {
  const user = getCurrentUser();
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    resetField,
    setValue,
  } = useForm({
    mode: 'all',
  });

  const {
    fields: bankFields,
    append: bankAppend,
    remove: bankRemove,
    update: bankUpdate,
  } = useFieldArray({
    control,
    name: 'banks',
  });

  const {
    fields: creditCardFields,
    append: creditCardAppend,
    remove: creditCardRemove,
    update: creditCardUpdate,
  } = useFieldArray({
    control,
    name: 'creditCards',
  });

  const observeIndustryChange = watch('industry') || '';

  useEffect(() => {
    if (!_.isEmpty(profile)) {
      setValue('email', user.email);
      setValue('industry', profile?.industry);
      setValue('function', profile?.function);
      setValue('domain', profile?.domain);
      setValue('careerStage', profile?.careerStage);
      setValue('organizationSize', profile?.organizationSize);
      setValue('country', profile?.country);
    }
  }, [profile]);
  useEffect(() => {
    // if (bankFields.length === 0) {
    //   bankAppend({
    //     accountHolder: 'Anthony Adams',
    //     bankNumber: '6549566264955265965',
    //     ifscCode: '51445sgsfgsd15644',
    //     branchName: 'dg14845',
    //   });
    //   creditCardAppend({
    //     number: '1234567989@cby',
    //   });
    // }
  }, []);

  useEffect(() => {
    if (!observeIndustryChange) return;
    setValue('domain', '', { shouldTouch: true, shouldDirty: true });
    setDomainOption(domainOptions[observeIndustryChange]);
    console.log(observeIndustryChange);
    return () => {
      // observeIndustryChange = null;
    };
  }, [observeIndustryChange]);

  const [domainOption, setDomainOption] = useState([
    domainOptions['informationTechnology'],
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ['Personal Details', 'Profile', 'Payment/Banking'];

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
    {
      id: 'industry',
      name: 'industry',
      placeholder: 'Industry',
      type: 'text',
      options: industryOptions,
      rules: {
        required: 'You must enter your Industry.',
      },
    },
    {
      id: 'domain',
      name: 'domain',
      placeholder: 'Domain',
      type: 'text',
      options: domainOption,
      rules: {
        required: 'You must enter your Domain.',
      },
    },
    {
      id: 'function',
      name: 'function',
      placeholder: 'Choose Function',
      type: 'text',
      options: functionOptions,
      rules: {
        required: 'You must enter your Function.',
      },
    },
    {
      id: 'careerStage',
      name: 'careerStage',
      placeholder: 'Choose Career Stage',
      options: careerStageOptions,
      type: 'text',
      rules: {
        required: 'You must enter your Career Stage.',
      },
    },
    {
      id: 'organizationSize',
      name: 'organizationSize',
      placeholder: 'Organization Size',
      options: organizationStageOptions,
      type: 'text',
      rules: {
        required: 'You must enter your Organization Size.',
      },
    },
    {
      id: 'country',
      name: 'country',
      placeholder: 'Choose Country',
      options: countryOptions,
      type: 'text',
      rules: {
        required: 'You must enter your Choose Country.',
      },
    },
  ];

  const onSubmit = handleSubmit((data) => {
    // Object.keys(data).forEach((key, index) => {
    //   data[key] = data[key].trim();
    // });

    if (!data.password) {
      delete data.password;
    }

    if (data.banks.length === 0) {
      delete data.banks;
    }

    if (data.creditCards.length === 0) {
      delete data.creditCards;
    }

    data.id = profile._id;

    const finalData = JSON.parse(JSON.stringify(data));
    dispatch(updateProfile(finalData));
    console.log(finalData);
  });

  const renderTabsContent = () => {
    const cloneForm = Object.assign(form, {});
    const personalDetailsForm = cloneForm.splice(0, 2);

    switch (tabIndex) {
      case 1:
        return (
          <ProfileSettings
            form={cloneForm}
            register={register}
            errors={errors}
            control={control}
          />
        );
      case 2:
        return (
          <Banking
            bankFields={bankFields}
            creditCardFields={creditCardFields}
            Controller={Controller}
            register={register}
            bankRemove={bankRemove}
            bankUpdate={bankUpdate}
            control={control}
            errors={errors}
            bankAppend={bankAppend}
            creditCardRemove={creditCardRemove}
            creditCardUpdate={creditCardUpdate}
            creditCardAppend={creditCardAppend}
            resetField={resetField}
          />
        );

      default:
        return (
          <PersonalDetails
            form={personalDetailsForm}
            register={register}
            errors={errors}
            control={control}
          />
        );
    }
  };

  return (
    <div className="settings-container">
      <Card className=" big-card">
        <div className="title-wrapper">
          {tabs.map((tab, index) => (
            <span
              className={`title me-2${tabIndex === index ? ' active' : ''}`}
              key={index}
              onClick={() => setTabIndex(index)}
            >
              {tab}
            </span>
          ))}
        </div>
        <Form submit={onSubmit} btnText={null}>
          {renderTabsContent()}
        </Form>
      </Card>
    </div>
  );
};

export default Settings;
