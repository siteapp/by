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

const App = (props) => {
    const {
        Menu,
        Logo,
        Phone,
        Email,
        _TopHEaderBar,
        metaTitle,
        _CloseTopHeaderBar,
        _Language,
        languageChange,
        dispatch
    } = props;

    return(
        <>
            <Router>
                <div className={a.background}>
                    <div className={a.container}>
                        <div>
                            <Header
                                Menu = {Menu}
                                Logo = {Logo}
                                Phone = {Phone}
                                Email = {Email}
                                _Language = {_Language}
                                _TopHEaderBar = {_TopHEaderBar}
                                _CloseTopHeaderBar = {_CloseTopHeaderBar}
                                dispatch = {dispatch}

                                languageChange = {languageChange}
                                metaTitle = {metaTitle}
                            />
                        </div>
                    </div>
                </div>
                <div className={a.container}>
                    <div>
                        <>
                            <Switch>
                                {localStorage.getItem('language') !== null ?
                                    localStorage.getItem('language') === 'ru' ?
                                        Menu.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.mainRu />}
                                            />
                                        ))
                                        :
                                        Menu.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.mainEn />}
                                            />
                                        ))
                                    :
                                    Menu.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={<route.mainEn/>}
                                        />
                                    ))
                                }

                            </Switch>
                        </>
                    </div>

                </div>
                <div className={a.background}>
                    <Footer
                        Menu = {Menu}
                    />
                </div>
            </Router>
        </>

    )
}

export default App;
