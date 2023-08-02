import { createContext, useContext, useEffect, useState } from "react";
import UserSearchModal from "../../Component/UserSearchModal/UserSearchModal";
import "./ChatPage.css"
import useWindowSize from "../../customHooks/useWindowSize";
import Modalcomp from "../../Component/Modal/Modal";
import MyChat from "../../Component/MyChat/MyChat"
import ChatWindow from "../../Component/ChatWindow/ChatWindow";
import { useNavigate } from "react-router-dom";
import CreateGrpChatModal from "../../Component/CreateGrpChatModal/CreateGrpChatModal";
import { appcontext } from "../../App";
import { getUserById } from "../../API Call/Auth";
import { fetchChatofUser } from "../../API Call/Chat";
export const chatContext = createContext();
function Chatpage() {
    
  const [selectedPersons,setSelectedPersons]=useState([]);
    const [searcheduser,setSearcheduser]=useState("");
    const [messageLoading,setMessageLoading]=useState(true)
    const [messages,setMessages]=useState([]);
    const [selectedChat,setSelectedChat]=useState(null);
    const [selectedUser,setSelectedUser]=useState([]);
    const [fetchedUser,setFetchedUser]=useState([]);
    const [ismychatLoading,setIsmyChatLoading]=useState(false);
    const [showselectedProfile,setSelectedProfile]=useState(false);
    const handleShowSelectedProfile=()=>{
        setSelectedProfile(!showselectedProfile);
    }
    const {loggedUser,setLoggedUser}=useContext(appcontext);
    console.log("loggedUser",loggedUser);
   const getuser= async()=>{
    setIsmyChatLoading(true);
        const res= await getUserById(localStorage.getItem("id"));
         setLoggedUser(res[0])
        }
        const getChatsofUser=async()=>{
            const res=await fetchChatofUser();
            console.log(res,"ress")
            setFetchedUser(res);
        }
  
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
    useEffect(()=>{
        
        getuser();
        getChatsofUser();
        setIsmyChatLoading(false)

    },[isModalActive])
    const val = {
        setMessageLoading:setMessageLoading,
        messageLoading:messageLoading,
        messages:messages,
        setMessages:setMessages,
        isModalActive: isModalActive,
        isUserSelected: isUserSelected,
        setIsUserSelected: setIsUserSelected,
        handleIsUserSelected: handleIsUserSelected,
        handleHide: handleHide,
        isCreateGrpmodalopened:isCreateGrpmodalopened,
        setIsCreateGrpmodalopened:setIsCreateGrpmodalopened,
        handleUserModal:handleUserModal,
        loggedUser:loggedUser,
        setLoggedUser:setLoggedUser,
        fetchedUser:fetchedUser,
        setFetchedUser:setFetchedUser,
        setSelectedChat:setSelectedChat,
        selectedChat:selectedChat,
        selectedUser:selectedUser,
        setSelectedUser:setSelectedUser,
        handleShowSelectedProfile:handleShowSelectedProfile,
        setIsmyChatLoading:setIsmyChatLoading,
        ismychatLoading:ismychatLoading,
        selectedPersons:selectedPersons,
        setSelectedPersons:setSelectedPersons,
        searcheduser:searcheduser,
        setSearcheduser:setSearcheduser
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
                        <img className="profileimg" onClick={() => { setIsImageClicked(!isImageClicked) }} src={loggedUser.profilePic} />
                        {isImageClicked ? <ul className="chat-header-menu-list">
                            <li onClick={handleMyProfile}>My profile</li>
                            <li onClick={handleLogout}>Log out</li>
                        </ul> : ""}
                    </div>
                </div>
                <UserSearchModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
                <Modalcomp title={loggedUser.userId} show={show} setShow={setShow} handleHide={handleHide} pic={loggedUser.profilePic} email={loggedUser.email} />
                <Modalcomp title={selectedUser.userId} show={showselectedProfile} handleHide={handleShowSelectedProfile} setSelectedProfile={setSelectedProfile} pic={selectedUser.profilePic} email={selectedUser.email} />
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