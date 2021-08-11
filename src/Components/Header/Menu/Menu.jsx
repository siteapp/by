import React from 'react';
import i from './Menu.module.scss';
import 'antd/dist/antd.css';

import {
    NavLink
} from "react-router-dom";

const Menu = (props) => {
    let menu = props.menu,
        metaTitle = props.metaTitle;

    return(
        <>
            {menu.map((m, index) =>
                <li key={index} className={i.item}>
                    <NavLink  to={m.path} onClick={() => metaTitle(m.main())}>
                        <span>{m.main()}</span>
                    </NavLink >
                </li>
            )}

        </>
    )
}

export default Menu;