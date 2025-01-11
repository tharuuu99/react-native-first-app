import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import Header from '@/layouts/header'
import Ionicons from '@expo/vector-icons/Ionicons'
import Nav from '@/layouts/nav'
import useDrawer from './context/context-hooks/useDrawer'



const Index = () => {

  const {drawer} = useDrawer();
  
  return (
    
    <View className='flex-1 w-full'>
      {/* <Header Left={<TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
        <Ionicons name="menu" size={24} color="black"/>
      </TouchableOpacity>}
      CenterText='Home'
      /> */}

     
      <Text className='text-3xl text-red-800 '>Index</Text>
      <Link href={"/product/category"}><Text>Category</Text></Link>
      <Link href={"/product/products"}><Text>Product</Text></Link>
      <Link href={"/product/profile"}><Text>Profile</Text></Link>
      
      
    </View>
    
  )
}

export default Index