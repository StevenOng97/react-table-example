import React, { useMemo, useEffect } from 'react';
import Layout from './components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './components/PersistLogin/';
import RequireAuth from './components/RequireAuth';
import Login from './modules/Login';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';

function App() {
  const {
    loading: loginLoading,
    error: loginError,
    user,
  } = useSelector((state) => state.user);
  const { loading: profileLoading, error: profileError } = useSelector(
    (state) => state.profile
  );

  const { loading: situationLoading, error: situationError } = useSelector(
    (state) => state.situation
  );

  const navigate = useNavigate();
  const isLoading = useMemo(
    () => loginLoading || profileLoading || situationLoading,
    [loginLoading, profileLoading, situationLoading]
  );

  const errors = useMemo(
    () => [].concat(loginError, profileError, situationError),
    [loginError, profileError, situationError]
  );

  useEffect(() => {
    if (errors.length > 0) {
      if (errors.some((error) => error === 'Unauthorized')) {
        localStorage.removeItem('user');
        navigate('login');
      }
      toast.error(errors[0] ? errors[0] : errors[1], {
        theme: 'colored',
      });
    }
  }, [errors]);

  useEffect(() => {
    if (user) {
      navigate('', { replace: true });
    }
  }, [user]);

  return (
    <div className={`App full-height ${isLoading && 'loading'}`}>
      {isLoading && <Loading />}
      <Routes>
        <Route element={<RequireAuth />}>
          <Route index path="/*" element={<Layout />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
