import useWindowSize from "../../customHooks/useWindowSize"
import RenderMyChat from "../RenderMyChat/RenderMyChat"
import "./MyChat.css";
import { chatContext } from "../../pages/ChatPage/ChatPage";
import { useContext } from "react";
function MyChat(){
    var {isModalActive,setIsCreateGrpmodalopened}=useContext(chatContext);
    const [width,height]=useWindowSize();
    return(
    <div className="MyChat-container">
      {isModalActive?"":<div className="MyChat-header">
            <h3>My Chat</h3>
            <button onClick={()=>{setIsCreateGrpmodalopened(true)}}><i style={{color:"black"}} className="bi bi-plus-lg"></i> {width<1080 && width>900?"":"New Group Chat "}</button>
        </div> }
        <RenderMyChat  />
     </div>
    )
}
export default MyChat