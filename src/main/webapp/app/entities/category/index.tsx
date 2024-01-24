import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Category from './category';
import CategoryDetail from './category-detail';
import CategoryUpdate from './category-update';
import CategoryDeleteDialog from './category-delete-dialog';
import { AUTHORITIES } from 'app/config/constants';
import PrivateRoute from 'app/shared/auth/private-route';

const CategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Category />} />
    <Route
      path="new"
      element={
        <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
          <CategoryUpdate />
        </PrivateRoute>
      }
    />
    <Route path=":id">
      <Route index element={<CategoryDetail />} />
      <Route
        path="edit"
        element={
          <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
            <CategoryUpdate />
          </PrivateRoute>
        }
      />
      <Route
        path="delete"
        element={
          <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
            <CategoryDeleteDialog />
          </PrivateRoute>
        }
      />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CategoryRoutes;
