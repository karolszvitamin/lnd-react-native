import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      console.log(token);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error);
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
