// Importação dos hooks
import { useEffect, useState } from "react";
export default function FirstConsumeOfApi() {
  // Criando meu estado "data"
  const [data, setData] = useState(null);

  // useEffect com array de dependências vazias
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    // "response" é a resposta do servidor à requisição, a reposta chega no ".then" como "response", logo depois ele é transformado em JSON
    .then(response => response.json())
    // ".then" agora recebe o resultado do "response.json" e passa pro "data"
    .then(data => setData(data))
  }, [])

  return (
    // Exibe o arquivo JSON
    <div>{JSON.stringify(data)}</div>
  ) 
}
