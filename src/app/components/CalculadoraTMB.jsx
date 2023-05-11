"use client";

import { useState } from "react";
import { Resultado } from "./Resultado";

export const CalculadoraTMB = () => {
  const [sexo, setSexo] = useState("Hombre");
  const [actividadFisica, setActividadFisica] = useState(1);
  const [formulario, setFormulario] = useState({
    sexo: "Hombre",
    altura: "",
    peso: "",
    edad: "",
    actividadFisica: 1,
  });
  const [isError, setIsError] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formulario, [name]: value };
    setFormulario(aux);
  };

  const seleccionarSexo = (e) => {
    setSexo(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formulario, [name]: value };
    setFormulario(aux);
  };

  const seleccionarActividadFisica = (e) => {
    setActividadFisica(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formulario, [name]: value };
    setFormulario(aux);
  };

  const calcularResultado = () => {
    setIsError(false);

    const { sexo, altura, peso, edad, actividadFisica } = formulario;

    if (altura == "" || peso == "" || edad == "") {
      setIsError(true);
      return;
    }

    let tmb = 0;
    let res = 0;

    if (sexo == "Hombre") {
      tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    if (actividadFisica == "1") {
      res = tmb * 1.2;
    }
    if (actividadFisica == "2") {
      res = tmb * 1.375;
    }
    if (actividadFisica == "3") {
      res = tmb * 1.55;
    }
    if (actividadFisica == "4") {
      res = tmb * 1.725;
    }
    if (actividadFisica == "5") {
      res = tmb * 1.9;
    }

    setResultado(Math.round(res));
  };

  return (
    <div className="border rounded-lg ">
      <h4 className="mt-4 mb-2 text-xl font-bold text-center md:text-2xl">
        Calculadora de TMB
      </h4>
      <hr />

      <div className="grid grid-cols-2 p-4">
        <p className="col-span-2 mb-2 font-semibold">Indicanos tu Sexo:</p>
        <button
          name="sexo"
          value={"Hombre"}
          className={`mb-2 mr-1 border rounded py-2 ${
            sexo == "Hombre" && "bg-green-500 text-white font-bold"
          }`}
          onClick={seleccionarSexo}
        >
          Hombre
        </button>
        <button
          name="sexo"
          value={"Mujer"}
          className={`mb-2 mr-1 border rounded py-2 ${
            sexo == "Mujer" && "bg-green-500 text-white font-bold"
          }`}
          onClick={seleccionarSexo}
        >
          Mujer
        </button>
        <br />

        <p className="col-span-2 font-semibold">Ingresa tu altura en centimetros:</p>
        <input
          type="number"
          pattern="[0-9]{10}"
          name="altura"
          placeholder=" EJ: 174"
          className="col-span-2 mb-2 border rounded"
          onChange={handleChange}
        />
        <br />

        <p className="col-span-2 font-semibold">Ingresa peso en Kilogramos:</p>
        <input
          type="number"
          pattern="[0-9]{10}"
          name="peso"
          placeholder=" EJ: 82"
          className="col-span-2 mb-2 border rounded"
          onChange={handleChange}
        />
        <br />

        <p className="col-span-2 font-semibold">Ingresa tu edad en Años:</p>
        <input
          type="number"
          pattern="[0-9]{10}"
          name="edad"
          placeholder=" EJ: 24"
          className="col-span-2 mb-2 border rounded"
          onChange={handleChange}
        />
        <br />

        <p className="col-span-2 mb-2 font-semibold">
          Selecciona tu nivel de actividad física semanal:
        </p>
        <button
          name="actividadFisica"
          value={1}
          onClick={seleccionarActividadFisica}
          className={`col-span-2 p-1 mb-2 border rounded-lg ${
            actividadFisica == 1 && "bg-green-500 text-white font-bold"
          }`}
        >
          Sedentario, tienes un estilo de vida bastante inactivo.
        </button>
        <button
          name="actividadFisica"
          value={2}
          onClick={seleccionarActividadFisica}
          className={`col-span-2 p-1 mb-2 border rounded-lg ${
            actividadFisica == 2 && "bg-green-500 text-white font-bold"
          }`}
        >
          Ligeramente activo, haces ejercicio ligero de 1 a 3 veces por semana.
        </button>
        <button
          name="actividadFisica"
          value={3}
          onClick={seleccionarActividadFisica}
          className={`col-span-2 p-1 mb-2 border rounded-lg ${
            actividadFisica == 3 && "bg-green-500 text-white font-bold"
          }`}
        >
          Moderadamente activo, haces ejercicio moderado de 3 a 5 veces por semana
        </button>
        <button
          name="actividadFisica"
          value={4}
          onClick={seleccionarActividadFisica}
          className={`col-span-2 p-1 mb-2 border rounded-lg ${
            actividadFisica == 4 && "bg-green-500 text-white font-bold"
          }`}
        >
          Muy activo, haces ejercicio intenso de 6 a 7 veces por semana
        </button>
        <button
          name="actividadFisica"
          value={5}
          onClick={seleccionarActividadFisica}
          className={`col-span-2 p-1 mb-2 border rounded-lg ${
            actividadFisica == 5 && "bg-green-500 text-white font-bold"
          }`}
        >
          Extremadamente activo, haces ejercicio intenso y trabajas físicamente todos los
          días
        </button>

        <br />

        {isError && (
          <div className="col-span-2 p-2 mb-3 bg-red-100 border border-red-500 rounded-lg">
            <p className="text-center text-red-500">
              Debe llenar el fomulario correctamente
            </p>
          </div>
        )}
        <button
          className="col-span-2 py-2 text-lg font-semibold text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600"
          onClick={calcularResultado}
        >
          Calcular Resultado
        </button>

        {resultado && <Resultado resultado={resultado} />}
      </div>
    </div>
  );
};
