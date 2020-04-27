import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import INeedHelp from "./pages/INeedHelp"
import IWantToHelp from "./pages/IWantToHelp"
import LandingPage from "./pages/LandingPage"
import Feedback from "./components/Feedback"

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/ineedhelp" component={INeedHelp} />
      <Route path="/iwanttohelp" component={IWantToHelp} />
      <Route path="/feedback" component={Feedback} />
    </Router>
  )
}

export default App
