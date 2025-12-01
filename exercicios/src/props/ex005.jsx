// Crie um componente Foto que recebe => src, alt, size (número), e exibe a imagem com largura e altura iguais a size
function Foto({ src, alt, size }) {
  return (
    <>
      <p style={{ fontSize: "50px" }}>
        Aqui está a foto com os props que você usou:
      </p>
      {/* Exibe a imagem usando os valores recebidos via props */}
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </>
  );
}
export default function Main3() {
  return (
    <Foto
      src="https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg64f51e3ec56be9.81580215.jpg%3FlastEdited%3D1693785664&w=600&h=600&f=webp"
      alt="Foto do zoro"
      size="1000px"
    />
  );
}
