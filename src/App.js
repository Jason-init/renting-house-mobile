import React from 'react'

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

// import { Button } from 'antd-mobile'

import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Redirect to="/home"/>} />
        
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </div>
    </Router>
  )
}

export default App
