import React, { useState, useEffect } from 'react';
import m from './Main.module.scss';
import 'antd/dist/antd.css';
import Skeleton from "react-loading-skeleton";

const Main = (props) => {
    const [loading, setLoading] = useState(false),
        About = props.About,
        _MetaTitle = props._MetaTitle,
        _Logo = props._Logo;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
    }, []);

    return(
        <div>
            {loading &&
                <div>
                    {Array(1)
                        .fill()
                        .map((item, index) => (
                            <div key={index}>
                                <h1>
                                    <Skeleton height={40} width={120} style={{margin: '0 auto', display: 'block', textAlign: 'center', marginTop: 25}}/>
                                </h1>

                                <div>
                                    <Skeleton circle={true} height={150} width={150} style={{ marginRight: 20 }}/>
                                    <Skeleton height={450} width={`63%`} style={{ marginRight: 20 }}/>
                                    <Skeleton height={335} width={170}/>
                                </div>
                            </div>
                        ))}
                </div>
            }
            {!loading &&
                <div>
                    <div className={m.h1}>
                        <h1>Главная</h1>
                    </div>
                    <div className={m.portfolio}>
                        <div className={m.user_image}>
                            <img src={window.location.origin + '/images/images_user.jpg'} alt="aliaksandr kavaliou"/>
                        </div>
                        <div className={m.userInformation}>
                            {About.ru.map((a,index) =>
                                <div className={m.item} key={index}>
                                    <div className={m.title}>{a.title}</div>
                                    <div className={m.description}>
                                        <span>{a.description}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={m.mobile}>
                            <div>
                                <div className={m.mobile__text}>
                                    <span className={m.meta__title}>{_MetaTitle}</span>
                                    <div className={m.logo}>
                                        <img src={_Logo} alt="logo"/>
                                    </div>
                                </div>
                                <img src={window.location.origin + '/images/mobile.svg'} alt="computer"/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main;