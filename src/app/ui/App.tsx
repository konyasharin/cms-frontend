import { FC } from 'react';
import { AppRouter } from '@app/lib/routes';

const App: FC = () => {
  return (
    <div className={'dark bg-secondary min-h-screen'}>
      <AppRouter />
    </div>
  );
};

export default App;
