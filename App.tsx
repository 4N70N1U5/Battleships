import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './src/hooks/AuthContext';
import Router from './src/router/Router';

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Router />
    </AuthContextProvider>
  );
}
