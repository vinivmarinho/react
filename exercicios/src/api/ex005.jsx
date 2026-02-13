/* Exercício:
Criar um componente React que:
- Receba um nome de usuário
- Faça um fetch só quando o usuário clicar no botão
- Mostre os dados retornados da API
- Trate erro e loading 
REGRAS:
- Não pode fazer o fetch automaticamente no useEffect
- Não pode buscar os dados enquanto o usuário digita*/
import { useState } from "react";

export default function FifthComponent() {
    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    function handleSearch() {
        setLoading(true);
        fetch(`https://api.github.com/users/${userName}`)
          .then(response => response.json())
          .then((userData) => {
            setUserData(userData);
            setLoading(false);
          })
          .catch(() => {
            setError("Erro ao buscar dados")
          });
    }
    return(
        <div>
            <h1>Quinto componente. Pesquisa de usuários no github</h1>
            <input type="text" placeholder="Nome do usuário do github" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <button onClick={handleSearch}>Pesquisar</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {userData.status === "404" ?
              <p>Usuário não encontrado</p> :
              <div className="resultado"> 
                <img src={userData.avatar_url} style={{width: "200px", height: "200px"}}></img>
                <p>Nome: {userData.name}</p>
                <p>Bio: {userData.bio}</p>
                <p>Número de repositórios públicos: {userData.public_repos}</p>
              </div>
            }
            
        </div>
    )
}

/* {userData ? 
            <div>
              <p>Nome: {userData.name}</p>
              <p>Bio: {userData.bio}</p>
              <p>Número de repositórios públicos: {userData.public_repos}</p>
            </div> : 
            <div>
              <p>Usuário não encontrado</p>  
            </div>
            } */