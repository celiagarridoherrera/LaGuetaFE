export const MenuButton = ({ onClick, title, ...props }) => {
    return (
        <button
            onClick={onClick}
            className="w-full min-w-[90px] h-[100px] px-3 break-words text-center text-[0.875rem] md:text-[1.5rem] lg:text-[1.875rem] bg-color1-public text-text2-public hover:text-text1-public hover:bg-text2-public hover:shadow-slate-200 font-primary rounded-[30px] shadow-gray-900 shadow-lg"
            {...props}
        >
            {title}
        </button>
    );
}