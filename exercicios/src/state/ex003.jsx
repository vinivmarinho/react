import { useState } from "react";
export default function UserName() {
  const [nome, setNome] = useState("");
  
  // Função é executada sempre que o usuário digitar algo no input. O parâmetro "evento" é o objeto do evento
  function handleChange(evento) {
    // Pega o valor do evento, que seria o que está dentro do input
    setNome(evento.target.value);
  }
  return (
    <div>
        {/*No input:
        - value={nome} => O valor do input vem do estado
        - onChange chama handleChangle sempre que algo for digitado
        - O react controla o input
        */ }
      <input type="text" value={nome} onChange={handleChange} />
      {/*Renderização Condicional (usando o "&&"):
      - Se o nome não estiver vazio => Renderiza o <p>. Usa*/}
      {nome && <p>Olá {nome}, como você está?</p>}
    </div>
  );
}
