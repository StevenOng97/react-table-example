import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyAdviceCompleted from './components/MyAdviceCompleted';
import MyAdviceInProcess from './components/MyAdviceInProcess';

const MyAdvice = () => {
  return (
    <div>
      <Routes>
        <Route path="in-progress" element={<MyAdviceInProcess />} />
        <Route path="completed" element={<MyAdviceCompleted />} />
      </Routes>
    </div>
  );
};

export default MyAdvice;
