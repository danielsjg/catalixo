import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Principal from './pages/Principal';
import Tipos from './pages/Tipos';
import Resultado from './pages/Resultado';

const Routes = createAppContainer(
    createSwitchNavigator({
        Principal,
        Tipos,
        Resultado
    })
);

export default Routes;