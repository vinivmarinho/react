import { Children } from "react";
import MeuComponente from "./componentes/ex001";
import Pagina from "./componentes/ex002";
import Principal from "./props/ex001";
import ListaDePessoas from "./props/ex002";
import Main from "./props/ex003";
import Main2 from "./props/ex004";
import Main3 from "./props/ex005";
import Main4 from "./props/ex006";
import Main5 from "./props/ex007";
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
    </div>
  );
}
export default App;
