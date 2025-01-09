import { View, Text, TouchableOpacity } from 'react-native'
import { Link, router, Slot } from 'expo-router'
import Footer from '@/layouts/footer'
import DrawerProvider from './context/drawer'



const RootLayout = () => {
  return (
    <DrawerProvider>
    <View className='relative flex-1 w-full'>
        <Slot/>
        <Footer/>
    </View>
    </DrawerProvider>
  )
}

export default RootLayout