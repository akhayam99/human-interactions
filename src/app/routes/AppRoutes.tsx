import { faClock, faMessage, faUser, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
import { Primary } from "../../assets/colors/Primary";
import { Account } from "../screens/Account";
import { Feedback } from "../screens/Feedback";
import { Monitor } from "../screens/Monitor";
import { Publish } from "../screens/Publish";
import { Search } from "../screens/Search";

const Tab = createBottomTabNavigator();

export const AppRoutes = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: () => tabBarIcon(faMagnifyingGlass),
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
      }} />
      <Tab.Screen name="Publish" component={Publish} options={{
        tabBarIcon: () => tabBarIcon(faPlus),
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
      }} />
      <Tab.Screen name="Monitor" component={Monitor} options={{
        tabBarIcon: () => tabBarIcon(faClock),
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
      }} />
      <Tab.Screen name="Feedback" component={Feedback} options={{
        tabBarIcon: () => tabBarIcon(faMessage),
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: () => tabBarIcon(faUser),
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
      }} />
    </Tab.Navigator>
  );
}

const tabBarIcon = (icon: IconDefinition, size?: number): JSX.Element =>
  <FontAwesomeIcon icon={icon} size={size || 18} color={Primary} />

const styles = StyleSheet.create({
  tabBarStyle: {
    borderStyle: 'solid',
    borderTopColor: Primary,
    borderTopWidth: 1,
  },
  tabBarLabelStyle: {
    color: Primary,
    fontSize: 13,
  },
});
