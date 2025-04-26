import { AddButton } from "../../components/buttons/AddButton"
import { ProductCard } from "../../components/cards/ProductCard"

export const ProductsAdmin = () => {
    const products = [
        { id: 1, title: 'Cinzano 1757', category: 'Vermú', imageUrl: '/ruta/cinzano.jpg' },
        { id: 2, title: 'Martini', category: 'Vermú', imageUrl: '/ruta/cinzano.jpg' },
        { id: 3, title: 'Perucci', category: 'Vermú', imageUrl: '/ruta/cinzano.jpg' },
        { id: 4, title: '1906', category: 'Cerveza', imageUrl: '/ruta/cinzano.jpg' },
        { id: 5, title: 'Sidra Llagar de Fozana', category: 'Sidra', imageUrl: '/ruta/cinzano.jpg' },
      ];

        const handleEdit = (id) => {
            console.log("Editar producto con id:", id );
        };

        const handleDelete = (id) => {
            console.log("Eliminar producto con id:", id );
        };

    return (
        <div className="min-h-screen p-4">
            <div className="flex w-full justify-end mb-8">
            <AddButton />
            </div>
            <div className="flex flex-wrap justify-center gap-8">
            {products.map((product, index) => (
              <div key={index} className="w-full max-w-[300px]">
                <ProductCard
                  title={product.title}
                  category={product.category}
                  imageUrl={product.imageUrl}
                  onEdit={() => handleEdit(product.id)}
                  onDelete={() => handleDelete(product.id)}
                />
              </div>
            ))}
            </div>
        </div>
    )
}