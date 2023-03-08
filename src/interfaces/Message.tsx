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