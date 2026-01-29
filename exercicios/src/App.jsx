import "./App.css"; // Importando o estilo em CSS
import MeuComponente from "./componentes/ex001";
import Pagina from "./componentes/ex002";
import Principal from "./props/ex001";
import ListaDePessoas from "./props/ex002";
import Main from "./props/ex003";
import Main2 from "./props/ex004";
import Main3 from "./props/ex005";
import Main4 from "./props/ex006";
import Main5 from "./props/ex007";
import StatusUsuario from "./condicionais/ex001";
import PainelUsuario from "./condicionais/ex002";
import LikeCounter from "./state/ex001"
import ToggleText from "./state/ex002";
import UserName from "./state/ex003";
import FirstConsumeOfApi from "./api/ex001";
function App() {
  return (
    <div>
      <Pagina />
      <MeuComponente />
      <Principal />
      <ListaDePessoas />
      <Main />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <StatusUsuario online={false} />
      <PainelUsuario nome="Vinícius"/>
      <LikeCounter />
      <ToggleText />
      <UserName />
      <FirstConsumeOfApi />
    </div>
  );
}
export default App;
