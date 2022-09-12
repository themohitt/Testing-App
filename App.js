import React from "react";
import { useFonts } from "expo-font";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { StatusBar } from "react-native";
 import AppLoading from "expo-app-loading";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Information: ProfileScreen,
    Login: SettingsScreen,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fd2e53",
      },
      headerTintColor: "#FFF",
      headerTitleAlign: "center",
      headerTitleAllowFontScaling:'opens-sans-regular'
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if( ! fontsLoaded ){
   return <AppLoading /> ;
  }
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
