import { CatImage } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadSavedImages = async (): Promise<CatImage[]> => {
  const savedImages = await AsyncStorage.getItem('uploadedImages');
  return savedImages ? JSON.parse(savedImages) : [];
};
