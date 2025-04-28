import { AddButton } from "../../components/buttons/AddButton";
import { DeleteButton } from "../../components/buttons/DeleteButton";
import { NewImageModal } from "../../components/modals/NewImageModal";
import { useGallery } from "../../hooks/useGallery";
import { useState } from "react";

export const GalleryAdmin = () => {
  const { images, loading, refreshGallery, deleteImage } = useGallery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    await deleteImage(id);
    refreshGallery();
  };

  const handleImageUploaded = () => {
    setIsModalOpen(false);
    refreshGallery();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-lg">Cargando galería...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex w-full justify-end mb-8">
        <AddButton onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={`http://localhost:8080/uploads/${image.name}`}
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
        <NewImageModal onClose={() => setIsModalOpen(false)} onUploaded={handleImageUploaded} />
      )}
    </div>
  );
};
