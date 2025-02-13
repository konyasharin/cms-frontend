import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Logo } from '@shared/components';
import { APP_PATHS } from '@shared/const';
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
        <Button className={'ml-auto'} asChild>
          <Link to={APP_PATHS.APP_NEW}>Новое приложение</Link>
        </Button>
      </Container>
    </div>
  );
};
