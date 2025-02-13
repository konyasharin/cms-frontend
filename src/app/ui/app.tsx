import { FC } from 'react';
import { Container } from '@shared/components';
import { AppShell, appShellConfig, Header } from '@widgets/layout';

import { AppRouter } from './appRouter.tsx';

const App: FC = () => {
  return (
    <AppShell config={appShellConfig} header={<Header />}>
      <Container className={'w-9/12'}>
        <AppRouter />
      </Container>
    </AppShell>
  );
};

export default App;
