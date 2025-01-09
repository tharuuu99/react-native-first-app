import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, router, Slot } from 'expo-router'

const Footer = () => {
  return (
    //  style={{elevation:5}} 
      <View className='absolute bottom-0 left-0 z-50 flex-row items-center justify-between w-full h-16 px-5 bg-gray-300 drop-shadow-md'>
            <TouchableOpacity onPress={()=>router.navigate('/')} className='items-center'>
            <Ionicons name="home-outline" size={24} color="black" />
                <Text> Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.navigate('/product/products')} className='items-center'>
            <MaterialIcons name="production-quantity-limits" size={24} color="black" />
                <Text> product</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.navigate('/product/category')} className='items-center'>
            <Feather name="grid" size={24} color="black" />
                <Text> category</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.navigate('/product/profile')} className='items-center'>
            <FontAwesome5 name="user" size={24} color="black" />
                <Text> Profile</Text>
            </TouchableOpacity>
        </View>
    
  )
}

export default Footer