import { useEffect, useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const images = [
    "/src/assets/images/jacobo.JPEG",
    "/src/assets/images/cali.JPEG",
    "/src/assets/images/sardina.JPEG",
    "/src/assets/images/cali2.JPEG",
    "/src/assets/images/botellas.JPEG",
];

export const HomeCard = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="w-full md:w-[447px] h-[378px] relative md:h-auto bg-color1-public rounded-[99px] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${images[index]})` }}>

        <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-color1-public text-text2-public p-2 rounded-full">
            <HiChevronLeft size={24} />
        </button>
        <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-color1-public text-text2-public p-2 rounded-full">
            <HiChevronRight size={24} />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
                <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-text2-public" : "bg-gray-300"}`}/>
            ))}
        </div>
        </div>
    );
};
