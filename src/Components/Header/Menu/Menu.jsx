import React from 'react';
import i from './Menu.module.scss';
import 'antd/dist/antd.css';

import {
    NavLink
} from "react-router-dom";
import {metaTitle} from "../../../Redux/Store";

const Menu = (props) => {
    let menu = props.menu;

    return(
        <>
            {localStorage.getItem('language') !== null ?
                localStorage.getItem('language') === 'ru' ?
                    menu.map((m, index) =>
                        <li key={index} className={i.item}>
                            <NavLink  to={m.path} onClick={() => metaTitle(m.titleRu())}>
                                <span>{m.titleRu()}</span>
                            </NavLink >
                        </li>
                    )
                    :
                    menu.map((m, index) =>
                        <li key={index} className={i.item}>
                            <NavLink  to={m.path} onClick={() => metaTitle(m.titleEn())}>
                                <span>{m.titleEn()}</span>
                            </NavLink >
                        </li>
                    )
                :
                menu.map((m, index) =>
                    <li key={index} className={i.item}>
                        <NavLink  to={m.path} onClick={() => metaTitle(m.titleEn())}>
                            <span>{m.titleEn()}</span>
                        </NavLink >
                    </li>
                )
            }
        </>
    )
}

export default Menu;