import React from 'react';
import ReactDom from 'react-dom';
import t from './TopHeader.module.scss';
import 'antd/dist/antd.css';
import { AntDesignOutlined, Html5Outlined, BorderlessTableOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {closeTopBarActionCreator, openTopBarActionCreator, languageChange} from "../../../Redux/Store";

const TopHeader = (props) => {

    let _TopHEaderBar = props._TopHEaderBar,
        _Language = props._Language,
        _CloseTopHeaderBar = props._CloseTopHeaderBar,
        statusCloseTopHeaderBar = localStorage.getItem('closeTopHEaderBar'),
        closeTopHEaderBar = 'closeTopHEaderBar';

    return(
        <>
            <div className={`${t.opacity} ${statusCloseTopHeaderBar === '1' ? closeTopHEaderBar : _TopHEaderBar}`}>
                <div className={t.item}>
                    <span className={t.title}>
                        {localStorage.getItem('language') !== null ?
                            localStorage.getItem('language') === 'ru' ? 'ТЕХНОЛОГИИ:' : 'TECHNOLOGIES:'
                                :
                            'TECHNOLOGIES:'
                        }
                    </span>
                    <span className={t.value}>
                    <AntDesignOutlined />
                    <Html5Outlined />
                    <BorderlessTableOutlined />
                    <svg id="icon-javascript" viewBox="0 0 1024 1024">
                        <path d="M416 176.002h-160v424.996c0 105.16-36.064 134.522-98.824 134.522-29.41 0-55.896-5.042-76.5-12.126L64 847.808C93.4 857.932 138.518 864 173.814 864 317.91 864 416 796.258 416 602.04V176.002zM764.926 160C610.04 160 512 247.996 512 364.308c0 100.166 75.502 162.88 185.282 203.33 79.4 28.316 110.784 53.616 110.784 95.078 0 45.512-36.278 74.85-104.896 74.85-63.726 0-121.578-21.28-160.788-42.51v-0.042L512 821.454c37.278 21.276 106.882 42.51 182.334 42.51C875.708 863.96 960 766.86 960 652.568c0-97.1-53.916-159.8-170.556-204.326-86.278-34.382-122.54-53.59-122.54-97.084 0-34.4 31.376-65.738 96.086-65.738 63.692 0 107.488 21.414 133.01 34.582l38.25-128C894.25 174.44 840.376 160 764.926 160z"></path>
                    </svg>
                </span>
                </div>

                <div className={t.item}>
                    <span className={t.title}>
                        {localStorage.getItem('language') !== null ?
                            localStorage.getItem('language') === 'ru' ? 'фреймворк и библиотеки: ' : 'FRAMEWORKS AND LIBRARIES: '
                            :
                            'FRAMEWORKS AND LIBRARIES: '
                        }
                    </span>
                    <span className={t.value}>React.js, JQuery, Bootstrap 4, Materialize, Ant Design</span>
                </div>

                <select value={_Language} onChange={languageChange}>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>

                <div>
                    <a href="#" onClick={() => closeTopBarActionCreator('closeTopHEaderBar')}>
                        <CloseCircleOutlined style={{ fontSize: '16px', color: '#ff6a6a' }} />
                    </a>
                </div>

            </div>
            <div className={`${t.contentTriangle} ${statusCloseTopHeaderBar === '1' ? _CloseTopHeaderBar : 'openTopBar'}`} onClick={() => openTopBarActionCreator()}>
                <div className={t.triangle}></div>
            </div>
        </>
    )
}

export default TopHeader;