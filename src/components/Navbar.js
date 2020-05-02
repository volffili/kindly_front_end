import React, { useState } from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavLink,
} from "reactstrap"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kindly</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavLink>
            <a href="/feedback"> Pomozte nám vylepšit tuto aplikaci!</a>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}
