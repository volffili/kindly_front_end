import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import "./landing-page-style.css";

const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SLink = styled(Link)`
  margin: 0 10%;
  flex-grow: 1;
`;

const SButton = styled(Button)`
  width: 100%;
  height: 70px
 
`;

const imageWidth = "80%";
const imageHeight = 500;

export default () => (

  <div>
      <h1 style={{
          textAlign: 'center'
      }}>Kindly</h1>
      <img src="https://www.competitionsciences.org/wp-content/uploads/2018/06/cooperation.jpg" height={imageHeight} width={imageWidth}/>
      <ButtonWrap>
          <SLink to="/iwanttohelp">
              <SButton outline color="secondary" size="lg">
                  Nabízím svou pomoc
              </SButton>
          </SLink>
          <SLink to="/ineedhelp">
              <SButton outline color="secondary" size="lg">
                  Žádám o pomoc
              </SButton>
          </SLink>

      </ButtonWrap>
      <img src="https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/GettyImages-1182819158-714x476.jpg" height={imageHeight} width={imageWidth} />
  </div>
)
