// Usando vários componentes em um só arquivo:
function Titulo() {
  return <h1>Esse é o meu componente de título</h1>;
}

function Subtitulo() {
  return <h2>Esse é o meu componente de subtítulo</h2>;
}

export default function Pagina() {
    // Retorna os outros dois componentes dentro do componente "Pagina"
  return (
    <div>
      <Titulo />
      <Subtitulo />
    </div>
  );
}
