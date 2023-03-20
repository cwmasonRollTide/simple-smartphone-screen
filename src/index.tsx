import React from 'react';
import Example from "./examples";
import ReactDOM from 'react-dom/client';
import Message from "./interfaces/Message";
import SimpleSmartphoneComponent from './components';
import SmartphoneProps from "./interfaces/SimpleSmartphoneComponentProps";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Example />);

export { Message, SmartphoneProps, SimpleSmartphoneComponent};

