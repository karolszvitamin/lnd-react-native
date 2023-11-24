import { StyleSheet, Text, Platform } from "react-native";
import FONTS from "../../constants/fonts";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 2, android: 2 }),
    borderColor: "#ffffff",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
