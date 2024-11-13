import { CAT_API_KEY } from '@env';
import axios from 'axios';

export const deleteImageFromAPI = async (imageId: string) => {
  await axios.delete(`https://api.thecatapi.com/v1/images/${imageId}`, {
    headers: { 'x-api-key': CAT_API_KEY },
  });
};
