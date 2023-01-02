import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../src/screens/LogIn";
import Notifications from "../src/screens/Notifications";
import PaymentForm from "../src/screens/PaymentForm";
import DrawerStack from "./DrawerStack";
import PrivacyPolicy from "../src/screens/PrivacyPolicy";
import TermsandConditions from "../src/screens/TermsandConditions";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
        <Stack.Screen name="Home" component={DrawerStack} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="PaymentForm" component={PaymentForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
