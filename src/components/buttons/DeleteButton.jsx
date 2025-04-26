export const DeleteButton = ({ onClick }) => {
    return (
        <button
            className="bg-[#FF0000] text-text2-public font-primary sm:text-[1.125rem] lg:text-[1.5rem] rounded-[53px] p-2 hover:bg-[#FF4C4C] transition duration-200"
            onClick={onClick}>
            Eliminar
        </button>
    )
}