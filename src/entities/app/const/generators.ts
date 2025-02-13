import { App } from '@entities/app';
import { APP_PATHS } from '@shared/const';

export const APP_GENERATORS = {
  APP: (id: App['id']) => APP_PATHS.APP.replace(':id', id.toString()),
};
