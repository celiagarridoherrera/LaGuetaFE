import { useEffect, useState } from "react";
import { ReviewCard } from "../../components/cards/ReviewCard";
import { DeleteButton } from "../../components/buttons/DeleteButton";
import { useReviews } from "../../hooks/useReviews";
import { toast } from 'react-toastify';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.locale('es');

export const ReviewsAdmin = () => {
    const { fetchReviews, removeReview } = useReviews();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                console.error("Error cargando reviews:", error);
            }
        };
        loadReviews();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Seguro que quieres eliminar esta opinión?");
        if (confirmDelete) {
            try {
                await removeReview(id);
                setReviews(reviews.filter((review) => review.id !== id));

                toast.success("Opinión eliminada correctamente ✅");
            } catch (error) {
                console.error("Error eliminando review:", error);
                toast.error("Error al eliminar la opinión ❌");
            }
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            name={review.author}
                            comment={review.content} 
                            rating={review.rating}
                            date={dayjs(review.createdAt).fromNow()}
                        >
                            <div className="flex justify-center mt-4">
                                <DeleteButton onClick={() => handleDelete(review.id)} />
                            </div>
                        </ReviewCard>
                    ))
                ) : (
                    <p className="text-center w-full">No hay opiniones disponibles.</p>
                )}
            </div>
        </div>
    );
};
