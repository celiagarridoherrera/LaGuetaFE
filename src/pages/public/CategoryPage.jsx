import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams, Link } from "react-router-dom";
import { ProductCardPublic } from "../../components/cards/ProductCardPublic";
import { useProducts } from "../../hooks/useProducts";

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products, loading } = useProducts();

  const normalizedCategory = categoryName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.category &&
      product.category.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() === normalizedCategory
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-lg">Cargando productos...</p>
      </div>
    );
  }

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
                      title={product.name}
                      imageUrl={`/api/images/${product.image}`}
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

      <Link to="/carta">
        <button className="mt-10 bg-black text-text1-public px-8 py-3 rounded-full font-primary hover:bg-text2-public hover:text-text1-public transition text-lg">
          Volver a la carta
        </button>
      </Link>
    </div>
  );
};
