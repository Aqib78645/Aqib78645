import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      {/* Your app content */}
    </Provider>
  );
}

export default App;
