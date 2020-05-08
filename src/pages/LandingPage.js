import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"
import { Row, Col, Container } from "reactstrap"

const Img100 = styled.img`
  width: 100%;
`
const Wrapper = styled(Container)`
  height: 100%;
  margin-top: 56px; /*56px is the height of navbar*/
`

export default () => (
  <Wrapper fluid={true}>
    <Row className="justify-content-center">
      <Col sm="10" className="my-auto p-5" align="center">
        <h2>
          Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri to
          nejvic potrebuji. Pomozte hned ted!
        </h2>
      </Col>
    </Row>
    <Row>
      <Col sm="6" align="center">
        <Link to="/iwanttohelp">
          <Button className="my-5" outline color="secondary" size="lg">
            Nabízím pomoc
          </Button>
        </Link>
      </Col>
      <Col sm="6" className="my-auto" align="center">
        <Link to="/ineedhelp">
          <Button className="my-5" outline color="secondary" size="lg">
            Žádám o pomoc
          </Button>
        </Link>
      </Col>
    </Row>
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
    <Row className="justify-content-center">
      <Col sm="10" className="my-auto p-5" align="center">
        <h3>
          Tady je nejaky dalsi text. Tohle jsou nasi sponzori. Bla bla bla bla bla bla.{" "}
          <a href="/feedback">Muzete nam taky pomoct!</a> Dalsi kecy bla bla bla bla. Pomahejte si. Tecka. Lorem Ipsum.
          Cau Tommy, nechces pomoct vykopat nejaky kameni?
        </h3>
      </Col>
    </Row>
  </Wrapper>
)
