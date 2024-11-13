import { CatImage } from '@/types';
import { CAT_API_KEY } from '@env';
import axios from 'axios';

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
    uri: response.data.url,
  };
};
