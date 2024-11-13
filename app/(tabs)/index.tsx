import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Catawaracle, CustomAlert } from '@/components/atoms';
import { FontAwesome } from '@expo/vector-icons';
import { useCatImages, useFavorites } from '@/hooks';
import { CatImage, CatImageUri } from '@/types';

export default function Home() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: '', message: '' });
  const [loadingImage, setLoadingImage] = useState<string | null>(null); // Track loading for a specific image

  const showCustomAlert = (title: string, message: string) => {
    setAlertContent({ title, message });
    setAlertVisible(true);
  };

  const closeAlert = () => setAlertVisible(false);

  const { catImages, loading: imagesLoading } = useCatImages();
  const { favorites, toggleFavorite } = useFavorites({
    showCustomAlert,
  });

  const isCatImageUri = (image: CatImage): image is CatImageUri =>
    'uri' in image;

  const handleToggleFavorite = async (catId: string) => {
    try {
      setLoadingImage(catId); // Start loader for this image
      await toggleFavorite(catId);
    } finally {
      setLoadingImage(null); // Stop loader
    }
  };

  return (
    <View className="relative flex w-full h-full p-5 bg-gray-950">
      <Catawaracle />
      {imagesLoading && <ActivityIndicator size="large" color="#F97316" />}
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View className="relative flex flex-row flex-wrap items-center justify-center gap-5 mt-5">
          {catImages.map((cat) => (
            <View key={cat.id} className="relative">
              <View className="w-[300px] h-[300px] border-2 border-orange-500 rounded-lg overflow-hidden mb-5">
                <Image
                  source={{ uri: isCatImageUri(cat) ? cat.uri : cat.url }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                {loadingImage === cat.id && (
                  <View className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50">
                    <ActivityIndicator size="large" color="#F97316" />
                  </View>
                )}
              </View>
              <View className="flex flex-row justify-around mt-2">
                <TouchableOpacity
                  onPress={() => handleToggleFavorite(cat.id)}
                  className="flex items-center"
                >
                  <FontAwesome
                    name="heart"
                    size={24}
                    color={favorites[cat.id] ? 'red' : 'white'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="thumbs-up" size={24} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="thumbs-down" size={24} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <CustomAlert
        visible={alertVisible}
        title={alertContent.title}
        message={alertContent.message}
        onClose={closeAlert}
      />
    </View>
  );
}
