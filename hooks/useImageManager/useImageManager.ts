import { CatImage } from '@/types';
import {
  deleteImageFromAPI,
  loadSavedImages,
  saveImages,
  uploadImage,
} from '@/utils';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';

export const useImageManager = (
  showCustomAlert: (title: string, message: string) => void,
) => {
  const [uploadedImages, setUploadedImages] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSavedImages = async () => {
      try {
        const images = await loadSavedImages();
        setUploadedImages(images);
      } catch (error) {
        showCustomAlert('Error', 'Failed to load saved images.');
      }
    };

    fetchSavedImages();
  }, [showCustomAlert]);

  const pickImageAndUpload = async () => {
    try {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.canceled && pickerResult.assets?.length > 0) {
        const imageUri = pickerResult.assets[0].uri;
        await handleUploadImage(imageUri);
      } else {
        showCustomAlert('Error', 'Image selection was canceled.');
      }
    } catch (error) {
      showCustomAlert('Error', 'Failed to open image picker.');
    }
  };

  const handleUploadImage = async (imageUri: string) => {
    setLoading(true);
    try {
      const newImage = await uploadImage(imageUri);
      const updatedImages = [newImage, ...uploadedImages];
      setUploadedImages(updatedImages);
      await saveImages(updatedImages);
      showCustomAlert('Success', 'Image uploaded successfully!');
    } catch (error) {
      showCustomAlert('Error', 'Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    setLoading(true);
    try {
      await deleteImageFromAPI(imageId);
      const updatedImages = uploadedImages.filter((img) => img.id !== imageId);
      setUploadedImages(updatedImages);
      await saveImages(updatedImages);
      showCustomAlert('Success', 'Image deleted successfully!');
    } catch (error) {
      showCustomAlert('Error', 'Failed to delete image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setUploadedImages([]);
    setLoading(false);
  };

  return {
    uploadedImages,
    loading,
    pickImageAndUpload,
    handleUploadImage,
    handleDeleteImage,
    resetState,
  };
};
