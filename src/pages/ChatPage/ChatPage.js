import { createContext, useState } from "react";
import UserSearchModal from "../../Component/UserSearchModal/UserSearchModal";
import "./ChatPage.css"
import useWindowSize from "../../customHooks/useWindowSize";
import Modalcomp from "../../Component/Modal/Modal";
import MyChat from "../../Component/MyChat/MyChat"
import ChatWindow from "../../Component/ChatWindow/ChatWindow";
import { useNavigate } from "react-router-dom";
import CreateGrpChatModal from "../../Component/CreateGrpChatModal/CreateGrpChatModal";
export const chatContext = createContext();
function Chatpage() {
    const [isCreateGrpmodalopened, setIsCreateGrpmodalopened]=useState(false);
    const navigate = useNavigate();
    const [isImageClicked, setIsImageClicked] = useState(false);
    const handleUserModal = () => {
        setIsModalActive(!isModalActive)
    }
    const handleMyProfile = () => {
        setIsImageClicked(!isImageClicked);
        console.log("in profile")
        handleHide()
    }
    const handleLogout = () => {
        setIsImageClicked(!isImageClicked);
        localStorage.clear();
        navigate("/");
    }
    const [isUserSelected, setIsUserSelected] = useState(false);
    const handleIsUserSelected = () => [
        setIsUserSelected(!isUserSelected)
    ]
    const [show, setShow] = useState(false);
    const handleHide = () => {
        setShow(!show)
    }
    const [isModalActive, setIsModalActive] = useState(false)

    const [width, height] = useWindowSize();
    console.log(width, height);
    console.log(isUserSelected)
    const val = {
        isModalActive: isModalActive,
        isUserSelected: isUserSelected,
        setIsUserSelected: setIsUserSelected,
        handleIsUserSelected: handleIsUserSelected,
        handleHide: handleHide,
        isCreateGrpmodalopened:isCreateGrpmodalopened,
        setIsCreateGrpmodalopened:setIsCreateGrpmodalopened,
        handleUserModal:handleUserModal
    }
    return (
        <chatContext.Provider value={val}>
            <div>
                <div className="chat-header">
                    <button className="chat-header-button" onClick={handleUserModal}> <i class="fa-solid fa-magnifying-glass"></i> {width > 500 ? "Search User" : ""}</button>
                    <h3 className="chat-header-title">Kon-nect</h3>
                    <div className="chat-header-menu">
                        <i class="fa-solid fa-bell fa-lg"></i>
                        {/* <select name="head-menu" id="head-menu" onChange={handleSelectChange}>
                <option value="myprofile" >My profile</option>
                <option value="logout">Log out</option>
            </select> */}
                        <img onClick={() => { setIsImageClicked(!isImageClicked) }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU"} />
                        {isImageClicked ? <ul className="chat-header-menu-list">
                            <li onClick={handleMyProfile}>My profile</li>
                            <li onClick={handleLogout}>Log out</li>
                        </ul> : ""}
                    </div>
                </div>
                <UserSearchModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
                <Modalcomp title={"User Profile"} show={show} setShow={setShow} handleHide={handleHide} pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU"} email={"vidyamalavpm@gmail.com"} />
                <div className="chat-page-main-container">
                    <div className={isUserSelected && width < 900 ? "chat-page-chatname notactive" : "chat-page-chatname"}><MyChat /></div>
                    <div className={!isUserSelected && width < 900 ? "chat-page-chatWindow notactive" : "chat-page-chatWindow"}><ChatWindow /></div>
                </div>
            </div>
            <CreateGrpChatModal />
        </chatContext.Provider>
    )
}
export default Chatpage;