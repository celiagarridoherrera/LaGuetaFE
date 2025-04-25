import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'


export const ReviewForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.({ name, comment, rating })
        setName("")
        setComment("")
        setRating(0)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-16 bg-form-public text-text1-public rounded-lg shadow-md">
            <label className="block sm:text-[1.5rem] lg:text-[2.25rem] font-primary mb-2">Nombre</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color1-public text-color1-public"
                placeholder="Escribe tu nombre"
                required
            />

            <label className="block sm:text-[1.5rem] lg:text-[2.25rem] font-primary mb-2">Comentario</label>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 font-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-color1-public  text-color1-public"
                placeholder="Escribe tu comentario"
                rows="4"
                required
            />

            <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-4xl text-text2-public font-secondary hover:scale-110 transition-transform"
                    >
                    <FaStar color={star <= rating ? "#facc15" : "#ccc"} />
                    </button>
                ))}
            </div>

            <button
                type="submit"
                className="w-[50%] mx-auto block bg-buttons-public text-white font-secondary sm:text-[1rem] lg:text-[1.125rem] py-2 rounded-lg hover:bg-text2-public hover:text-buttons-public transition duration-300"
            >
                Enviar
            </button>
        </form>
    )
}