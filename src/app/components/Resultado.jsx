export const Resultado = ({ resultado }) => {
  return (
    <div className="col-span-2 p-2 mt-5 border rounded-lg">
      <div className="flex items-center justify-center w-32 h-32 mx-auto border-4 border-green-400 rounded-full">
        <p className="text-xl font-semibold text-center">{resultado} kcal</p>
      </div>
      {/* <p className="text-center">Resultado: {resultado}</p> */}
      <p className="mt-2 text-center">
        Para <b>perder peso</b> debes generar un
        <b> déficit en las calorías que consumes al día </b>
        trata de no restarle a este número <b>menos de 200 calorías de golpe</b> o
        <b> perderás masa muscular</b>
      </p>
      <br />
      <hr />
      <br />
      <p className="mt-2 text-center">
        Para <b>mantener tu peso</b> debes consumir aproximandamente{" "}
        <b> esta cantidad </b>
        de calorías al día.
      </p>
      <br />
      <hr />
      <br />
      <p className="mt-2 text-center">
        Para <b>ganar peso</b> debes generar un
        <b> superávit en las calorías que consumes al día</b>.
      </p>
    </div>
  );
};
