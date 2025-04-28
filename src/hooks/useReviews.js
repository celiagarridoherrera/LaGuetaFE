import { getReviews, createReview, deleteReview } from "../api/reviewService";

export const useReviews = () => {

  const fetchReviews = async () => {
    const reviews = await getReviews();
    return reviews;
  };

  const addReview = async (newReview) => {
    const review = await createReview(newReview);
    return review;
  };

  const removeReview = async (id) => {
    await deleteReview(id);
  };

  return { fetchReviews, addReview, removeReview };
};
