import { useEffect, useState } from 'react';
import { fetchCatImages, fetchVotes } from '@/api';
import { CatImage, Votes } from '@/types';

interface MappedCatImage extends CatImage {
  votes: number;
}

interface UseCatImagesReturn {
  catImages: MappedCatImage[];
  loading: boolean;
  setCatImages: React.Dispatch<React.SetStateAction<MappedCatImage[]>>;
}

export const useCatImages = (): UseCatImagesReturn => {
  const [catImages, setCatImages] = useState<MappedCatImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadCatImages = async (): Promise<void> => {
    try {
      setLoading(true);
      const images: CatImage[] = await fetchCatImages();
      const votes: Votes[] = await fetchVotes();
      const mappedImages: MappedCatImage[] = images.map((image) => ({
        ...image,
        votes: votes.filter((vote) => vote.image_id === image.id).length,
      }));
      setCatImages(mappedImages);
    } catch (error) {
      throw new Error('Failed to fetch cat images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatImages();
  }, []);

  return { catImages, loading, setCatImages };
};
