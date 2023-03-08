import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import ItemCarDontainer from '../components/ItemCarDontainer';
import { Avatar,setaEsq, coracao,coliseu,gps} from '../assets';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
  
        navigation.setOptions({
        headerShown: false,
    
        });
      
    }, []);
    
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-12">
            <View className="relative bg-white shadow-lg">
                <Image source={coliseu}
                className="w-full h-[400px] object-cover rounded-2xl"/>

                <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white"
                        onPress={() => navigation.navigate("Discover")}>
                        <Image source={setaEsq} className="w-5 h-5 right-0.5"></Image>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                        <Image source={coracao} className="w-6 h-6 right-0.7 top-0.5"></Image>
                    </TouchableOpacity>
                </View>

                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                    <View className="flex-row space-x-2 items-center">
                        <Text className="text-[32px] font-bold text-gray-100">
                            R$ 279
                        </Text>
                        <Text className="text-[18px] font-bold text-gray-100">
                            /pessoa
                        </Text>
                    </View>   
                </View>
            </View>

            <View className="mt-6">
                <Text className="text-[#06B2BE] text-[24px] font-bold">
                    Coliseu
                </Text>
                <View className="flex-row items-center space-x-2 mt-2">
                    <Image source={gps} className="w-[20px] h-[20px]"></Image>
                    <Text className="text-[#8C9EA6] text-[18px] font-bold">
                        Roma, Europe
                    </Text>
                </View>
            </View>

            <View className="mt-4 flex-row items-center justify-between">
                <View className=" flex-row items-center space-x-1.5">
                    <View className="w-11 h-11 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                        <FontAwesome name="star" size={24} color="#D58574" />
                    </View>

                    <View>
                        <Text className="text-[#515151] font-semibold">5.8</Text>
                        <Text className="text-[#515151] font-medium">Ratings</Text>
                    </View>

                    <View className=" flex-row items-center space-x-1.5 left-3">
                        <View className="w-11 h-11 rounded-2xl bg-[#d5eef6] items-center justify-center shadow-md">
                            <FontAwesome name="cloud" size={24} color="#00BFFF" />
                        </View>

                        <View>
                            <Text className="text-[#515151] font-semibold">20 C°</Text>
                            <Text className="text-[#515151] font-medium">Temperatura</Text>
                        </View>
                    
                    </View>


                    <View className=" flex-row items-center space-x-1.5 left-4">
                        <View className="w-11 h-11 rounded-2xl bg-[#eee8fb] items-center justify-center shadow-md">
                            <FontAwesome5 name="clock" size={24} color="#7B68EE" />
                        </View>

                        <View>
                            <Text className="text-[#515151] font-semibold">3h</Text>
                            <Text className="text-[#515151] font-medium">Duração</Text>
                        </View>
                    
                    </View>
                </View>
            </View>

            <View className="flex-row item-centr justify-between mt-6 w-17 h-12">

                {/*<View className="bg-gray-300 py-4 px-16 rounded-full shadow-md opacity-30 ">

                </View>*/}
                <TouchableOpacity>
                    <View className="bg-gray-300 tracking-wide  border-b-2 border-[#06B2BE] sinline-flex items-center py-2 px-[48px] rounded-full shadow-md opacity-30">
                        <Text className="text-[#515151] font-semibold">
                            Saiba Mais
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View className="bg-gray-300 tracking-wide  border-b-2 border-[#06B2BE] sinline-flex items-center py-2 px-[46px] rounded-full shadow-md opacity-30">
                        <Text className="text-[#515151] font-semibold">
                             Avaliações
                        </Text>
                    </View>
                </TouchableOpacity>
                

            </View>

            <View className="items-center justify-center mt-2 bottom-1">
                <Text className="text-[15px] text-[#272727] font-thin">
                    Seu passeio começa perto de Oppian Hill, de onde você poderá desfrutar de vistas panorâmicas do Coliseu. Ao chegar à maravilha do mundo, você evita longas filas com seu passe rápido e segue direto para o interior do Coliseu.
                </Text>
            
            </View>
            
            <TouchableOpacity>
                <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12 bottom-2">
                    <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                        Reservar
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen