import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '@screens';
import {Colors} from '@themes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackParams} from '@types';
import {Provider} from 'react-redux';
import store from '@store';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar backgroundColor={Colors.blue} />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
