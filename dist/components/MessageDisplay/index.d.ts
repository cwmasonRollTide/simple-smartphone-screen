import Message from "../../interfaces/Message";
import { FunctionComponent } from "react";
interface MessageDisplayProps {
    messages: Message[];
}
declare const MessageDisplay: FunctionComponent<MessageDisplayProps>;
export default MessageDisplay;
