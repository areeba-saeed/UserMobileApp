import React from "react";
import Home from "../src/screens/Home";
import LogIn from "../src/screens/LogIn";
import History from "../src/screens/History";
import PaymentInfo from "../src/screens/PaymentInfo";
import AboutUs from "../src/screens/AboutUs";
import ContactUs from "../src/screens/ContactUs";
import FAQ from "../src/screens/FAQ";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../src/components/CustomDrawer";
import Invoice from "../src/screens/Invoice";
import Notifications from "../src/screens/Notifications";
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "orange",
          drawerActiveTintColor: "#FFF",
          drawerLabelStyle: { marginLeft: 0, fontSize: 15 },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="My Accounts" component={PaymentInfo} />
        <Drawer.Screen name="Invoice" component={Invoice} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="FAQ'S" component={FAQ} />
      </Drawer.Navigator>
  );
}
