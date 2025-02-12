import { FC } from 'react';
import { HEADER_HEIGHT_KEY } from '@widgets/layout/const.ts';

export const Header: FC = () => {
  return (
    <div
      className={'fixed w-full top-0'}
      style={{ height: `var(${HEADER_HEIGHT_KEY})` }}
    >
      11
    </div>
  );
};
