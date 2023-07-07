import "./UserSearchModal.css"
import ModalUserRender from "../Modal_userRender/ModalUserRender"
import { useState } from "react";
function UserSearchModal({isModalActive,setIsModalActivet,handleUserModal}){
    return <div className="user-modal-container">
        <div className={isModalActive?"user-modal active":"user-modal"}>
<div className="user-mpdal-header-container">
<div className="user-modal-header">
            <div className="user-modal-header-input">
            <input type="text" placeholder="Search User..."></input>
            <i class="bi bi-search"></i>
            <button>Go</button>
            </div>
           <div className="user-modal-close" onClick={handleUserModal}>
           <i class="bi bi-x-lg"></i>
           </div>
        </div>
</div>
       <ModalUserRender />
        </div>
        </div>
}
export default UserSearchModal;