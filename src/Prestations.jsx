import React from 'react';
import { useNavigate } from 'react-router-dom';
import photoVoitureNumero1 from './assets/viktor-theo-wWN4AiGPscM-unsplash.jpg';
import photoVoitureNumero2 from './assets/severin-demchuk-RYkZRwbmc1U-unsplash.jpg';

function Prestations({ setShowElements }) {

    const navigate = useNavigate();

    const handleNavigation = () => {
        setShowElements(false); // Hide other components
        navigate('/prix');      // Navigate to the pricing page
    };

    return (
        <div className='pt-12 px-4 md:px-10'>
            <div id="roadToPrestations" className='h-7'></div>
            <h1 className='text-black text-3xl md:text-4xl text-center pb-10 md:pb-16'>Prestations de service</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full'>
                <div className="p-4 bg-white rounded-lg shadow-2xl">
                    <img className='w-full h-60 md:h-96 object-cover rounded-md' src={photoVoitureNumero1} alt="Service 1" />
                    <h3 className='text-center pt-4 text-xl md:text-2xl'>Nettoyage intérieur</h3>
                    <p className='text-center text-lg md:text-xl pt-4'>
                        Nettoyage intérieur : brillance impeccable, respect de l'environnement, satisfaction garantie.
                    </p>
                    <div className='flex justify-center pt-6'>
                        <button onClick={handleNavigation} className='active:bg-blue-500 p-3 md:p-4 border w-full md:w-1/2 bg-couleur-titre text-black hover:bg-teal-600 hover:text-gray-200 transition duration-300 font-serif text-lg md:text-2xl'>
                            Plus d'informations
                        </button>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-2xl">
                    <img className='w-full h-60 md:h-96 object-cover rounded-md' src={photoVoitureNumero2} alt="Service 2"/>
                    <h3 className='text-center pt-4 text-xl md:text-2xl'>Nettoyage extérieur</h3>
                    <p className='text-center text-lg md:text-xl pt-4'>
                        Nettoyage extérieur : image professionnelle, techniques avancées, minimalement invasif.
                    </p>
                    <div className='flex justify-center pt-6'>
                        <button onClick={handleNavigation} className='active:bg-blue-500 p-3 md:p-4 border w-full md:w-1/2 bg-couleur-titre text-black hover:bg-teal-600 hover:text-gray-200 transition duration-300 font-serif text-lg md:text-2xl'>
                            Plus d'informations
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prestations;
