import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "700",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 8,
    padding: 8,
    borderBlockColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
