import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 bg-blue-100 items-center justify-center">
      <Text className="text-2xl text-blue-600 font-bold">Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View className="flex-1 bg-green-100 items-center justify-center">
      <Text className="text-2xl text-green-600 font-bold">Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
