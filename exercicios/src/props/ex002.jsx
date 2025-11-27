// Componente filho
function CartaoPessoa({ pessoa, idade }) {
  // "pessoa" e "idade" são props que o componente recebe como argumentos. Essas propriedades são passadas para o componente no momento em que ele é usado
  return (
    // Cartão com as informações de determinada pessoa (estilizado no modo inline)
    <div
      style={{
        border: "2px solid #007bff", // Borda azul
        borderRadius: "8px", // Cantos arredondados
        padding: "8px", // Espaço interno
        margin: "10px 0", // Espaço entre os cartões
        backgroundColor: "#f0f8ff", // Cor de fundo
        maxWidth: "300px", // Largura máxima
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>{pessoa}</h2>
      <p>Idade: {idade} anos</p>
    </div>
  );
}

// Componente pai
export default function ListaDePessoas() {
  return (
    <div>
      {/*Chamando o componente "CartaoPessoa" e passando os props */}
      <CartaoPessoa pessoa="Vinícius" idade="22" />
      <CartaoPessoa pessoa="Isa" idade="23" />
      <CartaoPessoa pessoa="Fulano" idade="44" />
    </div>
  );
}
