import { useState } from "react";

function Faq() {
    const [visibleAnswer, setVisibleAnswer] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleAnswer(visibleAnswer === index ? null : index);
    };

    return (
        <div className='pt-12 md:pt-16 px-4 md:px-10'>
            <div id='roadToFaq' className='h-7'></div>
            <h1 className='text-couleur-titre text-center font-serif text-3xl md:text-4xl pb-8'>Foire aux questions</h1>
            <div className='flex justify-center'>
                <div className='w-full md:w-3/4 lg:w-1/2 text-lg md:text-xl'>
                    {/* FAQ Item 1 */}
                    <div className='border-b border-gray-300'>
                        <div
                            className="active:bg-blue-500 bg-couleur-titre text-white p-4 cursor-pointer transform transition duration-300"
                            onClick={() => toggleAnswer(0)}
                        >
                            <h3 className='text-center text-lg md:text-xl'>Quels types de voitures nettoyez-vous?</h3>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleAnswer === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="bg-gray-100 p-4">
                                <p>Nous nettoyons tous les types de voitures, y compris les anciennes et celles qui ne sont plus en mesure de rouler.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className='border-b border-gray-300'>
                        <div
                            className="active:bg-blue-500 bg-couleur-titre text-white p-4 cursor-pointer transform transition duration-300"
                            onClick={() => toggleAnswer(1)}
                        >
                            <h3 className='text-center text-lg md:text-xl'>Utilisez-vous des produits écologiques?</h3>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="bg-gray-100 p-4">
                                <p>Oui, nous utilisons des produits respectueux de l'environnement pour garantir la sécurité et la santé de nos clients.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className='border-b border-gray-300'>
                        <div
                            className="active:bg-blue-500 bg-couleur-titre text-white p-4 cursor-pointer transform transition duration-300"
                            onClick={() => toggleAnswer(2)}
                        >
                            <h3 className='text-center text-lg md:text-xl'>Comment planifier un rendez-vous?</h3>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="bg-gray-100 p-4">
                                <p>Vous pouvez planifier un rendez-vous en utilisant notre formulaire en ligne ou nous contacter sur les réseaux ci-dessous.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
