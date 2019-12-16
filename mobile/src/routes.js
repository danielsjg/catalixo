import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./pages/Principal";
import Tipos from "./pages/Tipos";
import Resultado from "./pages/Resultado";

const Routes = createAppContainer(
  createStackNavigator({
    Principal,
    Tipos,
    Resultado
  })
);

export default Routes;
