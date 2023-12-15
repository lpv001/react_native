import React from "react"
import {SafeAreaView, ScrollView, Text, View} from "react-native"
import SPACING from "../config/SPACING"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"
import colors from "../config/colors"

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{padding: SPACING}}>
              <View>
                <BlurView style={{width: SPACING * 4, height: SPACING * 4, justifyContent: "center", alignItems: "center"}}>
                  <Ionicons 
                    name="menu"
                    size={SPACING * 2.5}
                    color={colors.secondary}
                  />
                </BlurView>
              </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;