import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams, Link } from "react-router-dom";
import { ProductCardPublic } from "../../components/cards/ProductCardPublic";

// Productos fake
const products = [
  { id: 1, title: "Miró", category: "Vermú", imageUrl: "/ruta/miro.jpg" },
  { id: 2, title: "Cinzano", category: "Vermú", imageUrl: "/ruta/cinzano.jpg" },
  { id: 3, title: "Guerra", category: "Vermú", imageUrl: "/ruta/guerra.jpg" },
  { id: 4, title: "1757", category: "Vermú", imageUrl: "/ruta/1757.jpg" },
  { id: 5, title: "1906", category: "Cerveza", imageUrl: "/ruta/1906.jpg" },
  { id: 6, title: "Ladrón de Manzanas", category: "Sidra", imageUrl: "/ruta/ladron.jpg" },
  { id: 7, title: "Peñascal", category: "Vino", imageUrl: "/ruta/penascal.jpg" },
  { id: 8, title: "Jack Daniel's", category: "Whisky", imageUrl: "/ruta/jack.jpg" },
];

export const CategoryPage = () => {
  const { categoryName } = useParams();

  const normalizedCategory = categoryName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.category.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() === normalizedCategory
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <h1 className="font-primary uppercase sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black mb-10 text-center">
        {categoryName}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="w-full max-w-7xl px-4">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
              <div className="flex justify-center">
                <div className="w-[350px]">
                  <ProductCardPublic
                    title={product.title}
                    imageUrl={product.imageUrl}
                  />
                </div>
              </div>
            </SwiperSlide>            
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-white text-lg">No hay productos para esta categoría.</p>
      )}

      {/* Botón de volver */}
      <Link to="/carta">
        <button className="mt-10 bg-black text-text1-public px-8 py-3 rounded-full font-primary hover:bg-text2-public hover:text-text1-public transition text-lg">
          Volver a la carta
        </button>
      </Link>
    </div>
  );
};
