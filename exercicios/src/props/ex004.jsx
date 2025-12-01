// Crie um componente Saudacao que recebe via props (nome e idade)
function Saudacao({ nome, idade }) {
  return (
    <>
      <p>
        Olá, meu nome é {nome} e tenho {idade} anos de idade
      </p>
    </>
  );
}

// Componente pai que chama o componente "Saudação" e é exportado
export default function Main2() {
  return (
    <>
      {/* Chamando o componente 3 vezes e passando props diferentes */}
      <Saudacao nome="Vinícius" idade="21" />
      <Saudacao nome="Isa" idade="22" />
      <Saudacao nome="Fulano" idade="24" />
    </>
  );
}
