/* Tarefas:
- buscar os dados
- Renderizar uma lista (<ul>)
- Cada <li> deve mostrar: title e body
- Não usar JSON.Stringify
Regras:
- Use id como key
- Separe o <li> em um componente Post */
import { useState, useEffect } from "react";
export default function ThirdApiComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao buscar dados");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {data.map((object) => (
            <Post key={object.id} title={object.title} body={object.body} />
          ))}
        </ul>
      )}
    </div>
  );
}
// Retorna uma lista com as props "title" e "body" que serão passadas pelo componente "ThirdComponent"
function Post({ title, body }) {
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    </div>
  );
}
