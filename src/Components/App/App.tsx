import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BranchesWrapped, HomeWrapped} from './RoutedComponents';
import {userStore} from '../../Stores';
import {NotLoggedIn} from '../NotLoggedIn';
import {observer} from 'mobx-react-lite';

const {Screen, Navigator} = createNativeStackNavigator();

export const App: React.FC = observer(() => {
  const UserStore = useMemo(() => userStore, []);

  return UserStore.user ? (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeWrapped} />
        <Screen name="Branches" component={BranchesWrapped} />
      </Navigator>
    </NavigationContainer>
  ) : (
    <NotLoggedIn />
  );
});
