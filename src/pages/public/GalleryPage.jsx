import { use } from "react"

export const GalleryPage = () => {
/*     const [images, setImages] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/images")
            .then(res => setImages(res.data))
            .catch(err => console.error("Error al cargar las imágenes", err))
    }, []) */
    //ENLACE CON EL BACKEND PARA CARGAR LAS IMÁGENES

    return (
        <div className="w-full px-6 py-10">
            <h1 className="text-center text-color1-public font-primary sm:text-[1.875rem] lg:text-[3rem] mb-10">
                NUESTRO ESCAPARATE
            </h1>
           {/*  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1024px] mx-auto">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={`http://localhost:8080/uploads/${img.nombreArchivo}`} 
                            alt={`Imagen ${index + 1}`} 
                            className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div> */}
        </div>
    )
}