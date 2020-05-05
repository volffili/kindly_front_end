import React, { useState } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavLink } from "reactstrap"

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">Kindly</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/iwanttohelp">Nabízím pomoc</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ineedhelp">Žádám o pomoc</NavLink>
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
