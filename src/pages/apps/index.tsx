import { FC } from 'react';
import { AppCards } from '@entities/app';
import { Typography } from '@shared/components';

export const AppsPage: FC = () => {
  return (
    <div>
      <Typography tag={'h2'} variant={'h1'} className={'mb-8'}>
        Приложения
      </Typography>
      <AppCards />
    </div>
  );
};
