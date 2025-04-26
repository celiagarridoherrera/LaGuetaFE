import { MenuButton } from "../../components/buttons/MenuButton"

export const MenuPage = () => {
    return (
        <div className="w-full">
            <h1 className="w-full text-center text-color1-public sm:text-[1.875rem] lg:text-[3rem] font-primary p-5 mt-14">¿QUÉ NOS TOMAMOS HOY?</h1>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 px-6 py-10 max-w-[1024px] mx-auto mt-10">
            <MenuButton title={"Sidra"}/>
            <MenuButton title={"Cerveza"}/>
            <MenuButton title={"Vino"}/>
            <MenuButton title={"Vermú"}/>
            <MenuButton title={"Licores"}/>
            <MenuButton title={"Refrescos"}/>
            <MenuButton title={"Ginebra"}/>
            <MenuButton title={"Ron"}/>
            <MenuButton title={"Whisky"}/>
        </div>
        </div>
    )
}