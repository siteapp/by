import React from 'react';
import h from './Header.module.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import TopHeader from './TopHeader/TopHeader';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import {editPhone} from "../../Redux/Store";
import StoreContext from "../../StoreContext";
import store from "../../Redux/Redux";


const Header = (props) => {
    return(
        <>
            <Row>
                <Col>
                    <StoreContext.Consumer>
                        { store => (
                            <TopHeader
                                _TopHEaderBar = {store.TextSiteStore._TopHEaderBar}
                                _Language = {store.TextSiteStore._Language}
                                languageChange = {store.languageChange}
                                _CloseTopHeaderBar = {store.TextSiteStore._CloseTopHeaderBar}
                            />
                        )}
                    </StoreContext.Consumer>
                </Col>
            </Row>
            <Row className={h.flex}>
                <Col span={5}>
                    <Logo />
                </Col>

                <Col span={12} className={h.menu}>
                    <nav>
                        <ul>
                            <StoreContext.Consumer>
                                { store => (
                                    <Menu
                                        menu = {store.Menu.Menu}
                                        metaTitle = {store.TextSiteStore._MetaTitle}
                                    />
                                )}
                            </StoreContext.Consumer>
                        </ul>
                    </nav>
                </Col>

                <Col span={6} className={h.phones}>
                    <StoreContext.Consumer>
                        { store => (
                            <a className={h.edit} href="#" onClick={() => editPhone({type: 'EDIT-PHONE', event: '+375 00 000-00-00'})}>Edit (Click, hover)</a>
                        )}
                    </StoreContext.Consumer>

                    <PhoneOutlined />

                    <StoreContext.Consumer>
                        { store => (
                            <a className={h.phone} href={`tel:${store.Contacts.Phone}`}>
                                {store.Contacts.Phone}
                            </a>
                        )}
                    </StoreContext.Consumer>

                    <StoreContext.Consumer>
                        { store => (
                            <a className={h.email} href={`emailTo:${store.Contacts.Email}`}>
                                <span></span>
                                <span>{store.Contacts.Email}</span>
                            </a>
                        )}
                    </StoreContext.Consumer>

                </Col>
            </Row>
        </>
    )
}

export default Header;