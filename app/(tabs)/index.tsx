import React from 'react';
import { View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Catawaracle } from '@/components/atoms';

import { useCatImages } from '@/hooks';
import { CatImage, CatImageUri } from '@/types';

export default function Home() {
  const { catImages, loading } = useCatImages();
  const isCatImageUri = (image: CatImage): image is CatImageUri => {
    return 'uri' in image;
  };

  return (
    <View className="flex w-full h-full p-5 bg-gray-950">
      <Catawaracle />

      {loading ? (
        <ActivityIndicator size="large" color="#F97316" />
      ) : (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View className="flex flex-row flex-wrap items-center justify-center gap-5 mt-5">
            {catImages.map((cat) => (
              <View
                key={cat.id}
                className="w-[300px] h-[300px] border-2 border-orange-500 rounded-lg overflow-hidden mb-5"
              >
                <Image
                  source={{ uri: isCatImageUri(cat) ? cat.uri : cat.url }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
