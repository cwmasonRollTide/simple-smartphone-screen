import Message from "./Message";

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