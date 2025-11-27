// Componente filho
function Mensagem(props) {
    return (
        <h1>Essa é uma mensagem vinda de {props.nome} que possui {props.idade} anos de idade</h1>
    );
}
// Componente pai
function Principal() {
    return(
        <div>
            <Mensagem nome="Vinícius" idade="20"/>
            <Mensagem nome="Isa" idade="21"/>
        </div>
    );
}
export default Principal;
