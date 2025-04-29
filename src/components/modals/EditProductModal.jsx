import { useState, useEffect } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";

export const EditProductModal = ({ onClose, onUpdate, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        image: '',
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                description: product.description || '',
                category: product.category || '',
                image: product.image || '',
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                image: file.name
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="fixed inset-0 bg-color1-admin bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-color1-admin text-bg-text-admin p-10 rounded-2xl w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] relative border border-bg-text-admin">
                <button 
                    className="absolute top-8 right-8 text-2xl hover:text-red-500 transition"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <h2 className="text-center font-primary text-[1.875rem] lg:text-[2.25rem] mb-8">
                    Editar producto
                </h2>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Nombre</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="p-2 rounded bg-white text-black font-secondary"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Descripción</label>
                        <textarea 
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Descripción"
                            className="p-2 rounded bg-white text-black font-secondary h-24 resize-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Categoría</label>
                        <input 
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Categoría"
                            className="p-2 rounded bg-white text-black font-secondary"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Imagen</label>
                        <div className="flex items-center bg-white rounded p-2">
                            <input 
                                type="file"
                                onChange={handleFileChange}
                                className="flex-1 text-black font-secondary overflow-hidden"
                                accept="image/*"
                            />
                            <FaUpload className="ml-2 text-lg text-black" />
                        </div>
                        {formData.image && (
                            <span className="text-xs mt-2">{formData.image}</span>
                        )}
                    </div>
                    <button 
                        type="submit"
                        className="bg-bg-text-admin text-color1-admin font-secondary text-lg px-6 py-2 rounded-full hover:bg-green-600 transition mx-auto mt-4"
                    >
                        Guardar cambios
                    </button>
                </form>
            </div>
        </div>
    );
};
