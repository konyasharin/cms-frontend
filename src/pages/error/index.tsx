import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Error, ErrorContext } from '@shared/components';
import { APP_PATHS } from '@shared/const';

export const ErrorPage: FC = () => {
  const context = useContext(ErrorContext);

  if (!context?.errorData) return <Navigate to={APP_PATHS.APPS} />;
  return <Error {...context.errorData} />;
};
