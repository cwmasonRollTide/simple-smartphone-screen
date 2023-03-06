# Simple Smartphone Screen
I didn't like any options available for a lightweight ReactJS component to look like a smartphone

Will have examples once available on npm but basically I want you to be able to interact
with the phone as well. Be able to pass in a callback so you can do what you
want with whatever a user types in your phone screen

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