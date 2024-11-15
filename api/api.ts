import axios from 'axios';
import { CAT_API_KEY } from '@env';
import { CatImage } from '@/types';

const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: { 'x-api-key': CAT_API_KEY },
});

export const fetchCatImages = async (limit = 10): Promise<CatImage[]> => {
  const response = await apiClient.get(`/images/search?limit=${limit}`);
  return response.data;
};

export const fetchVotes = async (imageId?: string) => {
  const endpoint = imageId ? `/votes?image_id=${imageId}` : '/votes';
  const response = await apiClient.get(endpoint);
  return response.data;
};

export const castVote = async (imageId: string, value: number) => {
  const response = await apiClient.post('/votes', { image_id: imageId, value });
  return response.data;
};

export const undoVote = async (voteId: number) => {
  await apiClient.delete(`/votes/${voteId}`);
};

export const fetchFavorites = async () => {
  const response = await apiClient.get('/favourites');
  return response.data;
};

export const toggleFavoriteAPI = async (
  imageId: string,
  favoriteId?: string,
) => {
  if (favoriteId) {
    await apiClient.delete(`/favourites/${favoriteId}`);
  } else {
    const response = await apiClient.post('/favourites', { image_id: imageId });
    return response.data;
  }
};

export const uploadImage = async (imageUri: string): Promise<CatImage> => {
  const fileName = imageUri.split('/').pop();
  const formData = new FormData();

  formData.append('file', {
    uri: imageUri,
    name: fileName,
    type: 'image/jpeg',
  } as unknown as Blob);
  // Quick fix for FormData type error

  const response = await axios.post(
    'https://api.thecatapi.com/v1/images/upload',
    formData,
    {
      headers: {
        'x-api-key': CAT_API_KEY,
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return {
    id: response.data.id,
    url: response.data.url,
  };
};

export const deleteImage = async (imageId: string) => {
  await apiClient.delete(`/images/${imageId}`);
};
