# Simple Smartphone Screen
I didn't like any options available for a lightweight ReactJS component to look like a smartphone
Plan is to make it have optional callbacks dropped in for user input - easy component to use for chat bot apps

# commands
- npm run prep

#### Main props to pass into the SimpleSmartphoneComponent 
```typescript
/**
 * This component will render a smartphone looking container to display
 * the messages you pass into it. There is an option to have a picture
 * in the top center of the screen like on a normal phone, and functions for
 * typing/send message events.
 * Upcoming: Configurable styles for sent/received
 */
export default interface SmartphoneProps {
  /**
   * Pass in whatever function you want to execute when the user hits the "Send" button
   * @param userContent Whatever the user typed in prior to hitting send
   */
  onSend?: (userContent: string) => void;
  
  /**
   * Fires every time a user types something. Might be a bit much to do something
   * every time but I wanted to leave that up to you. In general, debounce
   * @param value
   */
  onTyping?: (value: string) => void;
  
  /**
   * Array of messages you pass in. You'll want to keep your messages in state
   * and feed them back into this component.
   */
  messages: Message[];
  
  /**
   * Optional argument to have someone's picture in the middle of the smartphone screen
   */
  mainImageUrl?: string;
}
```

#### The shape of the message interface:
```typescript
/**
 * Shape we are expecting each message to be passed in as.
 * From and Media are optional. If from is not provided, it is assumed you want it
 * displayed as being sent from the person viewing the application.
 * If the "from" property is given, it is assumed that text message is being received by the user looking at the
 * rendered component. The media property refers to a picture in an MMS message or video in video message. Either way
 * we should only be pointing to a link of the hosted source material
 */
export default interface Message {
  /**
   * Who sent the message? If null, it is assumed that this was sent by the person looking at the component. Optional
   */
  from?: string;
  
  /**
   * If true, it will show who sent the message. Otherwise, just denote by color difference and orientation. Optional
   * NOT YET WORKING
   */
  shouldShowFromSignature?: boolean;
  
  /**
   * Link to publicly available media content of some kind. Optional
   */
  media?: string;
  
  /**
   * Text of what the message says
   */
  messageBody?: string;
}
```

#### Example of this component's usage in a React project
```typescript jsx
import SimpleSmartphoneComponent from 'simple-smartphone-screen';

const exampleMessages = [{
  media: 'This is an image link - it is optional',
  messageBody: 'This is a message body - it is required',
},{
  messageBody: 'This is a message without an image'
}];

const Component = () => {
    
    const [messages, setMessages] = useState(exampleMessages);
    
    const handleAddMessage = (value: string) => {
      setMessages((prev) => [...prev, { messageBody: value }]);
    }
    
    return (
        <SimpleSmartphoneComponent
            onSend={handleAddMessage}
            messages={messages}
            mainImageUrl={"https://www.beautifulperson.com"} 
        />
    );
};
```