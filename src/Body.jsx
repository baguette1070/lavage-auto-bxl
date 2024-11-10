import photoVoiture from "./assets/martin-katler-S0q7CvqX6O4-unsplash.jpg";

function Body() {
    return (
        <div className='relative w-full h-60 md:h-96 lg:h-[500px] overflow-hidden opacity-90'>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4'>
                <p className='text-white text-2xl md:text-3xl lg:text-4xl text-center p-4 rounded'>
                    Des voitures étincelantes à petits prix à Bruxelles !
                </p>
            </div>
            <img src={photoVoiture} alt="Voiture" className='w-full h-full object-cover'/>
        </div>
    );
}

export default Body;
