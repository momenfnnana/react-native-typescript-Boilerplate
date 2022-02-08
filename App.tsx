import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@shopify/restyle";
import {
  Onboarding,
  Welcome,
  assets as AuthenTicationAssets,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { AuthRoutes } from "./src/components/Navigation";

const AuthenticationStack = createNativeStackNavigator<AuthRoutes>();
const assets = [...AuthenTicationAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SFProText-Bold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
  "SFProText-Medium": require("./assets/fonts/SFProText-Medium.ttf"),
};

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
