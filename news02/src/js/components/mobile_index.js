import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
	render() {
		const setings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs defaultActiveKey="1">
					<TabPane tab="头条" key="1">
						<div className="carousel">
							<Carousel {...setings}>
								<div><img src="./src/images/carousel_1.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_2.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_3.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_4.jpg" alt="" /></div>
							</Carousel>
						</div>
						<MobileList count={23} type="top" />
					</TabPane>
					<TabPane tab="社会" key="2">
						<MobileList count={23} type="shehui" />
					</TabPane>
					<TabPane tab="国内" key="3">
						<MobileList count={23} type="guonei" />
					</TabPane>
					<TabPane tab="国际" key="4">
						<MobileList count={23} type="guoji" />
					</TabPane>
					<TabPane tab="娱乐" key="5">
						<MobileList count={23} type="yule" />
					</TabPane>
					<TabPane tab="科技" key="6">
						<MobileList count={23} type="keji" />
					</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	};
}
