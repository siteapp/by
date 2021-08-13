import React from 'react';
import l from './Logo.module.scss';
import 'antd/dist/antd.css';
import Typical from 'react-typical';

const LogoType = (props) => {
    let name = 'Aliaksandr',
        slogan = 'Kavaliou';

    return(
        <Typical
            steps={[name, 5000, slogan, 5000]}
            loop={Infinity}
            wrapper="span"
        />
    )
}

const Logo = (props) => {
    let logo = props.logo,
        name = 'Aliaksandr',
        slogan = 'Kavaliou';

    return(
        <div>
            <a href="/" className={l.logo}>
                <img src={logo} alt="logo"/>
                <span className={l.title}>
                    <span><LogoType /></span>
                    <span className={l.slogan}> {slogan}</span>
                </span>
            </a>
        </div>
    )
}

export default Logo;