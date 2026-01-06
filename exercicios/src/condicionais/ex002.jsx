/* Criar um painel que muda a interface de acordo com: 
- Se o usuário está logado
- Se o usuário é admin
- Se existem notificações 
*/

// Painel onde as informações do usuário estarão
export default function PainelUsuario() {
    // Cria elemento "div" para que possa ser estilizado no "App.css"
    return <div className="painel_usuario">
        Nome: "Vinícius"
        Idade: 22
        Altura: 1.75
    </div>;
}
