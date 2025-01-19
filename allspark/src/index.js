import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ScrollProvider} from "./components/ScrollContext/ScrollContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ScrollProvider>
        {/*必须要这样包裹整个应用，确保ref传递到所有子组件*/}
        <App/>
    </ScrollProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
