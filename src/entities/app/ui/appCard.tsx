import { FC } from 'react';
import { Link } from 'react-router-dom';
import { App, APP_GENERATORS } from '@entities/app';
import { HorizontalCard, Typography } from '@shared/components';

export const AppCard: FC<
  Pick<App, 'name' | 'associationColor' | 'id'>
> = props => {
  return (
    <HorizontalCard>
      <div className={'flex gap-3 items-center'}>
        <div
          className={'size-3 rounded-full'}
          style={{ backgroundColor: props.associationColor }}
        />
        <Link to={APP_GENERATORS.APP(props.id)}>
          <Typography variant={'h2'} className={'hover:underline'}>
            {props.name}
          </Typography>
        </Link>
      </div>
    </HorizontalCard>
  );
};
