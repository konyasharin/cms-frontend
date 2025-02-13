import { FC } from 'react';
import { AppRouter } from '@app/lib/routes';
import { Container } from '@shared/components';
import { AppShell, appShellConfig, Header } from '@widgets/layout';

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
