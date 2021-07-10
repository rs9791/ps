import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {Text} from 'react-native'
import { ThemeProvider } from "styled-components";
import {theme} from './src/infrastructure/theme'
import { RestaurantScreen } from './src/features/restaurants/screens/RestaurantScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/components/utility/safeAreaComponent";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

// import {restaurantRequest} from './src/services/restaurants/restaurants.service'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato'

const Tab = createBottomTabNavigator();
const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map=()=><SafeArea><Text>Map</Text></SafeArea>

export default function App() {

  //Load Oswald & Lato fonts
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,    
  })
   const [latoLoaded] = useLato({
    Lato_400Regular,    
   })
  
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //TAB ICONS
  const TAB_ICONS = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings:'md-settings'
  }

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name]
    return {
      tabBarIcon: ({ color, size }) => (
         <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };
   
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
             <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
          </NavigationContainer>
          </RestaurantContextProvider>
    </ThemeProvider>
        <ExpoStatusBar style="auto" />
        
    </>
  );
}
