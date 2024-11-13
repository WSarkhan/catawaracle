import React from 'react';
import { Text, View } from 'react-native';
import { CatFace } from '@/components/foundations';

export const Catawaracle = () => (
  <View className="flex flex-row pt-5">
    <Text className="text-3xl font-bold text-orange-500 ">Cata</Text>
    <View className="transform -rotate-180 ">
      <CatFace color={'rgb(251 146 60)'} />
    </View>
    <Text className="mr-2 text-3xl font-bold text-orange-500 ">aracle</Text>
  </View>
);
