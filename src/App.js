import React from 'react';
import a from './App.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import StoreContext from "./StoreContext";

const App = () => {
    return(
        <>
            <Router>
                <div className={a.background}>
                    <div className={a.container}>
                        <div>
                            <Header />
                        </div>
                    </div>
                </div>
                <div className={a.container}>
                    <div>
                        <StoreContext.Consumer>
                            { store => (
                                <Switch>
                                    {localStorage.getItem('language') !== null ?
                                        localStorage.getItem('language') === 'ru' ?
                                            store.Menu.Menu.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    children={<route.mainRu />}
                                                />
                                            ))
                                            :
                                            store.Menu.Menu.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    children={<route.mainEn />}
                                                />
                                            ))
                                        :
                                        store.Menu.Menu.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.mainEn/>}
                                            />
                                        ))
                                    }

                                </Switch>
                            )}
                        </StoreContext.Consumer>
                    </div>

                </div>
                <div className={a.background}>
                    <StoreContext.Consumer>
                        { store => (
                            <Footer
                                Menu = {store.Menu.Menu}
                            />
                        )}
                    </StoreContext.Consumer>
                </div>
            </Router>
        </>
    )
}

export default App;
