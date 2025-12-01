// Um componente que mostra um texto estilizado de forma dinâmica
// Props de mensagem => texto, cor e tamanho
function Mensagem({ texto, cor, tamanho }) {
  return (
    <>
      {/* Define o estilo do parágrafo usando as props do componente */}
      <p style={{ color: cor, fontSize: tamanho }}>{texto}</p>
    </>
  );
}

// Componente também usa props "texto", "cor" e "tamanho". Ele usa essas props para chamar o componente "Mensagem", passando as mesmas props em diante. Isso se chama "Prop drilling(encaminhamento de prop"
function Cartao({ texto, cor, tamanho }) {
  return (
    <div className="cartao">
      <Mensagem texto={texto} cor={cor} tamanho={tamanho} />
    </div>
  );
}

// O React começa renderizando este componente (Main).
// Main envia props para o componente Cartao.
// Cartao repassa essas props para o componente Mensagem.
// Mensagem usa as props para exibir o texto estilizado.
export default function Main() {
  return <Cartao texto="Treinando o uso de props" cor="Black" tamanho="20px" />;
}
