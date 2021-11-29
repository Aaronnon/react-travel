import React from 'react'
import { Row, Col, Typography } from 'antd'
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'
import { withTranslation, WithTranslation } from 'react-i18next'

class HomePageComponent extends React.Component<WithTranslation> {
    render() {
        // console.log(this.props.t);
        const { t } = this.props

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
                    title={<Typography.Title level={3} type='warning'>{t("home_page.hot_recommended")}</Typography.Title>}
                ></ProductCollection>
                <ProductCollection
                    products={productList2}
                    sideImage={sideImage2}
                    title={<Typography.Title level={3} type='danger'>{t("home_page.new_arrival")}</Typography.Title>}
                ></ProductCollection>
                <ProductCollection
                    products={productList3}
                    sideImage={sideImage3}
                    title={<Typography.Title level={3} type='success'>{t("home_page.domestic_travel")}</Typography.Title>}
                ></ProductCollection>
                <BusinessPartners />
            </div>
            <Footer />
        </>
    }
}

export const HomePage = withTranslation()(HomePageComponent)