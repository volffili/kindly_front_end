import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import lovepalms_svg from "../lovepalms_minified.svg"
import lovepalms_jpg from "../lovepalms.jpg"
import { Row, Col } from "reactstrap"

const Img100 = styled.img`
  width: 100%;
`;
const SvgContainer = styled.div`
  margin-top: -20%;
  z-index: -20;
`;

const IntroContainer = styled.div`
  height: 100%;
  margin-top: 56px;
  padding: 20px;
`;

const SButton = styled(Button)`
  margin: 25px 0;
`;

const OnlyHighResDiv = styled.div`
  @media (max-width: 576px) {
    display: none !important;
  }
`;

const FinalRow = styled(Row)`
  padding: 50px 0;
`;

export default () => (
  <>
    <IntroContainer fluid={true}>
      <Row className="h-50 justify-content-center">
        <Col sm="10" className="my-auto" align="center">
          <h2>
            Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri
            to nejvic potrebuji. Pomozte hned ted!
          </h2>
        </Col>
      </Row>
      <Row>
        <Col sm="6" align="center">
          <Link to="/iwanttohelp">
            <SButton outline color="secondary" size="lg">
              Nabízím pomoc
            </SButton>
          </Link>
        </Col>
        <Col sm="6" className="my-auto" align="center">
          <Link to="/ineedhelp">
            <SButton outline color="secondary" size="lg">
              Žádám o pomoc
            </SButton>
          </Link>
        </Col>
      </Row>
    </IntroContainer>

    <OnlyHighResDiv>
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
    </OnlyHighResDiv>

    <FinalRow className="justify-content-center">
      <Col sm="10" className="my-auto" align="center">
        <h3>
          Tady je nejaky dalsi text. Tohle jsou nasi sponzori. Bla bla bla bla bla bla.{" "}
          <a href="/feedback">Muzete nam taky pomoct!</a> Dalsi kecy bla bla bla bla. Pomahejte si. Tecka. Lorem Ipsum.
          Cau Tommy, nechces pomoct vykopat nejaky kameni?
        </h3>
      </Col>
    </FinalRow>
  </>
)
