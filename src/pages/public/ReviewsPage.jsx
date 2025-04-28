import { ReviewForm } from "../../components/forms/ReviewForm";
import { ReviewCard } from "../../components/cards/ReviewCard";
import { useState, useEffect } from "react";
import { useReviews } from "../../hooks/useReviews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/es';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

dayjs.extend(relativeTime);
dayjs.locale('es');

export const ReviewsPage = () => {
    const { fetchReviews, addReview } = useReviews();
    const [reviews, setReviews] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(4);

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

    const handleReviewSubmit = async (review) => {
        if (!review.name || !review.comment || review.rating === 0) {
            toast.error("Por favor, completa todos los campos y selecciona una puntuación.");
            return;
        }

        try {
            const reviewToSend = {
                author: review.name,
                content: review.comment,
                rating: review.rating,
            };

            const savedReview = await addReview(reviewToSend);

            const newFormattedReview = {
                id: savedReview.id,
                author: savedReview.author,
                content: savedReview.content,
                rating: savedReview.rating,
                createdAt: savedReview.createdAt ?? new Date().toISOString(),
            };

            setReviews([newFormattedReview, ...reviews]);
            toast.success("¡Gracias por tu comentario!");
        } catch (error) {
            console.error("Error al enviar review:", error);
            toast.error("Hubo un problema al enviar tu comentario.");
        }
    };

    const handleLoadMore = () => {
        setVisibleReviews((prev) => prev + 4);
    };

    return (
        <div className="w-full px-4 py-10">
            <h1 className="text-center text-color1-public font-primary mb-6 sm:text-[1.875rem] lg:text-[3rem] mt-10">
                ¡Déjanos tu comentario!
            </h1>

            <div className="mb-20 mt-16">
                <ReviewForm onSubmit={handleReviewSubmit} />
            </div>

            <h1 className="text-center text-color1-public font-primary mb-10 m:text-[1.875rem] lg:text-[3rem]">
                VUESTRAS OPINIONES
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-10">
                {reviews.slice(0, visibleReviews).map((rv, index) => (
                    <ReviewCard
                        key={rv.id || index}
                        name={rv.author}
                        comment={rv.content}
                        rating={rv.rating}
                        date={dayjs(rv.createdAt).fromNow()}
                    />
                ))}
            </div>

            {visibleReviews < reviews.length && (
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className="bg-color1-public hover:bg-text2-public hover:text-buttons-public text-text2-public font-primary py-2 px-6 rounded-lg transition duration-300"
                    >
                        Ver más
                    </button>
                </div>
            )}
        </div>
    );
};
