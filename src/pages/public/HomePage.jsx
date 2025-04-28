import BannerImage from "../../assets/images/BannerImage.png";
import { HomeCard } from "../../components/cards/HomeCard";

export const HomePage = () => {
    return (
      <div className="w-full">
        <img src={BannerImage} alt="Jacobo y Cali" className="w-full h-auto object-cover"/>
        <h1 className="bg-color1-public w-full text-center text-text1-public sm:text-[1.5rem] lg:text-[2.25rem] font-primary p-5">Escanciamos Sidra, Compartimos Risas y Sabemos lo que es un Chigre</h1>
        <section className="flex md:flex-row flex-col w-full mt-8 mb-8 gap-10 justify-center p-3">

            <div className="flex flex-col justify-center w-full md:w-1/2 p-10 bg-color1-public rounded-[99px] shadow-gray-900 shadow-lg">
                <h2 className="text-text1-public sm:text-[1.5rem] lg:text-[2.25rem] text-left font-primary">
                ¡Bienvenidos a La Gueta!
                </h2>
                <div className="text-text1-public sm:text-[0.875rem] lg:text-[1rem] text-left font-secondary mt-5 leading-relaxed">
                    <p>En pleno corazón de Candás, La Gueta es un chigre-pub con alma, sabor y mucha historia. Aquí no vienes solo a tomarte   algo: vienes a vivirlo. Sidra escanciada como toda la vida, buena música, risas compartidas y ese ambiente que solo se    consigue cuando la cosa va de verdad.</p>
                    <br />
                    <p>Detrás de la barra están Cali y Jacobo, padre e hijo, candasinos de pura cepa y la dupla perfecta para dar vida a este  rincón tan nuestro. Cali es leyenda por sus pinchos de tortilla, su amor por el buen vino y por poner la banda sonora    perfecta al momento. Jacobo es el espíritu inquieto: comediante de natural, fan de la cerveza artesanal y devoto del   rock, el metal y el indie. Aquí, lo decimos claro: el reguetón se queda fuera.</p>
                    <br />
                    <p>En La Gueta hay espacio para todo lo que mola: un culín bien escanciado, una caña fría, una copa al ritmo de buena música   y, sobre todo, muchas ganas de pasarlo bien. Porque si hay algo que sobra en este chigre-pub, es buen rollo. Bienvenidos a la familia</p>
                </div>
            </div>
                <HomeCard/>
        </section>
      </div>
    );
}