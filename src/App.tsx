import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from './router';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  );
}

export default App;
