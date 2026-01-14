// Importa o hook "useState". Serve para criar e controlar estados dentro de componentes funcionais
import { useState } from "react";
export default function LikeCounter() {
  // Cria o estado "contadorDeLikes"
  // "contadorDeLikes" => valor atual do estado
  // setContadorDeLikes => Função que atualiza o estado
  // useState(0) => O valor inicial do estado é 0
  const [contadorDeLikes, setContadorDeLikes] = useState(0);

  return (
    <div>
        {/*Fluxo do botão "Curtir":
        - onClick recebe uma função, ela é executada quando o botão é clicado
        - Ao clicar, atualiza o estado somando +1
        - obs => Quando o estado muda, o React renderiza o componente novamente*/}
      <button onClick={() => setContadorDeLikes(contadorDeLikes + 1)}>
        Curtir
      </button>
       {/*Fluxo do botão "Descurtir: 
       - Verifica se "contadorDeLikes" > 0
       - Se for, o "setContadorDeLikes" é executado
       - Obs => O "&&" retorna o último valor se tudo for verdadeiro*/}
      <button
        onClick={() =>
          contadorDeLikes > 0 && setContadorDeLikes(contadorDeLikes - 1)
        }
      >
        Descurtir
      </button>
      <p>Número de curtidas = {contadorDeLikes}</p>
    </div>
  );
}
