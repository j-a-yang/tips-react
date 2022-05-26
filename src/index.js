import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "./firebase/firebase";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);