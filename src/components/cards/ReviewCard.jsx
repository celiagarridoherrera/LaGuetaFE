import { FaStar } from 'react-icons/fa';

export const ReviewCard = ({ name, comment, rating, date, children }) => {
    return (
        <div className="bg-card-reviews text-text-review rounded-lg shadow-md p-8 max-w-md w-full mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-text-review font-primary text-[1.5rem] sm:text-[1.5rem] lg:text-[2.25rem]">{name}</h2>
                <span className="font-primary text-base text-text-review">hace {date}</span>
            </div>

            <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                    <FaStar
                        key={idx}
                        className="text-xl"
                        color={star <= rating ? "#facc15" : "#ccc"}
                    />
                ))}
            </div>

            <p className="text-text-review font-secondary">{comment}</p>
            {children}
        </div>
    )
}