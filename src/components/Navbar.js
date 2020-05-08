import React, { useState } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavLink } from "reactstrap"
import { Link } from "react-router-dom"

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
              <Link to="/iwanttohelp">
                <NavLink>Nabízím pomoc</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/ineedhelp">
                <NavLink>Žádám o pomoc</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/feedback">
                <NavLink>Kontakt</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
