/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {GlobalContextProvider} from './src/context/GlobalContext';

import Main from './src/screens/Main';
import { NotificationContextProvider } from './src/context/NavigationContext';
function App(): React.JSX.Element {
  return (
    <GlobalContextProvider>
      <NotificationContextProvider>
      <Main />
      </NotificationContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
