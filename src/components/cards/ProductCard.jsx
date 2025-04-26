import { DeleteButton } from "../buttons/DeleteButton"
import { EditButton } from "../buttons/EditButton"

export const ProductCard = ({ title, category, imageUrl, onEdit, onDelete }) => {
  return (
    <div className="bg-card-admin p-4 rounded-lg shadow-md flex flex-col items-center">
        <h3 className="font-primary text-center sm:text-[1.5rem] lg:text-[2.25rem] mb-2">{title}</h3>
        <img src={imageUrl} alt={title} className="w-full h-[200px] object-cover rounded mb-4" />
        <p className="font-primary text-center sm:text-[1.125rem] lg:text-[1.5rem] mb-4">{category}</p>
        <div className="flex gap-4">
            <EditButton onClick={onEdit} />
            <DeleteButton onClick={onDelete} />
        </div>
    </div>
    )
}