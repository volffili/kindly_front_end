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
            <NavItem>
              <NavLink href="#">Neco1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ahoj</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Bye</NavLink>
            </NavItem>
          </Nav>
          <NavLink>
            <a href="/feedback"> Pomozte nám!</a>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}
