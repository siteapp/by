import React from 'react';
import l from './Logo.module.scss';
import 'antd/dist/antd.css';
import Typical from 'react-typical';
import StoreContext from "../../../StoreContext";

const LogoType = () => {
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
    let slogan = 'Kavaliou';

    return(
        <div>
            <StoreContext.Consumer>
                { store => (
                    <a href="/" className={l.logo}>
                        <img src={store.TextSiteStore._Logo} alt="logo"/>
                        <span className={l.title}>
                            <span><LogoType /></span>
                            <span className={l.slogan}> {slogan}</span>
                        </span>
                    </a>
                )}
            </StoreContext.Consumer>
        </div>
    )
}

export default Logo;