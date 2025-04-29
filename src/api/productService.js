import { axiosInstance } from "./axiosIntance";

export const getProducts = async () => {
  const response = await axiosInstance.get("/api/products");
  return response.data;
};

export const createProduct = async (productData) => {
  const formData = new FormData();
  formData.append(
    "product",
    new Blob(
      [
        JSON.stringify({
          id: null,
          name: productData.name || "",
          description: productData.description || "",
          category: productData.category || "",
          image: null
        })
      ],
      { type: "application/json" }
    )
  );

  if (productData.image) {
    formData.append("file", productData.image);
  }

  const response = await axiosInstance.post("/api/products/with-image", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const formData = new FormData();
  formData.append(
    "product",
    new Blob(
      [
        JSON.stringify({
          id: id,
          name: productData.name || "",
          description: productData.description || "",
          category: productData.category || "",
          image: null
        })
      ],
      { type: "application/json" }
    )
  );

  if (productData.image) {
    formData.append("file", productData.image);
  }

  const response = await axiosInstance.put(`/api/products/with-image/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/api/products/${id}`);
};
