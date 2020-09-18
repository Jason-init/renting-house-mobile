import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import { Button } from 'antd-mobile'

import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Button>按钮</Button> */}
        <ul>
          <li>
            <Link to="/home">home主页</Link>
          </li>
          <li>
            <Link to="/citylist">城市列表页面</Link>
          </li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </div>
    </Router>
  )
}

export default App
