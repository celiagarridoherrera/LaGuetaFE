import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../api/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (newProductData) => {
    try {
      const createdProduct = await createProduct(newProductData);
      await fetchProducts();
      return createdProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };
  

  const editProduct = async (id, updatedProduct) => {
    const updated = await updateProduct(id, updatedProduct);
    await fetchProducts();
    return updated;
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, createProduct: addProduct, updateProduct: editProduct, deleteProduct: removeProduct };
};
