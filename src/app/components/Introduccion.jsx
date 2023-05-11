export const Introduccion = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <h2 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font md:w-2/5">
          ¿Qué son los Macronutrientes?
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="text-base leading-relaxed">
            ¡Hola! Si eres una persona interesada en llevar una alimentación saludable, es
            probable que hayas escuchado hablar de los "macros" o macronutrientes. Los
            macronutrientes son los nutrientes que nuestro cuerpo necesita en grandes
            cantidades para funcionar correctamente: proteínas, carbohidratos y grasas.
            Cada uno de estos macronutrientes tiene una función específica en nuestro
            cuerpo y es importante asegurarnos de consumirlos en las proporciones
            adecuadas para satisfacer nuestras necesidades nutricionales y alcanzar
            nuestros objetivos, ya sea para bajar de peso, aumentar masa muscular o
            simplemente mantenernos saludables. Si te gustaría conocer más sobre los
            macros y cómo calcular la cantidad de proteínas, carbohidratos y grasas que tu
            cuerpo necesita diariamente, te invito a probar mi calculadora de macros en mi
            sitio web. Con esta herramienta, podrás ingresar tu información personal, como
            edad, peso y nivel de actividad física, y obtener una estimación de la
            cantidad de calorías y macros que debes consumir para alcanzar tus objetivos.
            ¡No esperes más para mejorar tu alimentación y llevar un estilo de vida más
            saludable! Visita mi sitio web y prueba mi calculadora de macros hoy mismo.
          </p>
          <div className="flex mt-6 md:mt-4">
            <button className="inline-flex px-4 py-1 text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
              Button
            </button>
            <a className="inline-flex items-center ml-4 text-green-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
