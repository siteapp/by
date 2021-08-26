import React, { useState, useEffect } from 'react';
import m from './Main.module.scss';
import 'antd/dist/antd.css';
import Skeleton from "react-loading-skeleton";

const Main = (props) => {
    const [loading, setLoading] = useState(false),
        About = props.About,
        _MetaTitle = props._MetaTitle,
        _Theme = props._Theme,
        _Logo = props._Logo;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, _Theme[0].LoadingContent);
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

                                <h2>
                                    <Skeleton height={40} width={150} style={{margin: '0 auto', display: 'block', textAlign: 'center', marginTop: 25}}/>
                                </h2>

                                <div className={m.skelets}>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
                                    <div className={m.skelet}>
                                        <Skeleton height={60} width={260} />
                                    </div>
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

                    <div className={m.portfolioClients}>
                        <h2>
                            <span>Где работал...</span>
                        </h2>

                        <div className={m.items}>
                            <div className={m.item}>
                                <a href="https://beautyhub.pro/" target="_blank" rel="nofollow">
                                    Beautyhub.pro
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://mega-light.by/" target="_blank" rel="nofollow">
                                    Mega-light.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://baking-stone.ru/" target="_blank" rel="nofollow">
                                    Baking-stone.ru
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://puzirek.by/" target="_blank" rel="nofollow">
                                    Puzirek.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://petsfood.by/" target="_blank" rel="nofollow">
                                    Petsfood.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://tepleya.by/" target="_blank" rel="nofollow">
                                    Tepleya.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://www.mx.by/" target="_blank" rel="nofollow">
                                    Mx.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://loftmedia.by/" target="_blank" rel="nofollow">
                                    Loftmedia.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://ledexlamp.ru/" target="_blank" rel="nofollow">
                                    Ledexlamp.ru
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="https://thesushi.by/" target="_blank" rel="nofollow">
                                    Thesushi.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="http://lovelace.by/" target="_blank" rel="nofollow">
                                    Lovelace.by
                                </a>
                            </div>
                            <div className={m.item}>
                                <a href="#" rel="nofollow">
                                    ....
                                </a>
                                <div className={m.subclients}>
                                    <span>Много сделано сайтов, даже не вспомнить....</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main;