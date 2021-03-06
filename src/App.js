import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import INeedHelp from "./pages/INeedHelp"
import IWantToHelp from "./pages/IWantToHelp"
import LandingPage from "./pages/LandingPage"
import Feedback from "./pages/Feedback"
import Navbar from "./components/Navbar"
import HelpRequestDetail from "./components/HelpRequestDetail"

function App() {
  return (
    <Router>
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
