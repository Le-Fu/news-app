import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
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
  Card
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class CommonComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
  }

  componentDidMount() {
    let myFetchOptions = {
      method: "GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="
      + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
        this.setState({ comments: json });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey="
      + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      })
  }

  render() {
    let { getFieldProps } = this.props.form;
    const { comments } = this.state;
    let commentList = comments.length
      ?
      comments.map((comment, index) => {
        return (
          <Card key={index} title={comment.UserName} extra={<a href="#">发布与 {comment.datetime}</a>}>
            <p>{comment.Comments}</p>
          </Card>
        );
      })
      :
      "暂无评论"
      ;
    return (
      <div class="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="输入您的评论" {...getFieldProps('remark', { initialValue: '' }) } />
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
};

export default CommonComponents = Form.create({})(CommonComponents);
