import React, { useState, useEffect } from 'react';
import Card from '../../../../components/Card';
import { Pattern } from '../../../../helpers/constants';

import './styles.scss';
import Backward from '../../../../components/Backward';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  createSituation,
  getSituationById,
  updateSituation,
} from '../../../../redux/actions/situation';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';

const CreateAPost = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    resetField,
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      price: "5",
    },
  });

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);
  const situation = useSelector((state) => state.situation.situation);
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.id) {
      dispatch(getSituationById(params.id));
    }
  }, []);

  useEffect(() => {
    if (!_.isEmpty(situation)) {
      setValue('question', situation.question);
      setValue('time_limit', situation.time_limit);
      setValue('price', situation.price.toString());
      setValue('status', situation.status);
    }
  }, [situation]);

  useEffect(() => {
    if (!params?.id) {
      reset();
    }
  }, [params]);

  const [status, setStatus] = useState('');

  const renderPostContent = () => (
    <form onSubmit={onSubmit} className="custom-form">
      <div className="content-wrapper col-xs-12 col-lg-6">
        <div className="title-wrapper d-flex align-items-center">
          <h5 className="me-1">Write down your situation</h5>
          <span>(300 words maximum)</span>
        </div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          name="question"
          {...register('question', { required: true })}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name="question"
          render={({ message }) => (
            <small className="mb-0 text-danger error-text">
              You must enter the content of the post
            </small>
          )}
        />
        <div className="options-title d-flex">
          <div className="price-option">
            <h5>Set Price</h5>
          </div>
          <div className="date-option flex-1">
            <h5>Set Valid Time</h5>
          </div>
        </div>
        <div className="options-content d-flex align-items-center">
          <div className="price-option">
            <div className="radio-button-wrapper d-flex">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="checkbox"
                  id="flexRadioDefault1"
                  {...register('price')}
                  value="5"
                  defaultChecked={getValues('price') == 5}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  $5
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="checkbox"
                  id="flexRadioDefault2"
                  {...register('price')}
                  defaultChecked={getValues('price') == 10}
                  value="10"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  $10
                </label>
              </div>
            </div>
          </div>
          <div className="input-group date-option flex-1">
            <input
              type="text"
              className="form-control"
              {...register('time_limit', {
                required: true,
                pattern: Pattern.onlyNumber,
              })}
            />
            <div className="input-group-append">
              <span className="input-group-text">days</span>
            </div>
            <ErrorMessage
              errors={errors}
              name="time_limit"
              render={({ message }) => (
                <small className="mb-0 text-danger d-block w-100">
                  {errors?.time_limit?.type === 'pattern'
                    ? 'You need to enter a number'
                    : 'You must enter the limit day of the post'}
                </small>
              )}
            />
          </div>
        </div>
        <div className="action-wrapper d-flex justify-content-end">
          <button className="btn btn-outline-primary remove-btn-border me-2">
            CANCEL
          </button>
          {params?.id && getValues('status') === 'completed' ? (
            ''
          ) : (
            <button
              className="btn btn-outline-primary remove-btn-border me-2"
              onClick={() => setStatus('draft')}
              type="submit"
            >
              SAVE DRAFT
            </button>
          )}
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => setStatus('completed')}
          >
            PUBLISH
          </button>
        </div>
      </div>
    </form>
  );

  const onSubmit = handleSubmit((data) => {
    // Object.keys(data).forEach((key, index) => {
    //   data[key] = data[key].trim();
    // });

    const finalData = JSON.parse(JSON.stringify(data));
    finalData.price = parseInt(finalData.price);
    finalData.time_limit = parseInt(finalData.time_limit);
    finalData.status = status;
    finalData.profile = profile._id;
    if (_.isEmpty(situation)) {
      dispatch(createSituation(finalData, navigate));
    } else {
      finalData.id = params.id;
      dispatch(updateSituation(finalData, navigate));
    }
  });

  return (
    <div className="create-post-page-wrapper">
      <Backward />
      <Card className=" big-card mt-5">{renderPostContent()}</Card>
    </div>
  );
};

export default CreateAPost;
