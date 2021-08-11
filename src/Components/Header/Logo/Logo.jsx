import React from 'react';
import l from './Logo.module.scss';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';

const Logo = (props) => {
    let logo = props.logo,
        name = 'Aliaksandr',
        slogan = 'Kavaliou';

    return(
        <div>
            <a href="/" className={l.logo}>
                <img src={logo} alt="logo"/>
                <span className={l.title}>
                    <span>{name}</span>
                    <span className={l.slogan}> {slogan}</span>
                </span>
            </a>
        </div>
    )
}

export default Logo;