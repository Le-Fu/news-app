import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
  render() {
    const setings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...setings}>
                  <div><img src="./src/images/carousel_1.jpg" alt="" /></div>
                  <div><img src="./src/images/carousel_2.jpg" alt="" /></div>
                  <div><img src="./src/images/carousel_3.jpg" alt="" /></div>
                  <div><img src="./src/images/carousel_4.jpg" alt="" /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="新闻" key={1}>
                <PCNewsBlock count={22} type="top" width="100%" bordered={false} />
              </TabPane>
              <TabPane tab="科技" key={2}>
                <PCNewsBlock count={22} type="keji" width="100%" bordered={false} />
              </TabPane>
            </Tabs>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="127px" />
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="127px" />            
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
};