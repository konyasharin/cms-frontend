import { ReactNode } from 'react';
import { AppsPage } from '@pages';
import { APP_PATHS } from '@shared/const';

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  { path: APP_PATHS.APPS, element: <AppsPage /> },
];
