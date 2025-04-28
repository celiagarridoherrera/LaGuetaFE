import { axiosInstance } from "./axiosIntance";

const API_URL = "/api/reviews";

export const getReviews = async () => {
  const response = await axiosInstance.get(API_URL);
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await axiosInstance.post(API_URL, reviewData);
  return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await axiosInstance.delete(`${API_URL}/${reviewId}`);
  return response.data;
};
