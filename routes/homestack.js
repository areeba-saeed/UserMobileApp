import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../src/screens/LogIn";
import Home from "../src/screens/Home";
import Notifications from "../src/screens/Notifications";
import FAQ from "../src/screens/FAQ";
import ContactUs from "../src/screens/ContactUs";
import AboutUs from "../src/screens/AboutUs";
import Invoice from "../src/screens/Invoice";
import PaymentForm from "../src/screens/PaymentForm";
import PaymentInfo from "../src/screens/PaymentInfo";
import History from "../src/screens/History";
import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={DrawerStack} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="PaymentForm" component={PaymentForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
