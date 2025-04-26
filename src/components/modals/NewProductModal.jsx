import { FaTimes, FaUpload } from "react-icons/fa";

export const NewProductModal = ({ onClose, onSubmit }) => {
    return (
        <div className="fixed inset-0 bg-color1-admin bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-color1-admin text-bg-text-admin p-10 rounded-2xl w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] relative">
                <button 
                    className="absolute top-8 right-8 text-2xl hover:text-red-500 transition"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <h2 className="text-center font-primary text-[1.875rem] lg:text-[2.25rem] mb-8">
                    Nuevo producto
                </h2>
                <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Nombre</label>
                        <input 
                            type="text" 
                            placeholder="Nombre"
                            className="p-2 rounded bg-white text-black font-secondary"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Descripción</label>
                        <textarea 
                            placeholder="Descripción"
                            className="p-2 rounded bg-white text-black font-secondary h-24 resize-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Categoría</label>
                        <input 
                            type="text" 
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
                            className="flex-1 text-black font-secondary overflow-hidden"
                            accept="image/*"
                            required
                        />
                            <FaUpload className="ml-2 text-lg text-black" />
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="bg-bg-text-admin text-color1-admin font-secondary text-lg px-6 py-2 rounded-full hover:bg-green-600 transition mx-auto mt-4"
                    >
                        Crear producto
                    </button>
                </form>
            </div>
        </div>
    )
}
