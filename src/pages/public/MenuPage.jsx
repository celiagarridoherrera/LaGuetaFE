import { MenuButton } from "../../components/buttons/MenuButton"
import { useNavigate } from "react-router-dom";

export const MenuPage = () => {
    const navigate = useNavigate()

    const categories = [
        { name: "Sidra", path: "sidra" },
        { name: "Cerveza", path: "cerveza" },
        { name: "Vino", path: "vino" },
        { name: "Vermú", path: "vermu" },
        { name: "Licores", path: "licores" },
        { name: "Refrescos", path: "refrescos" },
        { name: "Ginebra", path: "ginebra" },
        { name: "Ron", path: "ron" },
        { name: "Whisky", path: "whisky" },
      ];
    
      const handleCategoryClick = (path) => {
        navigate(`/carta/${path}`);
      };

    return (
        <div className="w-full">
            <h1 className="w-full text-center text-color1-public sm:text-[1.875rem] lg:text-[3rem] font-primary p-5 mt-14">
                ¿QUÉ NOS TOMAMOS HOY?
            </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1024px] mx-auto mt-16">
            {categories.map((cat) => (
            <MenuButton
            key={cat.path}
            title={cat.name}
            onClick={() => handleCategoryClick(cat.path)}
            />
            ))}
        </div>
        </div>
    )
}