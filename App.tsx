/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {GlobalContextProvider} from './src/context/GlobalContext';

import Main from './src/screens/Main';
function App(): React.JSX.Element {
  return (
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
