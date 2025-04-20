import { Provider } from 'react-redux';
import { store as redux } from './redux/store'

export default function ReduxStoreProvider({ children }: any) {
  return (
    <Provider store={redux}>
      {children}
    </Provider>
  );
}