import { ReviewForm } from "../../components/forms/ReviewForm"
import { ReviewCard } from "../../components/cards/ReviewCard"
import { useState } from "react"

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
    {
        name: "Ana Rodríguez",
        comment: "Muy buena atención.",
        rating: 4,
        date: "2 semanas",
    },
    {
        name: "Pedro Sánchez",
        comment: "La mejor sidra que he probado.",
        rating: 5,
        date: "3 días",
    },
    {
        name: "Laura Martínez",
        comment: "El ambiente es muy agradable.",
        rating: 4,
        date: "1 mes",
    },
    {
        name: "Jorge Ramírez",
        comment: "Un lugar ideal para relajarse.",
        rating: 5,
        date: "2 semanas",
    },
]
export const ReviewsPage = () => {

    const [visibleReviews, setVisibleReviews] = useState(4)

    const handleReviewSubmit = (review) => {
        console.log("Review submitted:", review)
        // Aqui endpoint para enviar el review
    }

    const handleLoadMore = () => {
        setVisibleReviews((prev) => prev + 4)
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-10">
                {reviews.slice(0, visibleReviews).map((rv, index) => (
                    <ReviewCard
                        key={index}
                        name={rv.name}
                        comment={rv.comment}
                        rating={rv.rating}
                        date={rv.date}
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
    )
}