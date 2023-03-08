import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, loupe, search,Hotels, eiffeltower,cutlery,seta,} from '../assets';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import ItemCarDontainer from '../components/ItemCarDontainer';


const Discover = () => {
  

  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");

  useLayoutEffect(() => {
  
    navigation.setOptions({
    headerShown: false,

    });
  
  }, []);
  
 

  return (
    
    <SafeAreaView className ="flex-1 bg-white relative">
      <ScrollView>
    
      <View className="flex-row items-center justify-between px-8 mt-10">
          <View>
              <Text className="text-[28px] text-[#0B646B] font-semibold top-2">Explore</Text>
              <Text className="text-[24px] text-[#527873] top-0.2 tracking-tighter">a grandeza do mundo!</Text>
            </View>
    
            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg top-1">
              <Image source={Avatar} className="w-full h-full rounded-md object-cover">
              </Image>
            </View>
      </View>
      
      
      <View className="flex-row items-center bg-gray-50 mx-4 rounded-xl py-1 px-4 shadow-lg -bottom-3 w-100 h-14">
        <Text className="text-gray-400 left-9">Roma, Itália</Text>
        <Image source={search} className="w-5 h-5 right-[70px]"
        ></Image>
      </View>

      
        <View className=" flex-row items-center justify-center px-8 mt-8">
        <MenuContainer
          key ={"hotel"}
          title = "Hotéis"
          imageSrc ={Hotels}
          type = {type}
          setType = {setType}
        />

        <MenuContainer
          key ={"attractions"}
          title = "Atrações"
          imageSrc ={eiffeltower}
          type = {type}
          setType = {setType}
        />


        <MenuContainer
          key ={"restaurants"}
          title = "Restaurantes"
          imageSrc ={cutlery}
          type = {type}
          setType = {setType}
        />
        </View>
        <View className="flex-row items-center bg-gray-100 mx-4  py-1 px-4 shadow-lg -bottom-3 w-100 h-2"></View>

        <View> 
          <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[24px] text-[#0B646B] font-semibold">Top Viagens</Text>
              <TouchableOpacity className=" flex-row items-center justify-center space-x-2"
                 onPress={() => navigation.navigate("ItemScreen")}>
                <Text className="text-gray-400 font-semibold right-1">Explorar</Text>
                <Image source={seta} className="w-5 h-5 -bottom-0.5"></Image>
              </TouchableOpacity>
          </View>

          <View className="px-0.5 mt-2 flex-row items-center justify-evenly flex-wrap">
            <ItemCarDontainer key={"101"} imageSrc={"https://cdn.pixabay.com/photo/2020/03/31/23/27/rome-4989538_960_720.jpg"} title="Coliseu" location="Roma"/>
            <ItemCarDontainer key={"102"} imageSrc={"https://cdn.pixabay.com/photo/2015/01/16/19/44/st-peters-basilica-601810_960_720.jpg"} title="Basílica De São Pedro" location="Roma"/> 
            <ItemCarDontainer key={"103"} imageSrc={"https://cdn.pixabay.com/photo/2020/04/06/09/36/rome-5008958_960_720.jpg"} title="Panteão" location="Roma"/>
            <ItemCarDontainer key={"104"} imageSrc={"https://cdn.pixabay.com/photo/2016/11/18/14/06/trevi-fountain-1834787_1280.jpg"} title="Fonte De Trevi" location="Roma"/> 
            <View className="w-full h-[400px] items-center space-y-8 justify-center"></View>
          </View>
    
        </View>

      </ScrollView>
  </SafeAreaView>
  )
}

export default Discover
