import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Button, Catawaracle, CustomAlert } from '@/components/atoms';
import { useImageManager } from '@/hooks/useImageManager';
import { CatImage, CatImageUri } from '@/types';

export default function Upload() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: '', message: '' });

  const showCustomAlert = (title: string, message: string) => {
    setAlertContent({ title, message });
    setAlertVisible(true);
  };

  const closeAlert = () => setAlertVisible(false);

  const { uploadedImages, loading, pickImageAndUpload, handleDeleteImage } =
    useImageManager(showCustomAlert);

  const isCatImageUri = (image: CatImage): image is CatImageUri => {
    return 'uri' in image;
  };

  return (
    <View className="flex h-full p-5 bg-gray-950">
      <Catawaracle />
      <ScrollView className="mt-5 ">
        {uploadedImages.map((image) => (
          <View key={image.id} className="flex items-center mb-5">
            <Image
              alt={`uploaded image ${
                isCatImageUri(image) ? image.uri : image.url
              }`}
              source={{ uri: isCatImageUri(image) ? image.uri : image.url }}
              className="w-[300px] h-[300px] mb-5 border-2 border-orange-500 rounded-lg"
            />
            <View className="flex flex-row w-[300px] gap-5">
              <Button
                onPress={() => handleDeleteImage(image.id)}
                label="Delete"
                className="bg-red-500"
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <Button
        onPress={pickImageAndUpload}
        label="Upload Image"
        loading={loading}
        className="bg-orange-500"
      />
      <CustomAlert
        visible={alertVisible}
        title={alertContent.title}
        message={alertContent.message}
        onClose={closeAlert}
      />
    </View>
  );
}
