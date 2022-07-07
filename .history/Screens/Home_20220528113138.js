// import { View as SafeAreaView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView>
       <HeaderTabs />
    </SafeAreaView>
  )
}