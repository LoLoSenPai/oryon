import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import Loader from './Components/Loader/Loader';

function Root() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return (
    <div className='global-app'>
      {loaded ? (
        <Provider store={store}>
          <App />
        </Provider>
      ) : (
        <Loader />
      )}
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
reportWebVitals();
