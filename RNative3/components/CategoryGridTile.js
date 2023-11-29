import { Platform, StyleSheet } from "react-native";
import { Pressable, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) =>
          pressed === true
            ? [styles.button, styles.buttonPressed]
            : styles.button
        }
        android_ripple={{ color: "#cccccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#cccccc",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
  },
});

export default CategoryGridTile;
