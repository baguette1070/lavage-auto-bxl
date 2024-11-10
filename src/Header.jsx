import React from 'react';
import { useNavigate } from "react-router-dom";

function Header({ setShowElements }) {
    const navigate = useNavigate();

    function handleNavigation(path, shouldHide = false) {
        if (typeof setShowElements === 'function') {
            setShowElements(!shouldHide);
        }
        navigate(path);
    }

    return (
        <div className='font-serif bg-gray-100 p-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-couleur-titre text-center'>Lavage-Auto</h1>
            <ul className='flex flex-col md:flex-row items-center justify-evenly py-4 md:py-9 space-y-4 md:space-y-0 md:space-x-9'>
                <li className='active:text-blue-500 hover:text-couleur-titre underline hover:underline cursor-pointer transform text-lg md:text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/home')} href="#">Accueil</a>
                </li>
                <li className='active:text-blue-500 hover:text-couleur-titre underline hover:underline cursor-pointer transform text-lg md:text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToApropos')} href="#roadToApropos">À propos</a>
                </li>
                <li className='active:text-blue-500 hover:text-couleur-titre underline hover:underline cursor-pointer transform text-lg md:text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToPrestations')} href="#roadToPrestations">Prestations</a>
                </li>
                <li className='active:text-blue-500 hover:text-couleur-titre underline hover:underline cursor-pointer transform text-lg md:text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToFaq')} href="#roadToFaq">FAQ</a>
                </li>
                <li className='active:text-blue-500 hover:text-couleur-titre underline hover:underline cursor-pointer transform text-lg md:text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToContact')} href="#roadToContact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
