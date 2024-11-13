import { CatImage } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveImages = async (images: CatImage[]) => {
  await AsyncStorage.setItem('uploadedImages', JSON.stringify(images));
};
