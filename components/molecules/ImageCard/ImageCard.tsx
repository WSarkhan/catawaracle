import React from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@/components/atoms';
import { CatImage } from '@/types';

interface ImageCardProps {
  cat: CatImage & { votes?: number };
  userVote?: { value: number };
  isFavorite: boolean;
  loading: boolean;
  onUpvote: () => void;
  onDownvote: () => void;
  onToggleFavorite: () => void;
  onDelete?: () => void;
}

export const ImageCard = ({
  cat,
  userVote,
  isFavorite,
  loading,
  onUpvote,
  onDownvote,
  onToggleFavorite,
  onDelete,
}: ImageCardProps) => {
  const userVotedUp = userVote?.value === 1;
  const userVotedDown = userVote?.value === 0;

  return (
    <View className="relative flex items-center w-full my-5">
      <View className="w-[300px] h-[300px]  flex border-2 border-orange-500 rounded-lg overflow-hidden mb-5">
        <Image
          source={{ uri: cat.url }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {onDelete && (
          <View className="absolute right-0 gap-5 m-2">
            <Button onPress={onDelete} label="Delete" className="bg-red-500" />
          </View>
        )}
        {loading && (
          <View className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50">
            <ActivityIndicator size="large" color="#F97316" />
          </View>
        )}
      </View>
      <View className="flex flex-row justify-between w-[300px]">
        <View className="flex flex-row gap-5">
          <TouchableOpacity onPress={onUpvote}>
            <FontAwesome
              name="thumbs-up"
              size={24}
              color={userVotedUp ? 'green' : 'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDownvote}>
            <FontAwesome
              name="thumbs-down"
              size={24}
              color={userVotedDown ? 'red' : 'white'}
            />
          </TouchableOpacity>
          <View className="flex flex-row gap-1">
            <Text className="font-semibold text-orange-500">Votes:</Text>
            <Text className="text-orange-500">{cat.votes || 0}</Text>
          </View>
        </View>
        <View className="flex flex-row mr-5">
          <TouchableOpacity
            onPress={onToggleFavorite}
            className="flex items-center"
          >
            <FontAwesome
              name="heart"
              size={24}
              color={isFavorite ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
