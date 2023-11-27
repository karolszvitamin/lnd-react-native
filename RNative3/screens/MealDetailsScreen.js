import { Text, View } from "react-native";

const MealDetailsScreen = ({ route }) => {
  return (
    <View>
      <Text>{route.params.mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
