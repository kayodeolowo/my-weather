import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text , Image, SafeAreaView } from 'react-native'

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
       <StatusBar style='light'/>
       <Image blurRadius={70} source={require('../assets/images/bg.png')} 
       className="absolute h-full w-full" />
       

       <SafeAreaView className="flex flex-1">
        {/* search section */}

        <View style={{height: '7%'}} className="mx-4 relative z-50">
          <View className="flex-row justify-end items-center rounded-full"> 

          </View>

        </View>

       </SafeAreaView>
    </View>
  )
}

export default HomeScreen
