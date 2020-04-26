import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import INeedHelp from "./pages/INeedHelp"
import IWantToHelp from "./pages/IWantToHelp"

function App() {
  return (
    <div className="App container">
      <Router>
        <Route path="/ineedhelp" component={INeedHelp} />
        <Route path="/iwanttohelp" component={IWantToHelp} />
      </Router>
    </div>
  )
}

export default App
