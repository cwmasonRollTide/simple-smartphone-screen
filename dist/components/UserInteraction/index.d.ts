import { FunctionComponent } from "react";
interface UserInteractionProps {
    onSend: (value: string) => void;
    onTyping?: (value: string) => void;
}
declare const UserInteraction: FunctionComponent<UserInteractionProps>;
export default UserInteraction;
