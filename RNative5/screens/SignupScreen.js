import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your input"
      );
    }

    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
