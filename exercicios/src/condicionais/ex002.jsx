/* Criar um painel que muda a interface de acordo com: 
- Se o usuário está logado
- Se o usuário é admin
- Se existem notificações 
*/

// Painel onde as informações do usuário estarão. Props serão usadas ao chamar os outros componentes
export default function PainelUsuario({
  nome,
  logado = true,
  administrador = true,
  notificacao = true,
}) {
  // Cria elemento "div" para que possa ser estilizado no "App.css"
  // Depois => Em cada "p", chamo um componente, deixando as infos ordenadas no painel do usuário
  return (
    <div className="painel_usuario">
      <p>
        Usuário: {nome} <br />
      </p>
      <p>
        Status: <UsuarioLogado estaLogado={logado} />
      </p>
      <p>
        <UsuarioAdmin eAdministrador={administrador} />
      </p>
      <p>
        <Notificacoes existeNotificacoes={notificacao} />
      </p>
    </div>
  );
}

// Componente verifica se usuário está logado
function UsuarioLogado({ estaLogado = true }) {
  // Usando operador ternário
  return estaLogado ? "Online" : "Offline";
}

// Componente verifica se usuário é um administrador
function UsuarioAdmin({ eAdministrador = true }) {
  return eAdministrador ? "Administrador" : "Usuário normal";
}

// Componente verifica se existem notificações
function Notificacoes({ existeNotificacoes = true }) {
  return existeNotificacoes
    ? "Você tem notificações novas"
    : "Sem novas notificações";
}
