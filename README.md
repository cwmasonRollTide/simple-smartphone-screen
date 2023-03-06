# Simple Smartphone Screen
I didn't like any options available for a lightweight ReactJS component to look like a smartphone
Plan is to make it have optional callbacks dropped in for user input - easy component to use for chat bot apps

# commands
- npm install
- npm run-script build
- npm run-script start

### Goal is to be able to import SimpleSmartphoneComponent, pass in a function to handle user input, an
### image link for the circle on the center of the top of the smartphone chat, and messages from sender and
### receiver to be displayed
```javascript
import SimpleSmartphoneComponent from 'simple-smartphone-screen';

const Component = () => {
    const exampleMessages = [{
        image: 'This is an image link - it is optional',
        messageBody: 'This is a message body - it is required',
    },{
      messageBody: 'This is a message without an image'	
    }];
    return (
        <SimpleSmartphoneComponent
            messages={exampleMessages}
            mainImageUrl={"https://www.beautifulperson.com"} 
        />
    );
};
```