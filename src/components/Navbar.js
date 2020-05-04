import React, { useState } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavLink } from "reactstrap"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">Kindly</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/iwanttohelp">Chci pomoct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ineedhelp">Potřebuji pomoct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/feedback">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
