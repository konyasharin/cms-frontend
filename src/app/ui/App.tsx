import { FC } from 'react';
import { AppRouter } from '@app/lib/routes';
import { AppShell, Header, headerConfig } from '@widgets/layout';

const App: FC = () => {
  return (
    <AppShell config={{ header: headerConfig }} header={<Header />}>
      <AppRouter />
    </AppShell>
  );
};

export default App;
