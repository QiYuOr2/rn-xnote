import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';

const App = () => {
  return (
    <SafeAreaProvider>
      <Nav />
    </SafeAreaProvider>
  );
};

export default App;
