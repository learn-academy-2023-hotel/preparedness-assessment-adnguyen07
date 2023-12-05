import React from "react"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const ModalComponent = (props) => {
  
  return (
    <>
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Hello {props.name}!</ModalHeader>
        <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Bibendum ut tristique et egestas quis ipsum. Lacus sed turpis tincidunt id aliquet risus. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Sed viverra tellus in hac habitasse platea. Id venenatis a condimentum vitae. Vitae congue eu consequat ac felis donec. Non nisi est sit amet facilisis. Id aliquet lectus proin nibh nisl condimentum id. Ornare quam viverra orci sagittis eu volutpat. Tempus imperdiet nulla malesuada pellentesque. A arcu cursus vitae congue mauris. Ante in nibh mauris cursus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  )
}

export default ModalComponent
