import { AddButton } from "../../components/buttons/AddButton";
import { DeleteButton } from "../../components/buttons/DeleteButton";
import { NewImageModal } from "../../components/modals/NewImageModal";
import { useState } from "react";

export const GalleryAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        {id: 1, url: "/src/assets/images/jacobo.JPEG" },
        {id: 2, url: "/src/assets/images/cali.JPEG" },
        {id: 3, url: "/src/assets/images/sardina.JPEG" },
        {id: 4, url: "/src/assets/images/cali2.JPEG" },,
    ];

    const handleDelete = (id) => {
        console.log("Eliminar imagen con id:", id );
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex w-full justify-end mb-8">
            <AddButton onClick={() => setIsModalOpen(true)}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {images.map((image) => (
                    <div key={image.id} className="relative">
                        <img
                            src={image.url}
                            alt={`Imagen ${image.id}`}
                            className="w-full h-[300px] object-cover rounded"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <DeleteButton onClick={() => handleDelete(image.id)} />
                        </div>
                    </div>
                ))}
            </div>
             {isModalOpen && (
                <NewImageModal onClose={() => setIsModalOpen(false)} />)}
        </div>
    )
};