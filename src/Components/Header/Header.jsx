import React from 'react';
import h from './Header.module.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

import TopHeader from './TopHeader/TopHeader';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';


const Header = (props) => {
    let menu = props.Menu,
        logo = props.Logo,
        phone = props.Phone,
        email = props.Email,
        _Language = props._Language,
        languageChange = props.languageChange,
        metaTitle = props.metaTitle,
        _TopHEaderBar = props._TopHEaderBar,
        _CloseTopHeaderBar = props._CloseTopHeaderBar,
        closeTopHeader = props.closeTopHeader,
        editPhoneHeader = props.editPhoneHeader,
        openTopBar = props.openTopBar;

    return(
        <>
            <Row>
                <Col>
                    <TopHeader
                        _TopHEaderBar = {_TopHEaderBar}
                        _Language = {_Language}
                        languageChange = {languageChange}
                        _CloseTopHeaderBar = {_CloseTopHeaderBar}
                        closeTopHeader = {closeTopHeader}
                        openTopBar = {openTopBar}
                    />
                </Col>
            </Row>
            <Row className={h.flex}>
                <Col span={5}>
                    <Logo
                        logo = {logo}
                    />
                </Col>

                <Col span={12} className={h.menu}>
                    <nav>
                        <ul>
                            <Menu
                                menu = {menu}
                                metaTitle = {metaTitle}
                            />
                        </ul>
                    </nav>
                </Col>

                <Col span={6} className={h.phones}>
                    <a className={h.edit} href="#" onClick={() => editPhoneHeader('+375 00 000-00-00')}>Edit (Click, hover)</a>

                    <PhoneOutlined />
                    <a className={h.phone} href={`tel:${phone}`}>
                        {phone}
                    </a>

                    <a className={h.email} href={`emailTo:${email}`}>
                        <span></span>
                        <span>{email}</span>
                    </a>
                </Col>
            </Row>
        </>
    )
}

export default Header;