import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Catawaracle, CustomAlert } from '@/components/atoms';
import { useImageManager, useFavorites, useVotes } from '@/hooks';
import { ImageCard } from '@/components/molecules';
import { CatImage } from '@/types';
import { useAlert } from '@/hooks/useAlert';

interface CatImageWithVotes extends CatImage {
  votes?: number;
}

export default function Upload() {
  const { alertVisible, alertContent, showCustomAlert, closeAlert } =
    useAlert();
  const [loadingImage, setLoadingImage] = useState<string | null>(null);

  const {
    uploadedImages,
    loading,
    pickImageAndUpload,
    handleDeleteImage,
    setUploadedImages,
  } = useImageManager(showCustomAlert);

  const { favorites, toggleFavorite } = useFavorites(showCustomAlert);
  const { votes: userVotes, handleVote } = useVotes(showCustomAlert);

  const updateCatVotes = (imageId: string, delta: number) => {
    setUploadedImages((prevImages) =>
      prevImages.map((cat: CatImageWithVotes) =>
        cat.id === imageId ? { ...cat, votes: (cat.votes || 0) + delta } : cat,
      ),
    );
  };

  return (
    <View className="flex h-full p-5 bg-gray-950">
      <Catawaracle />

      {loading && <ActivityIndicator size="large" color="#F97316" />}
      <ScrollView className="mt-5 ">
        {uploadedImages.map((cat) => {
          const userVote = userVotes[cat.id];
          const isFavorite = !!favorites[cat.id];
          const isLoading = loadingImage === cat.id;

          return (
            <ImageCard
              key={cat.id}
              cat={cat}
              userVote={userVote}
              isFavorite={isFavorite}
              loading={isLoading}
              onUpvote={() => handleVote(cat, 1, updateCatVotes)}
              onDownvote={() => handleVote(cat, 0, updateCatVotes)}
              onToggleFavorite={async () => {
                setLoadingImage(cat.id);
                await toggleFavorite(cat.id);
                setLoadingImage(null);
              }}
              onDelete={() => handleDeleteImage(cat.id)}
            />
          );
        })}
      </ScrollView>
      <View className="flex items-center ">
        <Button
          onPress={pickImageAndUpload}
          label="Upload Image"
          loading={loading}
          className="mt-5 bg-orange-500 w-[300px]"
        />
        <CustomAlert
          visible={alertVisible}
          title={alertContent.title}
          message={alertContent.message}
          onClose={closeAlert}
        />
      </View>
    </View>
  );
}
