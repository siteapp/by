import React, { useState, useEffect } from 'react';
import m from './Main.module.scss';
import 'antd/dist/antd.css';
import Skeleton from "react-loading-skeleton";

const Main = (props) => {
    const [loading, setLoading] = useState(false);

    // Load this effect on mount
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
                                    <Skeleton height={20} width={`25%`} />
                                </h1>

                                <div>
                                    <Skeleton circle={true} height={150} width={150} style={{ marginRight: 20 }}/>
                                    <Skeleton height={150} width={`85%`} />
                                </div>
                            </div>
                        ))}
                </div>
            }
            {!loading &&
                <div>
                    <div>
                        <h1>Главная</h1>
                    </div>
                    <div>content</div>
                </div>

            }
        </div>
    )
}

export default Main;