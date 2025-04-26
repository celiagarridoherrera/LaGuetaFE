import DashImage from '../../assets/images/dashboard-image.jpg'

export const DashboardAdmin = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-center sm:text-[1.875rem] lg:text-[3rem] font-primary font-bold text-color1-admin mb-2">
                ¡Hola jefe! Bienvenido al panel de La Gueta
            </h1>

            <p className="text-center sm:text-[1rem] lg:text-[1.25rem] text-color1-admin font-secondary max-w-3xl">
                Desde aquí puedes añadir o editar productos de la carta, subir nuevas fotos del bar, y revisar lo que opinan tus clientes.
                <br />
                Esta es tu casa digital — mantenla al día, escancia con orgullo y que no falte la sidra. ¡Puxa La Gueta!
            </p>
            <img src={DashImage} alt="Asturiano escanciando" className="w-full max-w-[200px] mt-10" />
        </div>
    )
}