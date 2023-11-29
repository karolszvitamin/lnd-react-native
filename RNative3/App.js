import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import SCREENS from "./constants/SCREENS";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#ffffff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "#ffffff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name={SCREENS.categories}
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name={SCREENS.favourites}
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
              name={SCREENS.allCategories}
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
      </Provider>
    </>
  );
}
