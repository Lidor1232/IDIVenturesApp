import React, {Suspense} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {appTheme} from './src/assets/theme/theme';
import {store} from './src/store/store';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <NavigationContainer theme={appTheme}>
        <ReduxProvider store={store}>
          <SafeAreaProvider>
            <Suspense fallback={<></>}>
              <></>
            </Suspense>
          </SafeAreaProvider>
        </ReduxProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
