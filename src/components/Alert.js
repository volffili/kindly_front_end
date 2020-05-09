import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default ({ buttonLabel, title, body, className, isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button color="dark" onClick={toggle}>
          {buttonLabel}
        </Button>
      </ModalFooter>
    </Modal>
  )
}
