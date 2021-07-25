// import Sidebar from './components/sidebar/Sidebar';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Main />
        <GlobalStyles />
      </Provider>
    </Router>
  );
}

export default App;
