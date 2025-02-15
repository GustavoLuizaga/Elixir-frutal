import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Iconos de hamburguesa y cerrar
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú en móviles

    return (
        <nav className="bg-[#FEBD01] shadow-md p-1.5">
           <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start px-8 md:ml-[5rem]">
                {/* LOGO */}
                <a href="/">
                <img src={Logo} alt="logo" className="w-16 h-16" />                
                </a>

                {/* MENÚ - Oculto en pantallas pequeñas */}
                <ul className="hidden md:flex  px-32 space-x-16 text-lg font-semibold">
                    <li><a href="/" className="hover:text-white">Inicio</a></li>
                    <li><Link to="/products" className="hover:text-white">Productos</Link></li>
                </ul>

                {/* BOTÓN HAMBURGUESA - SOLO APARECE EN PANTALLAS PEQUEÑAS */}
                <button 
                    className="md:hidden text-3xl text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {/* MENÚ RESPONSIVO - SOLO SE MUESTRA CUANDO `isOpen` ES `true` */}
            <div className={`md:hidden flex flex-col bg-[#FEBD01] absolute top-16 left-0 w-full p-4 space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <a href="#home" className="block text-lg hover:text-white">Inicio</a>
                <Link to="/products" className="block text-lg hover:text-white">Productos</Link>
            </div>
        </nav>
    );
};

export default Navbar;
