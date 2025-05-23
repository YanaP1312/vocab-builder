import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginPage from './src/screen/Auth/Login';

function App(): React.JSX.Element {
  console.log('hello world');
  return (
    <SafeAreaView>
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
