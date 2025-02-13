import { FC } from 'react';
import { AppCard, useGetApps } from '@entities/app';
import { Skeleton } from '@shared/components';

export const AppCards: FC = () => {
  const controller = useGetApps();

  return (
    <div className={'flex gap-2 flex-col'}>
      {controller.isLoading ? (
        <>
          <Skeleton className={'h-16 w-full'} />
          <Skeleton className={'h-16 w-full'} />
          <Skeleton className={'h-16 w-full'} />
        </>
      ) : (
        controller.data?.data.map(app => <AppCard {...app} key={app.id} />)
      )}
    </div>
  );
};
