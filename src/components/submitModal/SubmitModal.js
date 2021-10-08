import { useState } from "react";
import { Button, Modal } from 'react-bootstrap'
import './Modal.css';
function SubmitModal() {
  const [smShow, setSmShow] = useState(false);


  const handleClose = () => {
    setSmShow(false);
  }

  return (
    <div >
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >

        <Modal.Body id="example-modal-sizes-title-md">
          <div  >
            <div id="container">
            {/* <div id="success"><i class="fa-regular fa-circle-check"></i></div> */}
            <div id="success"><i class="far fa-check-circle"></i></div>
            <p id="text">Successfully Uploaded</p>
            <div id="btn"><Button onClick={() => { handleClose() }} id="button">OK</Button></div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </div>
  );

}
export default SubmitModal