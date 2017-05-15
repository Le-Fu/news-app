import React from 'react';
import { Col, Row, BackTop } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComponents from './common_components';

export default class PCNewsDetails extends React.Component {
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
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={14} class="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
            </div>
            <CommonComponents uniquekey={this.props.params.uniquekey} />
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count={30} type="top" width="100%" cartTitle="相关新闻" imageWidth="140px" />
          </Col>
          <Col span={2}></Col>
        </Row>
        <BackTop></BackTop>
        <PCFooter></PCFooter>
      </div>
    );
  }
};
