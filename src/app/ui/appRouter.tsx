import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@app/config';
import { Error } from '@shared/components';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route
        path={'*'}
        element={<Error message={'Страница не найдена'} code={404} />}
      />
    </Routes>
  );
};
