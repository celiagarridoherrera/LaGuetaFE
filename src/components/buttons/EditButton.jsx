export const EditButton = ({ onClick }) => {
    return (
        <button 
        onClick={onClick}
        className="bg-color1-admin text-text2-public font-primary px-4 py-2 rounded-[53px] sm:text-[1.125rem] lg:text-[1.5rem] hover:bg-green-800 transition duration-200">
        Editar
        </button>
    )
}