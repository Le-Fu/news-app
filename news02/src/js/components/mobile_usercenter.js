import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Row, Col } from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  Card,
  notification,
  Upload
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileUserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      previewVisible: false,
      previewImage: '',
      usercomments: '',
      usercollection: ''
    };
  }

  componentDidMount() {
    let myFetchOptions = {
      method: "GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ usercollection: json });
      });

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ usercomments: json });
      });
  }

  handleCancle() {
    this.setState({
      previewVisible: false
    });
  }

  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file) => {
        this.setState({ previewImage: file.url, previewVisible: true });
      }
    };
    const { usercollection, usercomments } = this.state;
    const usercollectionList = usercollection.length
      ?
      usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      :
      "暂未收藏任何新闻"
      ;
    const usercommentsList = usercomments.length
      ?
      usercomments.map((comment, index) => (
        <Card key={index} title={`${comment.datetime}评论了文章${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      "暂无任何评论"
      ;
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="收藏列表" key="1">
                <div className="comment">
                  {usercollectionList}
                </div>
              </TabPane>
              <TabPane tab="评论列表" key="2">
                <div className="comment">
                  {usercommentsList}
                </div>
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus"></Icon>
                    <div className="ant-upload-text">上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancle.bind(this)}>
                    <img src={this.state.previewImage} alt="预览" />
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
};