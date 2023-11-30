import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, textInputConfig, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline === true) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={(styles.inputContainer, style)}>
      <Text
        style={
          invalid === false
            ? [styles.label]
            : [styles.label, styles.invalidLabel]
        }
      >
        {label}
      </Text>
      <TextInput
        style={
          invalid === false ? [inputStyles] : [inputStyles, styles.invalidInput]
        }
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 8,
    borderRadius: 8,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});

export default Input;
