import { ReviewCard } from "../../components/cards/ReviewCard";
import { DeleteButton } from "../../components/buttons/DeleteButton";

export const ReviewsAdmin = () => {
    const reviews = [
        {
            id: 1,
            username: "Usuario",
            createdAt: "1 minuto",
            rating: 5,
            comment: "Munchkin tabby or cheetah and bengal. Tiger bengal for cheetah for tom. Persian. Siberian cheetah yet tiger. Burmese cougar. Cheetah russian blue but birman yet tomcat but lion."
        },
        {
            id: 2,
            username: "Usuario",
            createdAt: "1 minuto",
            rating: 4,
            comment: "Munchkin tabby or cheetah and bengal. Tiger bengal for cheetah for tom. Persian. Siberian cheetah yet tiger. Burmese cougar. Cheetah russian blue but birman yet tomcat but lion."
        },
    ];

    const handleDelete = (id) => {
        console.log("Eliminar review con id:", id);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        name={review.username}
                        date={review.createdAt}
                        rating={review.rating}
                        comment={review.comment}
                    >
                        <div className="flex justify-center mt-4">
                            <DeleteButton onClick={() => handleDelete(review.id)} />
                        </div>
                    </ReviewCard>
                ))}
            </div>
        </div>
    );
};
