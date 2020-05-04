import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"
import { Container, Row, Col } from "reactstrap"

const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const SLink = styled(Link)`
  margin: 0 10%;
  flex-grow: 1;
`

const SButton = styled(Button)``

const Img100 = styled.img`
  width: 100%;
`

const SvgContainer = styled.div`
  margin-top: -20%;
  z-index: -20;
`

const IntroContainer = styled.div`
  height: 100%;
`

/*    <Row>
      <Col sm="10">
        <p>
          Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri to
          nejvic potrebuji. Pomozte hned ted!
        </p>
      </Col>
    </Row> */

export default () => (
  <>
    <IntroContainer fluid={true}>
      <Row className="h-100">
        <Col sm="6" className="my-auto" align="center">
          <Link to="/iwanttohelp">
            <Button outline color="secondary" size="lg">
              Nabízím pomoc
            </Button>
          </Link>
        </Col>
        <Col sm="6" className="my-auto" align="center">
          <Link to="/ineedhelp">
            <Button outline color="secondary" size="lg">
              Žádám o pomoc
            </Button>
          </Link>
        </Col>
      </Row>
    </IntroContainer>
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
  </>
)
