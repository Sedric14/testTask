import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Form from './form';

const Table = lazy(() => import('./table'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Form />} />
    <Route
      path="table"
      element={
        <Suspense fallback={<Spin />}>
          <Table />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
