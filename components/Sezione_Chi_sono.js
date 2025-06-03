import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Sezione_Chi_sono() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='Io_sono'>
        Io sono ...
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>
        <Modal.Header closeButton />
        <Modal.Body>
          <video
            className='Invincible'
            controls = {false}
            autoPlay
            style={{ width: '100%', height: '100%' }}
          >
            <source src="/images/Invincible title card blood-cut.mp4" type="video/mp4" />
            Il tuo browser non supporta il tag video.
          </video>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}
