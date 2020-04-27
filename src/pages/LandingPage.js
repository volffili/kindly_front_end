import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const SLink = styled(Link)`
  margin: 0 10%;
  flex-grow: 1;
`

const SButton = styled(Button)`
  width: 100%;
`

export default () => (
  <Wrap>
    <SLink to="/iwanttohelp">
      <SButton outline color="secondary" size="lg">
        Chci pomoct
      </SButton>
    </SLink>
    <SLink to="/ineedhelp">
      <SButton outline color="secondary" size="lg">
        Potřebuji pomoct
      </SButton>
    </SLink>
  </Wrap>
)
