import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom/client';
import SimpleSmartphoneComponent from "./components";

const myFirstElement = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

export default SimpleSmartphoneComponent;
