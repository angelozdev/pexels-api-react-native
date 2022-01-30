import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "react-query";

// Screens
import { HomeScreen, PhotoDetailsScreen } from "./screens";

// utils
import { Screens } from "./consts";
import { queryClient } from "./react-query-client";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.HOME}>
          <Stack.Screen
            options={{
              title: "Pexels App",
            }}
            name={Screens.HOME}
            component={HomeScreen}
          />

          <Stack.Screen
            name={Screens.PHOTO_DETAILS}
            component={PhotoDetailsScreen}
            options={{
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>

        <StatusBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
