import { AddButton } from "../../components/buttons/AddButton";
import { ProductCard } from "../../components/cards/ProductCard";
import { NewProductModal } from "../../components/modals/NewProductModal";
import { EditProductModal } from "../../components/modals/EditProductModal";
import { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";

export const ProductsAdmin = () => {
  const { products, loading, createProduct, updateProduct, deleteProduct } = useProducts();
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCreate = async (productData) => {
    try {
      await createProduct(productData);
      setIsNewModalOpen(false);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (productData) => {
    if (selectedProduct) {
      await updateProduct(selectedProduct.id, productData);
      setIsEditModalOpen(false);
      setSelectedProduct(null);
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="p-4">
      <div className="flex w-full justify-end mb-8">
        <AddButton onClick={() => setIsNewModalOpen(true)} />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-full max-w-[300px]">
              <ProductCard
                title={product.name}
                category={product.category}
                imageUrl={`/api/products/${product.id}/image`}
                onEdit={() => handleEdit(product)}
                onDelete={() => handleDelete(product.id)}
              />
            </div>
          ))
        ) : (
          <div className="text-center text-lg mt-10">No hay productos aún.</div>
        )}
      </div>
      {isNewModalOpen && <NewProductModal onClose={() => setIsNewModalOpen(false)} onCreate={handleCreate} />}
      {isEditModalOpen && selectedProduct && (
        <EditProductModal product={selectedProduct} onClose={() => setIsEditModalOpen(false)} onUpdate={handleUpdate} />
      )}
    </div>
  );
};
