const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 animate-fade-right animate-once animate-normal">
          <h1 className="mb-4 text-3xl font-semibold text-gray-900 title-font sm:text-4xl ">
            Alcanza tus objetivos de salud y bienestar con nuestra calculadora de macros
            personalizada.
          </h1>
          <p className="mb-8 leading-relaxed">
            Descubre la cantidad de proteínas, carbohidratos y grasas que necesitas para
            mejorar tu alimentación y transformar tu cuerpo.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
              <a href="#calculadora_tmb"> Ir a la Calculadora</a>
            </button>
            {/* <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Button
            </button> */}
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 animate-fade-left animate-once animate-normal">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <img
            src="https://media.istockphoto.com/id/1319903215/es/foto/magnesio.jpg?s=612x612&w=0&k=20&c=IY6F0LQ5stZdJw4Bvsf0Oor83OZBJbTpvk092St18LU="
            alt="hero"
            className="object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
