import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    SignIn,
    SignUp,
  })
);
