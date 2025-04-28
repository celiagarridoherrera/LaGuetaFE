import { useState } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";

export const NewProductModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = { ...formData };
    onCreate(formDataToSend);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-color1-admin bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-color1-admin text-bg-text-admin p-10 rounded-2xl w-full max-w-xl relative">
        <button className="absolute top-4 right-4 text-2xl hover:text-red-500 transition" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="text-center font-primary text-[1.875rem] lg:text-[2.25rem] mb-8">Subir nuevo producto</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="p-2 rounded bg-white text-black" />
          </div>
          <div className="flex flex-col">
            <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Descripción</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required className="p-2 rounded bg-white text-black resize-none" />
          </div>
          <div className="flex flex-col">
            <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Categoría</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required className="p-2 rounded bg-white text-black" />
          </div>
          <div className="flex flex-col">
            <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Imagen (Opcional)</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="p-2 rounded bg-white text-black" />
          </div>

          <button type="submit" className="bg-bg-text-admin text-color1-admin font-secondary text-lg px-6 py-2 rounded-full hover:bg-green-600 transition mx-auto mt-4">
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
};
