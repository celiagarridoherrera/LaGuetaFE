export const AddButton = ({ onClick, children = "Añadir +" }) => {
    return (
        <button
            onClick={onClick}
            className="bg-color2-admin text-text2-public font-primary px-4 py-2 rounded-[26px] sm:text-[1.5rem] lg:text-[2.25rem] hover:bg-text2-public hover:text-color2-admin transition duration-200">
            {children}
        </button>
    )
}