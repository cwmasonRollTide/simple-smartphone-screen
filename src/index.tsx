import React from 'react';
import Example from "./examples";
import ReactDOM from 'react-dom/client';
import Message from "./interfaces/Message";
import SmartphoneProps from "./interfaces/SimpleSmartphoneComponentProps";
import SimpleSmartphoneComponent from 'components';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Example />);

export { Message, SmartphoneProps, SimpleSmartphoneComponent};

