import { PublicLayout } from "../../layouts/PublicLayout";
import BannerImage from "../../assets/images/BannerImage.png";

export const HomePage = () => {
    return (
      <div className="w-full">
        <img src={BannerImage} alt="Jacobo y Cali" className="w-full h-auto object-cover"/>
        <h1 className="bg-color1-public w-full text-center text-text1-public sm:text-[1.5rem] lg:text-[2.25rem] font-primary p-5">Escanciamos Sidra, Compartimos Risas y Sabemos lo que es un Chigre</h1>
      </div>
      



    );
}