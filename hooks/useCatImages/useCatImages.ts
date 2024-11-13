import { useState, useEffect } from 'react';
import { CAT_API_KEY } from '@env';
import { Alert } from 'react-native';
import { CatImage } from '@/types';

export const useCatImages = () => {
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
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch cat images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  return { catImages, loading, fetchCatImages };
};
