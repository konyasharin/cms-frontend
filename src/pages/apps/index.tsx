import { FC } from 'react';
import { AppCard } from '@entities/app';
import { Typography } from '@shared/components';

export const AppsPage: FC = () => {
  return (
    <div>
      <Typography tag={'h2'} variant={'h1'} className={'mb-8'}>
        Приложения
      </Typography>
      <div className={'flex gap-2 flex-col'}>
        <AppCard name={'Портфолио'} associationColor={'#e10a44'} id={1} />
        <AppCard name={'123'} associationColor={'#0f4ce3'} id={2} />
      </div>
    </div>
  );
};
