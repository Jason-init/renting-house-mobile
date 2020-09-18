import React from 'react'

import { Route } from 'react-router-dom'

import News from '../News'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        这是home页面
        <Route path="/home/news" component={News}></Route>
      </div>
    )
  }
}
