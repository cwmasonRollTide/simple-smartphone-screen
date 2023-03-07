import React from 'react';
import Example from "./pages";
import ReactDOM from 'react-dom/client';

const myFirstElement = <Example />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
