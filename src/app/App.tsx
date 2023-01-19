import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Account from './sections/account/Account';
import Feedback from './sections/feedback/Feedback';
import Monitor from './sections/monitor/Monitor';
import Publish from './sections/publish/Publish';
import Search from './sections/search/Search';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Monitor" component={Monitor} />
        <Stack.Screen name="Publish" component={Publish} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;
