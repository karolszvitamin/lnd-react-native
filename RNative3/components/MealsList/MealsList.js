import { StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../../constants/SCREENS";

const MealsList = ({ items }) => {
  const navigation = useNavigation();
  const renderMealItem = (itemData) => {
    const mealPressHandler = () => {
      navigation.navigate(SCREENS.mealDetails, { mealId: itemData.item.id });
    };
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      onPress: mealPressHandler,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
