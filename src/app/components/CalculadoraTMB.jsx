"use client";

import { useState } from "react";

export const CalculadoraTMB = () => {
  const [sexo, setSexo] = useState("Hombre");
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [edad, setEdad] = useState(null);
  const [actividadFisica, setActividadFisica] = useState(1);

  return (
    <div className="border rounded-lg ">
      <h4 className="mt-4 text-xl font-bold text-center md:text-2xl">
        Utiliza nuestra Calculadora de TMB
      </h4>

      <div className="grid grid-cols-2 p-4">
        <p className="col-span-2 mb-2 font-semibold">Indicanos tu Sexo:</p>
        <button
          className={`mb-2 mr-1 border rounded py-2 ${
            sexo == "Hombre" && "bg-green-500 text-white font-bold"
          }`}
          onClick={() => setSexo("Hombre")}
        >
          Hombre
        </button>
        <button
          className={`mb-2 mr-1 border rounded py-2 ${
            sexo == "Mujer" && "bg-green-500 text-white font-bold"
          }`}
          onClick={() => setSexo("Mujer")}
        >
          Mujer
        </button>
        <br />

        <p className="col-span-2 font-semibold">Ingresa tu altura en centimetros:</p>
        <input
          type="text"
          placeholder="EJ: 174"
          className="col-span-2 mb-2 border rounded"
        />
        <br />

        <p className="col-span-2 font-semibold">Ingresa peso en Kilogramos:</p>
        <input
          type="text"
          placeholder="EJ: 82"
          className="col-span-2 mb-2 border rounded"
        />
        <br />

        <p className="col-span-2 font-semibold">Ingresa tu edad en Años:</p>
        <input
          type="text"
          placeholder="EJ: 24"
          className="col-span-2 mb-2 border rounded"
        />
        <br />

        <p className="col-span-2 mb-2 font-semibold">
          Selecciona tu nivel de actividad física semanal:
        </p>
        <button className="col-span-2 p-1 mb-2 border rounded-lg">
          Sedentario, tienes un estilo de vida bastante inactivo.
        </button>
        <button className="col-span-2 p-1 mb-2 border rounded-lg">
          Ligeramente activo, haces ejercicio ligero de 1 a 3 veces por semana.
        </button>
        <button className="col-span-2 p-1 mb-2 border rounded-lg">
          Moderadamente activo, haces ejercicio moderado de 3 a 5 veces por semana
        </button>
        <button className="col-span-2 p-1 mb-2 border rounded-lg">
          Muy activo, haces ejercicio intenso de 6 a 7 veces por semana
        </button>
        <button className="col-span-2 p-1 mb-2 border rounded-lg">
          Extremadamente activo, haces ejercicio intenso y trabajas físicamente todos los
          días
        </button>

        <br />

        <button className="col-span-2 py-2 text-lg font-semibold text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
          Calcular Resultado
        </button>
      </div>
    </div>
  );
};
