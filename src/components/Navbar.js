import React, { useState } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavLink } from "reactstrap"
import { Link } from "react-router-dom"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand tag={Link} to="/">
          Kindly
        </NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/iwanttohelp">
                Nabízím pomoc
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ineedhelp">
                Žádám o pomoc
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/feedback">
                Kontakt
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
