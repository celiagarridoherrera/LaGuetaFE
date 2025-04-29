import { FaTimes, FaUpload } from "react-icons/fa";
import { ActionButton } from "../buttons/ActionButton";
import axios from 'axios';

export const NewImageModal = ({ onClose, onUploadSuccess }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    const fileInput = e.target.elements.file;
    const file = fileInput.files[0];
  
    if (file) {
      formData.append("file", file);
  
      try {
        const response = await axios.post('http://localhost:8080/api/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
  
        const uploadedImageUrl = response.data;
  
        if (onUploadSuccess) {
          onUploadSuccess(uploadedImageUrl);
        }
  
        onClose();
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  

  return (
    <div className="fixed inset-0 bg-color1-admin bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-color1-admin text-bg-text-admin p-10 rounded-2xl w-full max-w-xl relative">
        <button
          className="absolute top-4 right-4 text-2xl hover:text-red-500 transition"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2 className="text-center font-primary text-[1.875rem] lg:text-[2.25rem] mb-8">
          Subir nueva imagen
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-primary text-bg-text-admin text-[1.5rem] mb-2">Imagen</label>
            <div className="flex items-center bg-white rounded p-2">
              <input
                type="file"
                name="file"
                className="flex-1 text-black font-secondary"
                accept="image/*"
                required
              />
              <FaUpload className="ml-2 text-lg text-black" />
            </div>
          </div>
          <div className="flex justify-center">
            <ActionButton text="Subir producto" />
          </div>
        </form>
      </div>
    </div>
  );
};
