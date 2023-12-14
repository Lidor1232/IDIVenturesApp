import React, {lazy, Suspense} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {appTheme} from './src/assets/theme/theme';
import {store} from './src/store/store';
import {Loader} from './src/components/Loader/Loader';
import {COLORS} from './src/assets/colors/colors';
const AppContainer = lazy(() =>
  import('./src/components/AppContainer/AppContainer').then(module => ({
    default: module.AppContainer,
  })),
);

// @ts-ignore
console.disableYellowBox = true;

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
            <Suspense fallback={<Loader color={COLORS.primary} />}>
              <AppContainer />
            </Suspense>
          </SafeAreaProvider>
        </ReduxProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
