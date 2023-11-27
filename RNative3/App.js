import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import SCREENS from "./constants/SCREENS";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { Button, Text } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#ffffff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name={SCREENS.categories}
            component={CategoriesScreen}
            options={{
              title: "All meals",
            }}
          />
          <Stack.Screen
            name={SCREENS.mealsOverview}
            component={MealsOverviewScreen}
          />

          <Stack.Screen
            name={SCREENS.mealDetails}
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
