/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logUser from '../common/services';
import { Sign } from '../common/interfaces';
import { useAppDispatch } from '../store/hooks';
import { UrlState, setUrl } from '../store/slices/urlSlice';
// import { Data } from '../common/interfaces';

const Form = () => {
  const navigate = useNavigate();
  const [errMess, setErrMess] = useState('');
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Sign>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const a = useAppSelector((state) => state.url);
  function onSubmit(data: Sign) {
    let newUrl: UrlState = { url: '' };
    if (data.login === 'testuser' && data.password === 'testpassword123') {
      newUrl = { url: logUser as unknown as string };
      dispatch(setUrl(newUrl));
      navigate('/table');
    } else {
      setErrMess('The entered username or password does not exist');
    }
    return newUrl;
  }

  return (
    <div className="formPage">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          Name:
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            {...register('login', {
              required: {
                value: true,
                message: 'Please enter your Name',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.{4,})/g,
                message: 'Please enter correct Name',
              },
            })}
          />
        </label>
        <p className={`form-control ${errors.login ? 'errDis' : 'errMess'}`}>
          {errors.login?.message}
        </p>
        <label className="label">
          Password:
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
            {...register('password', {
              required: {
                value: true,
                message: 'Please enter your Password',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})/g,
                message: 'Please enter correct Password',
              },
            })}
          />
        </label>
        <p className={`form-control ${errors.password ? 'errDis' : 'errMess'}`}>
          {errors.password?.message}
        </p>
        <input className="submit" type="submit" value="SEND" />
        <p className={`form-control ${errMess !== '' ? 'errDis2' : 'errMess2'}`}>{errMess}</p>
      </form>
    </div>
  );
};

export default Form;
