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
        metaTitle = props.metaTitle,
        editPhoneHeader = props.editPhoneHeader;

    return(
        <>
            <Row>
                <Col>
                    <TopHeader

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
                        <span>@</span>
                        <span>{email}</span>
                    </a>
                </Col>
            </Row>
        </>
    )
}

export default Header;