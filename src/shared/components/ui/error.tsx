import { FC } from 'react';
import { Typography } from '@shared/components';
import { Error as ErrorType } from '@shared/model';
import { HEADER_HEIGHT_KEY, LAYOUT_SPACING_KEY } from '@widgets/layout';

export const Error: FC<ErrorType> = props => {
  return (
    <div
      className={'flex justify-center items-center gap-5'}
      style={{
        height: `calc(100vh - var(${HEADER_HEIGHT_KEY}) - var(${LAYOUT_SPACING_KEY}))`,
      }}
    >
      <Typography className={'font-medium'} variant={'h1'}>
        {props.code}
      </Typography>
      <Typography className={'font-medium w-80'}>{props.message}</Typography>
    </div>
  );
};
