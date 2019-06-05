import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class StreamModal extends React.Component {
  render() {
    const s = this.props.stream;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {s.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Stream: {s.stream}</li>
            <li>Game: {s.game}</li>
            <li>Online: {String(s.online)}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}