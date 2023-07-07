import { useContext } from "react";
import useWindowSize from "../../customHooks/useWindowSize"
import { chatContext } from "../../pages/ChatPage/ChatPage";
import "./ChatWindow.css"
function ChatWindow(){
    var {isUserSelected,setIsUserSelected,handleIsUserSelected,handleHide}=useContext(chatContext);
    const [width,height]=useWindowSize();
    return(
    <div className="ChatWindow-container">
        <div className="ChatWindow-Header">
     {width<900? <i class="bi bi-arrow-left-circle fa-2x" onClick={()=>{setIsUserSelected(false)}}></i>:""}
            <h4>Vidyamala S</h4>
            <i onClick={handleHide} class="bi bi-eye-fill fa-2x"></i>
        </div>
    </div>
    )
}
export default ChatWindow