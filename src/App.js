import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import INeedHelp from "./pages/INeedHelp"
import IWantToHelp from "./pages/IWantToHelp"
import LandingPage from "./pages/LandingPage"
import Feedback from "./components/Feedback"
import Navbar from "./components/Navbar"
import HelpRequestDetail from "./components/HelpRequestDetail"
import styled from "styled-components/macro"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/ineedhelp" component={INeedHelp} />
      <Route path="/iwanttohelp" component={IWantToHelp} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/details/:request_id" component={HelpRequestDetail} />
    </Router>
  )
}

export default App
