import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Header from '@/layouts/header'

const Products = () => {
  return (
    <View className='flex-1 w-full'>
      {/* <Header
        Left={
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>
          </Link>
        }
        CenterText="Products"
      /> */}
      <Text>products</Text>
    </View>
  )
}

export default Products