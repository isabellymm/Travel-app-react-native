import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';
const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false,

    });

  }, []);


  return (
    <SafeAreaView className="bg-white flex-1 relative">
      
      {/*1 secao*/}
      <View className="flex-row px-6 mt-10 item-center space-x-2 space-y-3">
        <View className="w-16 h-16 bg-black rounded-full justify-center">
          <Text className="text-[#00BCC9] text-3xl font-bold left-3">Go</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font font-semibold left-2">Travel</Text>
      </View>

      {/*2 secao*/}
      <View className="px-6 mt-5 space-y-3">
        <Text className="text-[#3C6072] text-[34px] font-light tracking-tighter">Aproveite a viagem</Text>
        <Text className="text-[#00BCC9] text-[32px] font-bold bottom-4">Com bons momentos</Text>

        <Text className="text-[#3C6072] text-base"> 
          Descubra o mundo com facilidade - baixe agora nosso app e planeje sua próxima aventura com praticidade e segurança!
        </Text>
      </View>

      {/*3 secao*/}
      <View className="w-[400px] h-[400px]  bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px]  bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
    
    
      {/*image*/}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image source={HeroImage} className="w-full h-full object-cover mt-20"
          animation="fadeIn"
          easing='ease-in-out'
        ></Animatable.Image>
          


        {/*4 secao*/}
        <TouchableOpacity  
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[36px] font-bold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};




export default HomeScreen





