/* Exercício — Fetch por ação do usuário
Objetivo: não buscar só no useEffect.
Tarefas:
Criar um input de texto
Criar um botão "Search"
Só fazer o fetch quando clicar no botão. Mostrar:
palavra
significados */
import { useState} from "react";
export default function FourthApiComponent() {
  const [word, setword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    // Palavra não definida:
    if (!word) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar os dados");
        setLoading(false);
      })
  }

  return(
    <div>
      <input type="text" value={word} onChange={(event) => setword(event.target.value)} placeholder="Digite uma palavra"/>
      <button onClick={handleSearch}>Pesquisar</button>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div>
          <h2>{data[0].word}</h2>
          <ul>
            {data[0].meanings.map((meaning, index) => (
              <li key={index}>{meaning.definitions[0].definition}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
  
}

