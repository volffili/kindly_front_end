import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"
import { Row, Col, Container, Card, CardFooter, CardBody } from "reactstrap"
import PageWrap from "../components/PageWrap"

const Img100 = styled.img`
  width: 100%;
`

export default () => (
  <PageWrap fluid={true}>
    <Row className="justify-content-center">
      <Col sm="10" className="my-auto p-5" align="center">
        <h1>Kindly</h1>
        <h2>Vzájemná pomoc sousedů</h2>
        <h4>
          Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri to
          nejvic potrebuji. Pomozte hned ted!
        </h4>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm="6" xl="4" align="center">
        <Card className="my-5" style={{ maxWidth: 400 }}>
          <CardBody>
            Máte trochu času a chcete udělat dobrý skutek? Podívejte se s čím potřebují pomoci lidé ve vašem okolí.
          </CardBody>
          <CardFooter>
            <Link to="/iwanttohelp">
              <Button outline color="secondary" size="lg">
                Nabídnout pomoc
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Col>
      <Col sm="6" xl="4" className="my-auto" align="center">
        <Card className="my-5" style={{ maxWidth: 400 }}>
          <CardBody>
            Potřebujete donést nákup, doprovodit k lékaři, vyvenčit psa nebo třeba pomoc s technikou? Nejbote se požádat
            ty, co jsou vám nejblíže.
          </CardBody>
          <CardFooter>
            <Link to="/ineedhelp">
              <Button outline color="secondary" size="lg">
                Požádat o pomoc
              </Button>
            </Link>
          </CardFooter>
        </Card>
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
        <h4>
          Tady je nejaky dalsi text. Tohle jsou nasi sponzori. Bla bla bla bla bla bla.{" "}
          <a href="/feedback">Muzete nam taky pomoct!</a> Dalsi kecy bla bla bla bla. Pomahejte si. Tecka. Lorem Ipsum.
          Cau Tommy, nechces pomoct vykopat nejaky kameni?
        </h4>
      </Col>
    </Row>
  </PageWrap>
)
