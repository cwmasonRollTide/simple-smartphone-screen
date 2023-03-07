import React from 'react';
import SimpleSmartphoneComponent from "../components";

export default function Example() {
	const exampleMessages = [{
		messageBody: 'This is a message body - it is required'
	},{
		messageBody: 'This is a message without an image'
	}];
	return <SimpleSmartphoneComponent messages={exampleMessages} />;
}