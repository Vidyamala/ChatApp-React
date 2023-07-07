import { userData } from "../../DummyData/userData";
import "./RenderMyChat.css"
import { chatContext } from "../../pages/ChatPage/ChatPage";
import { useContext } from "react";
function RenderMyChat() {
    var {setIsUserSelected}=useContext(chatContext);
    return (
        <div className="MyChat-render-container">
            {
                userData.map((data) => {
                    return (
                        <div onClick={()=>{setIsUserSelected(true)}} className="MyChat-chats">
                            <p className="">{data.name}</p>
                            <p>{data.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default RenderMyChat;