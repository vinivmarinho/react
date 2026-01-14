import { useState } from "react";
export default function ToggleText() {
  // Cria um estado chamado "visivel"
  // "visivel" => Valor atual do estado (true ou false)
  // setVisivel => Função usada para alterar o estado
  // useState(false) => Valor inicial do estado é false
  const [visivel, setVisivel] = useState(false);
  // Função é chamada quando o botão é clicado
  function handleClick() {
    // Atualiza o estado para o valor oposto e depois o React renderiza o componente novamente
    setVisivel(!visivel);
  }
  return (
    <div>
      {/*Botão:
      - onClick recebe a função "handleClick". 
      - Usa operador ternário para o texto do botão mudar de acordo com o estado:*/}
      <button onClick={handleClick}>{visivel ? "Esconder" : "Mostrar"}</button>
      {/*Renderização Condicional (usa operador &&):
      - O React avalia "visivel. Se for true, o <p> é renderizado, se não, nada aparece
      */}
      {visivel && <p>Esse texto só aparece se o estado "visivel" for "true"</p>}
    </div>
  );
}
