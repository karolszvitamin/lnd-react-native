import axios from "axios";

const API_KEY = "AIzaSyBHVWXTRql_BD2O7Mcve76nSn3TA8WqfGg";

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const logIn = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
