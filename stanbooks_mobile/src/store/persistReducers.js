import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'stanbooks',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'book'],
    },
    reducers
  );

  return persistedReducer;
};
