import { CalculadoraTMB } from "./CalculadoraTMB";

export const SeccionPasos = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                <p className="font-bold">1</p>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                  Calcula tu tasa metabólica basal (TMB)
                </h2>
                <p className="mb-2 leading-relaxed">
                  Tu TMB es la cantidad de calorías que tu cuerpo necesita para mantenerse
                  en reposo y realizar funciones vitales como respirar, hacer latir tu
                  corazón, etc.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                <p className="font-bold">2</p>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                  Determina tu nivel de actividad física:
                </h2>
                <p className="leading-relaxed">
                  La cantidad de ejercicio que realizas durante el día. Si eres
                  sedentario, ligeramente activo, moderadamente activo o extremadamente
                  activo.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                <p className="font-bold">3</p>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                  Establece tus objetivos
                </h2>
                <p className="leading-relaxed">
                  Dependiendo de tus objetivos, necesitarás ajustar tus macros.
                </p>
                <p>
                  Si tu objetivo es perder peso, deberás crear un déficit calórico, lo que
                  significa que deberás consumir menos calorías de las que tu cuerpo
                  necesita para bajar de peso.
                </p>
                <p>
                  Si tu objetivo es ganar masa muscular, deberás consumir un superávit
                  calórico, es decir, deberás consumir más calorías de las que tu cuerpo
                  necesita para construir músculo.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                <p className="font-bold">4</p>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                  Divide tus calorías en macros
                </h2>
                <p className="leading-relaxed">
                  Una vez que hayas calculado tu necesidad calórica diaria, puedes dividir
                  tus calorías en macros. Una regla comúnmente utilizada es la regla de
                  40/30/30, que significa que el 40% de tus calorías deben provenir de
                  carbohidratos, el 30% de proteínas y el 30% de grasas.
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                  ATENCIÓN
                </h2>
                <p className="font-semibold leading-relaxed">
                  Recuerda que estos cálculos son solo una guía y que debes ajustarlos
                  según tus necesidades individuales y objetivos específicos. También es
                  importante recordar que la calidad de los alimentos que consumes es tan
                  importante como las cantidades de macronutrientes que consumes.
                </p>
              </div>
            </div>
          </div>

          <div className="object-cover object-center mx-auto mt-12 border rounded-lg w-12/12 lg:w-3/5 md:w-1/2 md:mt-0">
            <CalculadoraTMB />
          </div>
        </div>
      </div>
    </section>
  );
};
