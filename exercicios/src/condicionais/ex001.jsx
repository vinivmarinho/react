// Componente que mostra mensagens diferentes dependendo do estado do usuário.
function StatusUsuario({ online }) {
  return online ? "Usuário está online" : "Usuário está offline";
}

// Componente verifica se tem mensagens novas
export default function Mensagem({ temMensagens }) {
  return (
    <>
      {temMensagens
        ? "Você tem novas mensagens"
        : "Você não tem mensagens novas"}
    </>
  );
}

// Componente verifica se o usuário é um administrador, se for, ele concede acesso
function Administrador({ eadministrador }) {
  // Se eadministrador for true, o componente renderiza a mensagem após o "&&"
  return eadministrador && "Acesso concedido";
}
