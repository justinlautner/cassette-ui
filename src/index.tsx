import {registerRootComponent} from 'expo';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

function Root(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

registerRootComponent(Root);
