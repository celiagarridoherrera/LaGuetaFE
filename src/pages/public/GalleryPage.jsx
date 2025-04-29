import { useGallery } from "../../hooks/useGallery";

export const GalleryPage = () => {
  const { images, loading } = useGallery();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-lg">Cargando galería...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <h1 className="font-primary uppercase sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black mb-10 text-center mt-10">
        Galería
      </h1>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-4 w-full mb-10">
          {images.map((image) => (
            <div key={image.id} className="flex justify-center">
              <img
                src={`http://localhost:8080/uploads/${image.name}`}
                alt={`Imagen ${image.id}`}
                className="w-[300px] h-[300px] object-cover rounded shadow-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-lg">No hay imágenes disponibles.</p>
      )}
    </div>
  );
};
