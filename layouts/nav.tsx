import { Image, Text, TouchableOpacity, View, DrawerLayoutAndroid } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Href, router } from "expo-router";
import useDrawer from "@/app/context/context-hooks/useDrawer";

const Nav = ({drawer}:{drawer: React.RefObject<DrawerLayoutAndroid>}) => (
  <View className="flex-1 w-full bg-sky-950">
    {/* user profile */}
    <View className="items-center justify-center w-full h-[220px]">
      <Image
        source={{
          uri: "https://i.pinimg.com/474x/14/86/86/148686b4a830e06d8089db5cb1e521f4.jpg",
        }}
        className="w-[100px] h-[100px] rounded-full"
      />
    </View>
    {/* Menu */}
    <View>
      <MenuItem drawer={drawer}  name={"home-outline"} title="Home" navigate="/" />
      <MenuItem drawer={drawer} name={"grid-outline"} title="Product" navigate="/product/products" />
      <MenuItem drawer={drawer} name={"logo-dropbox"} title="Category" navigate="/product/category" />
      <MenuItem drawer={drawer} name={"person-outline"} title="Profile" navigate="/product/profile" />
    </View>
  </View>
);
export default Nav;

interface IMenuItem {
  name: "home-outline" | "logo-dropbox" | "grid-outline" | "person-outline";
  title: string;
  navigate: string;
  drawer: React.RefObject<DrawerLayoutAndroid>;
}

const MenuItem = ({ name, title, navigate, drawer }: IMenuItem) => {
    //const {drawer} = useDrawer()
    return ( 
    <TouchableOpacity
      onPress={() =>{ 
        drawer?.current?.closeDrawer();
        router.navigate(navigate)}}
      //onPress={() => router.push(navigate)}  // Use 'router.push()' for navigation
      className="flex-row items-center justify-between w-full py-2 pr-2 border-b border-gray-50/25"
    >
      <View className="flex-row items-center pl-4">
        <Ionicons name={name} size={24} color="rgb(249 250 251)" />
        <Text className="ml-3 text-gray-50">{title}</Text>
      </View>

      <Ionicons
        name={"arrow-forward-outline"}
        size={24}
        color="rgb(249 250 251)"
      />
    </TouchableOpacity>
  );
};
