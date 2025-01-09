import { View, Text, TouchableOpacity } from "react-native";
import Header from "@/layouts/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from 'react'

const Category = () => {
  return (
    <View className="flex-1 w-full">
      <Header
        Left={
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>
          </Link>
        }
        CenterText="Category"
      />

      <Text>Category</Text>
    </View>
  );
};

export default Category;

//If asChild is not used, Link will render as a standalone element like a Text or View, and the TouchableOpacity inside it might not work as expected.