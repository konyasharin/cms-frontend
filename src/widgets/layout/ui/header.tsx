import { FC } from 'react';
import { Button, Container, Logo } from '@shared/components';
import { HEADER_HEIGHT_KEY } from '@widgets/layout';
import { HeaderNavigation } from '@widgets/layout/ui/headerNavigation.tsx';

export const Header: FC = () => {
  return (
    <div
      className={'fixed w-full top-0 border-b'}
      style={{ height: `var(${HEADER_HEIGHT_KEY})` }}
    >
      <Container className={'w-full lg:w-5/6 h-full flex items-center '}>
        <Logo className={'mr-24'} />
        <HeaderNavigation />
        <Button className={'ml-auto'}>Новое приложение</Button>
      </Container>
    </div>
  );
};
