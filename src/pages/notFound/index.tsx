import { FC } from 'react';
import { Typography } from '@shared/components';
import { HEADER_HEIGHT_KEY, LAYOUT_SPACING_KEY } from '@widgets/layout';

export const NotFoundPage: FC = () => {
  return (
    <div
      className={'flex justify-center items-center gap-5'}
      style={{
        height: `calc(100vh - var(${HEADER_HEIGHT_KEY}) - var(${LAYOUT_SPACING_KEY}))`,
      }}
    >
      <Typography className={'font-medium'} variant={'h1'}>
        404
      </Typography>
      <Typography className={'font-medium'}>Страница не найдена</Typography>
    </div>
  );
};
