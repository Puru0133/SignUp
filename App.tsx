/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import NavigationService from './src/navigation/navigationServices';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/store/store';




function App(): React.JSX.Element {

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor} loading={null}>

    //     <ParentComponenetOne />
    //   </PersistGate>

    // </Provider>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationService />
      </PersistGate>
    </Provider >
  );
}

export default App;

