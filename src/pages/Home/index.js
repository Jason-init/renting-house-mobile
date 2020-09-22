import React from 'react'

import { Route } from 'react-router-dom'

import News from '../News'
import HouseList from '../HouseList'
import Profile from '../Profile'
import Index from '../Index'

import { TabBar } from 'antd-mobile'

import './index.css'

const tabBarItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home',
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list',
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news',
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile',
  },
]

export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname,
  }

  renderTabBarItems() {
    return tabBarItems.map((item) => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          })
          this.props.history.push(item.path)
        }}
      ></TabBar.Item>
    ))
  }

  componentDidUpdate(preProps, preState) {
    if (this.props.location.pathname !== preProps.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  render() {
    // console.log(this.state.selectedTab)
    return (
      <div className="home">
        {/* Router section */}
        <Route path="/home/news" component={News}></Route>
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/list" component={HouseList}></Route>
        <Route path="/home/profile" component={Profile}></Route>

        {/* TabBar */}
        <TabBar
          unselectedTintColor="#888"
          tintColor="#21B97A"
          barTintColor="white"
          noRenderContent={true}
        >
          {this.renderTabBarItems()}
        </TabBar>
      </div>
    )
  }
}
