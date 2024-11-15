import { useState, useCallback } from 'react';
import axios from 'axios';
import { CAT_API_KEY } from '@env';

interface UseFavoritesProps {
  showCustomAlert: (title: string, message: string) => void;
}

export const useFavorites = ({ showCustomAlert }: UseFavoritesProps) => {
  const [favorites, setFavorites] = useState<Record<string, string | null>>({}); // Map of image IDs to favorite IDs
  const [loading, setLoading] = useState(false);

  const toggleFavorite = useCallback(
    async (imageId: string) => {
      const favoriteId = favorites[imageId];
      setLoading(true);

      try {
        if (favoriteId) {
          // Unfavorite the image
          await axios.delete(
            `https://api.thecatapi.com/v1/favourites/${favoriteId}`,
            {
              headers: { 'x-api-key': CAT_API_KEY },
            },
          );
          setFavorites((prev) => ({ ...prev, [imageId]: null }));
        } else {
          // Favorite the image
          const response = await axios.post(
            'https://api.thecatapi.com/v1/favourites',
            { image_id: imageId },
            {
              headers: {
                'x-api-key': CAT_API_KEY,
                'Content-Type': 'application/json',
              },
            },
          );
          setFavorites((prev) => ({ ...prev, [imageId]: response.data.id }));
        }
      } catch (error) {
        showCustomAlert(
          'Error',
          favoriteId
            ? 'Failed to unfavorite the image. Please try again.'
            : 'Failed to favorite the image. Please try again.',
        );
      } finally {
        setLoading(false);
      }
    },
    [favorites, showCustomAlert],
  );

  return { favorites, loading, toggleFavorite };
};
