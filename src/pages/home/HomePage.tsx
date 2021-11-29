import React from 'react'
import { Row, Col, Typography } from 'antd'
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'


export class HomePage extends React.Component {
    render() {
        return <>

            <Header />
            <div className={styles['page-content']}>
                <Row style={{ marginTop: 20 }}>
                    <Col span={6}>
                        <SideMenu />
                    </Col>
                    <Col span={18}>
                        <Carousel />
                    </Col>
                </Row>
                <ProductCollection
                    products={productList1}
                    sideImage={sideImage}
                    title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}
                ></ProductCollection>
                <ProductCollection
                    products={productList2}
                    sideImage={sideImage2}
                    title={<Typography.Title level={3} type='danger'>新品上市</Typography.Title>}
                ></ProductCollection>
                <ProductCollection
                    products={productList3}
                    sideImage={sideImage3}
                    title={<Typography.Title level={3} type='success'>国内游推荐</Typography.Title>}
                ></ProductCollection>
                <BusinessPartners />
            </div>
            <Footer />
        </>
    }
}