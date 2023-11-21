import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>test</Text>
      </View>
      <Text style={styles.dummyText}>Hey</Text>
      <Button title={"Button"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    borderWidth: 1,
    borderColor: "red",
    padding: 16,
    margin: 16,
  },
});
