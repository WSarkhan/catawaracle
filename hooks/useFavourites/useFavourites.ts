import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const secret_key = process.env.EXPO_PUBLIC_CAT_API_KEY;

export const useFavorites = (
  showCustomAlert: (title: string, message: string) => void,
) => {
  const [favorites, setFavorites] = useState<Record<string, string | null>>({});
  const [loadingImage, setLoadingImage] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/favourites',
        {
          headers: { 'x-api-key': secret_key },
        },
      );
      const updatedFavorites = response.data.reduce(
        (
          acc: Record<string, string>,
          fav: { id: string; image_id: string },
        ) => {
          acc[fav.image_id] = fav.id;
          return acc;
        },
        {},
      );
      setFavorites(updatedFavorites);
    } catch {
      showCustomAlert('Error', 'Failed to fetch favorites');
    }
  }, [showCustomAlert]);

  const toggleFavorite = useCallback(
    async (imageId: string) => {
      const favoriteId = favorites[imageId];
      setLoadingImage(imageId);
      try {
        if (favoriteId) {
          await axios.delete(
            `https://api.thecatapi.com/v1/favourites/${favoriteId}`,
            { headers: { 'x-api-key': secret_key } },
          );
          setFavorites((prev) => {
            const updated = { ...prev };
            delete updated[imageId];
            return updated;
          });
        } else {
          const response = await axios.post(
            'https://api.thecatapi.com/v1/favourites',
            { image_id: imageId },
            {
              headers: {
                'x-api-key': secret_key,
                'Content-Type': 'application/json',
              },
            },
          );
          setFavorites((prev) => ({ ...prev, [imageId]: response.data.id }));
        }
      } catch {
        showCustomAlert('Error', 'Failed to toggle favorite');
      } finally {
        setLoadingImage(null);
      }
    },
    [favorites, showCustomAlert],
  );

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return { favorites, toggleFavorite, loadingImage };
};
