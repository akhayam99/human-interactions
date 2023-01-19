import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faComputer, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Account } from '../screens/Account';
import { Feedback } from '../screens/Feedback';
import { Monitor } from '../screens/Monitor';
import { Publish } from "../screens/Publish";
import { Search } from "../screens/Search";

const Tab = createBottomTabNavigator();

export const AppRoutes = (): JSX.Element => {
  const { top } = useSafeAreaInsets()

  console.log(top)

  const prop = { focused: 1, color: 'red', size: 12 }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
      }} />
      <Tab.Screen name="Publish" component={Publish} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faPlus} />,
      }} />
      <Tab.Screen name="Monitor" component={Monitor} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faComputer} />,
      }} />
      <Tab.Screen name="Feedback" component={Feedback} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faMessage} />,
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
      }} />
    </Tab.Navigator>
  );
}
