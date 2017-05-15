import React from 'react';
import { Col, Row, BackTop } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComponents from './common_components';

export default class MobileNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    };
  }
  componentDidMount() {
    let myFetchOptions = {
      method: "GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="
      + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
        this.setState({ newsItem: json });
        document.title = this.state.newsItem.title + " - News | React";
      });
  }
  createMarkup() {
    return { __html: this.state.newsItem.pagecontent };
  }
  render() {
    return (
      <div id="mobileDetailsContainer">
        <MobileHeader></MobileHeader>
        <div className="ucmobileList">
          <Row>
            <Col span={24} class="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
              </div>
              <CommonComponents uniquekey={this.props.params.uniquekey} />
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop></BackTop>
        </div>
      </div>
    );
  }
};
