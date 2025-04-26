import schedule from '../../assets/images/schedule-bg.png';

export const ContactPage = () => {
    return (
        <div className="w-full px-4 py-10" >
            <div className="max-w-[1024px] mx-auto mt-10 bg-cover p-16" style={{ backgroundImage: `url(${schedule})` }}>
                <h1 className="text-3xl font-bold text-start sm:text-[1.875rem] lg:text-[3rem] font-primary mb-10 text-text1-public">Horario de apertura</h1>
                <p className="text-start sm:text-[1.5rem] lg:text-[2.25rem] font-primary text-text1-public">Lunes a Viernes</p>
                <p className="text-start sm:text-[1.5rem] lg:text-[2.25rem] font-primary text-text2-public">Mañanas 12:00 - 16:00</p>
                <p className="text-start sm:text-[1.5rem] lg:text-[2.25rem] font-primary text-text2-public">Tardes 19:00 - Cierre</p>
                <p className="text-start sm:text-[1.5rem] lg:text-[2.25rem] font-primary mt-10 text-text1-public">Sábados y Domingos (Festivos)</p>
                <p className="text-start sm:text-[1.5rem] lg:text-[2.25rem] font-primary text-text2-public">12:00 - Cierre</p>
            </div>
            <h2 className="w-full text-center text-color1-public sm:text-[1.875rem] lg:text-[3rem] font-primary p-5 mt-14 mb-10">
                ¡ENcuentranos por aquí!
            </h2>
            <div className="flex justify-between items-center w-full max-w-[800px] mx-auto mb-10 gap-x-36">
                <a href="https://www.instagram.com/laguetacandas/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/icons/instagram.svg" alt="Instagram" className="w-48 h-48 transition-transform duration-300 hover:scale-110"/>
                </a>
                <a href="https://www.facebook.com/la.gueta.1/?locale=es_ES" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/icons/facebook.svg" alt="Facebook" className="w-48 h-48 transition-transform duration-300 hover:scale-110"/>
                </a>
                <a href="https://g.co/kgs/HR5tok8" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/icons/maps.svg" alt="Google Maps" className="w-48 h-48 transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
        </div>
    )
}