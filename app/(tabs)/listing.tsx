import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Listing() {

  return (
    <>
      <Stack.Screen options={{ title: 'Listagem' }} />
      <View className="mt-8 items-center">
        
      </View>
    </>
  );
}