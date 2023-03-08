import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {gps} from '../assets';

const ItemCarDontainer = ({imageSrc, title, location}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity className="rounded-xl border border-gray-100 space-y-2 px-2 py-2 shadow-md bg-white w-[182px] my-2"
      onPress={() => navigation.navigate("ItemScreen")}>
      
      <Image 
      source={{uri: imageSrc}}
      className="w-full h-40 rounded-md object-cover">
      </Image>

      <Text className="text-[#428288] text-[16px] font-bold">
      {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
            <Text className="text-[#428288] text-[14px] font-bold">
            <Image source={gps} className="w-[20px] h-[20px]"></Image>
              {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
            </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCarDontainer