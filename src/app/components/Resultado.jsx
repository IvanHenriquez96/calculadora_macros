export const Resultado = ({ resultado, objetivo }) => {
  return (
    <div className="col-span-2 p-2 mt-5 border rounded-lg fade-in">
      <p className="mb-2 text-center">
        Tu consumo ideal diario de calorías para alcanzar tu objetivo es de:
      </p>
      <div className="flex items-center justify-center w-32 h-32 mx-auto border-4 border-green-400 rounded-full">
        <p className="text-xl font-semibold text-center">{resultado.calorias} kcal</p>
      </div>
      <br />
      <hr />
      <br />

      <div className="grid md:grid-cols-3 ">
        <div className="mx-auto my-3">
          <img
            className="w-32 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
            alt="carbohidratos"
          />
          <p className="text-center">
            <b>{`${resultado.gramosCarbos} gramos`}</b>
            {` deben venir de `}
            <b>carbohidratos</b>
          </p>
        </div>
        <div className="mx-auto my-3">
          <img
            className="w-32 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/2843/2843659.png"
            alt="proteinas"
          />
          <p className="text-center">
            <b>{`${resultado.gramosProteinas} gramos`}</b>
            {` deben venir de `}
            <b>proteínas</b>
          </p>
        </div>
        <div className="mx-auto">
          <img
            className="w-32 mx-auto my-3"
            src="https://cdn-icons-png.flaticon.com/512/10008/10008927.png"
            alt="grasas"
          />
          <p className="text-center">
            <b>{`${resultado.gramosGrasas} gramos`}</b>
            {` deben venir de `}
            <b>grasas</b>
          </p>
        </div>
      </div>
    </div>
  );
};
