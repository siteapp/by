import React from 'react';
import f from './Footer.module.scss';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import a from "../../App.module.scss";

const Footer = (props) => {
    return(
        <div className={f.container}>
            <div className={f.footerItem}>
                <div className={f.soail}>
                    <a href="">
                        <img src={window.location.origin + '/images/telega_svg.svg'} alt="telega_svg"/>
                    </a>

                    <a href="">
                        <img src={window.location.origin + '/images/viber_svg.svg'} alt="viber_svg"/>
                    </a>

                    <a href="">
                        <img src={window.location.origin + '/images/wt_svg.svg'} alt="wt_svg"/>
                    </a>
                </div>
                <div className={f.contacts}>
                    <div className={f.phone}>
                        <a href="tel:+375336409868">+375 (33) 640-98-68</a>    
                    </div>
                    <div className={f.email}>
                        <a href="emailTo:ALIAKSANDR.KOVALIOU@GMAIL.COM">ALIAKSANDR.KOVALIOU@GMAIL.COM</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;