import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import { ScrollView } from "react-native-gesture-handler";
import Notifications from "./Notifications";
import Weight from "react-native-vector-icons/FontAwesome5";
import Battery from "react-native-vector-icons/Entypo";
import Cylinder from "react-native-vector-icons/MaterialCommunityIcons";

import { SelectList } from "react-native-dropdown-select-list";
// import FCMNotification from "../components/FCMNotification";

const Home = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "RMX-00001" },
    { key: "2", value: "RMX-00002" },
    { key: "3", value: "RMX-00003" },
    { key: "4", value: "RMX-00004" },
    { key: "5", value: "RMX-00005" },
  ];

  const nav = useNavigation();

  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            backgroundColor: "lightgray",
            height: "45%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,

              marginBottom: "10%",
            }}
          >
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <AntDesign name="bars" size={30} color="orange" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 28,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Home
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(Notifications)}
            >
              <Ionicons name="notifications" size={30} color="orange" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              // alignItems: "center",
              // borderColor: "red",
              // borderWidth: 2,
              width: windowWidth,
              marginTop: "-5%",
              marginLeft: "17%",
              marginRight: "12%",
              marginBottom: "-7%",
            }}
          >
            <Image
              source={require("../../assets/images/logo_1.png")}
              style={{
                height: windowHeight - 450,
                width: "80%",
                alignItems: "center",
                resizeMode: "contain",
              }}
            />
          </View>

          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={() => alert(selected)}
          />

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 135,
                backgroundColor: "#E6E6E6",
                marginTop: 14,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Weight
                style={{ marginRight: "20%" }}
                name="weight"
                size={60}
                color="orange"
              />
              <Text
                style={{
                  fontSize: 40,
                  color: "orange",
                  fontWeight: "bold",
                  marginLeft: "15%",
                  marginTop: "-10%",
                }}
              >
                5 KG
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 135,
                backgroundColor: "#E6E6E6",
                marginTop: 14,
                marginBottom: 14,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Battery
                style={{ marginRight: "20%" }}
                name="battery"
                size={60}
                color="orange"
              />
              <Text
                style={{
                  fontSize: 40,
                  color: "orange",
                  fontWeight: "bold",
                  marginLeft: "15%",
                  marginTop: "-10%",
                }}
              >
                66%
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View>
          <FCMNotification />
        </View> */}
    </SafeAreaView>
  );
};

export default Home;
