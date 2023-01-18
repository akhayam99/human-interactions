import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import Account from './sections/account/Account';
import Feedback from './sections/feedback/Feedback';
import Monitor from './sections/monitor/Monitor';
import Publish from './sections/publish/Publish';
import Search from './sections/search/Search';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#E4F0F5' }}>
        <View style={{ flex: 98 }}>
          <View style={{ flex: 94 }}>
            <View style={{ ...contentStyle }}>
              <Stack.Navigator initialRouteName="Account">
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Feedback" component={Feedback} />
                <Stack.Screen name="Monitor" component={Monitor} />
                <Stack.Screen name="Publish" component={Publish} />
                <Stack.Screen name="Search" component={Search} />
              </Stack.Navigator>
            </View>
          </View >
          <View style={{ ...navigationStyle }}>
            <Text> Bottom Navigation Bar Here </Text>
          </View>
        </View >
        <View style={{ flex: 2 }} />
      </View >
    </NavigationContainer >
  );
}

const contentStyle: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const navigationStyle: ViewStyle = {
  alignItems: 'center',
  borderBottomColor: '#428AA3',
  borderBottomWidth: 1,
  borderStyle: 'solid',
  flex: 6,
  justifyContent: 'center',
  marginBottom: 6,
}

export default App;
