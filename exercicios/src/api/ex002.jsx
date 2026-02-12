/* Tarefas:
- Usando a mesma API do exerício "ex001.jsx"
- Enquanto carrega → mostrar "Loading..."
- Se der erro → mostrar "Error"
- Se der certo → mostrar os dados
*/
import { useEffect, useState } from "react";
export default function SecondApiComponent() {
  // Estado que vai guardar os dados vindos da API
  const [data, setData] = useState(null);
  // Estado pra controlar o carregamento
  // Começa com true porque a requisição ainda não terminou
  const [loading, setLoading] = useState(true);
  // Estado para armazenar possíveis erros de requisição
  // Começa com null porque ainda não ocorreu nenhum erro
  const [error, setError] = useState(null);
  // useEffect executa quando o componente é montado na tela
  // O array vazio [] no final do useEffect indicia que ele roda apenas uma vez
  useEffect(() => {
    // Faz a requisição para a API
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Verifica se a resposta não foi bem sucedida(404,500, etc...)
        // Obs => response.ok é um booleano (true ou false)
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        // Converte a resposta para JSON
        return response.json();
      })
      // Salva os dados da API no estado
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  // Se ainda estiver carregando, mostra a mensagem
  if (loading) return <p>Carregando...</p>;
  // Se ocorreu algum erro, mostra "erro!!"
  if (error) return <p>Erro!!</p>;
  // Se deu tudo certo, mostra os dados vindos da API
  // JSON.stringify transforma o objeto em texto
  return <div>{JSON.stringify(data)}</div>;
}
