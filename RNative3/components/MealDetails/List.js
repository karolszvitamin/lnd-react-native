import { View } from "react-native";
import { StyleSheet, Text } from "react-native";

const List = ({ dataArray }) => {
  return (
    <>
      {dataArray.map((data) => (
        <View style={styles.listItem} key={data}>
          <Text style={styles.textStyle}>{data}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#351401",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#e2b497",
  },
});

export default List;
