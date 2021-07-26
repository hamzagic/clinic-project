// import Sidebar from './components/sidebar/Sidebar';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';
import store from './store/store';

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
