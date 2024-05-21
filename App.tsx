/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StackNavigation } from './task2/navigation/stackNavigation';
import { PersistGate } from 'redux-persist/integration/react';
// import { ParentComponenet } from './redux_practice/context/parent';
import { ParentComponenetOne } from './redux_practice/redux/functionalComponent/parentOne';


import { Provider } from "react-redux";
// import { store } from './redux_practice/redux/functionalComponent/store';
import { persistor } from './redux_practice/redux/functionalComponent/store';

// import store from './redux_practice/redux/classComponent/store';
import Counter from './redux_practice/redux/classComponent/parentTwo';
import { Text, View } from 'react-native';


import MainFunction from './redux_practice/redux/sagaMiddleware/sagaParent';
import { store } from './redux_practice/redux/sagaMiddleware';



function App(): React.JSX.Element {

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor} loading={null}>

    //     <ParentComponenetOne />
    //   </PersistGate>

    // </Provider>


    //**************************************************************************** */

    <Provider store={store}>
      <MainFunction />
    </Provider>





    // <><View><Text>ghtgrtvfgr</Text></View> </>
    // <ParentComponenet />
    // <StackNavigation/>

  );
}

export default App;

