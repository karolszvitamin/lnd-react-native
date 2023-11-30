import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { logIn } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await logIn(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your credentials"
      );
    }

    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging you in"} />;
  }
  return <AuthContent isLogin onAuthenticate={signupHandler} />;
}

export default LoginScreen;
