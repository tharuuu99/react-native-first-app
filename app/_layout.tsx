import { View, Text, TouchableOpacity } from "react-native";
import { Link, router, Slot, Stack } from "expo-router";
import Footer from "@/layouts/footer";
import DrawerProvider from "./context/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import useDrawer from "./context/context-hooks/useDrawer";

const RootLayout = () => {
  return (
    <DrawerProvider>
      <View className="relative flex-1 w-full">
        <Stack
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "rgb(209 213 219)",
            },
            headerTitleStyle: {
              fontWeight: "300",
            },
          }}
        >
          <Stack.Screen
            name="index" //route name
            options={{
              headerLeft: () => <IndexHeaderLeftIcon />,
              title: "Home",
            }}
          />

          <Stack.Screen
            name="product/products" //route name
            options={{
              title: "Product",
            }}
          />

          <Stack.Screen
            name="product/category" //route name
            options={{
              title: "Category",
            }}
          />

          <Stack.Screen
            name="product/profile" //route name
            options={{
              title: "Profile",
            }}
          />
        </Stack>
        {/* <Slot/> */}
        {/* <Footer/> */}
      </View>
    </DrawerProvider>
  );
};

export default RootLayout;

const IndexHeaderLeftIcon = () => {
  const { drawer } = useDrawer();

  return (
    <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
      <Ionicons name="menu" size={27} color="black" />
    </TouchableOpacity>
  );
};
