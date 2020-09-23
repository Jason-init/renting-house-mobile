import React from 'react'

import axios from 'axios'

import './index.scss'

import { Carousel, Flex, Grid } from 'antd-mobile'

import NavImg1 from '../../assets/images/nav-1.png'
import NavImg2 from '../../assets/images/nav-2.png'
import NavImg3 from '../../assets/images/nav-3.png'
import NavImg4 from '../../assets/images/nav-4.png'

const navData = [
  {
    id: 1,
    navImg: NavImg1,
    navTitle: '整租',
    navPath: '/home/list',
  },
  {
    id: 2,
    navImg: NavImg2,
    navTitle: '合租',
    navPath: '/home/list',
  },
  {
    id: 3,
    navImg: NavImg3,
    navTitle: '地图找房',
    navPath: '/map',
  },
  {
    id: 4,
    navImg: NavImg4,
    navTitle: '去出租',
    navPath: '/rent',
  },
]

export default class Index extends React.Component {
  state = {
    swiperData: [],
    isSwiperLoaded: false,
    groupData: [],
  }
  async getSwiperData() {
    const { data } = await axios.get('http://localhost:8080/home/swiper')
    this.setState({
      swiperData: data.body,
      isSwiperLoaded: true,
    })
  }
  async getGroupData() {
    const { data } = await axios.get('http://localhost:8080/home/groups', {
      params: {
        area: 'AREA|88cff55c-aaa4-e2e0',
      },
    })
    this.setState({
      groupData: data.body,
    })
  }
  renderSwiper() {
    return this.state.swiperData.map((item) => (
      <a
        key={item.id}
        href="."
        style={{
          display: 'inline-block',
          width: '100%',
          height: 212,
        }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt={item.alt}
          style={{ width: '100%', verticalAlign: 'top', height: 212 }}
        />
      </a>
    ))
  }
  renderFlexItem() {
    return navData.map((item) => (
      <Flex.Item
        key={item.id}
        onClick={() => this.props.history.push(item.navPath)}
      >
        <img src={item.navImg} alt="" />
        <h2>{item.navTitle}</h2>
      </Flex.Item>
    ))
  }
  renderGridItem(el) {
    return (
      <Flex>
        <div className="title">
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
        </div>
        <img src={`http://localhost:8080${el.imgSrc}`} alt="" />
      </Flex>
    )
  }
  componentDidMount() {
    this.getSwiperData()
    this.getGroupData()
  }
  render() {
    return (
      <div className="index">
        <div style={{ height: 212 }}>
          {this.state.isSwiperLoaded ? (
            <Carousel autoplay infinite>
              {this.renderSwiper()}
            </Carousel>
          ) : null}
        </div>
        <Flex>{this.renderFlexItem()}</Flex>
        <div className="group-container">
          <Flex justify="between">
            <h3>租房小组</h3>
            <span>更多</span>
          </Flex>
          <Grid
            data={this.state.groupData}
            activeStyle={true}
            renderItem={this.renderGridItem}
            columnNum={2}
            square={false}
            hasLine={false}
          />
        </div>
      </div>
    )
  }
}
