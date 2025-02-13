import { FC } from 'react';
import { Container, ErrorProvider, Toaster } from '@shared/components';
import { AppShell, appShellConfig, Header } from '@widgets/layout';

import { AppRouter } from './appRouter.tsx';

const App: FC = () => {
  return (
    <ErrorProvider>
      <AppShell config={appShellConfig} header={<Header />}>
        <Container className={'w-9/12'}>
          <AppRouter />
        </Container>
        <Toaster richColors />
      </AppShell>
    </ErrorProvider>
  );
};

export default App;
