import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootTabNavigator as RootTabNavigator} from './navigation/RootTabNavigator';
import {HomeStackNavigator} from './navigation/HomeStackNavigator';

const App = () => (
  <GestureHandlerRootView style={style.rootGestureView}>
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <HomeStackNavigator />
      </NavigationContainer>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
);

export default App;

const style = StyleSheet.create({
  rootGestureView: {
    flex: 1,
  },
});
