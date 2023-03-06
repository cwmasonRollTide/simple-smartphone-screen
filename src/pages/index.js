import React from 'react';
import SimpleSmartphoneComponent from "../components";

const Example = () => {
	const exampleMessages = [{
		messageBody: 'This is a message body - it is required',
		image: 'This is an image link - it is optional',
	},{
		messageBody: 'This is a message without an image'
	}];
	return (
		<SimpleSmartphoneComponent
			messages={exampleMessages}
			mainImageUrl={"https://upload.wikimedia.org/wikipedia/commons/9/98/South_by_Southwest_2019_7_%2832449999697%29_%28cropped%29.jpg"}
		/>
	);
}

export default Example;