import { ReviewForm } from "../../components/forms/ReviewForm"
import { ReviewCard } from "../../components/cards/ReviewCard"

const reviews = [
    {
        name: "Juan Pérez",
        comment: "Excelente servicio y ambiente acogedor.",
        rating: 5,
        date: "30 minutos",
    },
    {
        name: "María López",
        comment: "La comida estaba deliciosa, volveré pronto.",
        rating: 4,
        date: "2 meses",
    },
    {
        name: "Carlos García",
        comment: "Un lugar perfecto para disfrutar con amigos.",
        rating: 5,
        date: "1 año",
    },
]
export const ReviewsPage = () => {
    const handleReviewSubmit = (review) => {
        console.log("Review submitted:", review)
        // Aqui endpoint para enviar el review
    }
    return (
        <div className="w-full px-4 py-10">
            <h1 className="text-center text-color1-public font-primary mb-6 sm:text-[1.875rem] lg:text-[3rem] mt-10">
                ¡Dejanos tu comentario!
            </h1>
            <div className="mb-20 mt-16">
            <ReviewForm onSubmit={handleReviewSubmit}/>
            </div>
            <h1 className="text-center text-color1-public font-primary mb-10 m:text-[1.875rem] lg:text-[3rem]">
                VUESTRAS OPINIONES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 max-w-6xl mx-auto">
                    {reviews.map((rv, index) => (
                        <ReviewCard
                            key={index}
                            name={rv.name}
                            comment={rv.comment}
                            rating={rv.rating}
                            date={rv.date}
                        />
                    ))}
            </div>
        </div>
    )
}