import React, {useState} from 'react'
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = (props) => {
  const indexo=props.delIndex;
// console.log('indexo',indexo);

  const deleteFormData = (index) => {
    props.getDeleteDataIndex(index) 
    handleClose()
    };
  
  const handleClose = () => props.setisShowDelete(false);
  const handleShow = () => props.setisShowDelete(true);
    return (


      <Modal show={handleShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body><div className="alert alert-danger">Are you sure, Once deleted cannot be undone ?</div></Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={()=>{deleteFormData(indexo)}} > 
          Delete
        </Button>
      </Modal.Footer>
    </Modal>


      //   <Modal show={showModal} onHide={hideModal}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Delete Confirmation</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="default" onClick={hideModal}>
      //       Cancel
      //     </Button>
      //     <Button variant="danger" onClick={() => confirmModal(type, id) }>
      //       Delete
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
    )
}
 
export default DeleteConfirmation;