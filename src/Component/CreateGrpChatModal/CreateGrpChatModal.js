import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { chatContext } from '../../pages/ChatPage/ChatPage';
import Badges from '../Badges/Badges';
import ModalUserRender from '../Modal_userRender/ModalUserRender';
import SearchRender from '../SearchRender/SearchRender';
function CreateGrpChatModal(props){
   var {setIsCreateGrpmodalopened,isCreateGrpmodalopened}=useContext(chatContext);
  const [selectedPersons,setSelectedPersons]=useState(["Dharshini","girl","Jo","Vidya","Mala","Vidyamla","Lakshmi","Dinesh","Kumar","Dineshkumar","Sankar"]);
    return(
        <Modal show={isCreateGrpmodalopened} onHide={()=>{setIsCreateGrpmodalopened(false)}} backdrop="static" centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title>
                 <div className='Modal-title'> Create Group</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <input type="text" placeholder='Chat name' className='form-control my-2'></input>
                  <Badges selectedPersons={selectedPersons} setSelectedPersons={setSelectedPersons}/>
                  <input type="text" placeholder='Add person' className='form-control'></input>
                  <SearchRender />
            </Modal.Body>
            <Modal.Footer>
            <button className='btn btn-secondary' onClick={()=>{setIsCreateGrpmodalopened(false)}}>Close</button>
            <button className='btn btn-primary' >Create Group</button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateGrpChatModal;