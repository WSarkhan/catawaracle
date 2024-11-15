import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Catawaracle, CustomAlert } from '@/components/atoms';
import { useCatImages, useFavorites, useVotes } from '@/hooks';
import { ImageCard } from '@/components/molecules';
import { useAlert } from '@/hooks/useAlert';

export default function Home() {
  const { alertVisible, alertContent, showCustomAlert, closeAlert } =
    useAlert();
  const { catImages, loading: imagesLoading, setCatImages } = useCatImages();
  const { favorites, toggleFavorite, loadingImage } =
    useFavorites(showCustomAlert);
  const { votes: userVotes, handleVote } = useVotes(showCustomAlert);

  const updateCatVotes = (imageId: string, delta: number) => {
    setCatImages((prevImages) =>
      prevImages.map((cat) =>
        cat.id === imageId ? { ...cat, votes: (cat.votes || 0) + delta } : cat,
      ),
    );
  };

  return (
    <View className="relative flex w-full h-full p-5 bg-gray-950">
      <Catawaracle />
      {imagesLoading && <ActivityIndicator size="large" color="#F97316" />}
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View className="relative flex flex-row flex-wrap items-center justify-center mt-5">
          {catImages.map((cat) => {
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
                onToggleFavorite={() => toggleFavorite(cat.id)}
              />
            );
          })}
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
