import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Primary } from '../../assets/colors/Primary';
import { Account } from '../screens/Account';
import { Feedback } from '../screens/Feedback';
import { Monitor } from '../screens/Monitor';
import { Publish } from "../screens/Publish";
import { Search } from "../screens/Search";

const Tab = createBottomTabNavigator();

export const AppRoutes = (): JSX.Element => {
  // const prop = { focused: 1, color: 'red', size: 12 }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search" sceneContainerStyle={{ borderBottomColor: 'red', borderBottomWidth: 1, borderStyle: 'solid' }}>
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} size={18} color={Primary} />,
        tabBarLabelStyle: { fontSize: 13, color: Primary },
        tabBarStyle: { backgroundColor: 'red' }
      }} />
      <Tab.Screen name="Publish" component={Publish} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faPlus} size={18} color={Primary} />,
        tabBarLabelStyle: { fontSize: 13, color: Primary },
      }} />
      <Tab.Screen name="Monitor" component={Monitor} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faPeopleGroup} size={30} color={Primary} />,
        tabBarLabelStyle: { fontSize: 13, color: Primary },
      }} />
      <Tab.Screen name="Feedback" component={Feedback} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faMessage} size={18} color={Primary} />,
        tabBarLabelStyle: { fontSize: 13, color: Primary },
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={18} color={Primary} />,
        tabBarLabelStyle: { fontSize: 13, color: Primary },
      }} />
    </Tab.Navigator>
  );
}
