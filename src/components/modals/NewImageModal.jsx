import { FaTimes, FaUpload } from "react-icons/fa";
import { ActionButton } from "../buttons/ActionButton";

export const NewImageModal = ({ onClose, onSubmit, products = [] }) => {
    return (
      <div className="fixed inset-0 bg-color1-admin bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-color1-admin text-bg-text-admin p-10 rounded-2xl w-full max-w-xl relative"> {/* <-- aquí cambia */}
          <button
            className="absolute top-4 right-4 text-2xl hover:text-red-500 transition"
            onClick={onClose}
          >
            <FaTimes />
          </button>
  
          <h2 className="text-center font-primary text-[1.875rem] lg:text-[2.25rem] mb-8">
            Subir nueva imagen
          </h2>
  
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Imagen</label>
              <div className="flex items-center bg-white rounded p-2">
                <input
                  type="file"
                  className="flex-1 text-black font-secondary"
                  accept="image/*"
                  required
                />
                <FaUpload className="ml-2 text-lg text-black" />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">
                Asociar producto
              </label>
              <select
                className="p-2 rounded bg-white text-black font-secondary"
              >
                <option value="">Selecciona un producto</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
  
            <p className="text-center text-xs font-secondary text-bg-text-admin">
              Puedes asociar una imagen a un producto ya existente que no tenga imagen
            </p>
  
            <div className="flex justify-center">
              <ActionButton text="Subir producto" />
            </div>
          </form>
        </div>
      </div>
    );
  };  