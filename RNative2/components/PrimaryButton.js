import { Pressable, View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ onPress, children }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        android_ripple={{ color: "#333333" }}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
