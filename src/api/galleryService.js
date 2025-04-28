import { axiosInstance } from "./axiosIntance";

export const getImages = async () => {
  const response = await axiosInstance.get("/api/images");
  return response.data;
};

export const uploadImage = async (formData) => {
  await axiosInstance.post("/api/images/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

export const deleteImage = async (id) => {
  await axiosInstance.delete(`/api/images/id/${id}`);
};
