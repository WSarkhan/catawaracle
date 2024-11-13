import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Catawaracle } from '@/components/atoms';
import { CAT_API_KEY } from '@env';

interface CatImage {
  id: string;
  url: string;
  width?: number;
  height?: number;
}

export default function Home() {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCatImages = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
        {
          headers: {
            'x-api-key': CAT_API_KEY || '',
          },
        },
      );
      const data: CatImage[] = await response.json();
      setCatImages(data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch cat images');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  return (
    <View className="flex w-full h-full p-5 bg-gray-950">
      <Catawaracle />

      {loading ? (
        <ActivityIndicator size="large" color="#F97316" />
      ) : (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View className="flex flex-row flex-wrap items-center justify-center gap-5 mt-5">
            {catImages.map((cat) => (
              <Image
                key={cat.id}
                source={{ uri: cat.url }}
                className="w-[300px] h-[300px] mb-5 border-2 border-orange-500 rounded-lg "
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
