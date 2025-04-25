import BemVindo from "./BemVindo";
import Bolo from "./bolo";
import Carro from "./Carro";
import Musico from "./Musico";

const App = () => {
  return (
    <>
      <h1> Olá mundo</h1>
      <BemVindo nome="Ailana" cidade="Aquiraz" />
      <BemVindo nome="André" cidade="Fortaleza" />
      <BemVindo nome="Márcio" cidade="Fortaleza" />
      <BemVindo nome="Victor" cidade="Fortaleza" />
      <BemVindo nome="Ieda" cidade="Maracanaú" />

      <Bolo sabor={"cenoura"} cobertura={"chocolate"} />
      <Bolo sabor={"laranja"} cobertura={"leite condesado"} />
      <Bolo sabor={"castanha"} cobertura={"doce de leite"} />
      <Bolo sabor={"morango"} cobertura={"chocolate branco"} />

      <Carro modelo={"Civic"} marca={"Honda"} />
      <Carro modelo={"Renegade"} marca={"Jeep"} />
      <Carro modelo={"X5"} marca={"BMW"} />

      <Musico instrumento={"guitarra"} banda={"Led Zeppelin"} />
      <Musico instrumento={"bateria"} banda={"Red Hot Chilli Peppers"} />

    </>

  );
}

export default App;
