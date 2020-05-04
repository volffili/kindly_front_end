import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"

const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const SLink = styled(Link)`
  margin: 0 15%;
  flex-grow: 1;
`

const SButton = styled(Button)`
  width: 100%;
  height: 70px;
`

const Img100 = styled.img`
  width: 100%;
`

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 45%;
  z-index: -20;
`

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export default () => (
  <PageContainer>
    <ButtonWrap>
      <SLink to="/iwanttohelp">
        <SButton outline color="secondary" size="lg">
          Nabízím pomoc
        </SButton>
      </SLink>
      <SLink to="/ineedhelp">
        <SButton outline color="secondary" size="lg">
          Žádám o pomoc
        </SButton>
      </SLink>
    </ButtonWrap>

    <SvgContainer>
      <ReactSVG
        src={lovepalms_svg}
        afterInjection={(error) => {
          if (error) {
            console.error(error)
            return
          }
        }}
        loading={() => <Img100 src={lovepalms_jpg} />}
      />
    </SvgContainer>
  </PageContainer>
)
