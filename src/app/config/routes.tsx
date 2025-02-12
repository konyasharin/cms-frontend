import { ReactNode } from 'react';
import { HomePage } from '@pages/home';
import { APP_PATHS } from '@shared/const';

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  { path: APP_PATHS.HOME, element: <HomePage /> },
];
