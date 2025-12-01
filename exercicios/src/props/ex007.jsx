// Criar um componente pai. Esse componente terá uma lista com várias informações.
// Criar um componente filho. Esse componente precisa receber props e mostrar essas props na tela

// Componente Pai: Main5
// Ele é responsável por guardar a lista de alunos
export default function Main5() {
  // Lista de objetos. Cada objeto representa um aluno.
  const alunos = [
    { nome: "Vinícius", nota: 9 },
    { nome: "Isabelly", nota: 10 },
    { nome: "Ciclano", nota: 6 },
  ];
  return (
    <>
      {/* 
        Percorre a lista de alunos usando "map".  O map retorna um novo elemento para cada aluno da lista.
      */}
      {alunos.map((aluno, index) => (
        // Para cada aluno, renderiza o componente Filho "Aluno"
        // Passa props: nome e nota
        // "key={index}" é obrigatório quando usamos map, pois o React precisa identificar cada elemento da lista
        <Aluno key={index} nome={aluno.nome} nota={aluno.nota} />
      ))}
    </>
  );
}

// Componente Filho: Aluno
// Ele recebe as props enviadas pelo Pai (nome e nota)
// e mostra essas informações na tela.
function Aluno({ nome, nota }) {
  return (
    <p>
      Aluno: {nome} - Nota: {nota}
    </p>
  );
}
