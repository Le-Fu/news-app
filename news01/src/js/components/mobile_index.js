import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
	render() {
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs defaultActiveKey="1">
					<TabPane tab="头条" key="1"> a</TabPane>
					<TabPane tab="社会" key="2"> b</TabPane>
					<TabPane tab="国内" key="3"> d</TabPane>
					<TabPane tab="国际" key="4"> g</TabPane>
					<TabPane tab="娱乐" key="5"> h</TabPane>
					<TabPane tab="科技" key="6"> e</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	};
}