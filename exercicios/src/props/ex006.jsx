// Crie um componente Produto que recebe: nome, preço, Em estoque: true / false.
// Objetivo: Renderizar 3 produtos diferentes no App
function Componente({ nome, preco, emEstoque = true }) {
  // Se emEstoque for "true"
  if (emEstoque === true) {
    emEstoque = "Disponível em estoque";
    // Se for "false"
  } else {
    emEstoque = "Não disponível no estoque no momento";
  }
  return (
    <>
      <p>
        Produto: {nome} <br />
        Preço: R${preco} <br />
        {emEstoque}
      </p>
    </>
  );
}
export default function Main4() {
  return (
    <>
      <Componente nome="Computador" preco="2550.50" emEstoque={false} />
      <Componente nome="Telefone" preco="2500" />
      <Componente nome="Tablet" preco="1230.50" emEstoque={false} />
    </>  
  );
}
