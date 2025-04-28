import { useState, useEffect } from "react";
import { getImages, uploadImage as uploadImageService, deleteImage as deleteImageService } from "../api/galleryService";

export const useGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const data = await getImages();
      setImages(data);
    } catch (error) {
      console.error("Error al cargar imágenes:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (formData) => {
    try {
      await uploadImageService(formData);
      await fetchImages();
    } catch (error) {
      console.error("Error subiendo imagen:", error);
    }
  };

  const deleteImage = async (id) => {
    try {
      await deleteImageService(id);
      await fetchImages();
    } catch (error) {
      console.error("Error borrando imagen:", error);
    }
  };

  const refreshGallery = async () => {
    await fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { images, loading, uploadImage, deleteImage, refreshGallery };
};
