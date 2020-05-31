import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"
import { Row, Col, Card, CardFooter, CardBody } from "reactstrap"
import PageWrap from "../components/PageWrap"

const Img100 = styled.img`
  width: 100%;
`

export default () => (
  <PageWrap fluid={true}>
    <Row className="justify-content-center">
      <Col className="my-auto py-5" align="center" style={{ maxWidth: 800 }}>
        <h3 className="text-primary mb-3">
          <i>In the world where you can be anything, be kind.</i>
        </h3>
        <p>
          Kindly je místo, kde si lidé pomáhají. Ať už pomocnou ruku nabízíte nebo ji potřebujete. Kindly vám dává
          možnost stát se sousedem, kterého byste si sami přáli mít. Oživit města a žít spolu. Kindly není o penězích či
          darech, je o obyčejných lidech a všedních dnech. Je o nás všech.
        </p>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm="6" xl="4" align="center">
        <Card className="mb-3" style={{ maxWidth: 400 }}>
          <CardBody>
            Máte trochu času a chcete udělat dobrý skutek? Nabídnutím pomoci darujete, ale i získáváte. Podívejte se s
            čím potřebují pomoci lidé ve vašem okolí.
          </CardBody>
          <CardFooter>
            <Link to="/iwanttohelp">
              <Button color="primary" outline size="lg">
                Nabídnout pomoc
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Col>
      <Col sm="6" xl="4" className="my-auto" align="center">
        <Card className="mb-3" style={{ maxWidth: 400 }}>
          <CardBody>
            Potřebujete vy nebo váš blízký donést nákup, doprovodit k lékaři, vyvenčit psa nebo třeba pomoc s technikou?
            Nebojte se požádat ty, co jsou nejblíže.
          </CardBody>
          <CardFooter>
            <Link to="/ineedhelp">
              <Button color="primary" outline size="lg">
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
      <Col className="my-auto pb-5" align="center" style={{ maxWidth: 800 }}>
        <p>Děkujeme všem, co pomáhají!</p>
        <p>
          {" "}
          Kindly je a bude kompletně zdarma. Jedná se o projekt vytvořený dobrovolníky pro dobrovolníky. Pokud máte
          jakékoli dotazy či připomínky, neváhejte nás kontaktovat přes formulář v sekci <a href="#">Kontakty</a> nebo
          nám napište na email <span className="text-primary">crewkindly@gmail.com</span>.
        </p>
      </Col>
    </Row>
  </PageWrap>
)
